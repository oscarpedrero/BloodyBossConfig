# BloodyBoss Configuration Tool - Functional Specification

## 1. Executive Summary

The BloodyBoss Configuration Tool is a desktop application designed to provide an intuitive interface for managing and configuring the BloodyBoss mod for V Rising. It replaces manual JSON editing with a visual, validated, and user-friendly experience.

## 2. User Personas

### Power User (Mod Developer)
- **Needs**: Full control, bulk operations, advanced features
- **Skills**: Technical, understands game mechanics deeply
- **Goals**: Efficient configuration, testing capabilities

### Server Admin
- **Needs**: Easy setup, validation, import/export
- **Skills**: Basic technical knowledge
- **Goals**: Quick configuration, stable setups

### Casual User
- **Needs**: Simple interface, presets, guidance
- **Skills**: Limited technical knowledge
- **Goals**: Use pre-made configurations, minor tweaks

## 3. Core Features

### 3.1 Dashboard
**Purpose**: Central hub for quick access and overview

**Functions**:
- Quick stats (total bosses, active mechanics, etc.)
- Recent changes log
- Quick actions (add boss, import config)
- System status (file paths, validation status)
- News/updates feed

**UI Elements**:
- Card-based layout
- Action buttons
- Status indicators
- Charts/graphs for statistics

### 3.2 Boss Management

#### 3.2.1 Boss List
**Purpose**: View and manage all configured bosses

**Functions**:
- Searchable/filterable list
- Sorting (name, level, location)
- Bulk operations (enable/disable, delete)
- Quick preview on hover
- Duplicate boss functionality

**UI Elements**:
- Data table with actions
- Search bar with filters
- Bulk selection checkboxes
- Context menus

#### 3.2.2 Boss Editor
**Purpose**: Create and edit individual boss configurations

**Sections**:

**Basic Information**
- Name (with validation)
- PrefabGUID (with dropdown of known bosses)
- Level (1-100)
- Health/damage multipliers
- Lifetime settings

**Location & Spawning**
- Interactive map for location selection
- Coordinate input with validation
- Spawn type (OneTime, Continuous, Event)
- Respawn timer configuration
- Territory settings

**Combat Settings**
- Immunities (sun, holy areas, etc.)
- Aggro configuration
- Movement speed modifiers
- Special abilities toggle

**Mechanics Configuration**
- Add/remove mechanics
- Drag-to-reorder
- Enable/disable toggle
- Configure triggers
- Set parameters per mechanic type

**Phases System**
- Define HP thresholds
- Assign mechanics to phases
- Phase transition effects
- Visual phase indicators

**Rewards**
- Item rewards with quantities
- Experience settings
- Currency rewards
- Random reward pools

### 3.3 Mechanics Builder

**Purpose**: Visual construction of boss mechanics

**Features**:

**Mechanic Library**
- All available mechanic types
- Descriptions and examples
- Drag-and-drop to boss
- Search/filter capabilities

**Trigger Builder**
- Visual trigger configuration
- HP threshold slider
- Time-based triggers
- Player count conditions
- Combinable conditions

**Parameter Editor**
- Type-specific parameter forms
- Real-time validation
- Default value indicators
- Help tooltips per parameter

**Preview System**
- Visual representation of mechanic
- Timeline view for time-based
- Affected area visualization

### 3.4 Configuration Editor

**Purpose**: Edit mod-wide settings from BloodyBoss.cfg

**Categories**:

**General Settings**
- Mod enable/disable
- Global multipliers
- Default values
- System preferences

**Boss Defaults**
- Default health/damage
- Default rewards
- Spawn settings
- Combat preferences

**Reward Settings**
- Drop rates
- Experience multipliers
- Currency settings
- Loot tables

**Combat Settings**
- Damage calculations
- Aggro settings
- Immunity defaults
- Buff/debuff durations

**Advanced Settings**
- Debug options
- Performance tweaks
- Experimental features

### 3.5 Import/Export System

**Purpose**: Data portability and sharing

**Import Features**:
- Drag-and-drop JSON files
- Validation before import
- Conflict resolution options
- Partial import capability
- Rollback on error

