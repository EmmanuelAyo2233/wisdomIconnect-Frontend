document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#logout").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Clear mentee tokens + session data
      localStorage.removeItem("menteeToken");
      localStorage.removeItem("activeToken");
      localStorage.removeItem("bio");
      localStorage.removeItem("name");

      // Redirect to mentee login page
      window.location.href = "/public/login.html";
    });
  });
});
