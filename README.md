# BloodyBoss Configuration Tool

A modern, cross-platform desktop application for configuring the BloodyBoss V Rising mod. Built with Tauri, React, and TypeScript.

![License](https://img.shields.io/github/license/oscarpedrero/BloodyBossConfig)
![GitHub release](https://img.shields.io/github/v/release/oscarpedrero/BloodyBossConfig)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey)

## 🚀 Features

- **Visual Boss Configuration**: Intuitive interface for creating and editing boss encounters
- **Advanced Item Selector**: Browse and filter from 1082+ items with tags and categories
- **VBlood Integration**: Select from 459+ VBlood prefabs with ability recommendations
- **Mechanics System**: Configure boss mechanics with visual editor and real-time validation
- **Cross-Platform**: Native desktop app for Windows, Linux, and macOS
- **Import/Export**: Full compatibility with existing BloodyBoss configurations
- **Real-time Validation**: Zod-powered form validation with helpful error messages

## 📦 Installation

### Pre-built Releases

Download the latest release for your platform:

- **Windows**: `BloodyBossConfig-Windows-x64-vX.X.X.zip`
- **Linux**: `BloodyBossConfig-Linux-x64-vX.X.X.tar.gz`
- **macOS**: `BloodyBossConfig-macOS-x64-vX.X.X.tar.gz` or `BloodyBossConfig-macOS-aarch64-vX.X.X.tar.gz`

### Windows Requirements

- Windows 10/11 (WebView2 Runtime is usually pre-installed)

## 🛠️ Development Setup

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Rust** (latest stable) - [Install via rustup](https://rustup.rs/)
- **Platform-specific dependencies**:

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install -y libwebkit2gtk-4.0-dev libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf
```

#### Linux (Fedora/RHEL)
```bash
sudo dnf install webkit2gtk4.0-devel libappindicator-gtk3-devel librsvg2-devel
```

#### Linux (Arch/Manjaro)
```bash
sudo pacman -S webkit2gtk libappindicator-gtk3 librsvg
```

#### macOS
```bash
# Install Xcode Command Line Tools
xcode-select --install
```

#### Windows
- **Visual Studio Build Tools** or **Visual Studio Community**
- **WebView2** (usually pre-installed on Windows 10/11)

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/oscarpedrero/BloodyBossConfig.git
cd BloodyBossConfig

# Install dependencies
npm install
```

### Development Commands

```bash
# Start development server (hot reload)
npm run tauri dev

# Build frontend only
npm run build

# Build release version
npm run tauri build

# Type checking
npm run build  # includes tsc

# Lint and format (if configured)
npm run lint   # if available
npm run format # if available
```

### Project Structure

```
BloodyBossConfig/
├── src/                    # React frontend source
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── ItemSelector.tsx
│   │   ├── PrefabSelector.tsx
│   │   └── ...
│   ├── pages/             # Route components
│   ├── data/              # Static data (items, vbloods)
│   ├── types/             # TypeScript definitions
│   └── utils/             # Utility functions
├── src-tauri/             # Rust backend
│   ├── src/               # Rust source code
│   ├── Cargo.toml         # Rust dependencies
│   └── tauri.conf.json    # Tauri configuration
├── scripts/               # Utility scripts
│   ├── convert_items_database.py
│   └── convert_vblood_database_v2.py
└── docs/                  # Documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Optional: Custom paths for V Rising server
VRISING_SERVER_PATH=/path/to/vrising/server
BLOODY_BOSS_CONFIG_PATH=/path/to/config
```

### Updating Game Data

The application includes databases for items and VBlood prefabs. To update them:

```bash
# Update items database (requires EnglishItems.json from BloodyDataCollector)
python scripts/convert_items_database.py

# Update VBlood database (requires VBloodDatabase.cs from BloodyBoss)
python scripts/convert_vblood_database_v2.py
```

## 🎮 Usage

1. **Start the application**: Run `npm run tauri dev` or use a pre-built release
2. **Import existing configuration**: Use File → Import to load your current `Bosses.json`
3. **Create new bosses**: Click "New Boss" and configure using the visual editor
4. **Configure mechanics**: Add and customize boss mechanics with the built-in editor
5. **Export configuration**: Save your changes to a new `Bosses.json` file

### Supported File Formats

- **Import**: BloodyBoss `Bosses.json` files (auto-detects and converts old formats)
- **Export**: Compatible `Bosses.json` format for BloodyBoss mod

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- **Code Style**: Follow TypeScript and Rust best practices
- **Commits**: Use [Conventional Commits](https://conventionalcommits.org/)
- **Testing**: Add tests for new features (when test framework is added)

## 🐛 Troubleshooting

### Common Issues

#### "Failed to build frontend" error
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Linux: "webkit2gtk not found"
```bash
# Install missing dependencies
sudo apt-get install libwebkit2gtk-4.1-dev
```

#### Windows: "MSVC not found"
- Install Visual Studio Build Tools or Visual Studio Community
- Ensure C++ build tools are selected during installation

#### macOS: "Command Line Tools not found"
```bash
xcode-select --install
```

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/oscarpedrero/BloodyBossConfig/issues)
- **Discussions**: [GitHub Discussions](https://github.com/oscarpedrero/BloodyBossConfig/discussions)
- **BloodyBoss Mod**: [Main Repository](https://github.com/oscarpedrero/BloodyBoss)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **BloodyBoss Mod**: The amazing V Rising mod this tool configures
- **Tauri**: For the excellent desktop framework
- **shadcn/ui**: For the beautiful UI components
- **V Rising Community**: For support and feedback

## 💖 Support

If you find this tool helpful, consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs or requesting features
- 💡 Contributing code or documentation
- ☕ [Supporting on Ko-fi](https://ko-fi.com/K3K8ENRQY)

---

**Made with ❤️ for the V Rising modding community**