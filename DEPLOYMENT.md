# 🚀 GitHub Pages Deployment Guide

## Как загрузить Spotify Clone на GitHub и сделать его веб-сайтом

### Шаг 1: Создание GitHub репозитория

1. **Перейдите на GitHub.com** и войдите в свой аккаунт
2. **Нажмите "New repository"** (зеленая кнопка)
3. **Заполните данные:**
   - Repository name: `spotify-clone`
   - Description: `A modern Spotify clone built with React and Vite`
   - Выберите **Public** (чтобы GitHub Pages работал бесплатно)
   - НЕ ставьте галочки на "Add a README file", "Add .gitignore", "Choose a license"
4. **Нажмите "Create repository"**

### Шаг 2: Подготовка проекта для GitHub

1. **Создайте файл `.gitignore`** в корне проекта:

```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

2. **Инициализируйте Git в проекте:**

```bash
# В папке G:\CLONE\spotify-clone
git init
git add .
git commit -m "Initial commit: Spotify Clone project"
```

3. **Подключите к GitHub репозиторию:**

```bash
git remote add origin https://github.com/ВАШ_USERNAME/spotify-clone.git
git branch -M main
git push -u origin main
```

### Шаг 3: Настройка GitHub Pages

1. **Перейдите в Settings вашего репозитория**
2. **Прокрутите вниз до раздела "Pages"**
3. **В разделе "Source" выберите:**
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"
4. **Нажмите "Save"**

### Шаг 4: Настройка автоматического деплоя

1. **Создайте файл `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. **Создайте папку `.github/workflows/` если её нет**
3. **Сохраните файл `deploy.yml`**

### Шаг 5: Обновление package.json для GitHub Pages

Добавьте в `package.json`:

```json
{
  "name": "spotify-clone",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://ВАШ_USERNAME.github.io/spotify-clone"
}
```

### Шаг 6: Настройка Vite для GitHub Pages

Обновите `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/spotify-clone/', // Важно! Замените на имя вашего репозитория
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

### Шаг 7: Деплой

1. **Зафиксируйте все изменения:**

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

2. **GitHub Actions автоматически:**
   - Соберет проект
   - Создаст ветку `gh-pages`
   - Задеплоит сайт

3. **Через 2-3 минуты ваш сайт будет доступен по адресу:**
   ```
   https://ВАШ_USERNAME.github.io/spotify-clone
   ```

### Шаг 8: Обновление README с правильной ссылкой

Замените в `README.md`:
- `yourusername` на ваш GitHub username
- Обновите ссылку на Live Demo

---

## 🔧 Troubleshooting

### Проблема: Сайт не загружается
**Решение:**
1. Проверьте, что в `vite.config.js` правильно указан `base: '/spotify-clone/'`
2. Убедитесь, что репозиторий публичный
3. Проверьте, что GitHub Actions завершились успешно

### Проблема: Аудио не воспроизводится
**Решение:**
1. Убедитесь, что аудиофайлы находятся в `public/audio/`
2. Проверьте, что пути к аудио правильные в `mockData.js`
3. Некоторые браузеры требуют пользовательского взаимодействия для воспроизведения

### Проблема: Стили не загружаются
**Решение:**
1. Проверьте, что `base` в `vite.config.js` правильный
2. Убедитесь, что все CSS файлы импортированы в `main.jsx`

---

## 📱 Дополнительные настройки

### PWA (Progressive Web App)

Ваш проект уже настроен как PWA! Пользователи могут:
- Установить приложение на мобильное устройство
- Использовать в офлайн режиме
- Получать уведомления

### Кастомизация домена

Если у вас есть собственный домен:
1. Создайте файл `CNAME` в папке `public/`
2. Добавьте в него ваш домен: `yourdomain.com`
3. Настройте DNS записи у вашего провайдера

---

## 🎉 Готово!

Теперь у вас есть:
- ✅ Полнофункциональный Spotify Clone
- ✅ Автоматический деплой на GitHub Pages
- ✅ Красивый README с документацией
- ✅ PWA поддержка
- ✅ Мобильная адаптация

**Ваш сайт:** `https://ВАШ_USERNAME.github.io/spotify-clone`

---

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи GitHub Actions
2. Убедитесь, что все файлы загружены
3. Проверьте настройки репозитория

**Удачи с деплоем! 🚀**
