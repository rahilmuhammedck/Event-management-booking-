document.addEventListener('DOMContentLoaded', function () {
    // Retrieve booking data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Generate invoice content
    const invoiceContent = `
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Phone:</strong> ${userData.phone}</p>
        <p><strong>Address:</strong> ${userData.address}</p>
        <p><strong>Event Type:</strong> ${userData.eventType}</p>
        <!-- Add more details as needed -->
    `;

    // Display invoice content on the page
    const invoiceDetails = document.getElementById('invoiceDetails');
    invoiceDetails.innerHTML = invoiceContent;

    // Add event listener to print button
    const printButton = document.getElementById('printButton');
    printButton.addEventListener('click', function () {
        window.print();
    });
});
