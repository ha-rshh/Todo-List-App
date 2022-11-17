console.log("check")
const taskInput = document.getElementById('task-input');
const taskInsertedEl = document.getElementById('task-inserted');
const taskFormEl = document.getElementById('task-form')
const deleteEl = document.querySelector(".delete")

taskInput.addEventListener('click', () => {
    taskInput.focus()
})
taskInput.addEventListener('blur', (event)=>{
    if(event.target.value === ''){
        taskInput.style.outline = '1px solid red';
    }
})
taskInput.addEventListener('change', (event)=>{
    if(event.target.value){
        taskInput.style.outline = "2px solid white"
    }
})
taskFormEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    const inputVal = taskInput.value;
    taskInsertedEl.innerText = inputVal;
})
deleteEl.addEventListener('click', (event)=>{
    taskInsertedEl.innerText = '';
})