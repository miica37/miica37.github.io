"""Video to WebP — drag-and-drop converter from video to animated WebP (uses ffmpeg).

Run:  python video_to_webp.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from PySide6.QtCore import QEvent, QProcess, QSettings, QSize, Qt, QUrl, Signal
from PySide6.QtGui import QColor, QDesktopServices, QGuiApplication, QMovie, QPalette
from PySide6.QtWidgets import (
    QAbstractItemView, QApplication, QButtonGroup, QComboBox, QDoubleSpinBox, QFileDialog,
    QFormLayout, QFrame, QGroupBox, QHBoxLayout, QLabel, QLineEdit, QListWidget,
    QListWidgetItem, QMainWindow, QMessageBox, QPlainTextEdit, QProgressBar, QPushButton,
    QRadioButton, QScrollArea, QSlider, QSpinBox, QSplitter, QTextBrowser, QVBoxLayout, QWidget,
)

VIDEO_EXTS = {".mp4", ".mov", ".mkv", ".webm", ".avi", ".m4v", ".wmv", ".gif"}
DEFAULT_FFMPEG = r"C:\Programs\ffmpeg\bin\ffmpeg.exe"
NO_WINDOW = getattr(subprocess, "CREATE_NO_WINDOW", 0)
QUICK_TEST_SECONDS = 3.0
CONTENT_PRESETS = ["picture", "default", "photo", "drawing", "icon", "text"]
SCALERS = ["lanczos", "bicubic", "bilinear", "neighbor"]

PRESETS = {
    "BlenderMarket (lossless, your .bat)": dict(
        lossless=True, quality=97, compression=4, content="picture", fps=10, width=1000, scaler="lanczos"),
    "Balanced (lossy, high quality)": dict(
        lossless=False, quality=85, compression=6, content="picture", fps=12, width=1000, scaler="lanczos"),
    "Small file (lossy)": dict(
        lossless=False, quality=70, compression=6, content="picture", fps=8, width=800, scaler="lanczos"),
    "Smooth motion (lossy)": dict(
        lossless=False, quality=80, compression=5, content="default", fps=20, width=900, scaler="lanczos"),
}
CUSTOM = "Custom"

# ---------------------------------------------------------------------------
# Advice texts (shown when hovering / focusing a setting)
# ---------------------------------------------------------------------------
ADVICE = {
    "general": (
        "How quality and file size work",
        "<p>Animated WebP size is driven by four things, roughly in this order:</p>"
        "<ol>"
        "<li><b>Frame count</b> = duration × FPS. Halving FPS roughly halves the file.</li>"
        "<li><b>Resolution</b>: pixel count grows with width², so 1000 px wide has about "
        "3.7× fewer pixels than 1920 px.</li>"
        "<li><b>Mode</b>: lossless files are often 3–10× larger than lossy at quality 80.</li>"
        "<li><b>Quality / effort</b>: fine-tuning on top of the above.</li>"
        "</ol>"
        "<p><b>Note on your .bat:</b> it uses <code>-lossless 1</code>, so <code>-q:v 97</code> "
        "is <i>not</i> visual quality. In lossless mode it only sets how hard the encoder works "
        "to shrink the file. To trade quality for size, switch to <b>Lossy</b> and lower the quality.</p>"
        "<p>Hover over any setting for advice. Use <b>Quick test</b> to encode 3 s, preview "
        "it, and estimate the final size before converting everything.</p>"),
    "preset": (
        "Presets",
        "<p>Starting points you can tweak:</p><ul>"
        "<li><b>BlenderMarket (lossless)</b>: matches your .bat. Pixel-perfect and the largest.</li>"
        "<li><b>Balanced</b>: lossy q85. Usually looks the same as lossless for UI recordings "
        "and is much smaller. A good default for product pages.</li>"
        "<li><b>Small file</b>: for long clips or pages with many animations.</li>"
        "<li><b>Smooth motion</b>: higher FPS for viewport orbits and camera moves.</li></ul>"
        "<p>Changing any setting switches the preset to <i>Custom</i>.</p>"),
    "mode": (
        "Lossy vs lossless",
        "<p><b>Lossless</b> keeps every pixel exactly. It's best for short clips with lots of "
        "small text or flat UI colors where you can't accept any softness. Files get big fast.</p>"
        "<p><b>Lossy</b> is much smaller. At quality 80–90 it's very hard to tell apart from "
        "lossless in Blender UI recordings. Use it for anything longer than about 10 s, or "
        "when the lossless file is too large.</p>"),
    "quality_lossy": (
        "Quality (lossy)",
        "<p>0–100, higher = better looking and larger.</p><ul>"
        "<li><b>90–100</b>: near-identical to the source. Above ~92 the size grows fast with "
        "little visible gain.</li>"
        "<li><b>75–88</b>: the sweet spot for screen recordings.</li>"
        "<li><b>60–70</b>: visible softness on small text and thin lines.</li>"
        "<li><b>&lt; 50</b>: blocky artifacts. Avoid for UI.</li></ul>"),
    "quality_lossless": (
        "Compression effort (lossless)",
        "<p>In lossless mode this is <b>not</b> visual quality. Every pixel is kept no matter "
        "what. It sets how hard the encoder works: higher = smaller file but slower encoding.</p>"
        "<p>75–100 is recommended for final exports. Lower values only make the encode faster.</p>"),
    "compression": (
        "Compression level (method)",
        "<p>0–6, encoder effort. Higher = smaller file (or better quality at the same size), "
        "but slower.</p><ul><li><b>4</b>: ffmpeg default (what your .bat uses).</li>"
        "<li><b>6</b>: best for final exports.</li><li><b>0–2</b>: fast, for quick experiments.</li></ul>"),
    "content": (
        "Content preset",
        "<p>Tunes the encoder for the type of image. It mostly matters in lossy mode.</p><ul>"
        "<li><b>picture</b>: digital pictures and screen captures. Best for Blender UI.</li>"
        "<li><b>default</b>: general purpose. Good for rendered 3D footage.</li>"
        "<li><b>photo</b>: photographs with natural lighting.</li>"
        "<li><b>drawing</b>: high-contrast line art.</li>"
        "<li><b>icon</b>: small, colorful images.</li>"
        "<li><b>text</b>: text-heavy content.</li></ul>"),
    "fps": (
        "Frames per second",
        "<p>The biggest lever on file size: size scales almost linearly with frame count.</p><ul>"
        "<li><b>8–12</b>: UI demos (clicks, menus, typing). Looks fine.</li>"
        "<li><b>15–24</b>: viewport orbits, dragging, smooth camera motion.</li>"
        "<li><b>30+</b>: rarely worth it for WebP. Use a real &lt;video&gt; (MP4/WebM) instead.</li></ul>"
        "<p>Don't go above the source FPS. That only duplicates frames.</p>"),
    "width": (
        "Output width",
        "<p>Width in pixels. Height follows the aspect ratio. <b>0</b> keeps the source size.</p>"
        "<p>Match the width the image is <i>displayed</i> at on your page (e.g. ~1000 px for a "
        "product page column). For sharp text on high-DPI screens you can go 1.5× that, but "
        "the file grows with the square of the width.</p><p>Never upscale. It adds size without detail.</p>"),
    "scaler": (
        "Scaling filter",
        "<ul><li><b>lanczos</b>: sharpest. Best for shrinking UI and text.</li>"
        "<li><b>bicubic</b>: slightly softer, which can help lossy compression a bit.</li>"
        "<li><b>bilinear</b>: fast and blurry.</li>"
        "<li><b>neighbor</b>: no smoothing. Only for pixel art or exact 2× / 0.5× scaling.</li></ul>"),
    "loop": (
        "Loop count",
        "<p><b>0</b> = loop forever (normal for product pages). Any other number plays the "
        "animation that many times and then stops on the last frame.</p>"),
    "trim": (
        "Trim",
        "<p>Start time and duration in seconds. A duration of <b>0</b> means \"until the end\".</p>"
        "<p>Cut the dead time at the start and end of recordings. Every second costs "
        "FPS × one frame of file size.</p>"),
    "output": (
        "Output",
        "<p>The file is named <code>&lt;video name&gt;&lt;suffix&gt;.webp</code>. Leftover "
        "extensions like <code>clip.mp4.mov</code> are cleaned up to <code>clip</code>.</p>"
        "<p>Existing files are only overwritten after you confirm.</p>"),
    "ffmpeg": (
        "ffmpeg",
        "<p>Path to <code>ffmpeg.exe</code>. <code>ffprobe.exe</code> is looked up in the same "
        "folder and is used to read each video's length, size and FPS.</p>"),
    "quicktest": (
        "Quick test",
        f"<p>Encodes only {QUICK_TEST_SECONDS:g} s of the selected video (from the trim start) "
        "with the current settings. It shows the result in the preview and extrapolates the "
        "full file size.</p><p>It's the fastest way to tune quality. The estimate is rough "
        "because busy parts of a clip compress worse than calm ones.</p>"),
    "copycmd": (
        "Copy ffmpeg command",
        "<p>Copies the ffmpeg command for the selected video with the current settings. Paste "
        "it into a .bat file and replace the paths with <code>\"%~1\"</code> / <code>%~n1</code> "
        "to make a drag-and-drop script.</p>"),
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def human_size(n):
    for unit in ("B", "KB", "MB", "GB"):
        if n < 1024 or unit == "GB":
            return f"{n:.0f} {unit}" if unit == "B" else f"{n:.1f} {unit}"
        n /= 1024


def clean_stem(path):
    """'clip.mp4.mov' -> 'clip'."""
    stem = Path(path).stem
    while Path(stem).suffix.lower() in VIDEO_EXTS:
        stem = Path(stem).stem
    return stem


def find_ffprobe(ffmpeg):
    p = Path(ffmpeg)
    candidate = p.with_name("ffprobe" + p.suffix)
    if candidate.exists():
        return str(candidate)
    return shutil.which("ffprobe")


def parse_rate(rate):
    try:
        num, den = rate.split("/")
        return float(num) / float(den) if float(den) else 0.0
    except (ValueError, AttributeError):
        return 0.0


def probe(ffprobe, path):
    """Return dict(duration, width, height, fps) or None."""
    if not ffprobe:
        return None
    try:
        r = subprocess.run(
            [ffprobe, "-v", "error", "-select_streams", "v:0",
             "-show_entries", "stream=width,height,avg_frame_rate,r_frame_rate:format=duration",
             "-of", "json", path],
            capture_output=True, text=True, timeout=20, creationflags=NO_WINDOW)
        data = json.loads(r.stdout)
        st = data["streams"][0]
        fps = parse_rate(st.get("avg_frame_rate")) or parse_rate(st.get("r_frame_rate"))
        return dict(duration=float(data["format"].get("duration", 0) or 0),
                    width=int(st["width"]), height=int(st["height"]), fps=fps)
    except (OSError, ValueError, KeyError, IndexError, subprocess.SubprocessError):
        return None


def build_args(src, out, s, start, duration, progress=True):
    args = ["-hide_banner", "-loglevel", "error", "-y"]
    if start > 0:
        args += ["-ss", f"{start:g}"]
    args += ["-i", src]
    if duration > 0:
        args += ["-t", f"{duration:g}"]
    vf = [f"fps={s['fps']}"]
    if s["width"] > 0:
        vf.append(f"scale={s['width']}:-1:flags={s['scaler']}")
    args += ["-vf", ",".join(vf), "-an",
             "-c:v", "libwebp_anim",
             "-lossless", "1" if s["lossless"] else "0",
             "-q:v", str(s["quality"]),
             "-compression_level", str(s["compression"]),
             "-preset", s["content"],
             "-loop", str(s["loop"])]
    if progress:
        args += ["-progress", "pipe:1", "-nostats"]
    args += ["-f", "webp", out]
    return args


def dark_palette():
    pal = QPalette()
    base, alt, text = QColor(30, 30, 32), QColor(42, 42, 46), QColor(225, 225, 228)
    for role, color in [
        (QPalette.Window, QColor(37, 37, 40)), (QPalette.WindowText, text),
        (QPalette.Base, base), (QPalette.AlternateBase, alt), (QPalette.Text, text),
        (QPalette.Button, alt), (QPalette.ButtonText, text), (QPalette.ToolTipBase, alt),
        (QPalette.ToolTipText, text), (QPalette.Highlight, QColor(232, 125, 13)),
        (QPalette.HighlightedText, QColor(255, 255, 255)), (QPalette.Link, QColor(255, 160, 60)),
        (QPalette.PlaceholderText, QColor(130, 130, 135)),
    ]:
        pal.setColor(role, color)
    for role in (QPalette.Text, QPalette.ButtonText, QPalette.WindowText):
        pal.setColor(QPalette.Disabled, role, QColor(110, 110, 115))
    return pal


# ---------------------------------------------------------------------------
# Widgets
# ---------------------------------------------------------------------------
class DropZone(QLabel):
    filesDropped = Signal(list)
    clicked = Signal()

    def __init__(self):
        super().__init__("Drop videos here\n(or click to browse)")
        self.setAlignment(Qt.AlignCenter)
        self.setAcceptDrops(True)
        self.setMinimumHeight(90)
        self.setCursor(Qt.PointingHandCursor)
        self._set_active(False)

    def _set_active(self, active):
        border = "#e87d0d" if active else "#5a5a60"
        bg = "rgba(232,125,13,0.12)" if active else "transparent"
        self.setStyleSheet(f"QLabel {{ border: 2px dashed {border}; border-radius: 8px;"
                           f" background: {bg}; font-size: 14px; color: #c8c8cc; }}")

    def dragEnterEvent(self, e):
        if e.mimeData().hasUrls():
            e.acceptProposedAction()
            self._set_active(True)

    def dragLeaveEvent(self, e):
        self._set_active(False)

    def dropEvent(self, e):
        self._set_active(False)
        self.filesDropped.emit([u.toLocalFile() for u in e.mimeData().urls() if u.isLocalFile()])

    def mouseReleaseEvent(self, e):
        if e.button() == Qt.LeftButton:
            self.clicked.emit()


class SliderSpin(QWidget):
    valueChanged = Signal(int)

    def __init__(self, lo, hi):
        super().__init__()
        self.slider = QSlider(Qt.Horizontal)
        self.slider.setRange(lo, hi)
        self.spin = QSpinBox()
        self.spin.setRange(lo, hi)
        self.spin.setFixedWidth(64)
        lay = QHBoxLayout(self)
        lay.setContentsMargins(0, 0, 0, 0)
        lay.addWidget(self.slider)
        lay.addWidget(self.spin)
        self.slider.valueChanged.connect(self.spin.setValue)
        self.spin.valueChanged.connect(self.slider.setValue)
        self.spin.valueChanged.connect(self.valueChanged)

    def value(self):
        return self.spin.value()

    def setValue(self, v):
        self.spin.setValue(v)


# ---------------------------------------------------------------------------
# Main window
# ---------------------------------------------------------------------------
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Video to WebP")
        self.resize(1360, 820)
        self.settings = QSettings("RIn", "VideoToWebp")
        self.proc = None
        self.jobs = []
        self.job = None
        self.jobs_total = 0
        self.jobs_done = 0
        self.movie = None
        self.temp_files = []
        self._applying = False
        self._stdout_buf = ""
        self._tip_key = "general"

        self._build_ui()
        self._load_settings()
        self._show_tip("general")

    # ----- UI construction -------------------------------------------------
    def _build_ui(self):
        # Left: queue + preview
        self.drop = DropZone()
        self.drop.filesDropped.connect(self.add_files)
        self.drop.clicked.connect(self.browse_files)

        self.queue = QListWidget()
        self.queue.setSelectionMode(QAbstractItemView.ExtendedSelection)
        self.queue.currentItemChanged.connect(self._on_current_changed)
        add_btn, rm_btn, clear_btn = QPushButton("Add…"), QPushButton("Remove"), QPushButton("Clear")
        add_btn.clicked.connect(self.browse_files)
        rm_btn.clicked.connect(self.remove_selected)
        clear_btn.clicked.connect(self.queue.clear)
        qbtns = QHBoxLayout()
        for b in (add_btn, rm_btn, clear_btn):
            qbtns.addWidget(b)

        self.preview = QLabel("Preview appears here after a quick test or conversion")
        self.preview.setAlignment(Qt.AlignCenter)
        self.preview.setMinimumSize(380, 230)
        self.preview.setStyleSheet("QLabel { background: #1b1b1d; border-radius: 6px; color: #77777c; }")
        self.preview_info = QLabel("")
        self.preview_info.setWordWrap(True)
        self.test_btn = QPushButton(f"Quick test ({QUICK_TEST_SECONDS:g} s)")
        self.test_btn.clicked.connect(self.quick_test)
        self.open_btn = QPushButton("Open output folder")
        self.open_btn.clicked.connect(self.open_output_folder)
        pbtns = QHBoxLayout()
        pbtns.addWidget(self.test_btn)
        pbtns.addWidget(self.open_btn)
        prev_box = QGroupBox("Preview")
        pv = QVBoxLayout(prev_box)
        pv.addWidget(self.preview, 1)
        pv.addWidget(self.preview_info)
        pv.addLayout(pbtns)

        left = QWidget()
        lv = QVBoxLayout(left)
        lv.setContentsMargins(0, 0, 0, 0)
        lv.addWidget(self.drop)
        lv.addWidget(QLabel("Queue"))
        lv.addWidget(self.queue, 1)
        lv.addLayout(qbtns)
        lv.addWidget(prev_box, 2)

        # Middle: settings
        self.preset = QComboBox()
        self.preset.addItems(list(PRESETS) + [CUSTOM])
        self.preset.currentTextChanged.connect(self._apply_preset)
        self._tip(self.preset, "preset")
        preset_box = QGroupBox("Preset")
        QVBoxLayout(preset_box).addWidget(self.preset)

        self.lossy_rb, self.lossless_rb = QRadioButton("Lossy"), QRadioButton("Lossless")
        self.mode_group = QButtonGroup(self)
        self.mode_group.addButton(self.lossy_rb)
        self.mode_group.addButton(self.lossless_rb)
        mode_row = QWidget()
        ml = QHBoxLayout(mode_row)
        ml.setContentsMargins(0, 0, 0, 0)
        ml.addWidget(self.lossy_rb)
        ml.addWidget(self.lossless_rb)
        ml.addStretch()
        self.quality = SliderSpin(0, 100)
        self.quality_label = QLabel("Quality")
        self.compression = SliderSpin(0, 6)
        self.content = QComboBox()
        self.content.addItems(CONTENT_PRESETS)
        q_box = QGroupBox("Quality")
        qf = QFormLayout(q_box)
        qf.addRow("Mode", mode_row)
        qf.addRow(self.quality_label, self.quality)
        qf.addRow("Compression", self.compression)
        qf.addRow("Content", self.content)
        self._tip(mode_row, "mode", qf.labelForField(mode_row), self.lossy_rb, self.lossless_rb)
        self._tip(self.quality, "quality", self.quality_label, self.quality.slider, self.quality.spin)
        self._tip(self.compression, "compression", qf.labelForField(self.compression),
                  self.compression.slider, self.compression.spin)
        self._tip(self.content, "content", qf.labelForField(self.content))

        self.fps = QSpinBox()
        self.fps.setRange(1, 60)
        self.fps.setSuffix(" fps")
        self.width_spin = QSpinBox()
        self.width_spin.setRange(0, 7680)
        self.width_spin.setSingleStep(50)
        self.width_spin.setSuffix(" px")
        self.width_spin.setSpecialValueText("Original")
        self.scaler = QComboBox()
        self.scaler.addItems(SCALERS)
        self.loop = QSpinBox()
        self.loop.setRange(0, 1000)
        self.loop.setSpecialValueText("Forever")
        s_box = QGroupBox("Size && motion")
        sf = QFormLayout(s_box)
        sf.addRow("Frame rate", self.fps)
        sf.addRow("Width", self.width_spin)
        sf.addRow("Scaling", self.scaler)
        sf.addRow("Loop", self.loop)
        self._tip(self.fps, "fps", sf.labelForField(self.fps))
        self._tip(self.width_spin, "width", sf.labelForField(self.width_spin))
        self._tip(self.scaler, "scaler", sf.labelForField(self.scaler))
        self._tip(self.loop, "loop", sf.labelForField(self.loop))

        self.start = QDoubleSpinBox()
        self.duration = QDoubleSpinBox()
        for w in (self.start, self.duration):
            w.setRange(0, 36000)
            w.setDecimals(2)
            w.setSingleStep(0.5)
            w.setSuffix(" s")
        self.duration.setSpecialValueText("Until end")
        t_box = QGroupBox("Trim")
        tf = QFormLayout(t_box)
        tf.addRow("Start", self.start)
        tf.addRow("Duration", self.duration)
        self._tip(t_box, "trim", self.start, self.duration)

        self.suffix = QLineEdit()
        self.out_same = QRadioButton("Next to source")
        self.out_custom = QRadioButton("Folder:")
        self.out_group = QButtonGroup(self)
        self.out_group.addButton(self.out_same)
        self.out_group.addButton(self.out_custom)
        self.out_dir = QLineEdit()
        out_browse = QPushButton("…")
        out_browse.setFixedWidth(30)
        out_browse.clicked.connect(self._browse_out_dir)
        out_row = QWidget()
        orl = QHBoxLayout(out_row)
        orl.setContentsMargins(0, 0, 0, 0)
        orl.addWidget(self.out_custom)
        orl.addWidget(self.out_dir, 1)
        orl.addWidget(out_browse)
        self.ffmpeg = QLineEdit()
        ff_browse = QPushButton("…")
        ff_browse.setFixedWidth(30)
        ff_browse.clicked.connect(self._browse_ffmpeg)
        ff_row = QWidget()
        frl = QHBoxLayout(ff_row)
        frl.setContentsMargins(0, 0, 0, 0)
        frl.addWidget(self.ffmpeg, 1)
        frl.addWidget(ff_browse)
        o_box = QGroupBox("Output")
        of = QFormLayout(o_box)
        of.addRow("Suffix", self.suffix)
        of.addRow("Save", self.out_same)
        of.addRow("", out_row)
        of.addRow("ffmpeg", ff_row)
        self._tip(o_box, "output", self.suffix, self.out_same, self.out_custom, self.out_dir)
        self._tip(ff_row, "ffmpeg", self.ffmpeg, of.labelForField(ff_row))

        settings_w = QWidget()
        sv = QVBoxLayout(settings_w)
        sv.setContentsMargins(0, 0, 6, 0)
        for box in (preset_box, q_box, s_box, t_box, o_box):
            sv.addWidget(box)
        sv.addStretch()
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setFrameShape(QFrame.NoFrame)
        scroll.setWidget(settings_w)
        scroll.setMinimumWidth(400)

        # Right: advice
        self.advice = QTextBrowser()
        self.advice.setOpenExternalLinks(True)
        about_btn = QPushButton("How quality works")
        about_btn.clicked.connect(lambda: self._show_tip("general"))
        adv_box = QGroupBox("Advice")
        av = QVBoxLayout(adv_box)
        av.addWidget(self.advice)
        av.addWidget(about_btn)

        splitter = QSplitter(Qt.Horizontal)
        splitter.addWidget(left)
        splitter.addWidget(scroll)
        splitter.addWidget(adv_box)
        splitter.setSizes([480, 430, 450])

        # Bottom: progress + actions + log
        self.progress = QProgressBar()
        self.progress.setRange(0, 1000)
        self.progress.setTextVisible(False)
        self.status = QLabel("Ready")
        self.copy_btn = QPushButton("Copy ffmpeg command")
        self.copy_btn.clicked.connect(self.copy_command)
        self._tip(self.copy_btn, "copycmd")
        self._tip(self.test_btn, "quicktest")
        self.cancel_btn = QPushButton("Cancel")
        self.cancel_btn.setEnabled(False)
        self.cancel_btn.clicked.connect(self.cancel)
        self.convert_btn = QPushButton("Convert all")
        self.convert_btn.setStyleSheet("QPushButton { background: #c76a0a; color: white; font-weight: bold;"
                                       " padding: 6px 22px; border-radius: 4px; }"
                                       "QPushButton:disabled { background: #5a4630; color: #999; }")
        self.convert_btn.clicked.connect(self.convert_all)
        actions = QHBoxLayout()
        actions.addWidget(self.copy_btn)
        actions.addWidget(self.status, 1)
        actions.addWidget(self.cancel_btn)
        actions.addWidget(self.convert_btn)
        self.log = QPlainTextEdit()
        self.log.setReadOnly(True)
        self.log.setMaximumHeight(90)
        self.log.setPlaceholderText("ffmpeg messages")

        central = QWidget()
        cv = QVBoxLayout(central)
        cv.addWidget(splitter, 1)
        cv.addWidget(self.progress)
        cv.addLayout(actions)
        cv.addWidget(self.log)
        self.setCentralWidget(central)
        self.setAcceptDrops(True)

        # Any setting change -> preset becomes Custom, advice checks refresh
        for sig in (self.lossy_rb.toggled, self.quality.valueChanged, self.compression.valueChanged,
                    self.content.currentTextChanged, self.fps.valueChanged,
                    self.width_spin.valueChanged, self.scaler.currentTextChanged):
            sig.connect(self._on_setting_changed)
        for sig in (self.loop.valueChanged, self.start.valueChanged, self.duration.valueChanged):
            sig.connect(self._refresh_advice)
        self.lossy_rb.toggled.connect(self._update_mode_label)

    def _tip(self, widget, key, *extra):
        for w in (widget, *extra):
            if w is not None:
                w.setProperty("advice", key)
                w.installEventFilter(self)

    def eventFilter(self, obj, ev):
        if ev.type() in (QEvent.Enter, QEvent.FocusIn):
            key = obj.property("advice")
            if key:
                self._show_tip(key)
        return super().eventFilter(obj, ev)

    # ----- Settings ---------------------------------------------------------
    def current_settings(self):
        return dict(
            lossless=self.lossless_rb.isChecked(), quality=self.quality.value(),
            compression=self.compression.value(), content=self.content.currentText(),
            fps=self.fps.value(), width=self.width_spin.value(), scaler=self.scaler.currentText(),
            loop=self.loop.value(), start=self.start.value(), duration=self.duration.value())

    def _apply_values(self, v):
        self._applying = True
        (self.lossless_rb if v["lossless"] else self.lossy_rb).setChecked(True)
        self.quality.setValue(v["quality"])
        self.compression.setValue(v["compression"])
        self.content.setCurrentText(v["content"])
        self.fps.setValue(v["fps"])
        self.width_spin.setValue(v["width"])
        self.scaler.setCurrentText(v["scaler"])
        self._applying = False
        self._update_mode_label()
        self._refresh_advice()

    def _apply_preset(self, name):
        if name in PRESETS:
            self._apply_values(PRESETS[name])
        self._show_tip("preset")

    def _on_setting_changed(self, *_):
        if not self._applying and self.preset.currentText() != CUSTOM:
            self.preset.blockSignals(True)
            self.preset.setCurrentText(CUSTOM)
            self.preset.blockSignals(False)
        self._refresh_advice()

    def _update_mode_label(self, *_):
        self.quality_label.setText("Effort" if self.lossless_rb.isChecked() else "Quality")
        if self._tip_key == "quality":
            self._refresh_advice()

    def _load_settings(self):
        st = self.settings
        saved = st.value("values")
        values = dict(PRESETS["BlenderMarket (lossless, your .bat)"])
        if isinstance(saved, str):
            try:
                values.update(json.loads(saved))
            except ValueError:
                pass
        self.preset.blockSignals(True)
        self.preset.setCurrentText(st.value("preset", list(PRESETS)[0]))
        self.preset.blockSignals(False)
        self._apply_values(values)
        self.loop.setValue(int(values.get("loop", 0)))
        self.suffix.setText(st.value("suffix", "_BM2"))
        (self.out_custom if st.value("out_custom", "false") == "true" else self.out_same).setChecked(True)
        self.out_dir.setText(st.value("out_dir", ""))
        default_ff = DEFAULT_FFMPEG if Path(DEFAULT_FFMPEG).exists() else (shutil.which("ffmpeg") or "")
        self.ffmpeg.setText(st.value("ffmpeg", default_ff))
        geo = st.value("geometry")
        if geo is not None:
            self.restoreGeometry(geo)

    def closeEvent(self, e):
        if self.proc and self.proc.state() != QProcess.NotRunning:
            if QMessageBox.question(self, "Quit", "A conversion is running. Stop it and quit?") \
                    != QMessageBox.Yes:
                e.ignore()
                return
            self.cancel()
        st = self.settings
        values = self.current_settings()
        values.pop("start")
        values.pop("duration")
        st.setValue("values", json.dumps(values))
        st.setValue("preset", self.preset.currentText())
        st.setValue("suffix", self.suffix.text())
        st.setValue("out_custom", "true" if self.out_custom.isChecked() else "false")
        st.setValue("out_dir", self.out_dir.text())
        st.setValue("ffmpeg", self.ffmpeg.text())
        st.setValue("geometry", self.saveGeometry())
        self._clear_preview()
        for f in self.temp_files:
            try:
                os.remove(f)
            except OSError:
                pass
        super().closeEvent(e)

    # ----- Advice -------------------------------------------------------------
    def _show_tip(self, key):
        self._tip_key = key
        self._refresh_advice()

    def _refresh_advice(self, *_):
        key = self._tip_key
        if key == "quality":
            key = "quality_lossless" if self.lossless_rb.isChecked() else "quality_lossy"
        title, body = ADVICE[key]
        icons = {"ok": ("✔", "#6cc070"), "info": ("ℹ", "#6aa8e8"), "warn": ("⚠", "#f0a030")}
        checks = "".join(
            f"<p style='margin:4px 0'><span style='color:{icons[lvl][1]}'>{icons[lvl][0]}</span> {txt}</p>"
            for lvl, txt in self._settings_checks())
        self.advice.setHtml(
            f"<h3 style='color:#ff9a3c'>{title}</h3>{body}"
            f"<hr><h4 style='color:#ff9a3c'>Current settings check</h4>{checks}")

    def _settings_checks(self):
        s = self.current_settings()
        out = []
        info = self._current_info()
        if info and info.get("width"):
            remaining = max(info["duration"] - s["start"], 0)
            dur = min(s["duration"], remaining) if s["duration"] > 0 else remaining
            out_w = s["width"] or info["width"]
            out_h = round(info["height"] * out_w / info["width"])
            frames = dur * min(s["fps"], info["fps"] or s["fps"])
            out.append(("info", f"Selected: {info['width']}×{info['height']}, {info['fps']:.3g} fps, "
                                f"{info['duration']:.1f} s.<br>Output ≈ <b>{out_w}×{out_h}</b>, "
                                f"{dur:.1f} s ≈ <b>{frames:.0f} frames</b>."))
            if info["fps"] and s["fps"] > info["fps"] + 0.5:
                out.append(("warn", f"Source is only {info['fps']:.3g} fps. A higher output FPS "
                                    "just duplicates frames."))
            if s["width"] > info["width"]:
                out.append(("warn", "Width is larger than the source. Upscaling adds file size "
                                    "without adding detail."))
            if s["lossless"] and frames > 300:
                out.append(("warn", f"Lossless with ~{frames:.0f} frames will probably be large. "
                                    "Try Lossy at quality 85, or lower the FPS or trim the clip."))
            if s["start"] >= info["duration"] > 0:
                out.append(("warn", "Trim start is past the end of the video."))
        else:
            out.append(("info", "Select a video in the queue to get checks based on its size and length."))
        if not s["lossless"]:
            if s["quality"] < 50:
                out.append(("warn", "Quality below 50 gives blocky artifacts on UI and text."))
            elif s["quality"] < 70:
                out.append(("info", "Quality 50–70: expect soft text. Fine for rendered footage."))
            elif s["quality"] > 92:
                out.append(("info", "Above ~92 the file grows quickly with little visible gain."))
        elif s["quality"] < 50:
            out.append(("info", "Low effort in lossless mode looks the same but makes a bigger file."))
        if s["fps"] > 24:
            out.append(("warn", "Above 24 fps the WebP gets heavy. Consider an MP4/WebM video for smooth playback."))
        elif s["fps"] < 6:
            out.append(("info", "Below 6 fps motion looks choppy. Fine for slideshow-style demos."))
        if s["width"] == 0 and not info:
            out.append(("info", "Width is set to Original. Full-HD recordings make large WebPs."))
        elif s["width"] > 1600:
            out.append(("info", "Wider than 1600 px is rarely needed for a web page."))
        if s["compression"] < 4:
            out.append(("info", "Low compression level: faster, but larger. Use 4–6 for final files."))
        if not any(lvl == "warn" for lvl, _ in out):
            out.append(("ok", "Settings look reasonable."))
        return out

    # ----- Queue --------------------------------------------------------------
    def browse_files(self):
        files, _ = QFileDialog.getOpenFileNames(
            self, "Add videos", self.settings.value("last_dir", ""),
            "Videos (" + " ".join("*" + e for e in sorted(VIDEO_EXTS)) + ");;All files (*)")
        if files:
            self.settings.setValue("last_dir", str(Path(files[0]).parent))
            self.add_files(files)

    def dragEnterEvent(self, e):
        if e.mimeData().hasUrls():
            e.acceptProposedAction()

    def dropEvent(self, e):
        self.add_files([u.toLocalFile() for u in e.mimeData().urls() if u.isLocalFile()])

    def add_files(self, paths):
        existing = {self.queue.item(i).data(Qt.UserRole)["path"] for i in range(self.queue.count())}
        ffprobe = find_ffprobe(self.ffmpeg.text())
        added = None
        QApplication.setOverrideCursor(Qt.WaitCursor)
        try:
            for p in paths:
                path = Path(p)
                if path.is_dir():
                    self.add_files([str(c) for c in sorted(path.iterdir()) if c.suffix.lower() in VIDEO_EXTS])
                    continue
                if path.suffix.lower() not in VIDEO_EXTS or str(path) in existing:
                    continue
                info = probe(ffprobe, str(path)) or {}
                info["path"] = str(path)
                item = QListWidgetItem()
                item.setData(Qt.UserRole, info)
                item.setToolTip(str(path))
                self._set_item_status(item, "")
                self.queue.addItem(item)
                existing.add(str(path))
                added = item
        finally:
            QApplication.restoreOverrideCursor()
        if added:
            self.queue.setCurrentItem(added)

    def _set_item_status(self, item, status):
        info = item.data(Qt.UserRole)
        details = ""
        if info.get("width"):
            details = f"  —  {info['duration']:.1f} s · {info['width']}×{info['height']} · {info['fps']:.3g} fps"
        prefix = {"": "", "running": "⏳ ", "done": "✔ ", "failed": "✖ "}[status]
        item.setText(f"{prefix}{Path(info['path']).name}{details}")
        info["status"] = status
        item.setData(Qt.UserRole, info)

    def remove_selected(self):
        for item in self.queue.selectedItems():
            self.queue.takeItem(self.queue.row(item))

    def _current_info(self):
        item = self.queue.currentItem()
        return item.data(Qt.UserRole) if item else None

    def _on_current_changed(self, cur, _prev):
        self._refresh_advice()
        if cur and not self._busy():
            out = cur.data(Qt.UserRole).get("output")
            if out and Path(out).exists():
                self._show_preview(out)

    # ----- Output paths -------------------------------------------------------
    def _output_path(self, src):
        folder = Path(self.out_dir.text()) if self.out_custom.isChecked() and self.out_dir.text() \
            else Path(src).parent
        return str(folder / f"{clean_stem(src)}{self.suffix.text()}.webp")

    def _browse_out_dir(self):
        d = QFileDialog.getExistingDirectory(self, "Output folder", self.out_dir.text())
        if d:
            self.out_dir.setText(d)
            self.out_custom.setChecked(True)

    def _browse_ffmpeg(self):
        f, _ = QFileDialog.getOpenFileName(self, "Locate ffmpeg", self.ffmpeg.text(),
                                           "ffmpeg (ffmpeg*);;All files (*)")
        if f:
            self.ffmpeg.setText(f)

    def open_output_folder(self):
        info = self._current_info()
        if self.out_custom.isChecked() and self.out_dir.text():
            folder = self.out_dir.text()
        elif info:
            folder = str(Path(info["path"]).parent)
        else:
            return
        QDesktopServices.openUrl(QUrl.fromLocalFile(folder))

    def copy_command(self):
        info = self._current_info()
        src = info["path"] if info else "input.mov"
        s = self.current_settings()
        args = build_args(src, self._output_path(src), s, s["start"], s["duration"], progress=False)
        args = [a for a in args if a not in ("-loglevel", "error")]
        QGuiApplication.clipboard().setText(subprocess.list2cmdline([self.ffmpeg.text() or "ffmpeg"] + args))
        self.status.setText("ffmpeg command copied to clipboard")

    # ----- Preview ------------------------------------------------------------
    def _clear_preview(self):
        if self.movie:
            self.movie.stop()
            self.preview.clear()
            self.movie.deleteLater()
            self.movie = None

    def _show_preview(self, path):
        self._clear_preview()
        movie = QMovie(path)
        if not movie.isValid():
            self.preview.setText("Can't preview this file")
            return
        movie.jumpToFrame(0)
        size = movie.currentImage().size()
        size.scale(self.preview.size() - QSize(10, 10), Qt.KeepAspectRatio)
        movie.setScaledSize(size)
        self.movie = movie
        self.preview.setMovie(movie)
        movie.start()

    # ----- Encoding -----------------------------------------------------------
    def _busy(self):
        return self.proc is not None and self.proc.state() != QProcess.NotRunning

    def _check_ffmpeg(self):
        ff = self.ffmpeg.text()
        if not ff or not (Path(ff).exists() or shutil.which(ff)):
            QMessageBox.warning(self, "ffmpeg not found", "Set the path to ffmpeg.exe in the Output section.")
            return False
        return True

    def _job_duration(self, info, s):
        remaining = max(info.get("duration", 0) - s["start"], 0)
        return min(s["duration"], remaining) if s["duration"] > 0 else remaining

    def quick_test(self):
        item = self.queue.currentItem()
        if not item:
            QMessageBox.information(self, "Quick test", "Add a video and select it in the queue first.")
            return
        if self._busy() or not self._check_ffmpeg():
            return
        info = item.data(Qt.UserRole)
        s = self.current_settings()
        full = self._job_duration(info, s)
        test_dur = min(QUICK_TEST_SECONDS, full) if full > 0 else QUICK_TEST_SECONDS
        fd, out = tempfile.mkstemp(prefix="video_to_webp_test_", suffix=".webp")
        os.close(fd)
        self.temp_files.append(out)
        self._start_jobs([dict(item=item, src=info["path"], out=out, start=s["start"],
                               duration=test_dur, full=full, test=True, settings=s)])

    def convert_all(self):
        if self._busy() or not self._check_ffmpeg():
            return
        if self.queue.count() == 0:
            QMessageBox.information(self, "Convert", "Drop some videos into the queue first.")
            return
        s = self.current_settings()
        jobs = []
        for i in range(self.queue.count()):
            item = self.queue.item(i)
            info = item.data(Qt.UserRole)
            jobs.append(dict(item=item, src=info["path"], out=self._output_path(info["path"]),
                             start=s["start"], duration=s["duration"],
                             full=self._job_duration(info, s), test=False, settings=s))
        existing = [j["out"] for j in jobs if Path(j["out"]).exists()]
        if existing:
            names = "\n".join(Path(p).name for p in existing[:10])
            more = f"\n… and {len(existing) - 10} more" if len(existing) > 10 else ""
            if QMessageBox.question(self, "Overwrite?", f"These files already exist:\n\n{names}{more}\n\nOverwrite them?") \
                    != QMessageBox.Yes:
                return
        if len({j["out"] for j in jobs}) < len(jobs):
            QMessageBox.warning(self, "Name clash", "Two videos would write the same output file. "
                                                    "Use a different suffix or remove one.")
            return
        self._start_jobs(jobs)

    def _start_jobs(self, jobs):
        self._clear_preview()  # QMovie keeps the file open on Windows
        self.jobs = jobs
        self.jobs_total = len(jobs)
        self.jobs_done = 0
        self.log.clear()
        self._set_busy(True)
        self._next_job()

    def _set_busy(self, busy):
        self.convert_btn.setEnabled(not busy)
        self.test_btn.setEnabled(not busy)
        self.cancel_btn.setEnabled(busy)
        self.drop.setEnabled(not busy)
        if not busy:
            self.progress.setValue(0)

    def _next_job(self):
        if not self.jobs:
            self._set_busy(False)
            return
        self.job = self.jobs.pop(0)
        job = self.job
        if not job["test"]:
            self._set_item_status(job["item"], "running")
        self.status.setText(("Testing " if job["test"] else f"Converting {self.jobs_done + 1}/{self.jobs_total}: ")
                            + Path(job["src"]).name)
        self._stdout_buf = ""
        self.proc = QProcess(self)
        self.proc.readyReadStandardOutput.connect(self._on_stdout)
        self.proc.readyReadStandardError.connect(self._on_stderr)
        self.proc.finished.connect(self._on_finished)
        self.proc.errorOccurred.connect(self._on_error)
        self.proc.start(self.ffmpeg.text(), build_args(job["src"], job["out"], job["settings"],
                                                       job["start"], job["duration"]))

    def _on_stdout(self):
        self._stdout_buf += bytes(self.proc.readAllStandardOutput()).decode(errors="replace")
        *lines, self._stdout_buf = self._stdout_buf.split("\n")
        total = self.job["duration"] if self.job["test"] else self.job["full"]
        for line in lines:
            k, _, v = line.strip().partition("=")
            if k in ("out_time_us", "out_time_ms") and total > 0:
                try:
                    frac = min(int(v) / 1e6 / total, 1.0)
                except ValueError:
                    continue
                self.progress.setValue(int((self.jobs_done + frac) / self.jobs_total * 1000))

    def _on_stderr(self):
        text = bytes(self.proc.readAllStandardError()).decode(errors="replace").strip()
        if text:
            self.log.appendPlainText(text)

    def _on_error(self, err):
        if err == QProcess.FailedToStart:
            self.log.appendPlainText(f"Could not start ffmpeg: {self.ffmpeg.text()}")
            self._finish_job(False)

    def _on_finished(self, code, exit_status):
        self._finish_job(code == 0 and exit_status == QProcess.NormalExit)

    def _finish_job(self, ok):
        job, self.job = self.job, None
        if job is None:
            return
        self.jobs_done += 1
        out_size = Path(job["out"]).stat().st_size if ok and Path(job["out"]).exists() else 0
        ok = ok and out_size > 0
        if job["test"]:
            if ok:
                est = out_size * job["full"] / job["duration"] if job["duration"] > 0 else 0
                self.preview_info.setText(
                    f"<b>Quick test</b>: {job['duration']:.1f} s → {human_size(out_size)}. "
                    f"Estimated full clip ({job['full']:.1f} s): <b>≈ {human_size(est)}</b>")
                self._show_preview(job["out"])
                self.status.setText("Quick test done")
            else:
                self.status.setText("Quick test failed. See the log.")
        else:
            info = job["item"].data(Qt.UserRole)
            if ok:
                info["output"] = job["out"]
                job["item"].setData(Qt.UserRole, info)
                src_size = Path(job["src"]).stat().st_size
                self.preview_info.setText(
                    f"<b>{Path(job['out']).name}</b>: {human_size(out_size)} "
                    f"(source {human_size(src_size)})")
                self.log.appendPlainText(f"✔ {job['out']}  ({human_size(out_size)})")
            self._set_item_status(job["item"], "done" if ok else "failed")
            if not self.jobs:
                self.status.setText(f"Finished {self.jobs_total} file(s)" if ok else "Finished with errors. See the log.")
                if ok:
                    self._show_preview(job["out"])
        self.progress.setValue(int(self.jobs_done / max(self.jobs_total, 1) * 1000))
        self._next_job()

    def cancel(self):
        self.jobs = []
        if self._busy():
            self.proc.finished.disconnect(self._on_finished)
            self.proc.kill()
            self.proc.waitForFinished(3000)
            job, self.job = self.job, None
            if job and not job["test"]:
                self._set_item_status(job["item"], "failed")
                try:
                    os.remove(job["out"])  # partial file
                except OSError:
                    pass
        self.status.setText("Cancelled")
        self._set_busy(False)


def main():
    app = QApplication(sys.argv)
    app.setStyle("Fusion")
    app.setPalette(dark_palette())
    win = MainWindow()
    win.show()
    win.add_files([a for a in sys.argv[1:] if Path(a).exists()])
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
