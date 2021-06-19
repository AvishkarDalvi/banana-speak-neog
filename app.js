var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
    return `${serverUrl}?text=${text}`;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("somethhing wrong with the server! try again after some time.");
}

function clickEventHandler() {
    fetch(constructUrl(txtInput.value)).then(response => response.json()).then(json => {
        outputDiv.innerText = json.contents.translated;
    }).catch(errorHandler);
}
btnTranslate.addEventListener("click", clickEventHandler);