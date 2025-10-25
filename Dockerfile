FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:22-slim AS run
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY package*.json ./
RUN npm install --only=production
CMD ["node", "dist/server.js"]