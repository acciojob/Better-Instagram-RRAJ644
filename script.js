//your code here
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelector('.image')
  const parent = document.querySelector('#parent')

  let draggedItem = null

  items.forEach((item) => {
    item.addEventListener('dragstart', () => {
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
      e.preventDefault()
    })

    item.addEventListener('drop', () => {
      if (draggedItem) {
        parent.insertBefore(draggedItem, item)
      }
    })
  })
})
