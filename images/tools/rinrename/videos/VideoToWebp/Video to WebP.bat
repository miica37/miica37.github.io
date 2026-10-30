@echo off
rem Opens the app. Videos dropped on this .bat are added to the queue.
start "" pythonw "%~dp0video_to_webp.py" %*
