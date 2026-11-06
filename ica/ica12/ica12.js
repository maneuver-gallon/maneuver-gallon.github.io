let newQuote = document.querySelector(".new-quote");

newQuote.addEventListener("click", getQuote);
let rand = new XMLHttpRequest();
rand.addEventListener("load", responseReceivedHandler);


function getQuote(){
    rand.open("GET", "https://trivia.cyberwisp.com/getrandomchristmasquestion");
    rand.send();
}

function responseReceivedHandler() {
   if (this.status === 200) {
    console.log(this.response);
   }
   else {
    console.log("error");
   }
}
