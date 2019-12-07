window.addEventListener("DOMContentLoaded", () => {

    let city = {};
    let form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        city.name = document.getElementById("Name").value;
        city.district = document.getElementById('District').value;
        city.countryCode = document.getElementById('CountryCode').value;
        city.population = document.getElementById('Population').value;

        fetch("http://localhost:53023/apicity/addcity", {
            method: "POST",
            body: JSON.stringify(city),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then((response) => {
                console.log("Got to first then");
                console.log(response);
               // return response.json();
            })
            .then((data) => {
                console.log("Got to second then");
            })
            .catch((err) => { console.log(err) });

    });
})