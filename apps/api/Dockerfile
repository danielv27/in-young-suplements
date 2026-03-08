# ─── Stage 1: install dependencies ───────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app

# Copy workspace manifests only – changes to source won't bust this cache layer
COPY package.json package-lock.json turbo.json ./
COPY apps/api/package.json ./apps/api/
COPY packages/shared/package.json ./packages/shared/

RUN npm ci

# ─── Stage 2: build ───────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY packages/shared ./packages/shared
COPY apps/api ./apps/api
COPY package.json turbo.json ./

# 1. Build shared package and emit declaration files (.d.ts)
RUN cd packages/shared && npx tsc

# 2. Update shared's package.json so it points to the compiled output at runtime.
#    This prevents TypeScript rootDir conflicts when compiling the API and ensures
#    Node.js can require() the compiled JS at runtime.
RUN node -e " \
  const fs = require('fs'); \
  const pkg = JSON.parse(fs.readFileSync('packages/shared/package.json', 'utf8')); \
  pkg.main = './dist/index.js'; \
  pkg.types = './dist/index.d.ts'; \
  fs.writeFileSync('packages/shared/package.json', JSON.stringify(pkg, null, 2)); \
"

# 3. Build the API (TypeScript now resolves @inyoung/shared via compiled .d.ts)
RUN cd apps/api && npx tsc

# ─── Stage 3: production runner ───────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only production node_modules (all workspace deps are hoisted to root)
COPY --from=builder /app/node_modules ./node_modules

# Replace the workspace symlink with the actual compiled shared package so that
# require('@inyoung/shared') resolves correctly without symlink issues.
RUN rm -rf ./node_modules/@inyoung/shared
COPY --from=builder /app/packages/shared/dist ./node_modules/@inyoung/shared/dist
COPY --from=builder /app/packages/shared/package.json ./node_modules/@inyoung/shared/

# Copy compiled API output
COPY --from=builder /app/apps/api/dist ./dist

EXPOSE 4000
CMD ["node", "dist/index.js"]
