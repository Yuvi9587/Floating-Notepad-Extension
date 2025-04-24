(function toggleStickyNote() {
  const existingNote = document.querySelector('.note-container');
  const existingEye = document.getElementById('eyeButton');

  if (existingNote) existingNote.remove();
  if (existingEye) {
    existingEye.remove();
    return; // toggle off
  }

  const noteHTML = `
    <div class="note-container" id="note">
      <div class="drag-area"></div>
      <div class="note-header">
        <div class="note-title">Notes</div>
        <div class="button-container">
          <button id="copyButton">&#x1F4CB;</button>
          <button id="newNoteButton">&#43;</button>
          <button id="saveButton">💾</button>
        </div>
      </div>
      <div class="note-content" contenteditable="true" id="note-content"></div>
      <div class="resize-handle" id="resize-handle"></div>
    </div>
    <button id="eyeButton">&#x1F441;</button>
  `;

  const container = document.createElement("div");
  container.innerHTML = noteHTML;
  document.body.appendChild(container);

  const themes = [
    { backgroundColor: '#fdf3c7', borderColor: '#ffd54f' },
    { backgroundColor: '#cce7ff', borderColor: '#81d4fa' },
    { backgroundColor: '#c8e6c9', borderColor: '#81c784' },
    { backgroundColor: '#ffccbc', borderColor: '#ff8a65' },
    { backgroundColor: '#e1bee7', borderColor: '#ce93d8' },
    { backgroundColor: '#f5f5dc', borderColor: '#d2b48c' }, // Beige and Tan
{ backgroundColor: '#e0f2f1', borderColor: '#4db6ac' }, // Mint and Teal
{ backgroundColor: '#f9fbe7', borderColor: '#c0ca33' }, // Pale Lime and Olive
{ backgroundColor: '#ffe0b2', borderColor: '#ffb74d' }, // Light Orange and Bright Orange
{ backgroundColor: '#d1c4e9', borderColor: '#9575cd' }, // Lavender and Purple
{ backgroundColor: '#f8bbd0', borderColor: '#ec407a' }, // Light Pink and Fuchsia
{ backgroundColor: '#fafafa', borderColor: '#bdbdbd' }, // Light Gray and Gray
{ backgroundColor: '#fff3e0', borderColor: '#ffb74d' }, // Soft Cream and Amber
{ backgroundColor: '#eceff1', borderColor: '#90a4ae' }, // Cool Gray and Slate

  ];
  const note = document.getElementById('note');
  const noteContent = document.getElementById('note-content');
  const dragArea = document.querySelector('.drag-area');
  const resizeHandle = document.getElementById('resize-handle');
  const copyButton = document.getElementById('copyButton');
  const newNoteButton = document.getElementById('newNoteButton');
  const saveButton = document.getElementById('saveButton');
  const eyeButton = document.getElementById('eyeButton');

  function applyRandomTheme() {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    note.style.backgroundColor = randomTheme.backgroundColor;
    note.style.borderLeft = `6px solid ${randomTheme.borderColor}`;
  }

  applyRandomTheme();

  // Drag functionality
  let isDragging = false, offsetX, offsetY;
  dragArea.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - note.getBoundingClientRect().left;
    offsetY = e.clientY - note.getBoundingClientRect().top;
    note.style.cursor = 'grabbing';
  });
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      note.style.left = `${e.clientX - offsetX}px`;
      note.style.top = `${e.clientY - offsetY}px`;
    }
  });
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      note.style.cursor = 'auto';
    }
  });

  // Resize functionality
  let isResizing = false, startX, startY, startWidth, startHeight;
  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = note.offsetWidth;
    startHeight = note.offsetHeight;
    document.body.style.cursor = 'se-resize';
  });
  document.addEventListener('mousemove', (e) => {
    if (isResizing) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      note.style.width = `${startWidth + dx}px`;
      note.style.height = `${startHeight + dy}px`;
    }
  });
  document.addEventListener('mouseup', () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.cursor = 'auto';
    }
  });

  // Copy to clipboard
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(noteContent.textContent)
      .catch(err => console.error('Copy error: ', err));
  });

  // Clear content and reset style
  newNoteButton.addEventListener('click', () => {
    noteContent.textContent = '';
    note.style.width = '400px';
    note.style.height = '300px';
    note.style.top = '20px';
    note.style.left = 'initial';
    applyRandomTheme();
  });

  // Save note using a simple anchor link - no permissions required
saveButton.addEventListener('click', () => {
  const content = noteContent.innerText || '';
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'sticky-note.txt'; // Suggests a file name
  a.click();

  setTimeout(() => URL.revokeObjectURL(url), 100); // Clean up
});


  // Eye button toggle visibility and drag
  let isEyeButtonDragging = false, mouseMoveDistance = 0, eyeButtonOffsetX, eyeButtonOffsetY, isNoteVisible = true;

  eyeButton.addEventListener('mousedown', function (e) {
    mouseMoveDistance = 0;
    eyeButtonOffsetX = e.clientX - eyeButton.getBoundingClientRect().left;
    eyeButtonOffsetY = e.clientY - eyeButton.getBoundingClientRect().top;
    eyeButton.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function (e) {
    if (eyeButton.style.cursor === 'grabbing') {
      const x = e.clientX - eyeButtonOffsetX;
      const y = e.clientY - eyeButtonOffsetY;
      eyeButton.style.left = `${x}px`;
      eyeButton.style.top = `${y}px`;

      mouseMoveDistance += Math.abs(e.clientX - eyeButtonOffsetX) + Math.abs(e.clientY - eyeButtonOffsetY);
      if (mouseMoveDistance > 5) isEyeButtonDragging = true;
    }
  });

  eyeButton.addEventListener('mouseup', function () {
    if (!isEyeButtonDragging) {
      note.style.visibility = isNoteVisible ? 'hidden' : 'visible';
      eyeButton.innerHTML = isNoteVisible ? '&#x1F441;&#xFE0F;' : '&#x1F441;';
      isNoteVisible = !isNoteVisible;
    }
    isEyeButtonDragging = false;
    eyeButton.style.cursor = 'grab';
    adjustPanelPosition();
  });

  function adjustPanelPosition() {
    const eyeButtonRect = eyeButton.getBoundingClientRect();
    const maxHeight = window.innerHeight;
    const panelHeight = note.offsetHeight;

    if (eyeButtonRect.bottom + panelHeight > maxHeight) {
      note.style.top = `${eyeButtonRect.top - panelHeight}px`;
    } else {
      note.style.top = `${eyeButtonRect.bottom}px`;
    }

    const maxWidth = window.innerWidth;
    if (eyeButtonRect.left + note.offsetWidth > maxWidth) {
      note.style.left = `${maxWidth - note.offsetWidth - 10}px`;
    } else {
      note.style.left = `${eyeButtonRect.left}px`;
    }
  }

})();
