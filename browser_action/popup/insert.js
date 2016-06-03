
console.log("good");

var titles = [];
var links = [];
var current = 0;

titles = document.getElementsByClassName("products__title nolinks");
links = document.getElementsByClassName("products__course-link");


setInterval(function(){
      if(current < titles.length){
        window.open(links[current].getAttribute("href"));
        current++;
      }else{ console.log("error " + links[current].innerHTML); }
}, 600000);


/*function injectScript() {
  chrome.tabs.create({url : "http://paranormalcode.com"});
};
*/
