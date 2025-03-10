
C:\Programs\ffmpeg\bin\ffmpeg.exe -i %1 -c:v libwebp_anim -lossless 0 -vf "fps=15,scale=1000:-1:flags=lanczos" -q:v 90 -loop 0 -f webp %~n1.webp

pause
