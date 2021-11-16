var likes=0;
var likes1=0;
var likes2=0;
var likes3=0;
var likes4=0;
var likes5=0;
function start(){
    
    var button=document.getElementById("like");
    button.addEventListener("click",funk,false)
    var button1=document.getElementById("like1");
    button1.addEventListener("click",funk1,false)
    var button2=document.getElementById("like2");
    button2.addEventListener("click",funk2,false)
    var button3=document.getElementById("like3");
    button3.addEventListener("click",funk3,false)
    var button4=document.getElementById("like4");
    button4.addEventListener("click",funk4,false)
    var button5=document.getElementById("like5");
    button5.addEventListener("click",funk5,false)
    var buttonc=document.getElementById("kopce");
    buttonc.addEventListener("click",funkc,false)
    var buttonc1=document.getElementById("kopce1");
    buttonc1.addEventListener("click",funkc1,false)
    var buttonc2=document.getElementById("kopce2");
    buttonc2.addEventListener("click",funkc2,false)
    var buttonc3=document.getElementById("kopce3");
    buttonc3.addEventListener("click",funkc3,false)
    var buttonc4=document.getElementById("kopce4");
    buttonc4.addEventListener("click",funkc4,false)
    var buttonc5=document.getElementById("kopce5");
    buttonc5.addEventListener("click",funkc5,false)
}
function funkc(){
    let pom1 = document.getElementById("naslov").value;
    let pom2 = document.getElementById("blog").value;
    let pom3 = document.getElementById("datum").value;

    const tatko = document.createElement("div");
    let val1 = document.createElement("h2");
    let val2 = document.createElement("div");
    let val3 = document.createElement("div");

    val3.style.float = "right";
    val3.style.color = "grey";

   

    val1.innerHTML = pom1;
    val2.innerHTML = pom2;
    val3.innerHTML = pom3;
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl").appendChild(tatko);

}
function funkc1(){
    let pom1 = document.getElementById("naslov1").value;
    let pom2 = document.getElementById("blog1").value;
    let pom3 = document.getElementById("datum1").value;

    const tatko = document.createElement("div");
    let val1 = document.createElement("h2");
    let val2 = document.createElement("div");
    let val3 = document.createElement("div");

    val3.style.float = "right";
    val3.style.color = "grey";

   

    val1.innerHTML = pom1;
    val2.innerHTML = pom2;
    val3.innerHTML = pom3;
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl1").appendChild(tatko);

}
function funkc2(){
    let pom1 = document.getElementById("naslov2").value;
    let pom2 = document.getElementById("blog2").value;
    let pom3 = document.getElementById("datum2").value;

    const tatko = document.createElement("div");
    let val1 = document.createElement("h2");
    let val2 = document.createElement("div");
    let val3 = document.createElement("div");

    val3.style.float = "right";
    val3.style.color = "grey";

   

    val1.innerHTML = pom1;
    val2.innerHTML = pom2;
    val3.innerHTML = pom3;
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl2").appendChild(tatko);

}
function funkc4(){
    let pom1 = document.getElementById("naslov4").value;
    let pom2 = document.getElementById("blog4").value;
    let pom3 = document.getElementById("datum4").value;

    const tatko = document.createElement("div");
    let val1 = document.createElement("h2");
    let val2 = document.createElement("div");
    let val3 = document.createElement("div");

    val3.style.float = "right";
    val3.style.color = "grey";

   

    val1.innerHTML = pom1;
    val2.innerHTML = pom2;
    val3.innerHTML = pom3;
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl4").appendChild(tatko);

}
function funkc5(){
    let pom1 = document.getElementById("naslov5").value;
    let pom2 = document.getElementById("blog5").value;
    let pom3 = document.getElementById("datum5").value;

    const tatko = document.createElement("div");
    let val1 = document.createElement("h2");
    let val2 = document.createElement("div");
    let val3 = document.createElement("div");

    val3.style.float = "right";
    val3.style.color = "grey";

   

    val1.innerHTML = pom1;
    val2.innerHTML = pom2;
    val3.innerHTML = pom3;
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl5").appendChild(tatko);

}
function funkc3(){
    let pom1 = document.getElementById("naslov3").value;
    let pom2 = document.getElementById("blog3").value;
    let pom3 = document.getElementById("datum3").value;

    const tatko = document.createElement("div");
    let val1 = document.createElement("h2");
    let val2 = document.createElement("div");
    let val3 = document.createElement("div");

    val3.style.float = "right";
    val3.style.color = "grey";

   

    val1.innerHTML = pom1;
    val2.innerHTML = pom2;
    val3.innerHTML = pom3;
    
    tatko.appendChild(val1);
    tatko.appendChild(val2);
    tatko.appendChild(val3);

    document.getElementById("bl3").appendChild(tatko);

}
function funk(){
    likes++;
   
    var paragraph=document.getElementById("ams");
    paragraph.innerText=likes + " Likes";
    
}
function funk1(){
    likes1++;
    var paragraph1=document.getElementById("ams1");
    paragraph1.innerText=likes1 + " Likes";
}
function funk2(){
    likes2++;
    var paragraph2=document.getElementById("ams2");
    paragraph2.innerText=likes2 + " Likes";
}
function funk3(){
    likes3++;
    var paragraph3=document.getElementById("ams3");
    paragraph3.innerText=likes3 + " Likes";
}
function funk4(){
    likes4++;
    var paragraph4=document.getElementById("ams4");
    paragraph4.innerText=likes4 + " Likes";
}
function funk5(){
    likes5++;
    var paragraph5=document.getElementById("ams5");
    paragraph5.innerText=likes5 + " Likes";
}

window.addEventListener("load",start,false);