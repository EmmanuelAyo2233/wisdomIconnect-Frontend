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
  const token = localStorage.getItem("mentorToken");
  let userData = JSON.parse(localStorage.getItem("userData"));

  // If we already cached profile
  if (userData?.picture) {
    updateDashboardProfileImages(userData.picture);
  }

  // Also fetch fresh from backend to be sure
  try {
    const res = await fetch("http://localhost:5000/api/v1/user/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (data.status === "success") {
      userData = data.data;

      // Save in localStorage for next reload
      localStorage.setItem("userData", JSON.stringify(userData));

      // Update everywhere
      if (userData.picture) {
        updateDashboardProfileImages(userData.picture);
      }
    }
  } catch (err) {
    console.error("Failed to fetch user data for dashboard:", err);
  }
});




document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("mentorToken");

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
    console.log("User API result:", result);

    if (res.ok && result.status === "success") {
      const user = result.data;
      const fullName = user.name || "Unknown User";

      // Replace text in both sidebar + mobile
      const profileNameEls = document.querySelectorAll(".profile-name");
      const hoverProfileNameEls = document.querySelectorAll(".hover-profile-name");

      profileNameEls.forEach(el => el.textContent = fullName);
      hoverProfileNameEls.forEach(el => el.textContent = fullName);
    } else {
      console.error("Failed to fetch user details:", result.message);
    }
  } catch (err) {
    console.error("Error fetching user details:", err);
  }
});
