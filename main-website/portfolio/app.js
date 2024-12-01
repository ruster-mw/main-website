var a = -1
function hide(){
    a = a * -1
    let b = document.getElementById("css-website")
    let c = document.getElementById("triangle")
    if (a == 1)
    {
        b.style.opacity = 0;
        b.style.display = 'none'
    }
    else if (a == -1)
    {
        b.style.opacity = 1;
        b.style.display = 'grid';
    };
}