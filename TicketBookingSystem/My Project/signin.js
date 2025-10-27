document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Sign in successful! Welcome, ' + username + '!');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Please enter both username and password.');
    }
 });
