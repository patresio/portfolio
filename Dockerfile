# Use the alpine node image and name the stage "builder"
FROM node:22-alpine as builder

USER node

WORKDIR /home/node/backend

COPY backend/*.json ./
RUN npm ci

WORKDIR /home/node
COPY --chown=node:node . .

WORKDIR /home/node/backend
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# Use the alpine node image and name the stage production

FROM node:22-alpine

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/backend/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/backend/dist/ ./dist/

CMD ["node", "dist/backend/src/main.js"]