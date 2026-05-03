# SOORIN · 정수린 요가

한남동의 작은 요가 스튜디오, SOORIN의 단일 페이지 홈페이지.

## Stack

- React 18 + Vite 6
- Tailwind CSS v4 (`@theme` 토큰)
- Framer Motion
- lucide-react

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

빌드 결과물은 `dist/`에 생성됩니다. `vite.config.js`에 `base: './'`이 설정되어 있어 GitHub Pages를 포함한 임의의 sub-path에서 호스팅 가능합니다.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml`이 main 브랜치 푸시마다 자동으로 빌드·배포합니다.

1. GitHub에 빈 public repo `soorin-yoga` 생성
2. 로컬에서 init·push:
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<USER>/soorin-yoga.git
   git push -u origin main
   ```
3. GitHub repo → Settings → Pages → **Source: GitHub Actions** 활성화

배포 후 URL: `https://<USER>.github.io/soorin-yoga/`
