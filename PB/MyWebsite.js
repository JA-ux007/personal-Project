document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    // Function to validate input and show error message
    function validateInput(input, errorElement, errorMessage) {
        if (input.value.trim() === '') {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            input.classList.add('error');
            return false;
        } else {
            errorElement.style.display = 'none';
            input.classList.remove('error');
            return true;
        }
    }
    
    // Add real-time validation on input blur
    usernameInput.addEventListener('blur', function() {
        validateInput(usernameInput, usernameError, 'Please enter a username');
    });
    
    passwordInput.addEventListener('blur', function() {
        validateInput(passwordInput, passwordError, 'Please enter a password');
    });
    
    // Add real-time validation on input
    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.trim() !== '') {
            usernameError.style.display = 'none';
            usernameInput.classList.remove('error');
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.trim() !== '') {
            passwordError.style.display = 'none';
            passwordInput.classList.remove('error');
        }
    });
    
    // Form submission handler
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate both fields
        const isUsernameValid = validateInput(
            usernameInput, 
            usernameError, 
            'Please enter a username'
        );
        
        const isPasswordValid = validateInput(
            passwordInput, 
            passwordError, 
            'Please enter a password'
        );
        
        // Check if form is valid
        if (isUsernameValid && isPasswordValid) {
            // In a real application, you would send these credentials to a server
            alert('Login successful! (This is just a demo - no actual authentication is happening)');
            // You could redirect here: window.location.href = 'dashboard.html';
        }
    });
});