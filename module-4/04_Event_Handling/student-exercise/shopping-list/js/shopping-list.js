let allItemsIncomplete = true;
const pageTitle = 'My Shopping List';
const groceries = [
  { id: 1, name: 'Oatmeal', completed: false },
  { id: 2, name: 'Milk', completed: false },
  { id: 3, name: 'Banana', completed: false },
  { id: 4, name: 'Strawberries', completed: false },
  { id: 5, name: 'Lunch Meat', completed: false },
  { id: 6, name: 'Bread', completed: false },
  { id: 7, name: 'Grapes', completed: false },
  { id: 8, name: 'Steak', completed: false },
  { id: 9, name: 'Salad', completed: false },
  { id: 10, name: 'Tea', completed: false }
];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const title = document.getElementById('title');
  title.innerText = pageTitle;
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const ul = document.querySelector('ul');
  groceries.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.name;
    const checkCircle = document.createElement('i');
    checkCircle.setAttribute('class', 'far fa-check-circle');
    //checkCircle is the icon we created that ul we found in query selector
    li.appendChild(checkCircle);
    ul.appendChild(li);
  });
}
document.addEventListener("DOMContentLoaded", () => {

  setPageTitle();
  displayGroceries();

  const tasks = document.querySelectorAll('li')

  tasks.forEach(
    (task) => {
      task.addEventListener('click', () => {
        if (!task.classList.contains('completed')) {
          task.classList.add('completed')
          task.querySelector('i').classList.add('completed')
        }
      })
      task.addEventListener('dblclick', () => {
        if (task.classList.contains('completed')) {
          task.classList.remove('completed')
          task.querySelector('i').classList.remove('completed')
        }
      })
    }
  )

  const changeMarkAll = document.getElementById('toggleAll')
  changeMarkAll.addEventListener('click', () => {
    toggleCompleteness();
  });
});


function toggleCompleteness() {
  const changeMarkAll = document.getElementById('toggleAll');
  if (!allItemsIncomplete) {
    setAllComplete()

    changeMarkAll.innerText = 'MARK ALL INCOMPLETE';
    allItemsIncomplete = true;
  }
  else {
    setAllIncomplete()

    changeMarkAll.innerText = 'MARK ALL COMPLETE'
    allItemsIncomplete = false;
  }
}

function setAllComplete() {
  const tasks = document.querySelectorAll('li')
  tasks.forEach(
    (task) => {
      task.classList.add('completed')
      task.querySelector('i').classList.add('completed')
    }
  );
}
function setAllIncomplete() {
  const tasks = document.querySelectorAll('li')
  tasks.forEach(
    (task) => {
      task.classList.remove('completed')
      task.querySelector('i').classList.remove('completed')
    }
  );
}


setPageTitle();
displayGroceries();
