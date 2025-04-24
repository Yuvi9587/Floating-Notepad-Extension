## 🗒 Sticky Note Extension

A draggable, resizable, and themeable sticky note extension for quick note-taking right in your browser! Comes with copy, save, and visibility toggle features.

---

### 📦 Features

- ✍️ Editable and scrollable notes
- 🎨 Random color themes for a fresh feel
- 📤 Save notes as `.txt` files
- 📋 Copy note content to clipboard
- 👁️ Toggle note visibility
- 📐 Resizable and draggable UI
- ➕ Create new notes instantly
- 📦 Persistent filename storage (Chrome API)

---

### 🛠 Installation (Developer Mode)

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/yourusername/sticky-note-extension.git
   ```

2. **Go to Chrome Extensions page**
   - Visit `chrome://extensions/`
   - Enable **Developer mode** (top-right switch)

3. **Load the unpacked extension**
   - Click **Load unpacked**
   - Select the folder containing `manifest.json`

4. **Use it**
   - The sticky note icon or UI will appear on the page.
   - Drag the eye icon to reposition and toggle visibility.

---

### 🧩 Folder Structure

```
sticky-note-extension/
├── manifest.json
├── script.js
├── styles.css
├── icons/
├── background.js
└── README
```

---

### 📋 Permissions

Make sure to explain these in your `manifest.json`:
```json
"permissions": [
  "storage",
  "downloads"
]
```

- **storage**: For storing the default filename
- **downloads**: For downloading note content as a text file

---

### 💾 How Saving Works

When the save button is clicked:
- The note is saved as a `.txt` file.
- The first download prompts the user to choose a location (unless a name is already stored).
- The chosen name is remembered for future saves (using Chrome's `storage.local` API).

---

### 🧪 Testing & Development Tips

- Make edits in `script.js` and reload the extension via `chrome://extensions/`.
- Test resizing, dragging, saving, and visibility toggle.
- Confirm clipboard access via the copy button.

---

### 📎 Known Issues

- Multiple notes are not currently supported.
- Note content does not persist after refresh (unless manually saved).
- Firefox and other browsers may require adaptation.

---

### 🙌 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request with a clear description

---

### 📃 License

MIT License — feel free to modify and share!

---
