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


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".booking-tab");
    const sections = document.querySelectorAll(".booking-content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"));
        // Hide all sections
        sections.forEach((s) => s.classList.add("hidden"));
  
        // Add active class to clicked tab
        tab.classList.add("active");
  
        // Show the correct section
        const sectionId = tab.getAttribute("data-section");
        document.getElementById(sectionId).classList.remove("hidden");
      });
    });
  });
  


  function cancelSession() {
    if (confirm("Are you sure you want to cancel this session?")) {
      document.querySelector(".upcoming-session").remove(); // Remove from UI
    }
  }
  

  function cancelPendingSession() {
    if (confirm("Are you sure you want to cancel this pending session?")) {
      document.querySelector(".pending-session").remove();
    }
  }
  
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



const rescheduleBtn = document.getElementById("rescheduleBtn");
const modal = document.getElementById("rescheduleModal");
const cancelModal = document.getElementById("cancelModal");
const form = document.getElementById("rescheduleForm");

rescheduleBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

cancelModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const date = document.getElementById("newDate").value;
  const time = document.getElementById("newTime").value;
  const reason = document.getElementById("reason").value;

  if (!date || !time || !reason) {
    alert("Please fill all fields!");
    return;
  }

  console.log({ date, time, reason });
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});



// show all preloaders
function showPreloaders() {
  const sections = ["upcoming", "pending", "history"];

  sections.forEach(id => {
    const section = document.getElementById(id);
    const preloader = section.querySelector(".preloader");
    const content = Array.from(section.children).filter(
      el => !el.classList.contains("preloader")
    );

    preloader.style.display = "flex";
    content.forEach(el => el.classList.add("content-hidden"));
  });
}

// hide all preloaders and reveal content
function hidePreloaders() {
  const sections = ["upcoming", "pending", "history"];

  sections.forEach(id => {
    const section = document.getElementById(id);
    const preloader = section.querySelector(".preloader");
    const content = Array.from(section.children).filter(
      el => !el.classList.contains("preloader")
    );

    preloader.style.display = "none";
    content.forEach(el => el.classList.remove("content-hidden"));
  });
}

// Example: show preloaders on DOM load and hide after 1.5s
document.addEventListener("DOMContentLoaded", () => {
  showPreloaders();
  setTimeout(hidePreloaders, 1500); // simulate loading
});


document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("mentorToken");
  const API_URL = "http://localhost:5000/api/v1/appointments";

  if (!token) {
    alert("Please log in first!");
    return;
  }

  const sections = ["upcoming", "pending", "history"];

  // ✅ Show preloaders in all sections
  sections.forEach((id) => {
    document.getElementById(id).innerHTML = `
      <div class="preloader text-center p-4">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Loading ${id}...</p>
      </div>
    `;
  });

  try {
    const res = await fetch(`${API_URL}/mentor`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    console.log("📦 Mentor API Response:", data);

    if (data.status !== "success" || !data.data || !data.data.length) {
      showEmptyStates();
      return;
    }

    const appointments = data.data;

    // ✅ Clear preloaders
    sections.forEach((id) => (document.getElementById(id).innerHTML = ""));

    let hasUpcoming = false,
      hasPending = false,
      hasHistory = false;

    appointments.forEach((appt) => {
      let targetDiv;

      if (appt.status === "pending") {
        targetDiv = document.getElementById("pending");
        hasPending = true;
      } else if (
        appt.status === "accepted" ||
        appt.status === "mentor-rescheduled" ||
        appt.status === "approved"
      ) {
        targetDiv = document.getElementById("upcoming");
        hasUpcoming = true;
      } else {
        targetDiv = document.getElementById("history");
        hasHistory = true;
      }

      const div = document.createElement("div");
      div.className =
        appt.status === "pending"
          ? "pending-session"
          : appt.status === "completed" || appt.status === "cancelled"
          ? "history-session"
          : "upcoming-session";

      const menteeName =
        appt.mentee?.user?.name || appt.mentee?.name || "Unknown Mentee";

      div.innerHTML = `
  <div class="session-header">
    <span class="status ${appt.status}">
      ${appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
    </span>
  </div>

  <p><strong>Topic:</strong> ${appt.topic || "N/A"}</p>
  <p><strong>Mentee:</strong> ${menteeName}</p>
  <p><strong>Date:</strong> ${appt.date}</p>
  <p><strong>Start:</strong> ${appt.startTime}</p>
  <p><strong>End:</strong> ${appt.endTime}</p>

  ${
    appt.status === "pending"
      ? `<div class="pending-actions">
          <button class="accept-btn" onclick="acceptAppointment(${appt.id})">✔ Accept</button>
          <button class="reject-btn" onclick="rejectAppointment(${appt.id})">✖ Reject</button>
          <button class="reschedule-btn" onclick="openRescheduleModal(${appt.id})">📅 Reschedule</button>
        </div>`
      : ""
  }

  ${
    appt.status === "accepted" || appt.status === "mentor-rescheduled" || appt.status === "approved"
      ? `<button class="call-btn" onclick="joinCall(${appt.id})">Join Call</button>`
      : ""
  }


   <p class="user">👤 ${menteeName}</p>

`;

      targetDiv.appendChild(div);
    });

    // ✅ Empty states if no data
    if (!hasUpcoming)
      document.getElementById("upcoming").innerHTML =
        `<p class="text-center text-muted">No upcoming sessions</p>`;
    if (!hasPending)
      document.getElementById("pending").innerHTML =
        `<p class="text-center text-muted">No pending appointments</p>`;
    if (!hasHistory)
      document.getElementById("history").innerHTML =
        `<p class="text-center text-muted">No history found</p>`;
  } catch (error) {
    console.error("🚨 Error fetching mentor appointments:", error);
    sections.forEach((id) => {
      document.getElementById(id).innerHTML = `<p class="text-center text-danger">Failed to load ${id}</p>`;
    });
  }
});

