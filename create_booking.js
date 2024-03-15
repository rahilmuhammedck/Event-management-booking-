document.addEventListener('DOMContentLoaded', function () {
    const createBookingForm = document.getElementById('createBookingForm');

    createBookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const eventType = document.getElementById('eventType').value;

        // Create booking object
        const bookingData = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            eventType: eventType
        };

        // Store data in localStorage
        localStorage.setItem('bookingData', JSON.stringify(bookingData));

        // Redirect to invoice page
        window.location.href = 'invoice.html';
    });
});
