#!/bin/bash

set -e

echo "🚀 Airbnb Clone Setup Script"
echo "============================"
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Installing pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm is available"
echo ""

# Check if Node.js version is correct
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be >= 18. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version is compatible: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

echo "✅ Dependencies installed"
echo ""

# Setup environment files
echo "🔧 Setting up environment files..."

if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created .env file"
else
    echo "ℹ️  .env file already exists"
fi

if [ ! -f "apps/web/.env.local" ]; then
    cp apps/web/.env.local.example apps/web/.env.local
    echo "✅ Created apps/web/.env.local file"
else
    echo "ℹ️  apps/web/.env.local file already exists"
fi

if [ ! -f "apps/api/.env" ]; then
    cp apps/api/.env.example apps/api/.env
    echo "✅ Created apps/api/.env file"
else
    echo "ℹ️  apps/api/.env file already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Start database (Docker):"
echo "   docker-compose up -d postgres"
echo ""
echo "2. Run database migrations:"
echo "   pnpm db:push"
echo ""
echo "3. Start development servers:"
echo "   pnpm dev"
echo ""
echo "4. Open in browser:"
echo "   Frontend:  http://localhost:3000"
echo "   Backend:   http://localhost:3001"
echo "   Swagger:   http://localhost:3001/api"
echo ""
