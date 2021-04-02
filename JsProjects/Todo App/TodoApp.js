const addInput = document.querySelector('.todo__form-input')
const addBtn = document.querySelector('.todo__form-btn')
let todo = document.querySelector('.wrapper__list')

let todoList = [];


if( localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo', todoList))
    displayMessages();
}

addBtn.addEventListener('click', ()=>{
    let newTodo = 
        {
            todo: addInput.value,
            checked: false,
            important: false
        }

        todoList.push(newTodo)
        displayMessages();

        addInput.value = "";

        localStorage.setItem('todo', JSON.stringify(todoList))
})

function displayMessages(){
    let displayMessages = ''
    if(todoList.length === 0){todo.innerHTML = `<h1 style="text-align: center">No Todos!</h1>`}
    todoList.forEach(function(item, i){
        displayMessages += `
            <li class= "wrapper__list-item"> <input type="checkbox" class="checkbox" id= 'item_${i}' ${item.checked ? 'checked': ''} /> 
                 <label for = 'item_${i}'> ${item.todo} </label>
            </li>
        `
        todo.innerHTML = displayMessages;
    })
};


todo.addEventListener('change', function(event){
   
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;
    
    console.log(valueLabel)

    todoList.forEach(function(item, i){
        if(item.todo === valueLabel){
            displayMessages();
            item.checked = !item.checked;

            if(item.checked === true){
                todoList.splice(i, 0)
            }
            localStorage.setItem('todo', JSON.stringify(todoList))   
        }
    });
})
