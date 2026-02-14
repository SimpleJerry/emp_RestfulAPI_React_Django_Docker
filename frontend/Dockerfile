# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# package 파일 복사
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

# frontend 소스 복사
COPY frontend/ .

COPY .env .env

# Next.js build
RUN npm run build


# ---------- Run stage ----------
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./
COPY .env .env

EXPOSE 3000
CMD ["npm", "run", "start"]