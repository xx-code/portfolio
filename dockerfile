FROM node:24-alpine AS base

# Builder stage
FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Activer corepack (pour Yarn Berry)
RUN corepack enable

# Copier uniquement les fichiers nécessaires pour installer les deps
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install --frozen-lockfile

# Copier le reste du projet
COPY . .

# Build Nuxt
RUN yarn build


# Runner stage
FROM base AS runner
RUN apk add --no-cache libc6-compat curl
WORKDIR /app

# Copier uniquement le build final
COPY --from=builder /app/.output ./

ENV PORT=80
ENV HOST=0.0.0.0

EXPOSE 80

CMD ["node", "server/index.mjs"]
