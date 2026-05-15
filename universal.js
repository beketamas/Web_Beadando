"use strict"

let toggle = () => {
    document.getElementById("navbarPages").classList.toggle("active");
}

let l = false;

document.getElementById("hcBtn").onclick = () => {

    let elements = document.getElementsByTagName("*");


    if(!l){
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "yellow";
        }
        l = true;
    }
    else{
        for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "white";
        }
        l = false;
    }
}




