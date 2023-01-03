import renderForm from "./form";

window.addEventListener('load', () =>{
  for(let i = 0; i < localStorage.length; i++) {
    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
})

const newTaskBtn = document.querySelector('.new-task-btn');
newTaskBtn.addEventListener('click', () => renderForm());

//delete project


