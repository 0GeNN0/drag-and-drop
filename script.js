// VARIABLES
const containers = document.querySelectorAll('.container');
const draggableItems = document.querySelectorAll('.draggable');
const resetBtn = document.querySelector('.reset');

draggableItems.forEach(item => {
    item.addEventListener('dragstart', () => {
        // Adding class for CSS styles and querying while dragging
        item.classList.add('on-dragging');

        containers.forEach(container => {
            container.classList.remove('item-added');
        })
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('on-dragging');

        // Get the container where the item was appended
        const targetContainer = item.closest('.container');
        targetContainer.classList.add('item-added');
    })
});

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggedItem = document.querySelector('.on-dragging');
        container.appendChild(draggedItem);
    });
})


// Reset Button Functionality
resetBtn.addEventListener('click', () => {
    // The forEach method is to be dynamicly 
    // so in future if more containers get added the function still work as expected
    containers.forEach(container => {
        container.innerHTML = '';
    });

    draggableItems.forEach(node => {
        containers[0].appendChild(node);
    })
})