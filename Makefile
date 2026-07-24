.PHONY: help install dev build lint format clean docker-up docker-down db-push db-studio

help:
	@echo "Airbnb Clone - Available Commands"
	@echo "=================================="
	@echo ""
	@echo "Setup:"
	@echo "  make install         Install dependencies"
	@echo ""
	@echo "Development:"
	@echo "  make dev             Start development servers"
	@echo "  make dev-frontend    Start frontend only"
	@echo "  make dev-backend     Start backend only"
	@echo ""
	@echo "Building:"
	@echo "  make build           Build all packages"
	@echo ""
	@echo "Code Quality:"
	@echo "  make lint            Lint all packages"
	@echo "  make format          Format all files"
	@echo "  make format-check    Check formatting"
	@echo "  make type-check      Type check all packages"
	@echo ""
	@echo "Database:"
	@echo "  make db-push         Push Prisma schema"
	@echo "  make db-studio       Open Prisma Studio"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-up       Start Docker services"
	@echo "  make docker-down     Stop Docker services"
	@echo "  make docker-logs     View Docker logs"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean           Clean build artifacts"

install:
	@echo "📦 Installing dependencies..."
	pnpm install

dev:
	@echo "🚀 Starting development servers..."
	pnpm dev

dev-frontend:
	@echo "🚀 Starting frontend..."
	pnpm dev --scope=web

dev-backend:
	@echo "🚀 Starting backend..."
	pnpm dev --scope=api

build:
	@echo "🔨 Building all packages..."
	pnpm build

lint:
	@echo "🔍 Linting..."
	pnpm lint

format:
	@echo "✨ Formatting code..."
	pnpm format

format-check:
	@echo "✨ Checking formatting..."
	pnpm format:check

type-check:
	@echo "📋 Type checking..."
	pnpm type-check

db-push:
	@echo "🗄️  Pushing database schema..."
	pnpm db:push

db-studio:
	@echo "📊 Opening Prisma Studio..."
	pnpm db:studio

docker-up:
	@echo "🐳 Starting Docker services..."
	docker-compose up -d

docker-down:
	@echo "🐳 Stopping Docker services..."
	docker-compose down

docker-logs:
	@echo "📋 Showing Docker logs..."
	docker-compose logs -f

clean:
	@echo "🗑️  Cleaning up..."
	pnpm clean
	@echo "✅ Cleanup complete!"

.DEFAULT_GOAL := help
