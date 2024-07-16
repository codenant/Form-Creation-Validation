document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation
        let isValid = true;
        let messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push('Username must contain at least 3 characters.');
        }

        if(!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push('Email must contain "@" and "."');
        }
            
        if(password.length < 8){
            isValid = false;
            messages.push('Password must contain at least 8 characters');
        }
            
        // Displaying Feedback
        feedbackDiv.style.display = 'block';
        if(isValid){
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
  
});