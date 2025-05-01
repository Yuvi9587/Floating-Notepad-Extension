---

# Sticky Note Extension

A lightweight, draggable, and resizable sticky note tool for Chrome that lets you take quick notes right inside your browser. Includes features like saving, copying, and toggling visibility.

---

## Features

- Editable, scrollable note interface  
- Randomized color themes  
- Save notes as `.txt` files  
- Copy note contents to clipboard  
- Toggle visibility with a floating icon  
- Fully resizable and draggable  
- Create additional notes instantly  
- Stores your preferred filename using Chrome's storage API  

---

## Installation (Developer Mode)

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/sticky-note-extension.git
   ```

2. **Open the Chrome Extensions page**
   - Go to `chrome://extensions/`
   - Enable **Developer mode** using the toggle in the top-right corner

3. **Load the unpacked extension**
   - Click on **Load unpacked**
   - Select the folder containing the `manifest.json` file

4. **Start using it**
   - The sticky note interface will appear on the page
   - Use the draggable eye icon to toggle visibility or reposition

---

## Folder Structure

```
sticky-note-extension/
├── manifest.json
├── script.js
├── styles.css
├── icons/
├── background.js
└── README.md
```

---

## Required Permissions

These permissions must be declared in `manifest.json`:

```json
"permissions": [
  "storage",
  "downloads"
]
```

- **storage**: Stores the user's default filename  
- **downloads**: Enables downloading note content as text files  

---

## How Saving Works

- Clicking the save button will download the note as a `.txt` file  
- On first save, the user is prompted to choose a filename  
- The chosen name is stored locally for future use using `chrome.storage.local`

---

## Development & Testing

- Modify `script.js` and reload the extension from `chrome://extensions/`
- Test dragging, resizing, saving, copying, and toggling
- Ensure clipboard access functions properly

---

## Known Issues

- Multiple notes are not yet supported  
- Notes do not persist after page refresh  
- Compatibility with Firefox or other browsers is untested  

---

## Contributing

1. Fork the repository  
2. Create a new feature branch  
3. Commit your changes  
4. Open a pull request with a clear description  

---

## License

This project is licensed under the MIT License. You’re free to use, modify, and distribute it.

---
