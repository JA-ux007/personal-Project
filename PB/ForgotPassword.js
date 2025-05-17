document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const resetForm = document.getElementById('resetForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const submitBtn = document.getElementById('submitBtn');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const successMessage = document.getElementById('successMessage');
    const submittedEmail = document.getElementById('submittedEmail');
    const returnBtn = document.getElementById('returnBtn');
    
    // Hide error message initially
    emailError.style.display = 'none';
    
    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Submit form event
    resetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Reset error state
        emailError.style.display = 'none';
        emailInput.classList.remove('error');
        
        // Validate email
        if (!email) {
            emailError.textContent = 'Email is required';
            emailError.style.display = 'block';
            emailInput.classList.add('error');
            return;
        }
        
        if (!validateEmail(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            emailInput.classList.add('error');
            return;
        }
        
        // Show loading state
        const originalButtonText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span>Processing...';
        submitBtn.classList.add('btn-disabled');
        submitBtn.disabled = true;
        
        // Simulate API call with timeout
        setTimeout(function() {
            // Update success message with email
            submittedEmail.textContent = email;
            
            // Hide form and show success message
            forgotPasswordForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset button state
            submitBtn.innerHTML = originalButtonText;
            submitBtn.classList.remove('btn-disabled');
            submitBtn.disabled = false;
        }, 1500);
    });
    
    // Return to form button
    returnBtn.addEventListener('click', function() {
        successMessage.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
        emailInput.value = '';
    });
});