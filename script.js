document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.image');
  const parent = document.getElementById('parent');

  let draggedItem = null;

  items.forEach((item) => {
      item.addEventListener('dragstart', (e) => {
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
          e.preventDefault();  // Allow dropping
      });

      item.addEventListener('drop', (e) => {
          e.preventDefault();
          // Prevent dropping on the same element
          if (draggedItem !== item) {
              parent.insertBefore(draggedItem, item);
          }
      });
  });

  parent.addEventListener('dragover', (e) => {
      e.preventDefault();  // Allow dropping in the parent
  });

  parent.addEventListener('drop', (e) => {
      e.preventDefault();
      // Check that you're not dropping the dragged item outside valid areas
      if (draggedItem && !e.target.classList.contains('image')) {
          parent.appendChild(draggedItem);  // Drop it at the parent level
      }
  });
});

