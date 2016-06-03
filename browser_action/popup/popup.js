(function(){

   console.log("go");

   var backgroundP = chrome.extension.getBackgroundPage();

   document.querySelector('h1').addEventListener('click', function(){

    backgroundP.injectScript();





   });

}());
