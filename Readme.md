# Sticky Note Extension

A lightweight Chrome extension for taking quick notes directly in the browser. Supports dragging, resizing, saving as `.txt`, copying content, and toggling visibility. Great for jotting things down while you browse.

---

## Features

- Draggable and resizable sticky notes  
- Editable and scrollable content  
- Random color themes for variety  
- Save notes as `.txt` files  
- Copy content to clipboard  
- Toggle note visibility  
- Chrome storage for persistent filename  
- Create new notes with one click  

---

## Installation (Developer Mode)

1. Download or clone the repository:
   ```bash
   git clone https://github.com/yourusername/sticky-note-extension.git
   ```

2. Open `chrome://extensions/` in your browser.

3. Enable **Developer mode** (toggle in the top right).

4. Click **Load unpacked** and select the folder with the `manifest.json` file.

---

## Usage

Once installed, the sticky note UI will appear on supported pages. You can:

- Move and resize the note  
- Save its content to a `.txt` file  
- Copy the note text  
- Toggle visibility using the floating icon  

---

## How Saving Works

When you click the save button:

- The note content is downloaded as a `.txt` file  
- On the first save, Chrome prompts for a location and filename  
- Your chosen filename is remembered using `chrome.storage.local`  

---

## Folder Structure

```
sticky-note-extension/
├── background.js
├── icons/
├── manifest.json
├── script.js
├── styles.css
└── README.md
```

---

## Required Permissions

In `manifest.json`:

```json
"permissions": [
  "storage",
  "downloads"
]
```

- `storage`: Saves your preferred filename  
- `downloads`: Allows exporting notes as text files  

---

## Limitations

- Notes are not saved after a page reload  
- Only one note can be active at a time  
- Firefox and other browsers are not supported out of the box  

---

## License

This project is licensed under the MIT License.

---