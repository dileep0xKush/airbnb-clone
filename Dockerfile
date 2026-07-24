# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy monorepo files
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps ./apps

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build backend
RUN pnpm run build --scope=api

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Copy only necessary files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/pnpm-lock.yaml .
COPY --from=builder /app/package.json .
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/prisma ./prisma

# Install production dependencies only
RUN npm install -g pnpm && pnpm prune --prod

EXPOSE 3001

CMD ["node", "dist/main"]
