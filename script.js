document.addEventListener('DOMContentLoaded', (e) => {
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
            messages.push('Username should be more than 3 characters.');
            return;
        }

        if(!email.includes('@', '.')){
            isValid = false;
            messages.push('Email format is invalid.')
            return;
        }
            
        if(password.length < 8){
            isValid = false;
            messages.push('Password must contain least 8 characters');
            return;
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
        form.submit();
    });
  
});