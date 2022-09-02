if (sessionStorage.c1) {
    sessionStorage.c1 = parseInt(sessionStorage.c1) + 1;
} else {
    sessionStorage.c1 = 1;
}
window.onload = function () {
    var a = parseInt(sessionStorage.getItem("c1"));
    if(a==1){
            setTimeout(function () {
            document.getElementById("tot").style.display = "block";
            var titol = document.getElementById("titol");
            titol.remove();
        }, 3750);
        
        }
    else{
        var titol = document.getElementById("titol");
            titol.remove();
        document.getElementById("tot").style.display = "block";
    }
}
