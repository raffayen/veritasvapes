window.onload = function () {
    let modal = document.getElementById("modal");
    let btn = document.querySelector(".btn-primary");
    let span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function () {
        modal.style.display = "flex";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}