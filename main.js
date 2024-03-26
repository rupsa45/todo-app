const taskInput=document.getElementById('task-input')
const taskForm=document.getElementById('task-form')
const taskList=document.getElementById('task-list')

taskForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input=taskInput.value;

    if(input == ""){
        alert("Please enter a new task")
    }
    else{
    const listItem=document.createElement('li')
    listItem.innerHTML=input
    taskList.append(listItem)
    let span =document.createElement('span')
    span.innerHTML='&times';
    listItem.appendChild(span)
    taskInput.value=''
    saveListData()
    }
})

taskList.addEventListener('click',(e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('check')
        saveListData()
    }
    if(e.target.tagName =='SPAN'){
        const li = e.target.parentElement
        li.remove()
        saveListData()
    }
})

function showListData(){
    taskList.innerHTML=localStorage.getItem("listItem")
}

function saveListData(){
    localStorage.setItem('listItem',taskList.innerHTML)
}

showListData()