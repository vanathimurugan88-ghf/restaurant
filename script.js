const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    message.textContent =
        `Thank you, ${name}! Your table for ${guests} guest(s) is booked on ${date} at ${time}.`;

    bookingForm.reset();
});