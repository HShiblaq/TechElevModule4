window.addEventListener("DOMContentLoaded", () => {

    fetch('http://localhost:53023/apicity/getall')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let cities = [];
            cities = data;
            let ul = document.getElementById("ul");
            cities.forEach((city) => {

                let li = document.createElement("li");
                li.innerHTML = city.name;
                ul.appendChild(li);
            })
        })
        .catch((err) => { console.log(err) });

});