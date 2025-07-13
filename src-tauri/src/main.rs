#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod commands;
mod models;

use std::path::PathBuf;
use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .setup(|app| {
            // Get default config path
            let home = std::env::var("HOME").unwrap_or_default();
            let config_path = PathBuf::from(format!("{}/vrising_server/BepInEx/config", home));
            
            app.manage(commands::AppState { config_path });
            
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            commands::load_boss_config,
            commands::save_boss_config,
            commands::validate_boss,
            commands::import_bosses_file,
            commands::export_bosses_file,
            commands::get_server_path,
            commands::load_config,
            commands::save_config,
            commands::import_config_file,
            commands::export_config_file,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}