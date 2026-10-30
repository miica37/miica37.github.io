@echo off
rem Drag a .mov onto this file. Strips a leftover ".mp4" from names like "clip.mp4.mov".
set "name=%~n1"
set "name=%name:.mp4=%"

C:\Programs\ffmpeg\bin\ffmpeg.exe -i "%~1" -c:v libwebp_anim -lossless 1 -vf "fps=10,scale=1000:-1:flags=lanczos" -q:v 97 -loop 0 -preset picture -f webp "%~dp1%name%_BM2.webp"

pause
