# BloodyBoss Config Tool - UI Mockup & Design

## Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  [≡] BloodyBoss Config  │  File  Edit  View  Tools  Help    [_][□][X]│
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────┐ ┌──────────────────────────────────────────────┐│
│ │ Dashboard   │ │                                               ││
│ │ ▶ Bosses    │ │           Main Content Area                   ││
│ │   Config    │ │                                               ││
│ │   Locations │ │                                               ││
│ │   Import    │ │                                               ││
│ │ ─────────── │ │                                               ││
│ │   Logs      │ │                                               ││
│ │   Settings  │ │                                               ││
│ └─────────────┘ └──────────────────────────────────────────────┘│
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ Status Bar: Ready │ Auto-save: ON │ Bosses: 24 │ Valid: ✓   ││
│ └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

## Page Designs

### 1. Dashboard Page

```
┌──────────────────────────────────────────────────────────────┐
│                         Dashboard                             │
├──────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │   Total Bosses  │ │ Active Mechs    │ │  Last Modified  │ │
│ │                 │ │                 │ │                 │ │
│ │      [ 24 ]     │ │     [ 156 ]     │ │  [ 2 hrs ago ]  │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│                                                               │
│ Quick Actions:                                                │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐    │
│ │  + Create Boss │ │ ↑ Import JSON  │ │ ⚙ Mod Settings │    │
│ └────────────────┘ └────────────────┘ └────────────────┘    │
│                                                               │
│ Recent Bosses:                                    [View All] │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ • Solarus         Lv.95  ✓ Active    Modified: 1hr ago  │ │
│ │ • Dracula Clone   Lv.90  ✓ Active    Modified: 2hr ago  │ │
│ │ • Ice Witch       Lv.75  ⚠ Warning   Modified: 3hr ago  │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### 2. Boss List Page

```
┌──────────────────────────────────────────────────────────────┐
│ Bosses                                    [+ New] [↑ Import] │
├──────────────────────────────────────────────────────────────┤
│ [🔍 Search bosses...]  [▼ Level] [▼ Type] [▼ Status]       │
├──────────────────────────────────────────────────────────────┤
│ □ Name              Level  Type      Mechanics  Status  ⚙   │
│ ─────────────────────────────────────────────────────────── │
│ □ Solarus           95     World     12         ✓       ⋮   │
│ □ Dracula Clone     90     Event     8          ✓       ⋮   │
│ □ Ice Witch         75     World     6          ⚠       ⋮   │
│ □ Blood Knight      70     Hourly    5          ✓       ⋮   │
│ □ Shadow Beast      65     World     4          ✗       ⋮   │
│ ─────────────────────────────────────────────────────────── │
│ [← Previous] Page 1 of 3 [Next →]     Selected: 0 [Delete] │
└──────────────────────────────────────────────────────────────┘
```

### 3. Boss Editor Page

```
┌──────────────────────────────────────────────────────────────┐
│ Edit Boss: Solarus                        [Save] [Cancel]    │
├──────────────────────────────────────────────────────────────┤
│ ┌─[Basic]──[Combat]──[Mechanics]──[Phases]──[Rewards]─────┐ │
│ │                                                           │ │
│ │ Name:         [Solarus_______________] *                 │ │
│ │ Prefab GUID:  [-488405051___________] [Select ▼]       │ │
│ │ Level:        [95 ▼]  Multiplier: [2.5_____]           │ │
│ │                                                           │ │
│ │ Location:     X:[125.5] Y:[0.0] Z:[-789.3] [Map 📍]    │ │
│ │ Spawn Type:   [⦿ OneTime ○ Continuous ○ Hourly]        │ │
│ │                                                           │ │
│ │ □ Immune to Sun  □ Immune to Holy  □ Can Flee          │ │
│ │                                                           │ │
│ └───────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### 4. Mechanics Builder Tab

