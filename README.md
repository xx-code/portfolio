
# Nuxt Portfolio - Deployment Guide

This project uses Nuxt 3 and can be deployed easily in production using Docker.

## Prerequisites

- [Node.js](https://nodejs.org/) (for local development)
- [Yarn](https://yarnpkg.com/) (recommended)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

## Install dependencies

```bash
yarn install
```

## Local development

```bash
yarn dev
```
Access the app at [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
yarn build
```

## Deploy with Docker

1. **Build and start the container:**

	```bash
	docker-compose up --build
	```

	The app will be available at [http://localhost:3002](http://localhost:3002).

2. **Docker structure:**
	- Nuxt build is done in a lightweight Alpine image.
	- Port 3002 (host) is mapped to port 80 in the container.

3. **Stop the container:**

	```bash
	docker-compose down
	```

## Environment variables

- `NODE_ENV=production` (already set in `docker-compose.yaml`)
- `PORT=80` and `HOST=0.0.0.0` (set in Dockerfile)

## Nuxt Documentation

- [Nuxt - Deployment Guide](https://nuxt.com/docs/getting-started/deployment)
