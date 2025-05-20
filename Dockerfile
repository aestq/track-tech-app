FROM node:20 as build

WORKDIR /app

# Копируем package.json и package-lock.json отдельно
COPY package.json package-lock.json ./

# Устанавливаем зависимости (npm install)
RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu --no-save

# Копируем остальной исходный код
COPY . .

# Собираем приложение
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/cors.conf /etc/nginx/conf.d/cors.conf
