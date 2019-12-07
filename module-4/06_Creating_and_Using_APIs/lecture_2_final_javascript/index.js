// WAIT FOR THE DOM TO FINISH LOADING
window.addEventListener("DOMContentLoaded", () => {
// MAP THE RESPONSE 
    fetch('http://localhost:53023/apicity/getall')
        .then((response) => {
            return response.json();
        })
        //TAKE DATA RETURNED AND PUT DATA IN ARRAY OF CITIES 
        .then((data) => {
            let cities = [];
            cities = data;
            let ul = document.getElementById("ul");
            //CITY IS A FAKE VARIABLE NAME THAT CHANGES 
            cities.forEach((city) => {

                let li = document.createElement("li");
                li.innerHTML = city.name;
                //APPEND TO MY UNNUMBERED LIST 
                ul.appendChild(li);
            })
        })
        .catch((err) => { console.log(err) });

});