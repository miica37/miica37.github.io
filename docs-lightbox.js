const LIGHTBOX_TRIGGER_SELECTOR = '.rh-doc-image a[data-rh-lightbox]';

let triggers = [];
let currentIndex = -1;
let previousActiveElement = null;
let lightbox = null;
let image = null;
let caption = null;
let counter = null;
let closeButton = null;
let previousButton = null;
let nextButton = null;

function isModifiedClick(event) {
	return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

function collectTriggers() {
	triggers = Array.from(document.querySelectorAll(LIGHTBOX_TRIGGER_SELECTOR)).filter((trigger) =>
		trigger.querySelector('img')
	);

	triggers.forEach((trigger) => {
		trigger.setAttribute('aria-haspopup', 'dialog');
	});
}

function getCaption(trigger) {
	const figureCaption = trigger.querySelector('figcaption')?.textContent?.trim();
	const altText = trigger.querySelector('img')?.getAttribute('alt')?.trim();
	return figureCaption || altText || '';
}

function ensureLightbox() {
	if (lightbox) return;

	lightbox = document.createElement('div');
	lightbox.className = 'rh-lightbox';
	lightbox.hidden = true;
	lightbox.setAttribute('role', 'dialog');
	lightbox.setAttribute('aria-modal', 'true');
	lightbox.setAttribute('aria-label', 'Image preview');
	lightbox.innerHTML = `
		<div class="rh-lightbox-toolbar">
			<span class="rh-lightbox-counter" data-rh-lightbox-counter></span>
			<button class="rh-lightbox-button" type="button" data-rh-lightbox-close aria-label="Close image preview">Close</button>
		</div>
		<div class="rh-lightbox-stage" data-rh-lightbox-stage>
			<button class="rh-lightbox-button rh-lightbox-nav rh-lightbox-prev" type="button" data-rh-lightbox-prev aria-label="Previous image">&lsaquo;</button>
			<img class="rh-lightbox-image" alt="" data-rh-lightbox-image />
			<button class="rh-lightbox-button rh-lightbox-nav rh-lightbox-next" type="button" data-rh-lightbox-next aria-label="Next image">&rsaquo;</button>
		</div>
		<div class="rh-lightbox-caption-bar">
			<p class="rh-lightbox-caption" data-rh-lightbox-caption></p>
		</div>
	`;

	image = lightbox.querySelector('[data-rh-lightbox-image]');
	caption = lightbox.querySelector('[data-rh-lightbox-caption]');
	counter = lightbox.querySelector('[data-rh-lightbox-counter]');
	closeButton = lightbox.querySelector('[data-rh-lightbox-close]');
	previousButton = lightbox.querySelector('[data-rh-lightbox-prev]');
	nextButton = lightbox.querySelector('[data-rh-lightbox-next]');

	closeButton.addEventListener('click', closeLightbox);
	previousButton.addEventListener('click', () => showImage(currentIndex - 1));
	nextButton.addEventListener('click', () => showImage(currentIndex + 1));

	lightbox.addEventListener('click', (event) => {
		const target = event.target;
		if (
			target === lightbox ||
			(target instanceof Element && target.matches('[data-rh-lightbox-stage]'))
		) {
			closeLightbox();
		}
	});

	document.body.append(lightbox);
}

function updateNavigation() {
	const hasMultipleImages = triggers.length > 1;
	previousButton.hidden = !hasMultipleImages;
	nextButton.hidden = !hasMultipleImages;
	counter.hidden = !hasMultipleImages;
	counter.textContent = hasMultipleImages ? `${currentIndex + 1} / ${triggers.length}` : '';
}

function showImage(index) {
	if (!triggers.length) return;

	currentIndex = (index + triggers.length) % triggers.length;
	const trigger = triggers[currentIndex];
	const title = getCaption(trigger);

	image.src = trigger.href;
	image.alt = trigger.querySelector('img')?.getAttribute('alt') || title;
	caption.textContent = title;
	caption.hidden = !title;
	updateNavigation();
}

function openLightbox(trigger) {
	collectTriggers();
	ensureLightbox();

	const triggerIndex = triggers.indexOf(trigger);
	if (triggerIndex === -1) return;

	previousActiveElement = document.activeElement;
	lightbox.hidden = false;
	document.body.classList.add('rh-lightbox-open');
	showImage(triggerIndex);
	closeButton.focus({ preventScroll: true });
}

function closeLightbox() {
	if (!lightbox || lightbox.hidden) return;

	lightbox.hidden = true;
	document.body.classList.remove('rh-lightbox-open');
	image.removeAttribute('src');

	if (previousActiveElement instanceof HTMLElement) {
		previousActiveElement.focus({ preventScroll: true });
	}
}

document.addEventListener('click', (event) => {
	const trigger = event.target.closest?.(LIGHTBOX_TRIGGER_SELECTOR);
	if (!trigger || isModifiedClick(event)) return;

	event.preventDefault();
	openLightbox(trigger);
});

document.addEventListener('keydown', (event) => {
	if (!lightbox || lightbox.hidden) return;

	if (event.key === 'Escape') {
		event.preventDefault();
		closeLightbox();
	}

	if (event.key === 'ArrowLeft') {
		event.preventDefault();
		showImage(currentIndex - 1);
	}

	if (event.key === 'ArrowRight') {
		event.preventDefault();
		showImage(currentIndex + 1);
	}
});

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', collectTriggers, { once: true });
} else {
	collectTriggers();
}
