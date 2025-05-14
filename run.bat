@echo off
docker build -t my-nuxt-app -f Dockerfile.nuxt . && ^
docker run -d -p 3000:3000 my-nuxt-app && ^
timeout /t 3 /nobreak && ^
start http://localhost:3000