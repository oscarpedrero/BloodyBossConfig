# BloodyBoss Config Tool - Architecture Document

## Overview

The BloodyBoss Configuration Tool is a desktop application built with Tauri and React that provides a modern, user-friendly interface for configuring the BloodyBoss V Rising mod.

## Technology Stack

### Frontend
- **React 18**: UI library for building interactive interfaces
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library built on Radix UI
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation
- **Zustand**: Lightweight state management
- **React Router**: Client-side routing
- **Lucide React**: Icon library

### Backend (Tauri)
- **Rust**: Systems programming language for performance and safety
- **Tauri 2.0**: Modern desktop app framework
- **Serde**: Serialization/deserialization
- **Tokio**: Async runtime
- **JSON/TOML parsers**: For configuration files

## Architecture Patterns

### Frontend Architecture

```
┌─────────────────────────────────────────────────────┐
│                    React App                         │
├─────────────────────────────────────────────────────┤
│  Pages           │  Components      │  Services      │
│  ├─ Dashboard    │  ├─ BossEditor  │  ├─ BossAPI    │
│  ├─ BossList     │  ├─ MechanicUI  │  ├─ ConfigAPI  │
│  ├─ BossEditor   │  ├─ ConfigForm  │  ├─ FileAPI    │
│  └─ Settings     │  └─ Common      │  └─ Validation │
├─────────────────────────────────────────────────────┤
│                  State (Zustand)                     │
├─────────────────────────────────────────────────────┤
│                 Tauri IPC Bridge                     │
└─────────────────────────────────────────────────────┘
```

### Backend Architecture

```
┌─────────────────────────────────────────────────────┐
│                  Tauri Backend                       │
├─────────────────────────────────────────────────────┤
│  Commands        │  Models         │  Utils          │
│  ├─ boss_cmds    │  ├─ Boss       │  ├─ FileIO     │
│  ├─ config_cmds  │  ├─ Mechanic   │  ├─ Validation │
│  ├─ file_cmds    │  ├─ Config     │  ├─ Backup     │
│  └─ system_cmds  │  └─ Location   │  └─ Parser     │
├─────────────────────────────────────────────────────┤
│              File System Access                      │
└─────────────────────────────────────────────────────┘
```

## Data Flow

1. **User Interaction** → React Component
2. **Component** → Form Validation (Zod)
3. **Valid Data** → Zustand Store
4. **Store** → Tauri Command (via IPC)
5. **Tauri Backend** → File System Operations
6. **Response** → Update UI State

## Core Components

### 1. Boss Editor
- **Purpose**: Complete CRUD operations for boss configurations
- **Features**:
  - Form-based editing with real-time validation
  - Mechanic builder with drag-and-drop
  - Phase configuration
  - Location picker with map visualization
  - Ability and reward selectors

### 2. Mechanic Builder
- **Purpose**: Visual construction of boss mechanics
- **Features**:
  - Drag-and-drop interface
  - Parameter configuration panels
  - Trigger condition builder
  - Preview and testing capabilities
  - Template library

### 3. Configuration Manager
- **Purpose**: Edit mod-wide settings
- **Features**:
  - Categorized settings
  - Type-safe input controls
  - Validation and constraints
  - Import/export configurations
  - Reset to defaults

### 4. Import/Export System
- **Purpose**: Data portability and sharing
- **Features**:
  - JSON file import/export
  - Validation before import
  - Backup creation
  - Batch operations
  - Configuration sharing

## State Management

### Global State (Zustand)
```typescript
interface AppState {
  // Boss Management
  bosses: BossEncounterModel[];
  selectedBoss: string | null;
  
  // Configuration
  config: ModConfiguration;
  
  // UI State
  theme: 'light' | 'dark';
  sidebarCollapsed: boolean;
  
  // Actions
  loadBosses: () => Promise<void>;
  saveBoss: (boss: BossEncounterModel) => Promise<void>;
  deleteBoss: (id: string) => Promise<void>;
  // ... more actions
}
```

### Local State (Component)
- Form state managed by React Hook Form
- UI state (modals, dropdowns) with useState
- Derived state with useMemo

## File Structure

```
BloodyBossConfig/
├── src/
│   ├── components/
│   │   ├── boss/
│   │   │   ├── BossEditor.tsx
│   │   │   ├── BossCard.tsx
│   │   │   └── BossList.tsx
│   │   ├── mechanics/
│   │   │   ├── MechanicBuilder.tsx
│   │   │   ├── MechanicCard.tsx
│   │   │   └── TriggerEditor.tsx
│   │   ├── config/
│   │   │   ├── ConfigForm.tsx
│   │   │   └── SettingInput.tsx
│   │   └── ui/           # shadcn/ui components
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Bosses.tsx
│   │   ├── Config.tsx
│   │   └── ImportExport.tsx
│   ├── hooks/
│   │   ├── useBosses.ts
│   │   ├── useConfig.ts
│   │   └── useValidation.ts
│   ├── services/
│   │   ├── api.ts        # Tauri command wrappers
│   │   ├── validation.ts
│   │   └── utils.ts
│   ├── store/
│   │   └── index.ts      # Zustand store
│   ├── types/
│   │   ├── boss.ts
│   │   ├── mechanic.ts
│   │   └── config.ts
│   └── App.tsx
├── src-tauri/
│   ├── src/
│   │   ├── commands/
│   │   │   ├── boss.rs
│   │   │   ├── config.rs
│   │   │   └── file.rs
│   │   ├── models/
│   │   │   ├── boss.rs
│   │   │   └── config.rs
│   │   ├── utils/
│   │   │   ├── file_io.rs
│   │   │   └── validation.rs
│   │   └── main.rs
│   └── Cargo.toml
└── package.json
```

## Security Considerations

1. **File Access**: Limited to specific directories
2. **Input Validation**: Both client and server-side
3. **Path Traversal**: Prevention in file operations
4. **Content Security Policy**: Strict CSP headers
5. **Update Security**: Signed updates only

## Performance Optimizations

1. **Lazy Loading**: Route-based code splitting
2. **Virtualization**: For large lists (react-window)
3. **Memoization**: Heavy computations cached
4. **Debouncing**: Form inputs and searches
5. **Optimistic Updates**: UI updates before server response

## Testing Strategy

### Frontend Testing
- **Unit Tests**: Components with React Testing Library
- **Integration Tests**: User flows with Cypress
- **Visual Regression**: Storybook + Chromatic

### Backend Testing
- **Unit Tests**: Rust functions with cargo test
- **Integration Tests**: File operations
- **E2E Tests**: Full app flows with Tauri testing

## Deployment

1. **Build Process**:
   - Frontend: Vite production build
   - Backend: Rust release compilation
   - Bundle: Tauri bundler

2. **Distribution**:
   - Windows: MSI installer
   - Linux: AppImage, .deb, .rpm
   - macOS: DMG (if needed)

3. **Updates**:
   - Built-in updater with Tauri
   - Delta updates for efficiency
   - Rollback capability

## Future Enhancements

1. **Cloud Sync**: Optional configuration backup
2. **Community Sharing**: Boss template marketplace
3. **AI Assistant**: Help with mechanic creation
4. **Mod Integration**: Direct mod control
5. **Analytics**: Usage patterns (opt-in)
6. **Localization**: Multi-language support