# BloodyBoss Configuration Tool

A powerful desktop application for configuring the BloodyBoss V Rising mod. Create and manage world bosses with an intuitive visual interface.

## 🎮 Features

### Visual Boss Editor
- Create and edit boss encounters with a user-friendly interface
- Select from 459+ VBlood prefabs with integrated ability recommendations
- Configure boss stats, levels, and spawn locations
- Set up custom reward pools with drop chances

### Advanced Item Selector
- Browse through 1082+ in-game items
- Filter by categories and tags
- Visual item preview with color coding
- Quick search functionality

### Mechanics Builder
- Drag-and-drop mechanics configuration
- Support for all BloodyBoss mechanics (Stun, AoE, Absorb, etc.)
- Phase-based trigger system
- Real-time validation

### Import/Export System
- Full compatibility with existing BloodyBoss configurations
- Automatic format conversion for legacy files
- Backup system with timestamps
- Share configurations with other server admins

## 📦 Installation

1. Download the latest release for your platform from the [Releases page](https://github.com/oscarpedrero/BloodyBossConfig/releases)
2. Extract the archive to your preferred location
3. Run the executable:
   - **Windows**: `bloodyboss-config.exe`
   - **Linux**: `./bloodyboss-config`
   - **macOS**: Open `BloodyBoss Config.app`

### System Requirements

- **Windows**: Windows 10/11 (WebView2 Runtime included)
- **Linux**: Ubuntu 20.04+ or equivalent
- **macOS**: macOS 10.15+

## 🚀 Quick Start

1. **Import Your Configuration**: 
   - Click "Import" and select your existing `Bosses.json` file
   - The tool will automatically convert old formats

2. **Create a New Boss**:
   - Click "New Boss" button
   - Fill in the basic information
   - Add mechanics and configure triggers
   - Set up reward items

3. **Export Configuration**:
   - Click "Export" to save your changes
   - Copy the exported `Bosses.json` to your server's BloodyBoss config folder

## 🛠️ Configuration Path

Place your exported `Bosses.json` file in:
```
VRising_Server/BepInEx/config/BloodyBoss/Bosses.json
```

## 🎯 Key Features Explained

### Boss Configuration
- **Name**: Display name for the boss
- **Prefab**: Select from VBlood database
- **Level**: Boss level (1-100)
- **Multiplier**: Health/damage multiplier
- **Location**: World coordinates for spawn
- **Lifetime**: How long the boss stays spawned

### Mechanics System
- **Trigger Types**: Timer, HP threshold, Phase-based
- **Mechanic Types**: Stun, AoE, Slow, Absorb, Weaken, Fear, Summon, Trap
- **Parameters**: Fully customizable for each mechanic

### Reward System
- **Item Selection**: Visual item browser
- **Stack Size**: Quantity to drop
- **Drop Chance**: Percentage chance (0-100)
- **Color Coding**: Visual distinction for reward tiers

## 💡 Tips

- Use the search function to quickly find items or VBloods
- Hover over fields for helpful tooltips
- The tool validates your configuration in real-time
- Keep backups of your configurations

## 🐛 Troubleshooting

### "Failed to import bosses"
- Check that your JSON file is valid
- The tool will attempt to fix common formatting issues
- Look for error messages that indicate specific problems

### Application won't start
- **Windows**: Install [WebView2 Runtime](https://go.microsoft.com/fwlink/p/?LinkId=2124703) if needed
- **Linux**: Install required dependencies (libwebkit2gtk, libappindicator3)
- **macOS**: Allow the app in System Preferences > Security & Privacy

## 🔗 Links

- [GitHub Repository](https://github.com/oscarpedrero/BloodyBossConfig)
- [BloodyBoss Mod](https://thunderstore.io/c/v-rising/p/Trodi/BloodyBoss/)
- [Report Issues](https://github.com/oscarpedrero/BloodyBossConfig/issues)
- [Support on Ko-fi](https://ko-fi.com/K3K8ENRQY)

## 📄 License

MIT License - See [LICENSE](https://github.com/oscarpedrero/BloodyBossConfig/blob/main/LICENSE) for details

---

**Made with ❤️ for the V Rising modding community**