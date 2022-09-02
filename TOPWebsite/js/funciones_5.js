
window.onload = function () {
    var sendbtn = document.getElementById("sendbtn");
    sendbtn.addEventListener("click", function () {
        var modal = document.getElementById("myModal2");
        var close = document.getElementById("closetab");
        modal.style.display = "block";
        
        var fname = document.getElementById("fname").value;
        sessionStorage.setItem("fname", fname);
        var mail = document.getElementById("mail").value;
        sessionStorage.setItem("mail", mail);
        var subject = document.getElementById("subject").value;
        sessionStorage.setItem("subject", subject);
        close.onclick = function () {
            modal.style.display = "none";
            window.location.href = "contact.html";
        }

    }, false);
}
