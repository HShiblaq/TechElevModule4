document.querySelector("a.loadingButton")  //a is hyperlink
    .addEventListener("click", loadShoppingList);


let loadedToggle = true;

//METHOD LOAD ON DEMAND WHEN CLICKED 
function loadShoppingList() {
    let temp = loadedToggle;
    loadedToggle = !loadedToggle;
    console.log(loadedToggle);


    if (!loadedToggle) {
        //// READ TASK FROM DATA.JSON
        //additional slash
        fetch('assets/data/shopping-list.json')
            .then((response) => {
           
                return response.json();
            })

            .then((items) => {
            
                console.log(items);
                updateHTML(items);

            })
            .catch((err) => { console.error(err) });
    }

    else {
        updateHTML([]);
    }

}


//FUNCTION TO UPDATE SCREEN WITH DATA
function updateHTML(items) {
    console.log("Inside updateHTML");
    console.log(items);
    //GET TEMPLATE BY THE ID OF TASK USE HASHTAG ICON BECAUSE IT IS QUERY
    let template = document.querySelector("#shopping-list-item-template");

    let ul = template.parentElement;

    let liChildren = ul.getElementsByTagName("li");
    for ( let j = liChildren.length-1 ; j >= 0 ; j--){
        liChildren[j].remove();
    }


    
    //IMPORT THE LIST ITEM increment 
    for (let i = 0; i < items.length; i++) {
        let item = items[i]; 
        //copy entire element
        let templateClone = template.content.cloneNode(true);
        let li = templateClone.querySelector("li");
        li.innerHTML = item.name + li.innerHTML;


        if (item.completed === true) {

            let icon = li.querySelector("i");
            // If the icon has a target attribute, set the value to "far fa-check-circle completed"
            icon.setAttribute("class", "far fa-check-circle completed");
        }
        //APPEND IT TO CHILD TO THE PARENT ul 
        ul.appendChild(li);
    }

    //TOGGLE - CONCEPT LIKE SWITCH 
    let loadingButton = document.querySelector("a.loadingButton");
    let icon = loadingButton.getElementsByTagName("i")[0]; //give elements of type icon of the first number
    //getElements = array of elements 
    if(loadedToggle)
    {
        icon.setAttribute("class","fas fa-angle-down");
    }
    else
    {
        icon.setAttribute("class","fas fa-angle-up");
    }

}

