window.onload=function(){
    var fin1 = document.getElementById("audio1");
fin1.onended = function() {
    if (sessionStorage.au1) {
        sessionStorage.au1 = parseInt(sessionStorage.au1) + 1;
    } 
    else {             
        sessionStorage.setItem("au1", 1);
        var c1 = sessionStorage.getItem("au1");
    }
    if (sessionStorage.getItem("au1")=='3') {
    var modal = document.getElementById("myModal1");
    var close = document.getElementById("closetabp");
    modal.style.display = "block";
    if(sessionStorage.getItem("au1")=='3') sessionStorage.setItem("au1", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin11 = document.getElementById("audio11");
fin11.onended = function() {
    if (sessionStorage.au11) {
        sessionStorage.au11 = parseInt(sessionStorage.au11) + 1;
    } 
    else {             
        sessionStorage.setItem("au11", 1);
        var c11 = sessionStorage.getItem("au11");
    }
    if (sessionStorage.getItem("au11")=='3' || sessionStorage.getItem("au12")=='3' || sessionStorage.getItem("au13")=='3') {
    var modal = document.getElementById("myModal2");
    var close = document.getElementById("closetab");
    modal.style.display = "block";
    if(sessionStorage.getItem("au11")=='3') sessionStorage.setItem("au11", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin12 = document.getElementById("audio12");
fin12.onended = function () {
    if (sessionStorage.au12) {
        sessionStorage.au12 = parseInt(sessionStorage.au12) + 1;
    } 
    else {             
        sessionStorage.setItem("au12", 1);
        var c12 = sessionStorage.getItem("au12");
    }   
    if (sessionStorage.getItem("au11")=='3' || sessionStorage.getItem("au12")=='3' || sessionStorage.getItem("au13")=='3') {
    var modal = document.getElementById("myModal2");
    var close = document.getElementById("closetab");
    modal.style.display = "block";
    if (sessionStorage.getItem("au12")=='3') sessionStorage.setItem("au12", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin13 = document.getElementById("audio13");
fin13.onended = function () {
    if (sessionStorage.au13) {
        sessionStorage.au13 = parseInt(sessionStorage.au13) + 1;
    } 
    else {             
        sessionStorage.setItem("au13", 1);
        var c13 = sessionStorage.getItem("au13");
    } 
    if (sessionStorage.getItem("au11")=='3' || sessionStorage.getItem("au12")=='3' || sessionStorage.getItem("au13")=='3') {
    var modal = document.getElementById("myModal2");
    var close = document.getElementById("closetab");
    modal.style.display = "block";
    if (sessionStorage.getItem("au13")=='3') sessionStorage.setItem("au13", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin21 = document.getElementById("audio21");
fin21.onended = function () {
    if (sessionStorage.au21) {
        sessionStorage.au21 = parseInt(sessionStorage.au21) + 1;
    } 
    else {             
        sessionStorage.setItem("au21", 1);
        var c21 = sessionStorage.getItem("au21");
    }   
    if (sessionStorage.getItem("au21")=='3' || sessionStorage.getItem("au22")=='3' || sessionStorage.getItem("au23")=='3') {
    var modal = document.getElementById("myModal3");
    var close = document.getElementById("closetab2");
    modal.style.display = "block";
    if(sessionStorage.getItem("au21")=='3') sessionStorage.setItem("au21", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin22 = document.getElementById("audio22");
fin22.onended = function () {
    if (sessionStorage.au22) {
        sessionStorage.au22 = parseInt(sessionStorage.au22) + 1;
    } 
    else {             
        sessionStorage.setItem("au22", 1);
        var c22 = sessionStorage.getItem("au22");
    }   
    if (sessionStorage.getItem("au21")=='3' || sessionStorage.getItem("au22")=='3' || sessionStorage.getItem("au23")=='3') {
    var modal = document.getElementById("myModal3");
    var close = document.getElementById("closetab2");
    modal.style.display = "block";
    if (sessionStorage.getItem("au22")=='3') sessionStorage.setItem("au22", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin23 = document.getElementById("audio23");
fin23.onended = function () {
    if (sessionStorage.au23) {
        sessionStorage.au23 = parseInt(sessionStorage.au23) + 1;
    } 
    else {             
        sessionStorage.setItem("au23", 1);
        var c23 = sessionStorage.getItem("au23");
    } 
    if (sessionStorage.getItem("au21")=='3' || sessionStorage.getItem("au22")=='3' || sessionStorage.getItem("au23")=='3') {
    var modal = document.getElementById("myModal3");
    var close = document.getElementById("closetab2");
    modal.style.display = "block";
    if (sessionStorage.getItem("au23")=='3') sessionStorage.setItem("au23", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin31 = document.getElementById("audio31");
fin31.onended = function () {
    if (sessionStorage.au31) {
        sessionStorage.au31 = parseInt(sessionStorage.au31) + 1;
    } 
    else {             
        sessionStorage.setItem("au31", 1);
        var c31 = sessionStorage.getItem("au31");
    }   
    if (sessionStorage.getItem("au31")=='3' || sessionStorage.getItem("au32")=='3' || sessionStorage.getItem("au33")=='3') {
    var modal = document.getElementById("myModal4");
    var close = document.getElementById("closetab3");
    modal.style.display = "block";
    if(sessionStorage.getItem("au31")=='3') sessionStorage.setItem("au31", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin32 = document.getElementById("audio32");
fin32.onended = function () {
    if (sessionStorage.au32) {
        sessionStorage.au32 = parseInt(sessionStorage.au32) + 1;
    } 
    else {             
        sessionStorage.setItem("au32", 1);
        var c32 = sessionStorage.getItem("au32");
    }   
    if (sessionStorage.getItem("au31")=='3' || sessionStorage.getItem("au32")=='3' || sessionStorage.getItem("au33")=='3') {
    var modal = document.getElementById("myModal4");
    var close = document.getElementById("closetab3");
    modal.style.display = "block";
    if (sessionStorage.getItem("au32")=='3') sessionStorage.setItem("au32", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};
var fin33 = document.getElementById("audio33");
fin33.onended = function () {
    if (sessionStorage.au33) {
        sessionStorage.au33 = parseInt(sessionStorage.au33) + 1;
    } 
    else {             
        sessionStorage.setItem("au33", 1);
        var c33 = sessionStorage.getItem("au33");
    }   
    if (sessionStorage.getItem("au31")=='3' || sessionStorage.getItem("au32")=='3' || sessionStorage.getItem("au33")=='3') {
    var modal = document.getElementById("myModal4");
    var close = document.getElementById("closetab3");
    modal.style.display = "block";
    if (sessionStorage.getItem("au33")=='3') sessionStorage.setItem("au33", 0);
    close.onclick = function(){
    modal.style.display = "none";
}
}
};

}


