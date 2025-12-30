console.log("Mentor logout script loaded");

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtns = document.querySelectorAll("#logout");
  console.log("Logout buttons found:", logoutBtns.length);

  logoutBtns.forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      console.log("Mentor logout clicked");

      const token = localStorage.getItem("mentorToken");

      try {
        const res = await fetch("http://localhost:5000/api/v1/auth/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        const result = await res.json();
        console.log("Logout response:", result);

        // Clear token regardless of backend response
        localStorage.removeItem("mentorToken");
        window.location.href = "/public/login.html";

      } catch (err) {
        console.error("Logout request failed:", err);
        // Fallback clear
        localStorage.removeItem("mentorToken");
        window.location.href = "/public/login.html";
      }
    });
  });
});
