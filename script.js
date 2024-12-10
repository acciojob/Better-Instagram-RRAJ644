let dragindex = 0;
let clone = "";

// Select all draggable images
const images = document.querySelectorAll(".image");

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
  e.preventDefault(); // Allow the drop
}

function drop(e) {
  e.preventDefault();

  // Ensure the target is a valid drop zone with the 'image' class
  if (!e.target || !e.target.classList.contains("image")) {
    return;
  }

  // Clone the target element
  clone = e.target.cloneNode(true);

  // Get the ID of the dragged element
  const data = e.dataTransfer.getData("text");

  // Find the index of the dragged element
  const nodelist = document.getElementById("parent").children;
  for (let i = 0; i < nodelist.length; i++) {
    if (nodelist[i].id === data) {
      dragindex = i;
    }
  }

  // Attach drag-drop listeners to the clone
  dragdrop(clone);

  const parent = document.getElementById("parent");

  // Replace the dropped element
  parent.replaceChild(document.getElementById(data), e.target);

  // Insert the clone back in the original place
  parent.insertBefore(clone, parent.children[dragindex]);
}

// Attach event listeners for drag-and-drop functionality
const dragdrop = (image) => {
  image.ondragstart = drag;
  image.ondragover = allowDrop;
  image.ondrop = drop;
};

// Add event listeners to all draggable images
images.forEach((image) => {
  dragdrop(image);
});
