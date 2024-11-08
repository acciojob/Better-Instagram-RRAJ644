document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.image')
  const parent = document.getElementById('parent')

  let draggedItem = null

  items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
      draggedItem = item
      item.classList.add('selected')
    })

    item.addEventListener('dragend', () => {
      setTimeout(() => {
        draggedItem.classList.remove('selected')
        draggedItem = null
      }, 0)
    })

    item.addEventListener('dragover', (e) => {
      e.preventDefault() // Allow dropping
    })

    item.addEventListener('drop', (e) => {
      e.preventDefault()
      // Only proceed if the dragged item is not the same as the target
      if (draggedItem !== item) {
        // Insert the dragged item before the target (item) in the parent container
        parent.insertBefore(draggedItem, item)
      }
    })
  })

  parent.addEventListener('dragover', (e) => {
    e.preventDefault() // Allow dropping in the parent container
  })

  parent.addEventListener('drop', (e) => {
    e.preventDefault()
    // Ensure that if the dragged item is dropped outside an image, it gets appended to the parent
    if (draggedItem && !e.target.classList.contains('image')) {
      parent.appendChild(draggedItem) // Drop it at the end of the parent container
    }
  })
})