```
┌──────────────────────────────────────────────────────────────┐
│ Mechanics                                    [+ Add Mechanic]│
├──────────────────────────────────────────────────────────────┤
│ ┌─────────────────────┐ ┌──────────────────────────────────┐│
│ │ Available Mechanics │ │ Boss Mechanics (Drag to reorder)││
│ ├─────────────────────┤ ├──────────────────────────────────┤│
│ │ [🔍 Search...]      │ │ ┌────────────────────────────┐  ││
│ │                     │ │ │ ≡ Stun Mechanic         [✓] │  ││
│ │ ⚡ Stun             │ │ │ Trigger: HP < 75%          │  ││
│ │ 🔥 AoE Fire        │ │ │ Duration: 3s               │  ││
│ │ ❄️ Frost Nova      │ │ └────────────────────────────┘  ││
│ │ 💀 Summon Adds     │ │                                  ││
│ │ 🛡️ Shield Phase    │ │ ┌────────────────────────────┐  ││
│ │ 🩸 Life Drain     │ │ │ ≡ AoE Fire              [✓] │  ││
│ │ 😨 Fear            │ │ │ Trigger: Every 30s         │  ││
│ │ 🌀 Teleport        │ │ │ Damage: 150, Radius: 10m   │  ││
│ │                     │ │ └────────────────────────────┘  ││
│ └─────────────────────┘ └──────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

### 5. Mechanic Configuration Modal

```
┌─────────────────────────────────────────────────────────┐
│ Configure: Stun Mechanic                         [X]    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│ Trigger Configuration:                                   │
│ ┌──────────────────────────────────────────────────┐   │
│ │ Type: [HP Threshold ▼]                           │   │
│ │ Value: [====|========] 75%                       │   │
│ │ □ One-time trigger                               │   │
│ └──────────────────────────────────────────────────┘   │
│                                                          │
│ Mechanic Parameters:                                     │
│ ┌──────────────────────────────────────────────────┐   │
│ │ Target:      [Nearest Player ▼]                  │   │
│ │ Duration:    [3.0_____] seconds                  │   │
│ │ Mark Time:   [2.0_____] seconds                  │   │
│ │ Max Targets: [2_______]                          │   │
│ │                                                   │   │
│ │ Announcement: [The void gazes upon you!_______] │   │
│ │ □ Flash screen before stun                       │   │
│ └──────────────────────────────────────────────────┘   │
│                                                          │
│                              [Cancel] [Apply Changes]    │
└─────────────────────────────────────────────────────────┘
```

### 6. Import/Export Page

```
┌──────────────────────────────────────────────────────────────┐
│ Import / Export                                              │
├──────────────────────────────────────────────────────────────┤
│ ┌────────────────────────┐ ┌────────────────────────────┐  │
│ │      Import Data       │ │      Export Data          │  │
│ ├────────────────────────┤ ├────────────────────────────┤  │
│ │                        │ │                            │  │
│ │  ┌──────────────────┐  │ │ Export Options:            │  │
│ │  │                  │  │ │ ⦿ All Bosses              │  │
│ │  │  Drop JSON file  │  │ │ ○ Selected Bosses         │  │
│ │  │      here        │  │ │ ○ Configuration Only      │  │
│ │  │        or        │  │ │                            │  │
│ │  │   [Browse...]    │  │ │ Format:                    │  │
│ │  │                  │  │ │ ⦿ JSON (Bosses.json)      │  │
│ │  └──────────────────┘  │ │ ○ Compressed (.zip)       │  │
│ │                        │ │                            │  │
│ │ □ Backup before import │ │ [📥 Export to File]        │  │
│ │ □ Validate on import   │ │                            │  │
│ └────────────────────────┘ └────────────────────────────┘  │
│                                                              │
│ Import History:                                   [Clear]   │
│ ┌──────────────────────────────────────────────────────┐   │
│ │ 2024-01-15 - Imported 12 bosses - Success           │   │
│ │ 2024-01-14 - Imported 5 bosses - 2 warnings         │   │
│ └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

### 7. Configuration Settings Page

```
┌──────────────────────────────────────────────────────────────┐
│ Mod Configuration                          [Reset] [Save]    │
├──────────────────────────────────────────────────────────────┤
│ ┌─[General]──[Boss]──[Rewards]──[Combat]──[Advanced]──────┐ │
│ │                                                           │ │
│ │ General Settings:                                         │ │
│ │ ┌───────────────────────────────────────────────────┐   │ │
│ │ │ Enable Mod:           [✓]                         │   │ │
│ │ │ Command Prefix:       [.bb_____________]         │   │ │
│ │ │ Announce Boss Spawns: [✓]                         │   │ │
│ │ │ Log Level:            [Info ▼]                    │   │ │
│ │ └───────────────────────────────────────────────────┘   │ │
│ │                                                           │ │
│ │ Boss Defaults:                                            │ │
│ │ ┌───────────────────────────────────────────────────┐   │ │
│ │ │ Default Health Multiplier: [1.5_____]             │   │ │
│ │ │ Default Damage Multiplier: [1.2_____]             │   │ │
│ │ │ Default Level:             [50______]             │   │ │
│ │ │ Respawn Time (minutes):    [60______]             │   │ │
│ │ └───────────────────────────────────────────────────┘   │ │
│ └───────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

## Component Library

### Buttons
```
Primary:   [Save Changes]  - Blue background
Secondary: [Cancel]        - Gray background  
Danger:    [Delete]        - Red background
Success:   [✓ Apply]       - Green background
```

### Form Elements
```
Text Input:    [________________]
Number Input:  [123 ▲▼]
Dropdown:      [Select... ▼]
Checkbox:      □ Option / ✓ Option
Radio:         ○ Option / ⦿ Option
Slider:        [===|=========]
```

### Status Indicators
```
Success: ✓ (green)
Warning: ⚠ (yellow)
Error:   ✗ (red)
Info:    ℹ (blue)
Loading: ⟳ (animated)
```

### Icons (Lucide React)
```
Add:        +
Delete:     🗑
Edit:       ✏
Settings:   ⚙
Search:     🔍
Filter:     ▼
Sort:       ↕
Import:     ↑
Export:     ↓
Map:        📍
Menu:       ≡
Close:      X
```

## Color Scheme

### Light Theme
```
Background:    #FFFFFF
Surface:       #F5F5F5
Primary:       #3B82F6
Secondary:     #6B7280
Success:       #10B981
Warning:       #F59E0B
Error:         #EF4444
Text:          #1F2937
Text Muted:    #6B7280
```

### Dark Theme
```
Background:    #0F172A
Surface:       #1E293B
Primary:       #3B82F6
Secondary:     #64748B
Success:       #10B981
Warning:       #F59E0B
Error:         #EF4444
Text:          #F1F5F9
Text Muted:    #94A3B8
```

## Responsive Breakpoints

- Desktop: 1920px+ (full layout)
- Laptop: 1366px+ (full layout)
- Tablet: 768px+ (collapsible sidebar)
- Mobile: Not supported (desktop app)

## Animation Guidelines

- Transitions: 200ms ease-in-out
- Hover states: Subtle color change
- Loading: Skeleton screens
- Modals: Fade in with scale
- Notifications: Slide in from top-right
- Drag & Drop: Ghost element follows cursor