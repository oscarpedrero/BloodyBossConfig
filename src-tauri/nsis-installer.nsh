; NSIS Installer customization for BloodyBoss Config

; Set installation directory based on architecture
!macro CUSTOM_INSTALL_SETUP
  ${If} ${RunningX64}
    StrCpy $INSTDIR "$PROGRAMFILES64\BloodyBoss Config"
  ${Else}
    StrCpy $INSTDIR "$PROGRAMFILES\BloodyBoss Config"
  ${EndIf}
!macroend

; Add Start Menu items
!macro CUSTOM_POST_INSTALL
  CreateDirectory "$SMPROGRAMS\BloodyBoss Config"
  CreateShortcut "$SMPROGRAMS\BloodyBoss Config\BloodyBoss Config.lnk" "$INSTDIR\BloodyBoss Config.exe"
  CreateShortcut "$SMPROGRAMS\BloodyBoss Config\Uninstall.lnk" "$INSTDIR\Uninstall.exe"
!macroend

; Remove Start Menu items on uninstall
!macro CUSTOM_PRE_UNINSTALL
  Delete "$SMPROGRAMS\BloodyBoss Config\BloodyBoss Config.lnk"
  Delete "$SMPROGRAMS\BloodyBoss Config\Uninstall.lnk"
  RMDir "$SMPROGRAMS\BloodyBoss Config"
!macroend

; Optional: Check for .NET runtime
!macro CUSTOM_PRE_INSTALL
  ; Check if .NET 6 runtime is installed
  ReadRegStr $0 HKLM "SOFTWARE\dotnet\Setup\InstalledVersions\x64\sharedfx\Microsoft.NETCore.App" "6.0"
  ${If} $0 == ""
    MessageBox MB_YESNO|MB_ICONEXCLAMATION "BloodyBoss Config requires .NET 6 Runtime. Would you like to download it now?" IDYES download IDNO skip
    download:
      ExecShell "open" "https://dotnet.microsoft.com/download/dotnet/6.0"
    skip:
  ${EndIf}
!macroend