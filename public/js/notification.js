document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.bottom-nav .nav-list li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            navLinks.forEach(nav => nav.classList.remove('active'));

            this.classList.add('active');
        });
    });
});

const menuToggle = document.getElementById('menuToggle');
const slidingMenu = document.getElementById('slidingMenu');
const cancelBtn = document.getElementById('cancelBtn');
const body = document.body;

menuToggle.addEventListener('click', () => {
    slidingMenu.classList.toggle('active');
    body.classList.toggle('dimmed');
});

cancelBtn.addEventListener('click', () => {
        slidingMenu.classList.remove('active');
    });


body.addEventListener('click', (event) => {
    if (!slidingMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        slidingMenu.classList.remove('active'); 
    }
});



const profilePic = document.getElementById('profilePic');
const hoverMenu = document.getElementById('hoverMenu');


profilePic.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = hoverMenu.dataset.visible === 'true';
    hoverMenu.dataset.visible = !isVisible; 
});

document.addEventListener('click', () => {
    hoverMenu.dataset.visible = 'false';
});


hoverMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});


document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const hiddenText = this.previousElementSibling;
            
            if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
                hiddenText.style.display = "block"; // Show extra details
                this.textContent = "Read Less";
            } else {
                hiddenText.style.display = "none"; // Hide extra details
                this.textContent = "Read More";
            }
        });
    });
});



document.getElementById("show-more-btn").addEventListener("click", function() {
    let hiddenNotifications = document.querySelectorAll(".hidden-notification");

    hiddenNotifications.forEach(function(notification) {
        notification.style.display = "block";
    });

    // Hide the button after clicking
    this.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    let messageBox = document.getElementById("messageBox");
    let messageIcon = document.getElementById("messageIcon");

    if (messageBox && messageIcon) {
        function toggleMessageBox(event) {
            event.stopPropagation();
            if (messageBox.classList.contains("show")) {
                messageBox.classList.remove("show");
                setTimeout(() => {
                    messageBox.style.display = "none";
                }, 300); // Wait for animation to finish
            } else {
                messageBox.style.display = "block";
                setTimeout(() => {
                    messageBox.classList.add("show");
                }, 10); // Slight delay for smooth effect
            }
        }

        messageIcon.addEventListener("click", toggleMessageBox);

        document.addEventListener("click", function (event) {
            if (!messageBox.contains(event.target) && event.target !== messageIcon) {
                messageBox.classList.remove("show");
                setTimeout(() => {
                    messageBox.style.display = "none";
                }, 300);
            }
        });
    }
});





// Utility: Update all profile images across dashboard
function updateDashboardProfileImages(imageUrl) {
  const profileImgs = document.querySelectorAll(
    ".profile-pic1, .profile-img, .hover-profile-pic"
  );

  profileImgs.forEach((img) => {
    img.src = `${imageUrl}?t=${Date.now()}`; // prevent caching old one
  });
}

// On Page Load
document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("menteeToken"); // 👈 mentee token
  let userData = JSON.parse(localStorage.getItem("menteeData")); // 👈 cache key

  // If we already cached profile
  if (userData?.picture) {
    updateDashboardProfileImages(userData.picture);
  }

  // Fetch fresh from backend
  try {
    const res = await fetch("http://localhost:5000/api/v1/mentee/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (data.status === "success") {
      userData = data.data;

      // Save in localStorage for next reload
      localStorage.setItem("menteeData", JSON.stringify(userData));

      // Update everywhere
      if (userData.picture) {
        updateDashboardProfileImages(userData.picture);
      }
    }
  } catch (err) {
    console.error("Failed to fetch mentee data for dashboard:", err);
  }
});



document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("menteeToken");

  if (!token) {
    window.location.href = "/public/login.html";
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/v1/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    const result = await res.json();
    console.log("Mentee profile result:", result);

    if (res.ok && result.status === "success") {
      const user = result.data;
      const fullName = user.name || "Unknown User";

      // Update sidebar name
      document.querySelectorAll(".profile-name").forEach(el => {
        el.textContent = fullName;
      });

      // Update mobile/hover name
      document.querySelectorAll(".hover-profile-name").forEach(el => {
        el.textContent = fullName;
      });

    } else {
      console.error("Failed to fetch mentee details:", result.message);
      localStorage.removeItem("menteeToken");
    }
  } catch (err) {
    console.error("Error fetching mentee details:", err);
    localStorage.removeItem("menteeToken");
  }
});



document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("menteeToken"); // or menteeToken if for mentee
  const API_URL = "http://localhost:5000/api/v1/appointments"; // adjust if notifications API is separate

  if (!token) return;

  const notificationList = document.getElementById("notification-list");
  const notificationCount = document.getElementById("notificationCount");

  try {
    const res = await fetch(`${API_URL}/mentor/notifications`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (data.status !== "success" || !data.data) return;

    const notifications = data.data;

    // Update badge count
    notificationCount.textContent = notifications.length;

    // Clear current list
    notificationList.innerHTML = "";

    // Populate notifications
    notifications.forEach((notif) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <div class="notif"><i class="bi bi-bell notification"></i></div>
          <strong>Notification:</strong> 
          <i class="bi bi-${notif.icon || "info-circle-fill"} before-icon"></i> 
          ${notif.message}
          <span class="hidden-text">${notif.details || ""}</span>
          <a href="${notif.link || "#"}" class="read-more">Read More</a>
        </div>
        <hr>
      `;
      notificationList.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching notifications:", err);
  }
});
