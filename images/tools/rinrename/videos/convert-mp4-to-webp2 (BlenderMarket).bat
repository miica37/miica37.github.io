
C:\Programs\ffmpeg\bin\ffmpeg.exe -i %1 -c:v libwebp_anim -lossless 1 -vf "fps=10,scale=1000:-1:flags=lanczos" -q:v 97 -loop 0 -preset picture -f webp %~n1_BM2.webp

pause
