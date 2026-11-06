let newQuote = document.querySelector(".new-quote");

newQuote.addEventListener("click", getQuote);
let rand = new XMLHttpRequest();
rand.addEventListener("load", responseReceivedHandler);


function getQuote(){
    rand.open("GET", "https://trivia.cyberwisp.com/getrandomchristmasquestion");
    rand.send();
}

function displayQuote(quote){
    let quoteText = document.getElementById("js-quote-text");
    quoteText.innerHTML = quote;
}

function responseReceivedHandler() {
   if (this.status === 200) {
    console.log(this.response);
    displayQuote(this.response.question);
   }
   else {
    console.log("error");
   }
}
