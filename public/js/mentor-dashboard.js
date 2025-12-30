document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.bottom-nav .nav-list li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            
            navLinks.forEach(nav => nav.classList.remove('active'));

            this.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("mentorToken");
  const bannerEl = document.getElementById("banner");
  const bannerIcon = document.getElementById("banner-icon");
  const bannerMsg = document.getElementById("banner-text");
  const bannerClose = document.getElementById("banner-close");

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

    if (res.ok && result.status === "success") {
      const user = result.data;

      // Welcome message
      const firstName = user.name ? user.name.split(" ")[0] : "";
      document.getElementById("welcome-text").textContent =
        `Welcome 👋 ${firstName}`;

      // --- Banner logic ---
      let bannerText = null;
      let bannerType = "info";

      if (user.userType === "mentor") {
        if (user.status === "pending") {
          bannerText = "Your mentor account is under review. You’re not visible in search or bookings yet.";
          bannerType = "warning";
        } else if (user.status === "approved") {
          bannerText = "You are approved! You can now create sessions and start mentoring.";
          bannerType = "success";
        }
      }

      if (bannerText) {
        bannerMsg.textContent = bannerText;

        // icon & styling
        switch (bannerType) {
          case "warning":
            bannerIcon.textContent = "⚠️";
            bannerEl.className = "banner warning";
            break;
          case "success":
            bannerIcon.textContent = "✅";
            bannerEl.className = "banner success";
            break;
          case "info":
            bannerIcon.textContent = "ℹ️";
            bannerEl.className = "banner info";
            break;
        }

        bannerEl.style.display = "flex";
      }

      // --- Close button ---
      bannerClose.addEventListener("click", () => {
        bannerEl.style.display = "none";
      });

    } else {
      console.error("Failed to fetch user details:", result.message);
    }

  } catch (err) {
    console.error("Error fetching user details:", err);
  }
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




document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const sidebar = document.getElementById('sidebar');

    function adjustLayout() {
        if (window.innerWidth <= 1190) {
            sidebar.style.display = 'none';
            mainContent.style.flex = '0 0 100%';
            mainContent.style.maxWidth = '100%';
        } else {
            sidebar.style.display = 'block'; 
            mainContent.style.flex = '0 0 auto';
            mainContent.style.maxWidth = '66.6667%';
        }
    }

   
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});




const weekRangeElement = document.getElementById("week-range");
const calendarGridElement = document.getElementById("calendar-grid");
const sessionInfoElement = document.querySelector(".session-text"); // Target the session text element

let currentDate = new Date();

// Function to get the start and end of the week
function getWeekDates(date) {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Sunday
    const dates = Array.from({ length: 7 }, (_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        return day;
    });
    return dates;
}

function renderCalendar(date) {
    const weekDates = getWeekDates(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (weekRangeElement) {
        weekRangeElement.textContent = `${formatDate(weekDates[0])} - ${formatDate(weekDates[6])}`;
    }

    if (calendarGridElement) {
        calendarGridElement.innerHTML = weekDates
            .map(
                (d, i) =>
                    `<div class="day ${
                        d.getTime() === today.getTime() ? "current-day" : ""
                    }">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]}<br>${d.getDate()}</div>`
            )
            .join("");
    }

    if (sessionInfoElement) {
        sessionInfoElement.textContent = weekDates.some((d) => d.getDate() === 18)
            ? "You have an upcoming session!"
            : "You have no upcoming sessions.";
    }
}

function formatDate(date) {
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString(undefined, options);
}

document.getElementById("prev-week").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() - 7);
    renderCalendar(currentDate);
});

document.getElementById("next-week").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() + 7);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);




const profilePic = document.getElementById('profilePic');
const hoverMenu = document.getElementById('hoverMenu');

// Toggle hover menu on profile picture click
profilePic.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the click event from bubbling up
    const isVisible = hoverMenu.dataset.visible === 'true';
    hoverMenu.dataset.visible = !isVisible; // Toggle the data-visible attribute
});

// Hide hover menu when clicking anywhere else
document.addEventListener('click', () => {
    hoverMenu.dataset.visible = 'false';
});

// Prevent hover menu from closing when clicking inside it
hoverMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// JavaScript to toggle active state and line visibility
// const wisdomKeepersLink = document.getElementById('wisdom-keepers-link');
// const groupSessionsLink = document.getElementById('group-sessions-link');
// const wisdomLine = document.getElementById('wisdom-keepers-line');
// const groupLine = document.getElementById('group-sessions-line');

// // Set initial active state
// wisdomKeepersLink.classList.add('active');
// wisdomLine.style.width = '50%';
// groupLine.style.width = '0';

// // Add event listeners for both links
// wisdomKeepersLink.addEventListener('click', (e) => {
//   e.preventDefault(); // Prevent the default behavior (page refresh)
//   wisdomKeepersLink.classList.add('active');
//   groupSessionsLink.classList.remove('active');
//   wisdomLine.style.width = '50%';
//   groupLine.style.width = '0';
// });

// groupSessionsLink.addEventListener('click', (e) => {
//   e.preventDefault(); // Prevent the default behavior (page refresh)
//   groupSessionsLink.classList.add('active');
//   wisdomKeepersLink.classList.remove('active');
//   groupLine.style.width = '50%';
//   wisdomLine.style.width = '0';
// });


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


//  const btn = document.querySelector('.dropdown-btn');
//   const menu = document.querySelector('.dropdown-menu');

//   btn.addEventListener('click', () => {
//     menu.classList.toggle('show');
//   });

//   document.addEventListener('click', (e) => {
//     if (!btn.contains(e.target) && !menu.contains(e.target)) {
//       menu.classList.remove('show');
//     }
//   });




  // ===================
// Dashboard Profile Loader
// ===================

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
