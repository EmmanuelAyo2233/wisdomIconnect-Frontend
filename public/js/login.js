document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Simple validation
    if (!email || !password) {
        showError("Both email and password are required.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/login/youth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (response.ok) {
            // Redirect to dashboard with user data (optional: store in localStorage/session)
            localStorage.setItem("youthUser", JSON.stringify(result.user)); 
            window.location.href = "/index.html";
        } else {
            showError(result.message || "Login failed. Please try again.");
        }
    } catch (error) {
        console.error("Login error:", error);
        showError("Something went wrong. Please try again.");
    }
});

// Show error below the form
function showError(message) {
    let errorBox = document.getElementById("loginError");
    if (!errorBox) {
        errorBox = document.createElement("p");
        errorBox.id = "loginError";
        errorBox.style.color = "red";
        errorBox.style.textAlign = "center";
        const form = document.getElementById("loginForm");
        form.insertBefore(errorBox, form.querySelector(".form-button"));
    }
    errorBox.textContent = message;
}