function showEmptyStates() {
  document.getElementById("upcoming").innerHTML =
    `<p class="text-center text-muted">No upcoming sessions</p>`;
  document.getElementById("pending").innerHTML =
    `<p class="text-center text-muted">No pending appointments</p>`;
  document.getElementById("history").innerHTML =
    `<p class="text-center text-muted">No history found</p>`;
}

// ✅ Accept Appointment
async function acceptAppointment(id) {
  const token = localStorage.getItem("mentorToken");
  try {
    const res = await fetch(`http://localhost:5000/api/v1/appointments/${id}/accept`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    if (data.status === "success") {
      alert("Appointment accepted ✅");
      location.reload();
    } else {
      alert(`Failed to accept ❌ ${data.message}`);
    }
  } catch (error) {
    console.error("Accept error:", error);
    alert("Error accepting appointment ❌");
  }
}

// ✅ Reject Appointment
async function rejectAppointment(id) {
  const token = localStorage.getItem("mentorToken");
  const confirmReject = confirm("Are you sure you want to reject this appointment?");
  if (!confirmReject) return;

  try {
    const res = await fetch(`http://localhost:5000/api/v1/appointments/${id}/reject`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    if (data.status === "success") {
      alert("Appointment rejected ❌");
      location.reload();
    } else {
      alert(`Failed to reject ❌ ${data.message}`);
    }
  } catch (error) {
    console.error("Reject error:", error);
    alert("Error rejecting appointment ❌");
  }
}

// ✅ Open Reschedule Modal
function openRescheduleModal(id) {
  const modal = document.getElementById("rescheduleModal");
  modal.style.display = "flex";
  modal.setAttribute("data-id", id);
}

// ✅ Close Modal
document.getElementById("cancelModal").addEventListener("click", () => {
  document.getElementById("rescheduleModal").style.display = "none";
});

// ✅ Submit Reschedule
document.getElementById("rescheduleForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("mentorToken");
  const modal = document.getElementById("rescheduleModal");
  const id = modal.getAttribute("data-id");
  const newDate = document.getElementById("newDate").value;
  const newTime = document.getElementById("newTime").value;
  const reason = document.getElementById("reason").value;

  try {
    const res = await fetch(`http://localhost:5000/api/v1/appointments/${id}/mentor-reschedule`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ date: newDate, startTime: newTime, reason }),
    });

    const data = await res.json();

    if (data.status === "success") {
      alert("Appointment rescheduled ✅");
      location.reload();
    } else {
      alert(`Failed to reschedule ❌ ${data.message}`);
    }
  } catch (error) {
    console.error("Reschedule error:", error);
    alert("Error rescheduling appointment ❌");
  }
});



function joinCall() {
  // For now, just redirect to a placeholder page
  window.location.href = "/public/call.html";
}








document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("mentorToken"); // or menteeToken if for mentee
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
