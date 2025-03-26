# Use the alpine node image and name the stage "builder"
FROM node:22-alpine as builder
RUN apk add --no-cache g++ make py3-pip libc6-compat

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


WORKDIR /home/node/frontend
COPY frontend/*.json ./
RUN npm ci
COPY frontend/* ./

WORKDIR /home/node
COPY --chown=node:node . .

WORKDIR /home/node/frontend
RUN npm run build \
    && npm prune --omit=dev

WORKDIR /home/node
COPY *.json ./
RUN npm ci

COPY --chown=node:node . .

# Use the alpine node image and name the stage production
FROM node:22-alpine
RUN apk add --no-cache g++ make py3-pip libc6-compat

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/backend/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/backend/dist/ ./dist/

COPY --from=builder --chown=node:node /home/node/frontend/.next ./.next
COPY --from=builder --chown=node:node /home/node/frontend/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/frontend/package.json ./package.json
COPY --from=builder --chown=node:node /home/node/frontend/public ./public

COPY --from=builder --chown=node:node /home/node/package*.json ./

CMD ["npm", "run", "start"]

EXPOSE 5000