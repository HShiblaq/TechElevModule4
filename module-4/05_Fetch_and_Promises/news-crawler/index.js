document.addEventListener("DOMContentLoaded", () => {

    // Teletype sound file from https://www.freesfx.co.uk/sfx/teletype 
    // 15830_1460490194.mp3 editied with Ocenaudio editor
    // Converted to .ogg file

    // .ico file from http://www.iconarchive.com/search?q=news

    stories = []
    story = {}
    apiKey = "";

    ///collect and save API
    const news = document.getElementById("news");
    const collectApi = document.getElementById("collectApi");
    const saveBtn = document.getElementById("saveBtn");
//LOCAL STORAGE GETITEM AND SAVEITEM ALLOWS US TO USE KEY 
//EXCEPT IT IS PERSISITENT 
///DEPENDS ON TRUTHY FALSY NATURE

<<<<<<< HEAD
//THIS HAS MULTIPLE URL...
    //is there a key for newsPai.org?
=======
    //is there a key for newsAPI.org?
>>>>>>> b50b6b8e0c9749c5be0c6168dcbe4268cfd8a40d
    if (localStorage.getItem("storedApiKey")) {
        apiKey = localStorage.getItem("storedApiKey");
        apiBtn.innerText = "Change API key"
    }
    else {
        apiBtn.innerText = "Enter API key"
    }

    ///LOAD URL TO INITIALIZE VALUES INSIDE FUNCTION INTO THE ARRAY
    let url = [];
    let urlNext = 0;
    loadUrls();

    const lineLimit = 120; // characters per line LINE WIDTH
    const characterSpeed = 100 //100 ms  /// 10 CHARACTERS PER SECOND
    const refresh = 10000 //10 seconds  BEFORE I GO TO API AND CHECK TO SE IF I DISPLAYED THE STORIES

    var t1 = setInterval(pushBuffer, refresh);  
    var t2 = setInterval(popBuffer, characterSpeed);

    const hideShow = document.getElementById("hideControl");
    const player = document.getElementById("player");
    const help = document.getElementById("help");

    // startup
    pushBuffer();
//IF SOMEONE CLICKS ON HELP - SEE IF HELP OBJECT CONTAINS D-NONE
// IF IT DOESN'T CONTAIN D NONE IT REMOVES IT
///TO DISPLAY OR NOT TO DISPLAY 

    help.addEventListener('click', () => {
        if (helpMessage.classList.contains("d-none")) {
            helpMessage.classList.remove("d-none");
        } else {
            helpMessage.classList.add("d-none");
        }
    })



    hideControl.addEventListener('click', () => {
        if (hideShow.checked == true) {
            controls.classList.add("d-none");
            controls.classList.remove("d-inline-block");
        } else {
            controls.classList.add("d-inline-block");
            controls.classList.remove("d-none");
        }
    })

    // test key is  8bee824932ee4380af56611454a2a59f
    //PROMPT : TAKES INFO AND MAKE USE OF IT,  if (apiKey) IF STRING IS NULL OR IF THERE IS INFO
    //IF WE HAVE INFO WE STORE IT LOCALLY 
    //storedApiKey IS THE KEY


    apiBtn.addEventListener("click", function () {
        apiKey = prompt("Enter API Key:");
        if (apiKey) {
            localStorage.setItem("storedApiKey", apiKey); //storedApiKey IS THE KEY
            loadUrls(); 
            pushBuffer(); //TO CAUSE IT TO GET SET OF INFORMATION 
        }
    });
    /////NEWS HEADLINES FROM HARDCODED API AND PASSING THE API-KEY
    function loadUrls() {
        url[0] = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=' + apiKey;
        url[1] = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;
        url[2] = 'https://newsapi.org/v2/everything?q=ohio&apiKey=' + apiKey;
        urlNext = 0;
    }
///if array of stories are less than ten I will add it 
// once every ten seconds it checks 
    function pushBuffer() {
        if (stories.length < 10) {
            fetch(url[urlNext])
                .then((resp) => {
                    if (!resp.ok) {
                        console.log(resp)
                        throw resp.statusText
                    }
                    return resp.json()
                })
                .then(function (data) {

                    urlNext++;
                    if (urlNext >= url.length) {
                        urlNext = 0
                    }

                    let articles = [];
                    articles = data.articles;
                    articles.forEach(article => {
                        stories.push(article);
                    });
                })
                .catch((error) => {
                    console.log(error)  /// catch log and other errors like timed out or bad url
                });
        }
    }
/// pop buffer is stories.length are greater than zero we check to see current story
/// is we don't have a story
    function popBuffer() {
        if (stories.length > 0) {
            if (story == undefined ||
                story.title == undefined ||
                story.title.length == 0) {
///shift is against first element of array 
//story is array of objects
///then adds to story space to separate stories 
                story = stories.shift()
                story.title += "  --  ";
            }
///now we have a story
            let oneCharacter = story.title.substr(0, 1);
            story.title = story.title.substr(1); /// we take off one character
            let current = news.innerHTML  //get obj where news gets displayed


            //add charatrs at the end of the display
            current += oneCharacter;

            // take character off the beginning of the display
            if (current.length > lineLimit) {
                current = current.substr(current.length - lineLimit);//take one from begining
            }
            news.innerHTML = current
        }
    }
})

