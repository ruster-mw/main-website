let random = Math.floor(Math.random() * 2);
let cover = document.getElementById("cover");
let naughty = document.getElementById("naughty");
let nice = document.getElementById("nice");
function naughtyOrNice(random){
    if(random === 0)
    naughty.style.animation = "cardpopup 6s linear forwards"
    else
    nice.style.animation = "cardpopup 6s linear forwards"
}
    
function button_click(){
    cover.style.animation = "takeoff 3s linear forwards";
    naughtyOrNice(random)
}