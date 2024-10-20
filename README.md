# Web and Desktop App Monorepo with Turborepo and shadcn/ui

![Turborepo](https://img.shields.io/badge/Turborepo-Powered-blueviolet)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-brightgreen)
![Electron](https://img.shields.io/badge/Electron-Latest-lightblue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Bun](https://img.shields.io/badge/Bun-Latest-orange)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-purple)
![Prettier](https://img.shields.io/badge/Prettier-Formatted-ff69b4)

This monorepo contains a shared React package (`@repo/app`) that adapts to different environments, powering both a Vite-based web app and an Electron-Vite desktop app. It uses Turborepo for efficient management and development across packages, with UI components powered by shadcn/ui and code formatting handled by Prettier.

## Preview

![App Preview](.docs/preview.png)

## What's Inside?

### Apps

- `web`: Vite-powered React web application
- `desktop`: Electron-Vite desktop application
- `backend`: Bun-based backend service with Hono and tRPC

### Packages

- `@repo/app`: Shared React `<App />` component
- `@repo/ui`: Shared UI components (powered by shadcn/ui)
- `@repo/shared`: Reusable components, hooks, and API integrations
- `@repo/typescript-config`: Base TypeScript configuration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.17.0 or later)
- [pnpm](https://pnpm.io/) (v9.12.0 or later)
- [Bun](https://bun.sh/) (latest version)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/JakubGluszek/web-desktop-app.git
   cd web-desktop-app
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Set up environment variables:
   ```sh
   chmod +x ./scripts/generate-env.sh
   pnpm generate-env
   ```

### Development

Run all apps:

```sh
pnpm dev
```

Run specific apps:

```sh
pnpm dev --filter web
pnpm --filter desktop desktop:dev
pnpm dev --filter backend
```

### Building

Build all apps:

```sh
pnpm build
```

Build desktop app:

```sh
pnpm --filter desktop build:linux
pnpm --filter desktop build:win
pnpm --filter desktop build:mac
```

## Project Structure

```
/apps
  /web
  /desktop
  /backend
/packages
  /app
  /ui (shadcn/ui components)
  /shared
  /typescript-config
```

## Features

- **Shared Codebase**: `@repo/app` adapts to web or desktop environments
- **TypeScript**: Ensures type safety across the entire project
- **Vite & Electron-Vite**: Fast development for both web and desktop
- **Bun Backend**: High-performance API with Hono and tRPC
- **Turborepo**: Efficient monorepo management and task running
- **shadcn/ui**: Beautifully designed components that you can copy and paste into your apps
- **Prettier**: Consistent code formatting across the entire project

## Adding UI Components

To add new shadcn/ui components to your project, use the following command:

```sh
pnpm ui add <component-name>
```

This command works similarly to the shadcn/ui CLI, allowing you to easily integrate new components into your project.

## Code Formatting

This project uses Prettier to ensure consistent code formatting. To format your code, run:

```sh
pnpm format
```

To check if your code is properly formatted without making changes, use:

```sh
pnpm format:check
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
