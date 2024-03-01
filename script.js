document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modal");
    let btn = document.querySelector(".btn-primary");

    btn.addEventListener("click", function () {
        modal.style.display = "flex";
        modal.classList.add("modal-show-background", "modal-show");
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("modal-hide"); // Start hiding the modal content
            modal.classList.replace("modal-show-background", "modal-hide-background");

            setTimeout(function () {
                modal.style.display = "none";
                modal.classList.remove("modal-show", "modal-hide", "modal-hide-background");
            }, 500);
        }
    });
});
