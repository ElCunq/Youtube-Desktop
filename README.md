# YouTube Desktop Client

A clean, minimal desktop client for YouTube — built using [Cromite](https://github.com/uazo/cromite) with **pre-installed uBlock Origin** and **SponsorBlock** extensions for an ad-free and distraction-free experience.

> ⚡ Lightweight. 🔒 Privacy-Respecting. 🎯 Focused on the content.

---

## 🎯 Features

- ✅ Chromium-based (Cromite) hardened browser core
- ✅ Ad-blocking via [uBlock Origin](https://github.com/gorhill/uBlock)
- ✅ Sponsor-skipping via [SponsorBlock](https://github.com/ajayyy/SponsorBlock)
- ✅ Minimal UI, frameless window
- ✅ No tabs, no bookmarks, no tracking
- ✅ Works portable, and also installable
- ✅ Native `.desktop` launcher (Linux)
- ✅ First-launch smart extension installer

---

## ⚙️ How It Works

On first launch, if either uBlock Origin or SponsorBlock is missing, the application will automatically open their installation pages **in order**. After both are installed, the app will always launch directly into YouTube.

ℹ️ Extensions are stored in the Chromium profile directory (`profile/Default/Extensions`) and preserved between launches.

---

## 🛠 Installation

### 📦 Arch Linux (AUR)
If using an AUR helper like `yay` or `paru`:
```bash
yay -S youtube-desktop-client
```

---

### 🐧 Debian / Ubuntu
```bash
git clone https://github.com/your-username/youtube-desktop-client
cd youtube-desktop-client
chmod +x install.sh
./install.sh
```

---

### 🎩 Fedora / RHEL
```bash
git clone https://github.com/your-username/youtube-desktop-client
cd youtube-desktop-client
chmod +x install-fedora.sh
./install-fedora.sh
```

---

### 💼 Portable Mode (Any Linux)
No system-wide installation required:
```bash
git clone https://github.com/your-username/youtube-desktop-client
cd youtube-desktop-client
chmod +x portable-run.sh
./portable-run.sh
```
> ⚠️ This mode does **not** register a desktop entry or menu shortcut.

---

## 🧠 Notes

- 🔁 **First Launch**: Ads may appear before extensions are fully activated.
- 🧩 **Extensions**: If you manually remove either extension, they must be reinstalled manually or the app will reopen their pages.
- 🚫 **No new tabs**: Right-click > "Open in new tab" is intentionally disabled from desktop mode.

---

## 📂 Project Structure

```
youtube-desktop-client/
├── cromite/                  # Hardened browser binary
├── profile/Default/          # Chromium user data + installed extensions
├── icon.png                  # App icon (used in .desktop)
├── start.sh                  # Linux launch script
├── youtube.desktop           # Desktop launcher entry
├── install.sh                # Debian/Ubuntu install script
├── install-fedora.sh         # Fedora install script
├── portable-run.sh           # Generic launch script
└── README.md
```

---

## 🙏 Credits

- [Cromite](https://github.com/uazo/cromite) - Hardened, extension-supporting browser core
- [uBlock Origin](https://github.com/gorhill/uBlock) - Open-source adblocker
- [SponsorBlock](https://github.com/ajayyy/SponsorBlock) - Skip sponsored segments on YouTube

---

## 📝 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction...
```

---

Enjoy distraction-free YouTube watching! 🎥
