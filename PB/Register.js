document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Reset all error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(errorMsg) {
        errorMsg.style.visibility = 'hidden';
    });

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Form validation
    let isValid = true;

    if (fullName === '') {
        document.getElementById('fullNameError').style.visibility = 'visible';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        document.getElementById('emailError').style.visibility = 'visible';
        isValid = false;
    }

    if (username === '' || username.length < 4) {
        document.getElementById('usernameError').style.visibility = 'visible';
        isValid = false;
    }

    if (password === '' || password.length < 8) {
        document.getElementById('passwordError').style.visibility = 'visible';
        isValid = false;
    }

    if (confirmPassword === '' || confirmPassword !== password) {
        document.getElementById('confirmPasswordError').style.visibility = 'visible';
        isValid = false;
    }

    if (isValid) {
        alert('Account created successfully! (This is just a demo - no actual registration occurred)');
        // Redirect to login page
        window.location.href = 'MyWebsite.html';
    }
});
