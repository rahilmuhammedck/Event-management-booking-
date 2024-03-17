// invoice.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to retrieve booking data from local storage and populate the invoice content
    function populateInvoice() {
        // Retrieve booking data from local storage
        const bookingData = JSON.parse(localStorage.getItem('bookingData'));

        // Check if booking data exists
        if (bookingData) {
            // Construct invoice HTML content using booking data
            const invoiceHTML = `
                <div class="invoice">
                    <div><strong>Name:</strong> ${bookingData.name}</div>
                    <div><strong>Email:</strong> ${bookingData.email}</div>
                    <div><strong>Phone:</strong> ${bookingData.phone}</div>
                    <div><strong>Address:</strong> ${bookingData.address}</div>
                    <div><strong>Event Type:</strong> ${bookingData.eventType}</div>
                    <!-- Add more fields as needed -->
                </div>
            `;

            // Insert invoice HTML into the invoiceDetails container
            const invoiceDetailsContainer = document.getElementById('invoiceDetails');
            invoiceDetailsContainer.innerHTML = invoiceHTML;
        }
    }

    // Event listener for the "Print Invoice" button
    const printInvoiceBtn = document.getElementById('printInvoiceBtn');
    printInvoiceBtn.addEventListener('click', function () {
        window.print(); // Open print dialog
    });

    // Populate invoice with booking data when the page loads
    populateInvoice();
});