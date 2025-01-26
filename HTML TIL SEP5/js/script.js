document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form submission

    // Simpelt tjek: Hvis felterne ikke er tomme, gå til start.html
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username && password) {
        // Login success - Redirect to start.html
        window.location.href = "start.html";
    } else {
        alert("Please fill in both Username and Password fields!");
    }
});
