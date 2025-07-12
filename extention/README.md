# 🛡️ Realtime Browser API Monitor Extension

A powerful Chrome Extension (Manifest V3) that monitors sensitive browser API usage in real time. It detects actions like clipboard access, file downloads, geolocation, permission changes, microphone/camera access, and more. All actions are logged locally and (optionally) remotely, with visual emoji indicators displayed directly on the webpage.

---

## 🚀 Features

### ✅ Realtime Monitoring
- **📋 Clipboard Access:** Detects any read/write via the Clipboard API.
- **✂️ Cut/Copy/Paste:** Detects user clipboard interactions via keyboard or mouse.
- **📍 Geolocation Access:** Detects when a site requests your location.
- **🔐 Permissions:** Detects `navigator.permissions.query()` calls and logs permission state changes.
- **🎤 Microphone & 📷 Camera Access:** Detects when access to mic/camera is requested via `getUserMedia`.
- **🎮 Device Orientation:** Detects registration of device orientation listeners.
- **📁 File Downloads:** Logs every file downloaded by the browser.

### 🌐 Emoji Overlay
Shows a small floating emoji on the current webpage for each detected action:
- 📋 Clipboard
- ✂️ Cut/Copy
- 📥 Paste
- 📁 Download
- 🔐 Permission
- 🎤 Microphone
- 📷 Camera
- 📍 Geolocation
- 🎮 Orientation

### 🗂️ Local & Remote Logging
- Stores logs in `chrome.storage.local` (persists across sessions).
- Optionally sends logs to a backend API (URL specified via `config.js`).

### 🍪 Cookie Manager
Popup tab to:
- View all cookies for the current domain.
- Edit or delete individual cookies.
- Clear all cookies.
- Download cookies as `.json`.

### ⬇️ Log Export
- Export logs and cookies as `.json` files.

---

## 🧩 Extension Structure

```
Concentria/
├── manifest.json         # Chrome extension config (MV3)
├── background.js         # Service worker (message listener + download hook)
├── content.js            # Injects monitoring script and emoji overlay
├── config.js             # Backend API URL (editable)
├── utils/
│   ├── apiHooks.js       # Hooks for browser APIs (clipboard, geolocation, etc.)
│   └── cookieUtils.js    # Cookie operations (edit/delete)
└── popup/
    ├── popup.html        # Popup interface
    ├── popup.js          # Log + cookie UI logic
    └── popup.css         # Styling
```

---

## ⚙️ Installation & Setup

### 1. Clone / Download

```bash
git clone https://github.com/yourname/concentria.git
cd concentria
```

### 2. Load into Chrome

- Go to `chrome://extensions/`
- Enable **Developer Mode**
- Click **Load Unpacked**
- Select the `Concentria/` folder

### 3. Configure API Endpoint (Optional)

Edit `config.js`:

```js
export const config = {
  API_URL: 'https://your-backend.com/api/logs' // Update to your endpoint
};
```
Or, if using an environment injection tool during build:

```js
export const config = {
  API_URL: process.env.API_URL || 'https://fallback.com/api/logs'
};
```

---

## 🔍 How It Works

### 📦 Injected Hook
- `content.js` injects `apiHooks.js` into every page.
- `apiHooks.js` overrides sensitive APIs and dispatches custom events (e.g., `'apiMonitor'`).

### 🛰️ Content Script
- Listens for these events.
- Displays a floating emoji overlay.
- Sends a message to `background.js` with log info.

### 🗃️ Background Service Worker
- Receives logs via `chrome.runtime.onMessage`.
- Saves them to `chrome.storage.local`.
- Optionally sends logs to your API endpoint via `fetch(...)`.

### 🍪 Cookie Tab in Popup
- Uses Chrome’s cookies API to read, edit, and delete cookies from the active domain.

---

## 📥 Sample Log Format

```json
{
  "type": "clipboard",
  "timestamp": "2025-06-24T12:00:00Z",
  "url": "https://example.com"
}
```
For camera/mic/download, extra fields may be added (e.g., filename, permissionName).

---

## 📋 Permissions Required

Declared in `manifest.json`:

```json
{
  "permissions": [
    "storage",
    "cookies",
    "tabs",
    "downloads"
  ],
  "host_permissions": ["<all_urls>"]
}
```

These are essential for:
- Logging actions across any page
- Reading cookies
- Capturing downloads
- Saving data

---

## 🧪 Testing

Use the included `test.html` file:

```html
<!-- test.html -->
<textarea></textarea>
<button onclick="navigator.clipboard.writeText('hello')">Write to Clipboard</button>
<!-- etc... -->
```

Open the page, perform actions, and:
- See emoji overlays
- Check the logs tab in the popup
- Export or inspect `chrome.storage.local`

---

## 🛠️ Development Tips

- Always reload the extension after changing `manifest.json` or service workers.
- Use `chrome://extensions/` → Service Worker → Inspect to debug background scripts.
- Check logs with `chrome.storage.local.get('logs', console.log)` in the background console.

---

## 📦 Future Improvements

- 🔔 Optional notifications for critical actions
- ⏳ Time-based log filtering
- 🌍 Language/localization support
- 🔍 Site-wise policy rules (block/allow APIs per domain)

---

## 👨‍💻 Built With

- Manifest V3
- Vanilla JS
- Chrome Extensions API
- Modular architecture
- Emoji overlays (no external assets required)