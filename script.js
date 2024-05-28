document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('rememberMe');
    const submitButton = document.getElementById('submit');
    const existingButton = document.getElementById('existing');

    // Check if there are saved details in local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'inline'; // Show the "Login as existing user" button
    }

    // Function to handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberCheckbox.checked;

        if (rememberMe) {
            // Save username and password in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove saved username and password from local storage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        // Display alert message
        alert(`Logged in as ${username}`);
    });

    // Functionality for existing user button
    existingButton.addEventListener('click', function() {
        const savedUsername = localStorage.getItem('username');
        alert(`Logged in as ${savedUsername}`);
    });
});