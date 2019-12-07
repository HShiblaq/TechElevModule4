document.addEventListener("DOMContentLoaded", () => {

    const name = document.getElementById("name");
    const picture = document.getElementById("picture");

    const url = 'https://randomuser.me/api/?results=1';

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let firstName = data.results[0].name.first;
            let lastName = data.results[0].name.last;
            name.innerText = firstName + " " + lastName

            let link = data.results[0].picture.large;
            picture.src =  link;

        })
        .catch(function (error) {
        });

});
