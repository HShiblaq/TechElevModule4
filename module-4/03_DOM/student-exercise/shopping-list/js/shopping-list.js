// add pageTitle
let pageTitle = "My Shopping List"
// add groceries
let groceries = ["lemons", "mint", "parsley", "basil", "cake", "foisgras", "Comtécheese", "rosemary", "sage", "thyme"]
/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  document.getElementById("title").innerHTML = pageTitle
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {

  let ul = document.getElementById("groceries");
  groceries.forEach(function (item) {
    //add an html element of type li
    let li = document.createElement("li");
    //create li and add item to li 
    // returns a collection of an elemnts's child elements 
    li.innerHTML = item;
    //moves it from its current position to the new position by appendchild
    ul.appendChild(li)
  });
}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */

// function markCompleted() {
//   let ul = document.getElementById("groceries");
//   //lis Represent all the li
//   //one li for each grocery items
//   let lis = ul.getElementsByTagName("li")
//   console.log(lis);

//   for (let i = 0; i < lis.length; i++) {
// //The classList property returns the class name(s) of an element,
//     lis[i].classList.add("completed")
//   }
// }
//DOM OBJECTS ARE ALL THE ITEMS IN THE GROCERY LIST 

function markCompleted() {
  let items = document.querySelectorAll("li");
  items.forEach ( item =>{
    item.setAttribute('class','completed');
  });
  }

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  //find obj using name get ele create event lis
  const button =
   document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