**Export Features**:
- Full database export
- Selected bosses export
- Configuration backup
- Shareable formats
- Compression options

**Template System**:
- Pre-made boss templates
- Save custom templates
- Template categories
- Import from community

### 3.6 Location Editor

**Purpose**: Visual location management

**Features**:
- Interactive V Rising map
- Click to set coordinates
- Named location saving
- Location groups/zones
- Distance measurements
- Territory boundaries

### 3.7 Schedule Simulator

**Purpose**: Test and visualize spawn schedules

**Features**:
- 24-hour timeline
- Drag to create schedules
- Multiple boss overlays
- Conflict detection
- Preview over days/weeks

### 3.8 Logs Viewer

**Purpose**: Monitor mod activity

**Features**:
- Real-time log streaming
- Filter by severity
- Search functionality
- Export logs
- Clear old logs

## 4. User Workflows

### Creating a New Boss
1. Click "Add Boss" from dashboard
2. Select base template or start fresh
3. Fill basic information
4. Choose location on map
5. Add mechanics via drag-drop
6. Configure rewards
7. Validate and save

### Importing Configuration
1. Navigate to Import/Export
2. Drag JSON file to drop zone
3. Review validation results
4. Resolve any conflicts
5. Confirm import
6. Verify in boss list

### Building Complex Mechanic
1. Open boss in editor
2. Click "Add Mechanic"
3. Search for mechanic type
4. Configure trigger conditions
5. Set mechanic parameters
6. Preview behavior
7. Test in simulator

## 5. UI/UX Guidelines

### Design Principles
- **Clarity**: Clear labels and intuitive layout
- **Feedback**: Immediate validation and status
- **Efficiency**: Keyboard shortcuts and bulk operations
- **Flexibility**: Customizable workspace
- **Accessibility**: High contrast, screen reader support

### Visual Design
- **Theme**: Dark/Light mode with system detection
- **Colors**: Semantic colors for states (success/error/warning)
- **Typography**: Clear hierarchy, readable fonts
- **Icons**: Consistent icon set (Lucide)
- **Spacing**: Consistent padding and margins

### Interaction Patterns
- **Forms**: Inline validation, clear error messages
- **Tables**: Sortable, filterable, paginated
- **Modals**: For destructive actions and complex inputs
- **Tooltips**: Contextual help on hover
- **Notifications**: Toast messages for actions

## 6. Technical Requirements

### Performance
- Load 1000+ bosses without lag
- Instant search/filter
- Smooth animations
- Fast file operations

### Compatibility
- Windows 10/11
- Linux (Ubuntu 20.04+, Manjaro, etc.)
- 4GB RAM minimum
- 1920x1080 resolution minimum

### Data Integrity
- Automatic backups
- Validation on all inputs
- Safe file operations
- Recovery from crashes

## 7. Error Handling

### Validation Errors
- Inline field validation
- Clear error messages
- Suggestions for fixes
- Prevent invalid saves

### System Errors
- Graceful degradation
- User-friendly messages
- Automatic error reporting (opt-in)
- Recovery suggestions

### File Errors
- Permission checks
- Path validation
- Backup before operations
- Rollback capability

## 8. Future Enhancements

### Phase 2
- Multiplayer testing mode
- Live server integration
- Community hub
- Cloud backup

### Phase 3
- AI-powered balancing
- Mechanic combinations analyzer
- Performance profiler
- Mobile companion app

## 9. Success Metrics

- **Adoption**: 80% of BloodyBoss users
- **Efficiency**: 90% faster than manual editing
- **Errors**: 95% reduction in configuration errors
- **Satisfaction**: 4.5+ star rating

## 10. Appendices

### A. Mechanic Types Reference
- Stun, AoE, Slow, Absorb, Weaken, Fear
- Summon, Trap, Teleport, Heal, Shield
- Enrage, Phase transitions

### B. Validation Rules
- Name: 3-50 characters, alphanumeric
- Level: 1-100 integer
- Coordinates: Valid game world bounds
- GUID: Valid integer format

### C. Keyboard Shortcuts
- Ctrl+S: Save
- Ctrl+Z: Undo
- Ctrl+N: New boss
- Ctrl+D: Duplicate
- Delete: Remove selected