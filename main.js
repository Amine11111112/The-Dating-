// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can enhance this as needed)
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Here you can add your logic for authentication (e.g., check against a database)
    // For now, we'll just log the values to the console
    console.log("Username:", username);
    console.log("Password:", password);

    // Redirect to messages page after successful login
    window.location.href = 'messages.html';
});
function toggleRules() {
    const rules = document.getElementById('rules');
    rules.classList.toggle('hidden');
    rules.classList.toggle('visible');
}