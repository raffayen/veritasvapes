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

document.addEventListener('DOMContentLoaded', function () {
    const weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr'];
    const dateSelection = document.getElementById('dateSelection');

    // Get the current date and the day of the week (0-6, where 0 is Sunday)
    const today = new Date();
    const dayOfWeek = today.getDay();

    // Calculate the date of the previous Monday
    const monday = new Date(today.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)));

    weekdays.forEach(function (day, index) {
        // Create a label element for the radio input
        const label = document.createElement('label');
        label.className = 'date-radio';

        // Create a radio input element
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'date';

        // Calculate the date for the current weekday
        const date = new Date(monday);
        date.setDate(monday.getDate() + index);

        // Format the date as a simple number
        radioInput.value = date.getDate().toString();

        // Create a span element to display the date number
        const span = document.createElement('span');
        span.textContent = date.getDate().toString();

        // Append the radio input and span to the label
        label.appendChild(radioInput);
        label.appendChild(span);

        // Append the label to the dateSelection container
        dateSelection.appendChild(label);
    });
});

