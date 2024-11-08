// Get all draggable divs
const draggableItems = document.querySelectorAll('.image');

// Loop through all items to add event listeners for drag and drop
draggableItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('dragenter', dragEnter);
  item.addEventListener('dragleave', dragLeave);
  item.addEventListener('drop', drop);
  item.addEventListener('dragend', dragEnd);
});

let draggedItem = null;  // To store the currently dragged item

// On drag start, store the dragged element
function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.setData('text/html', draggedItem.innerHTML);
}

// On drag over, prevent default to allow dropping
function dragOver(event) {
  event.preventDefault();
}

// On drag enter, add a visual cue to indicate the target div
function dragEnter(event) {
  event.preventDefault();
  event.target.style.border = "2px dashed #000"; // Adds a border when dragging over
}

// On drag leave, remove the visual cue
function dragLeave(event) {
  event.target.style.border = "";
}

// On drop, swap the content of the dragged item and the target item
function drop(event) {
  event.preventDefault();
  event.target.style.border = ""; // Remove the dashed border on drop
  
  // If the drop target is not the dragged item itself
  if (draggedItem !== event.target) {
    // Swap the content (background images)
    const draggedContent = draggedItem.style.backgroundImage;
    const targetContent = event.target.style.backgroundImage;
    
    draggedItem.style.backgroundImage = targetContent;
    event.target.style.backgroundImage = draggedContent;
  }
}

// On drag end, reset any visual feedback
function dragEnd(event) {
  draggedItem = null;
}
