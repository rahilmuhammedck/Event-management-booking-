// welcome.js
document.addEventListener('DOMContentLoaded', function () {
    const eventTypeSelect = document.getElementById('eventType');
    const viewPricingBtn = document.getElementById('viewPricingBtn');

    viewPricingBtn.addEventListener('click', function () {
        const selectedEventType = eventTypeSelect.value;

        // Check if an event type is selected
        if (selectedEventType) {
            // Redirect to the create booking page with the selected event type as a query parameter
            window.location.href = `create_booking.html?eventType=${selectedEventType}`;
        } else {
            // Display an alert if no event type is selected
            alert('Please select an event type.');
        }
    });
});