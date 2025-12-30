const loginForm = document.getElementById("loginForm");

// Create error message elements dynamically
const emailError = document.createElement("div");
emailError.className = "error-message";
document.querySelector("#email").after(emailError);

const passwordError = document.createElement("div");
passwordError.className = "error-message";
document.querySelector("#password").after(passwordError);

function clearErrors() {
  emailError.textContent = "";
  passwordError.textContent = "";
}

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearErrors();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let hasError = false;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    emailError.textContent = "Email is required.";
    hasError = true;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email.";
    hasError = true;
  }

  // Password validation
  if (!password) {
    passwordError.textContent = "Password is required.";
    hasError = true;
  }

  if (hasError) return;

  
  try {
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const result = await res.json();

    if (res.ok) {
        console.log("User type:", result.user.userType);

        // store JWT token separately
        if (result.user.userType === "mentor") {
            localStorage.setItem("mentorToken", result.token);
            localStorage.setItem("activeToken", result.token); // use for fetches
        } else if (result.user.userType === "mentee") {
            localStorage.setItem("menteeToken", result.token);
            localStorage.setItem("activeToken", result.token); // use for fetches
        }

        console.log("Tokens stored:", {
            mentorToken: localStorage.getItem("mentorToken"),
            menteeToken: localStorage.getItem("menteeToken"),
            activeToken: localStorage.getItem("activeToken"),
        });

        // store banner if available
        if (result.banner) {
            console.log("Banner from backend:", result.banner);
            localStorage.setItem("banner", result.banner);
        }

        // store other info
        if (result.user.userType === "mentor") {
            if (result.user.expertise) {
                localStorage.setItem("expertise", JSON.stringify(result.user.expertise));
            }
            if (result.user.linkedinUrl) {
                localStorage.setItem("linkedinUrl", result.user.linkedinUrl);
            }
            window.location.href = "/public/mentor-dashboard.html";
        } else if (result.user.userType === "mentee") {
            if (result.user.bio) {
                localStorage.setItem("bio", result.user.bio);
            }
            if (result.user.name) {
                localStorage.setItem("name", result.user.name);
            }
            window.location.href = "/public/index.html";
        } else {
            window.location.href = "/public/no.html";
        }
    } else {
        console.error("Login failed:", result.message);
        alert(result.message || "Login failed. Please check your credentials.");
    }
} catch (err) {
    console.error("Network or other error:", err);
    alert("Something went wrong. Please try again later.");
}
});