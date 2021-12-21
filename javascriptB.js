
$(document).ready(function(){
  $("#name").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#bl fieldset ").filter(function() {
      $(this).toggle($(this).children("div:first").text().toLowerCase().indexOf(value) > -1)//zima samo iminja na produkti
    });
  });
});
$(document).ready(function(){
    $("#words").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#bl fieldset ").filter(function() {
        $(this).toggle($(this).children("h4").text().toLowerCase().indexOf(value) > -1)//zima samo iminja na produkti
      });
    });
  });


function start(){
    
    var button=document.getElementById("kopce");
    button.addEventListener("click",funk,false)

}
function funk(){
    let pom1 = document.getElementById("naslov").value;
    let pom2 = document.getElementById("blog").value;
    let pom3 = document.getElementById("datum").value;

    const tatko = document.createElement("fieldset");
    let val1 = document.createElement("div");
    let val2 = document.createElement("h4");
    let val3 = document.createElement("div");
    tatko.className="blogs";
    val3.style.float = "right";
    val3.style.color = "grey";

   

    val1.innerHTML = pom1 
    val2.innerHTML = pom2;
    val3.innerHTML=pom3;
   
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl").appendChild(tatko);
}
    window.addEventListener("load",start,false);