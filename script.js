document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.image');
  const parent = document.querySelector('#parent');

  let draggedItem = null;

  items.forEach((item) => {
    item.addEventListener('dragstart', () => {
      draggedItem = item;
      item.classList.add('selected');
    });

    item.addEventListener('dragend', () => {
      setTimeout(() => {
        draggedItem.classList.remove('selected');
        draggedItem = null;
      }, 0);
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    item.addEventListener('drop', () => {
      if (draggedItem !== item) {
        parent.insertBefore(draggedItem, item);
      }
    });
  });

  parent.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  parent.addEventListener('drop', (e) => {
    e.preventDefault();
    // Ensure that the dragged item isn't dropped outside the images
    if (draggedItem && !e.target.classList.contains('image')) {
      parent.appendChild(draggedItem);
    }
  });
});
