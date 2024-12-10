# LLD Apps

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/lld-apps) [![Main Build](https://github.com/mandy8055/lld-apps/actions/workflows/prod-build.yml/badge.svg)](https://github.com/mandy8055/lld-apps/actions/workflows/prod-build.yml) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-f9ad00.svg)](https://pnpm.io/)

A monorepo for Low Level Design of common problems implementations using React, TypeScript, and Tailwind CSS. Built with Turborepo and Vite.

## Project Structure

```bash
├── apps/                    # Application projects
│   └── template/           # Template for new applications
├── packages/               # Shared packages
│   ├── eslint-config/     # Shared ESLint configurations
│   ├── tailwind-config/   # Shared Tailwind configurations
│   └── typescript-config/ # Shared TypeScript configurations
└── scripts/               # Utility scripts
```

## Prerequisites

- Node.js >= 18
- pnpm 9.0.0

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/mandy8055/lld-apps.git
cd lld-apps
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a new app from template:

```bash
pnpm create-app your-app-name
```

4. Start development server:

```bash
# For all apps
pnpm dev

# For a specific app
pnpm dev --filter <app_name>
```

## Available Scripts

- `pnpm dev` - Start development server for all apps
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all apps
- `pnpm format` - Format code using Prettier
- `pnpm create-app [name]` - Create a new app from template

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Monorepo Management:** Turborepo
- **Package Manager:** pnpm

## Project Configuration

### Workspace Structure

The project uses a monorepo structure with shared configurations:

- `packages/eslint-config` - Shared ESLint rules
- `packages/tailwind-config` - Shared Tailwind CSS configuration
- `packages/typescript-config` - Shared TypeScript configuration

### Creating New Apps

Use the provided script to create new apps:

```bash
pnpm create-app my-new-app
```

This will:

1. Copy the template app structure
2. Set up necessary configurations
3. Update package.json with the new app name
4. Install dependencies

## Development Guidelines

1. All new apps should be created using the `create-app` script
2. Use shared configurations from the `packages` directory
3. Follow the existing project structure and coding conventions
4. Ensure all apps are built and tested before committing

## License

[MIT LICENSE](https://github.com/mandy8055/lld-apps/blob/main/LICENSE)
