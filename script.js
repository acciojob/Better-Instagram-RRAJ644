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

    // Allow the item to be dropped by preventing default behavior
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    // Swap the background image of dragged and target items
    item.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedItem && draggedItem !== item) {
        let temp = item.style.backgroundImage;
        item.style.backgroundImage = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = temp;
      }
    });
  });
});
