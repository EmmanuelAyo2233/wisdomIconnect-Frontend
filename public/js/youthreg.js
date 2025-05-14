const expertiseSelect = document.getElementById('editExpertise');
const expertiseContainer = document.getElementById('selectedExpertiseContainer');
let selectedExpertise = [];

const fluentSelect = document.getElementById('fluentIn');
const fluentContainer = document.getElementById('selectedFluentContainer');
let selectedFluents = [];




// 🎯 On select change
// expertiseSelect.addEventListener("change", (e) => {
//   addTag(e.target.value, expertiseContainer, selectedExpertise, 5, "expertise");
//   expertiseSelect.selectedIndex = 0;
// });

// fluentSelect.addEventListener("change", (e) => {
//   addTag(e.target.value, fluentContainer, selectedFluents, 2, "fluent");
//   fluentSelect.selectedIndex = 0;
// });

// 👁️ Password toggle
document.querySelectorAll(".toggle-password").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const input = document.querySelector(toggle.getAttribute("toggle"));
    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = " 🙉";
    } else {
      input.type = "password";
      toggle.textContent = "🙈";
    }
  });
});


  function handleSelect(selectId, containerId, max, classType = '') {
    const select = document.getElementById(selectId);
    const container = document.getElementById(containerId);

    select.addEventListener('change', function () {
      const value = select.value;
      const text = select.options[select.selectedIndex].text;

      if (!value) return;

      const existing = container.querySelectorAll('.tag');
      if (existing.length >= max) {
        alert(`You can only select up to ${max}`);
        return;
      }

      if ([...existing].some(e => e.dataset.value === value)) return;

      const tag = document.createElement('div');
      tag.className = `tag ${classType ? value : 'fluent-tag'}`;
      tag.dataset.value = value;
      tag.innerHTML = `${text} <span>&times;</span>`;
      
      tag.querySelector('span').addEventListener('click', () => tag.remove());
      container.appendChild(tag);

      // Reset select
      select.value = '';
    });
  }

  function handleIndustrySelect() {
    const select = document.getElementById("editIndustry");
    const container = document.getElementById("selectedIndustryContainer");

    select.addEventListener("change", function () {
      const value = select.value;
      const text = select.options[select.selectedIndex].text;

      if (!value) return;

      const existing = container.querySelectorAll('.tag');
      if (existing.length >= 2) {
        alert("You can only select up to 2 industries");
        return;
      }

      if ([...existing].some(e => e.dataset.value === value)) return;

      const tag = document.createElement("div");
      tag.className = "tag industry-tag";
      tag.dataset.value = value;
      tag.innerHTML = `${text} <span>&times;</span>`;

      tag.querySelector("span").addEventListener("click", () => tag.remove());
      container.appendChild(tag);

      select.value = "";
    });
  }

  // Run everything on page load
  document.addEventListener('DOMContentLoaded', () => {
    handleSelect('editExpertise', 'selectedExpertiseContainer', 5, true);
    handleSelect('fluentIn', 'selectedFluentContainer', 2, false);
    handleIndustrySelect();
  });

  document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    clearErrors(); // Clear previous error messages
  
    // Get form values
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value.trim();
    const bio = document.getElementById("bio").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const experienceDescription = document.getElementById("experienceDescription").value.trim();
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
  
    const expertise = Array.from(document.querySelectorAll("#selectedExpertiseContainer .tag")).map(tag => tag.textContent.trim());
    const fluentIn = Array.from(document.querySelectorAll("#selectedFluentContainer .tag")).map(tag => tag.textContent.trim());
    const industry = Array.from(document.querySelectorAll("#selectedIndustryContainer .tag")).map(tag => tag.textContent.trim());
  
    let hasError = false;
  
    // Validations
    if (!name) {
      showError("name", "Name is required.");
      hasError = true;
    }
  
    if (!email) {
      showError("email", "Email is required.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "Enter a valid email.");
      hasError = true;
    }
  
    if (!phone) {
      showError("phone", "Phone number is required.");
      hasError = true;
    } else if (phone.length < 7 || phone.length > 15) {
      showError("phone", "Enter a valid phone number.");
      hasError = true;
    }
  
    if (!password) {
      showError("password", "Password is required.");
      hasError = true;
    }
  
    if (!confirmPassword) {
      showError("confirmPassword", "Confirm your password.");
      hasError = true;
    } else if (password !== confirmPassword) {
      showError("confirmPassword", "Passwords do not match.");
      hasError = true;
    }
  
    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
      showError("endDate", "End date cannot be earlier than start date.");
      hasError = true;
    }
  
    if (expertise.length === 0) {
      showError("expertise", "Select at least one expertise.");
      hasError = true;
    }
  
    if (fluentIn.length === 0) {
      showError("fluentIn", "Select at least one language.");
      hasError = true;
    }
  
    if (industry.length === 0) {
      showError("industry", "Select at least one industry.");
      hasError = true;
    }
  
    if (hasError) return; // Stop if any validation failed
  
    // Prepare data
    const payload = {
      name,
      role,
      bio,
      email,
      phone,
      password,
      confirmPassword,
      expertise,
      fluentIn,
      industry,
      experienceDescription,
      startDate,
      endDate
    };
  
    // Call the function
    await registerYouth(payload);
  });
  
  // ⬇ OUTSIDE the event listener — better scope and clarity
  async function registerYouth(payload) {
    try {
      const response = await fetch("http://localhost:5000/api/register/youth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      let result;
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error("Invalid JSON response:", jsonError);
        throw new Error("Invalid server response.");
      }
  
      if (response.ok) {
        alert("✅ Registration successful!"); // will show now
        console.log("Success:", result);
  
        // Slight delay to let alert show before redirect
        setTimeout(() => {
          window.location.href = "/login.html";
        }, 500);
      } else {
        console.warn("Server error:", result);
        showError("form", result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("🚨 Network error:", error);
      showError("form", error.message || "Something went wrong.");
    }
  }
  

  
  function showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + "Error");
    if (errorEl) {
      errorEl.textContent = message;
    }
  }
  
  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
  }




