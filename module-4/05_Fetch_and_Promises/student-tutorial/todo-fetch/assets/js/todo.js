
 //// read the tasks from data.json
fetch('data.json')
.then((response) => {
  // get the JSON from the response
  return response.json();
})
.then((todos) => {
  // when the JSON data is returned log the result
  console.log(todos);
  //
  updateHTML2(todos) ;
  
})
.catch((err) => {console.error(err)});


function updateHTML(todos){
console.log("Inside updateHTML");
console.log(todos);
}

//FUNCTION TO UPDATE SCREEN WITH DATA
function updateHTML2(todos){
console.log("Inside updateHTML2");
console.log(todos);
let todoList = document.querySelector(".todo-list").querySelectorAll("ul")[0];
//GET TEMPLATE BY THE ID OF TASK USE HASHTAG ICON BECAUSE IT IS QUERY
let template = document.querySelector("#tasks");

//importnode creates a copy of a node or document fragment to be inserted into current document later 
//importnode is a clone of original
//nodes can be cloned or adopted be4 they get inserted in doc
//CLONE TEMPLATE
//CREATING ITEM OUT OF THE TEMPLATE ( TEMPLATE CONTAINS LI'S IN IT)


//IMPORT THE LIST ITEM
//access the child li elements of the ul
for( let i=0 ; i<todos.length ; i++){
  let todo = todos[i];
  let taskClone = template.cloneNode(true);
  let li = taskClone.content.querySelector("li");
  li.innerHTML= todo.task + li.innerHTML;

  //The setAttribute() method adds the specified attribute to an element, 
  //and gives it the specified value.
  //If the specified attribute already exists, only the value is set/changed.


  if(todo.completed === true){
    // If the li has a target attribute, set the value to "todo-completed"
    li.setAttribute("class", "todo-completed");

    let icon = li.querySelector("i");

    // If the icon has a target attribute, set the value to "far fa-check-circle completed"
    icon.setAttribute("class", "far fa-check-circle completed");
  }
  
  //APPEND IT TO CHILD TO THE PARENT TODO LIST 
  todoList.appendChild(li);
}
todoList.appendChild(taskClone);


// Displaying Tasks
const tmpl = document.getElementById('tasks').content.cloneNode(true);
tmpl.querySelector("li").insertAdjacentHTML('afterbegin',todo.task);
if( todo.completed ) {
  const circleCheck = tmpl.querySelector('.fa-check-circle');
  circleCheck.className += " completed";
}
list.appendChild(tmpl);
}

