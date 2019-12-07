
document.addEventListener('DOMContentLoaded', (event) => {

    const name = document.getElementById("name");
    const picture = document.getElementById("picture");
    const url = "https://randomuser.me/api/?results=1";

    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            let info = data;
            let first = info.results[0].name.first;
            let last = info.results[0].name.last;
            name.innerText = first + " " + last;
            picture.src = info.results[0].picture.large;
            // Create and append the li's to the ul
        })
})
