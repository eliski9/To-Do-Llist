window.addEventListener('load', () => {
    const form = document.querySelector('new-task-form');
    const input = document.querySelector("#new-input-form")
    const list_el = document.querySelector("#tasks");


    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        console.log(submitForm)


    })

})