
function password_checker(){
    let inputpass = document.getElementById("password");
    let valuepass = inputpass.value;
if(valuepass === "javascript"){
    document.getElementById("forms").action = "http://portfolio-website.ct8.pl/"; 
    console.log(document.getElementById("forms").action);
    document.getElementById("smth").type = "submit";
}else{
    document.getElementById("perry").innerHTML= "wrong password!"
}
}