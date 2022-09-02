if (sessionStorage.c) {
    sessionStorage.c = parseInt(sessionStorage.c) + 1;
} else {
    sessionStorage.c = 1;
}

if(sessionStorage.name){
    sessionStorage.getItem("name").value;
}
else{
sessionStorage.name = (" ");
}


window.onload = function () {
    if (sessionStorage.name == " ") {
        var box = document.getElementById("box2");
        var countname = document.getElementById("countname");
        var btnenviar = document.getElementById("namebtn");
        btnenviar.addEventListener("click", function () {

            var name = document.getElementById("name").value;
            var count = parseInt(sessionStorage.getItem("c"));
            sessionStorage.setItem("name", name);

            box.style.display = "none";
            countname.innerHTML = "Welcome " + sessionStorage.getItem('name') + "! You've visited this page a total of " + count + " times!";
            countname.style.display = "block";


        }, false);
    } else {
        var box = document.getElementById("box2");
        var countname = document.getElementById("countname");
        var count = parseInt(sessionStorage.getItem("c"));
        box.style.display = "none";
        countname.innerHTML = "Welcome " + sessionStorage.getItem('name') + "! You've visited this page a total of " + count + " times!";
        countname.style.display = "block";
    }
}
