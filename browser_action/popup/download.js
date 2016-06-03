console.log("good");


var videos = document.getElementsByClassName('lesson-index__download-link');
var current=0;

setInterval(function(){
        if(current < videos.length){
           videos[current].click();
           current++;
        }else{ console.log("finished"); }
}, 30000);
