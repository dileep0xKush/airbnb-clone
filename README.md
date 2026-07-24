# Airbnb Clone - Production-Ready Monorepo

A complete, production-ready Airbnb-style application built with a modern tech stack using Turborepo monorepo architecture.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Database](#database)
- [Docker](#docker)
- [Scripts](#scripts)
- [Architecture](#architecture)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

## 🎯 Project Overview

This is a full-stack Airbnb clone application with:

- **Frontend**: Next.js 15 with React 19, TypeScript, TailwindCSS v4
- **Backend**: NestJS with Prisma ORM and PostgreSQL
- **Monorepo**: Turborepo with pnpm for fast, scalable builds
- **Shared Packages**: Reusable components, types, utilities, and configurations
- **Production Ready**: Includes Docker, tests, linting, formatting, and complete tooling

## 🛠 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with optimizations
- **TypeScript** - Full type safety
- **TailwindCSS v4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Hook Form** - Efficient form management
- **Zod** - Schema validation
- **Zustand** - Lightweight state management
- **Lucide React** - Modern icon library
- **Embla Carousel** - Accessible carousel component

### Backend

- **NestJS** - Progressive Node.js framework
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Relational database
- **JWT** - Authentication
- **Swagger** - API documentation
- **Helmet** - Security headers
- **Winston** - Logger

### Shared

- **Turborepo** - Monorepo manager
- **pnpm** - Fast package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

## 📁 Repository Structure

```
airbnb-clone/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/           # Next.js app directory
│   │   │   ├── components/    # React components
│   │   │   ├── features/      # Feature modules
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── lib/           # Utility functions
│   │   │   ├── services/      # API services
│   │   │   ├── store/         # Zustand stores
│   │   │   ├── types/         # TypeScript types
│   │   │   └── styles/        # Global styles
│   │   ├── public/            # Static assets
│   │   ├── next.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── api/                    # NestJS backend
│       ├── src/
│       │   ├── modules/       # Feature modules
│       │   │   ├── auth/
│       │   │   ├── users/
│       │   │   ├── listings/
│       │   │   ├── bookings/
│       │   │   ├── reviews/
│       │   │   └── health/
│       │   ├── common/        # Shared utilities
│       │   ├── config/        # Configuration
│       │   ├── database/      # Prisma setup
│       │   ├── filters/       # Exception filters
│       │   ├── guards/        # Auth guards
│       │   ├── interceptors/  # HTTP interceptors
│       │   ├── decorators/    # Custom decorators
│       │   ├── pipes/         # Validation pipes
│       │   ├── app.module.ts
│       │   └── main.ts
│       ├── prisma/
│       │   └── schema.prisma  # Database schema
│       ├── tsconfig.json
│       ├── nest-cli.json
│       └── package.json
│
├── packages/
│   ├── ui/                     # Shared React components
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Card.tsx
│   │   └── index.ts
│   │
│   ├── types/                  # Shared TypeScript types
│   │   └── index.ts
│   │
│   ├── utils/                  # Shared utilities
│   │   ├── format.ts
│   │   ├── string.ts
│   │   ├── date.ts
│   │   ├── async.ts
│   │   ├── validation.ts
│   │   ├── number.ts
│   │   └── index.ts
│   │
│   ├── constants/              # Shared constants
│   │   ├── routes.ts
│   │   ├── api.ts
│   │   ├── app.ts
│   │   └── index.ts
│   │
│   ├── hooks/                  # Shared React hooks
│   │   └── index.ts
│   │
│   └── config/                 # Shared configurations
│       ├── eslint-preset.js
│       ├── prettier.config.js
│       └── typescript/
│
├── docs/
│   └── architecture/           # Architecture documentation
│
├── turbo.json                  # Turborepo configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── package.json                # Root package.json
├── tsconfig.json               # Root TypeScript config
├── .eslintrc.json              # Root ESLint config
├── .prettierrc                 # Root Prettier config
├── .editorconfig               # Editor configuration
├── .gitignore                  # Git ignore rules
├── .env.example                # Environment variables template
├── Dockerfile                  # Docker image for API
├── docker-compose.yml          # Docker Compose configuration
└── README.md                   # This file
```

## 📋 Prerequisites

- **Node.js**: >= 18.17
- **pnpm**: >= 8.0.0
- **Docker** (optional): For running with Docker Compose
- **PostgreSQL**: For database (or use Docker)

## 🚀 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd airbnb-clone
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Setup environment variables

```bash
cp .env.example .env
```

Update `.env` with your configuration:

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3001

# Backend
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/airbnb_clone
JWT_SECRET=your-secret-key-change-in-production
PORT=3001
NODE_ENV=development

# Database
POSTGRES_DB=airbnb_clone
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

### 4. Setup database (with Docker Compose)

```bash
docker-compose up -d postgres
```

Or setup PostgreSQL locally and update `DATABASE_URL`.

### 5. Run Prisma migrations

```bash
pnpm db:push
```

## 💻 Development

### Start all services concurrently

```bash
pnpm dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Swagger API Docs**: http://localhost:3001/api

### Start individual services

```bash
# Frontend only
pnpm dev --scope=web

# Backend only
pnpm dev --scope=api
```

## 🏗️ Building

### Build all packages

```bash
pnpm build
```

This builds:
- All shared packages
- Frontend (Next.js)
- Backend (NestJS)

### Build specific app

```bash
pnpm build --scope=web   # Frontend only
pnpm build --scope=api   # Backend only
```

### Start production build

```bash
pnpm start --scope=api
```

## 🗄️ Database

### Prisma Commands

```bash
# Push schema changes to database
pnpm db:push

# Create a new migration
pnpm db:migrate

# Open Prisma Studio (UI for database)
pnpm db:studio

# Generate Prisma client
pnpm db:generate
```

### Database Schema

The application includes pre-configured models for:

- **Users** - User authentication and profiles
- **Hosts** - Host information and verification
- **Listings** - Property listings with details
- **Images** - Property images
- **Amenities** - Listing amenities
- **Bookings** - Reservations
- **Reviews** - Guest reviews

## 🐳 Docker

### Using Docker Compose

Start all services (PostgreSQL, pgAdmin, API):

```bash
docker-compose up -d
```

Services will be available at:
- **API**: http://localhost:3001
- **pgAdmin**: http://localhost:5050 (admin@example.com / admin)
- **Database**: localhost:5432

Stop all services:

```bash
docker-compose down
```

View logs:

```bash
docker-compose logs -f api
docker-compose logs -f postgres
```

### Build Docker image manually

```bash
docker build -t airbnb-clone-api .
docker run -p 3001:3001 airbnb-clone-api
```

## 📜 Scripts

### Root level scripts

```bash
pnpm dev              # Start all services in development
pnpm build            # Build all packages
pnpm lint             # Lint all packages
pnpm format           # Format all files
pnpm format:check     # Check formatting
pnpm type-check       # TypeScript type checking
pnpm test             # Run all tests
pnpm clean            # Clean all build artifacts
pnpm db:push          # Push Prisma schema to database
pnpm db:migrate       # Run Prisma migrations
pnpm db:studio        # Open Prisma Studio
```

## 🏛️ Architecture

### Monorepo Structure

The project uses Turborepo for:

- **Build caching**: Faster rebuilds
- **Task orchestration**: Run tasks across packages
- **Dependency management**: Clear package dependencies
- **Shared configurations**: ESLint, Prettier, TypeScript

### Package Dependencies

```
web (frontend)
  └── ui, types, utils, constants, hooks, config

api (backend)
  └── types, utils, constants, config

ui
  └── config

All packages
  └── config (shared configurations)
```

### Frontend Architecture

- **App Router**: Modern Next.js routing
- **Component-based**: Reusable UI components
- **State Management**: Zustand for global state
- **Form Validation**: React Hook Form + Zod
- **API Integration**: Service layer for backend calls

### Backend Architecture

- **Modular**: Feature-based module structure
- **Clean Architecture**: Separation of concerns
- **ORM**: Prisma for database access
- **Authentication**: JWT-based
- **Validation**: Class validators and Zod schemas
- **Documentation**: Swagger/OpenAPI

## 🔐 Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env)

```env
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/airbnb_clone

# Authentication
JWT_SECRET=your-super-secret-key-change-in-production

# Server
PORT=3001
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:3000
```

## 📦 Publishing Packages

To publish shared packages to npm:

```bash
cd packages/<package-name>
npm publish
```

Update versions in package.json before publishing.

## 🚢 Deployment

### Frontend (Vercel)

```bash
# Push to GitHub
git push origin main

# Vercel automatically deploys
# Set environment variables in Vercel dashboard
```

### Backend (Docker)

```bash
# Build Docker image
docker build -t airbnb-api:latest .

# Push to Docker Hub
docker push your-dockerhub-username/airbnb-api:latest

# Deploy to your server/cloud
docker run -e DATABASE_URL=... -e JWT_SECRET=... airbnb-api:latest
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm test --scope=api

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:cov
```

## 📝 Code Quality

### Linting

```bash
pnpm lint
```

Fixes linting errors:

```bash
pnpm lint --fix
```

### Formatting

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

### Type Checking

```bash
pnpm type-check
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint` and `pnpm format`
4. Create a pull request

## 📄 License

MIT

## 👥 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ using modern web technologies**
