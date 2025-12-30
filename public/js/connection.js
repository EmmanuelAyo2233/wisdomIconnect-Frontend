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
    const tabs = document.querySelectorAll(".connection-tab");
    const contentSections = document.querySelectorAll(".connection-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Add active class to the clicked tab
            this.classList.add("active");

            // Get the section to show
            const sectionToShow = this.getAttribute("data-section");

            // Hide all content sections
            contentSections.forEach(section => section.classList.add("hidden"));

            // Show the correct content
            document.getElementById(sectionToShow)?.classList.remove("hidden");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".dropdown-btn");
        const menu = dropdown.querySelector(".dropdown-menu");

        button.addEventListener("click", function (event) {
            event.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.querySelector(".dropdown-menu").classList.remove("show");
                }
            });

            menu.classList.toggle("show");
        });

        menu.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", function () {
                menu.querySelectorAll("li").forEach(li => {
                    li.classList.remove("active");
                    li.innerHTML = li.textContent; // Remove icon from others
                });

                this.classList.add("active");
                this.innerHTML = `<i class="bi bi-check-lg"></i> ${this.textContent}`; // Add Bootstrap check icon

                button.textContent = this.textContent;
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.querySelector(".dropdown-menu").classList.remove("show");
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let notificationIcon = document.getElementById("notificationIcon");
    let dropdown = document.getElementById("notiDropdown");

    // Toggle visibility on click
    notificationIcon.addEventListener("click", function (event) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && event.target !== notificationIcon) {
            dropdown.style.display = "none";
        }
    });
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
