document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve email and password from the form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if the email and password match the static credentials
        if (email === 'user@gmail.com' && password === 'password') {
            // Redirect to the welcome page
            window.location.href = 'welcome.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
