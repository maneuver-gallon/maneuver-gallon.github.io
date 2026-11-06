let newQuote = document.querySelector(".new-quote");

newQuote.addEventListener("click", getQuote);
let rand = new XMLHttpRequest();
rand.addEventListener("load", responseReceivedHandler);
rand.responseType = "json";


function getQuote(){
    rand.open("GET", "https://trivia.cyberwisp.com/getrandomchristmasquestion");
    rand.send();
}

function displayQuote(q){
    let quoteText = document.getElementById("js-quote-text");
    quoteText.innerHTML = q;
}

function responseReceivedHandler() {
   if (this.status === 200) {
    let quote = this.response.question;
    console.log(this.response.question);
    displayQuote(quote);
   }
   else {
    console.log("error");
    alert("error");
   }
}
