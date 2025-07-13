# BloodyBoss Config Tool - Project Setup Guide

## Prerequisites

- Node.js 18+ and npm/pnpm
- Rust and cargo
- Git

## Initial Setup

### 1. Create Tauri + React Project

```bash
cd /run/media/trodi/16902D94902D7AFF/MODS/BloodyBossConfig/

# Install create-tauri-app
npm create tauri-app@latest . -- --template react-ts --manager pnpm

# Or if you prefer npm
npm create tauri-app@latest . -- --template react-ts
```

### 2. Install Frontend Dependencies

```bash
# Core dependencies
pnpm add react-router-dom zustand zod react-hook-form @hookform/resolvers
pnpm add lucide-react react-hot-toast date-fns

# UI Components (shadcn/ui)
pnpm add -D tailwindcss postcss autoprefixer
pnpm add class-variance-authority clsx tailwind-merge
pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu
pnpm add @radix-ui/react-label @radix-ui/react-select
pnpm add @radix-ui/react-tabs @radix-ui/react-tooltip

# Development tools
pnpm add -D @types/node prettier eslint
pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 3. Configure Tailwind CSS

```bash
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  plugins: [],
}
```

### 4. Setup shadcn/ui

Create `components.json`:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### 5. Configure TypeScript Paths

Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 6. Setup Tauri Configuration

Update `src-tauri/tauri.conf.json`:
```json
{
  "build": {
    "beforeDevCommand": "pnpm dev",
    "beforeBuildCommand": "pnpm build",
    "devPath": "http://localhost:1420",
    "distDir": "../dist"
  },
  "package": {
    "productName": "BloodyBoss Config",
    "version": "1.0.0"
  },
  "tauri": {
    "allowlist": {
      "all": false,
      "fs": {
        "all": true,
        "scope": ["$HOME/.config/bloodyboss/**", "$HOME/vrising_server/**"]
      },
      "dialog": {
        "all": true
      },
      "path": {
        "all": true
      }
    },
    "windows": [
      {
        "title": "BloodyBoss Configuration Tool",
        "width": 1400,
        "height": 900,
        "minWidth": 1200,
        "minHeight": 700
      }
    ]
  }
}
```

### 7. Create Project Structure

```bash
# Create directories
mkdir -p src/{components,pages,hooks,services,store,types,lib}
mkdir -p src/components/{boss,mechanics,config,ui,common}
mkdir -p src-tauri/src/{commands,models,utils}

# Create base files
touch src/lib/utils.ts
touch src/store/index.ts
touch src/types/{boss.ts,mechanic.ts,config.ts}
touch src/services/api.ts
```

### 8. Initialize Git Repository

```bash
git init
echo "node_modules/
dist/
.env
.env.local
target/
*.log" > .gitignore

git add .
git commit -m "Initial project setup with Tauri + React + TypeScript"
```

### 9. Setup Development Scripts

Update `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "tauri": "tauri",
    "tauri:dev": "tauri dev",
    "tauri:build": "tauri build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write \"src/**/*.{ts,tsx,json,css,md}\""
  }
}
```

### 10. Create Initial App Structure

Create `src/App.tsx`:
```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Dashboard from '@/pages/Dashboard';
import BossList from '@/pages/BossList';
import BossEditor from '@/pages/BossEditor';
import Settings from '@/pages/Settings';
import Layout from '@/components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bosses" element={<BossList />} />
          <Route path="/bosses/:id" element={<BossEditor />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
```

## Next Steps

1. **Install shadcn/ui components**:
   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add input
   npx shadcn-ui@latest add dialog
   npx shadcn-ui@latest add select
   npx shadcn-ui@latest add tabs
   ```

2. **Create Rust models** matching the C# models from BloodyBoss

3. **Implement Tauri commands** for file operations

4. **Build the UI components** following the mockups

5. **Setup state management** with Zustand

6. **Add validation** with Zod schemas

7. **Implement import/export** functionality

8. **Add comprehensive error handling**

9. **Create user documentation**

10. **Package and distribute** the application

## Development Workflow

```bash
# Start development server
pnpm tauri:dev

# Build for production
pnpm tauri:build

# Run tests
pnpm test

# Format code
pnpm format

# Lint code
pnpm lint
```

## Troubleshooting

### Common Issues

1. **Tauri build errors**: Ensure Rust is properly installed
2. **Module resolution**: Check tsconfig paths
3. **Tailwind not working**: Ensure PostCSS config is correct
4. **CORS issues**: Check Tauri allowlist configuration

### Resources

- [Tauri Documentation](https://tauri.app/v1/guides/)
- [React Documentation](https://react.dev/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)