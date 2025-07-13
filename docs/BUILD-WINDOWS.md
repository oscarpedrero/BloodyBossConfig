# Compilar BloodyBoss Config para Windows

## Opción 1: Compilar en Windows (Recomendado)

### Requisitos
1. **Node.js** (versión LTS): https://nodejs.org/
2. **Rust**: https://rustup.rs/
3. **Microsoft Visual C++ Build Tools**: https://visualstudio.microsoft.com/visual-cpp-build-tools/

### Pasos
```bash
# 1. Clonar o copiar el proyecto
git clone <url-del-proyecto>
cd BloodyBossConfig

# 2. Instalar dependencias
npm install

# 3. Compilar
npm run tauri build

# El ejecutable estará en:
# src-tauri/target/release/bloodyboss-config.exe
```

## Opción 2: Usar GitHub Actions (Sin instalar nada)

1. Sube el código a GitHub
2. Ve a Actions → Build and Release
3. Click en "Run workflow"
4. Descarga el ejecutable de Windows desde los artifacts

## Opción 3: Compilación cruzada desde Linux

```bash
# Instalar mingw-w64 (en Manjaro/Arch)
sudo pacman -S mingw-w64-gcc

# Ejecutar el script de compilación
./build-windows-simple.sh
```

## Opción 4: Usar el ejecutable Linux con Wine

En Windows con Wine instalado:
```bash
wine bloodyboss-config
```

## Estructura del ejecutable portable

Para distribuir la aplicación, necesitas estos archivos:
```
BloodyBossConfig/
├── bloodyboss-config.exe
├── (otros archivos DLL si son necesarios)
└── resources/ (si existen)
```

## Solución de problemas

### Error: "Missing WebView2"
- Instala WebView2 Runtime: https://developer.microsoft.com/en-us/microsoft-edge/webview2/

### Error: "VCRUNTIME140.dll not found"
- Instala Visual C++ Redistributables: https://support.microsoft.com/en-us/help/2977003/

### La aplicación no inicia
- Asegúrate de tener todos los archivos en la misma carpeta
- Ejecuta como administrador si es necesario
- Verifica que el antivirus no esté bloqueando la aplicación