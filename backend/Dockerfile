FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force
RUN npm ci

COPY . .
RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "start"]