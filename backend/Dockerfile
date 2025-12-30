FROM node:18-alpine

# 1. Рабочая директория внутри контейнера
WORKDIR /app

# 2. Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# 3. Устанавливаем зависимости (prod + dev)
RUN npm install

# 4. Копируем tsconfig и исходники
COPY tsconfig.json ./
COPY src ./src

# 5. Собираем TypeScript в JavaScript (в dist/)
RUN npm run build

# 6. Команда по умолчанию: запуск продакшн-сервера
CMD ["npm", "start"]