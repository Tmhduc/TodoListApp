document.addEventListener('DOMContentLoaded', () => {
    const ListCheckboxes = document.querySelectorAll('.checkbox');
    //selecting all checkboxes with class name 'checkbox'

    ListCheckboxes.forEach(checkbox =>{
        checkbox.addEventListener('change', () =>{
            const taskRow = this.closest('task-row');
            const taskId = taskRow.getAttribute('data-task-id');
        })
    })
})