//  we need to instance here
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character';

//  we will build here 
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            console.log("It was completed");
            if(xhttp.status === 200) {
                console.log("The status that it finds");
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error in ${url_api}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(API);