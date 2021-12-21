
function start(){
    var button=document.getElementById("survey");
    button.addEventListener("click",funk,false)
}
function funk(){
    var com=document.getElementById("surveyC");

    if(com.value!="")
    window.alert("You have succsessfully submitted your thoughts about my webpage")
}

window.addEventListener("load",start,false);