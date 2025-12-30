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
  const token = localStorage.getItem("menteeToken"); // 👈 mentee token
  let userData = JSON.parse(localStorage.getItem("menteeData")); // 👈 cache key

  // If we already cached profile
  if (userData?.picture) {
    updateDashboardProfileImages(userData.picture);
  }

  // Fetch fresh from backend
  try {
    const res = await fetch("http://localhost:5000/api/v1/user/me", {
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


function joinCall() {
  // For now, just redirect to a placeholder page
  window.location.href = "/public/call.html";
}

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("menteeToken");
  const API_URL = "http://localhost:5000/api/v1/appointments";

  if (!token) {
    alert("Please log in first!");
    return;
  }

  // ✅ Define sections
  const sections = ["upcoming", "pending", "history"];

  // ✅ Add preloaders to all sections
  sections.forEach((id) => {
    document.getElementById(id).innerHTML = `
      <div class="preloader text-center p-4">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Loading ${id}...</p>
      </div>
    `;
  });

  try {
    const res = await fetch(`${API_URL}/mentee`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    console.log("📦 Full API Response:", data);

    // ✅ Hide preloaders and handle errors
   if (data.status !== "success" || !data.data || !data.data.length) {
  document.getElementById("upcoming").innerHTML = `<p class="text-center text-muted">No upcoming sessions</p>`;
  document.getElementById("pending").innerHTML = `<p class="text-center text-muted">No pending appointments</p>`;
  document.getElementById("history").innerHTML = `<p class="text-center text-muted">No history found</p>`;
  return;
}


    const appointments = data.data || [];

    // ✅ Clear all sections
    sections.forEach((id) => (document.getElementById(id).innerHTML = ""));

    // ✅ If no appointments at all
    if (!appointments.length) {
      document.getElementById("upcoming").innerHTML = `<p class="text-center text-muted">No upcoming sessions</p>`;
      document.getElementById("pending").innerHTML = `<p class="text-center text-muted">No pending appointments</p>`;
      document.getElementById("history").innerHTML = `<p class="text-center text-muted">No history found</p>`;
      return;
    }

    let hasUpcoming = false;
    let hasPending = false;
    let hasHistory = false;

    appointments.forEach((appt) => {
      let targetDiv;
const upcomingStatuses = ["approved", "confirmed", "accepted", "mentor-rescheduled"];
const pendingStatuses = ["pending"];
const historyStatuses = ["completed", "cancelled", "rejected"];

if (upcomingStatuses.includes(appt.status)) {
  targetDiv = document.getElementById("upcoming");
  hasUpcoming = true;
} else if (pendingStatuses.includes(appt.status)) {
  targetDiv = document.getElementById("pending");
  hasPending = true;
} else if (historyStatuses.includes(appt.status)) {
  targetDiv = document.getElementById("history");
  hasHistory = true;
} else {
  targetDiv = document.getElementById("history");
  hasHistory = true;
}


      const div = document.createElement("div");
      div.className =
        appt.status === "pending"
          ? "pending-session"
          : appt.status === "cancelled" || appt.status === "completed"
          ? "history-session position-relative"
          : "upcoming-session";

      const mentorName =
        appt.mentor?.user?.name || appt.mentor?.name || "Unknown Mentor";
      const menteeName =
        appt.mentee?.user?.name || appt.mentee?.name || "You";

      const deleteBtn =
        appt.status === "completed" || appt.status === "cancelled"
          ? `
          <button 
            class="btn btn-link text-danger position-absolute top-0 end-0 m-2 p-0 delete-history" 
            data-id="${appt.id}" 
            title="Delete from history"
          >
            <i class="bi bi-trash3-fill fs-5"></i>
          </button>`
          : "";

      div.innerHTML = `
        <div class="session-header">
          <span class="status ${appt.status}">
            ${appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
          </span>
          ${
            appt.status !== "completed" && appt.status !== "cancelled"
              ? `<button class="cancel-btn" onclick="cancelBooking(${appt.id})">Cancel</button>`
              : ""
          }
          ${deleteBtn}
        </div>

        <p><strong>Topic:</strong> ${appt.topic || "N/A"}</p>
        <p><strong>Mentor:</strong> ${mentorName}</p>
        <p><strong>Date:</strong> ${appt.date}</p>
        <p><strong>Start:</strong> ${appt.startTime}</p>
        <p><strong>End:</strong> ${appt.endTime}</p>
      

       ${
    appt.status === "accepted" || appt.status === "mentor-rescheduled" || appt.status === "approved"
      ? `<button class="call-btn" onclick="joinCall(${appt.id})">Join Call</button>`
      : ""
  }

    <p class="user">👤 ${menteeName}</p>
`
      
      ;



      

      targetDiv.appendChild(div);
    });

    // ✅ If specific sections have no data
    if (!hasUpcoming)
      document.getElementById("upcoming").innerHTML = `<p class="text-center text-muted">No upcoming sessions</p>`;
    if (!hasPending)
      document.getElementById("pending").innerHTML = `<p class="text-center text-muted">No pending appointments</p>`;
    if (!hasHistory)
      document.getElementById("history").innerHTML = `<p class="text-center text-muted">No history found</p>`;

    // ✅ Attach delete listener for history
    document.querySelectorAll(".delete-history").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        if (!confirm("Are you sure you want to delete this history?")) return;

        try {
          const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await res.json();

          if (res.ok) {
            btn.closest(".history-session").remove();
            if (!document.querySelector(".history-session")) {
              document.getElementById("history").innerHTML = `<p class="text-center text-muted">No history found</p>`;
            }
          } else {
            alert(data.message || "Failed to delete ❌");
          }
        } catch (err) {
          console.error("Delete error:", err);
          alert("Error deleting history ❌");
        }
      });
    });
  } catch (error) {
    console.error("🚨 Error fetching appointments:", error);
    sections.forEach((id) => {
      document.getElementById(id).innerHTML = `<p class="text-center text-danger">Failed to load ${id}</p>`;
    });
  }
});

// ✅ Cancel Booking
async function cancelBooking(id) {
  const confirmCancel = confirm("Are you sure you want to cancel this appointment?");
  if (!confirmCancel) return;

  const token = localStorage.getItem("menteeToken");
  const API_URL = `http://localhost:5000/api/v1/appointments/${id}/cancel`;

  try {
    const res = await fetch(API_URL, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    if (data.status === "success") {
      location.reload();
    } else {
      alert(`Failed to cancel appointment ❌ ${data.message}`);
    }
  } catch (error) {
    console.error("Cancel error:", error);
    alert("Error cancelling appointment ❌");
  }
}





document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("menteeToken");
  const loader = document.getElementById("loader");
  const sessionContent = document.getElementById("sessionContent");

  try {
    // Show loader
    loader.style.display = "flex";
    sessionContent.style.display = "none";

    const res = await fetch("http://localhost:5000/api/v1/appointments/mentee", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    // Hide loader
    loader.style.display = "none";
    sessionContent.style.display = "block";

    if (data.status === "success" && data.data.length > 0) {
      const appt = data.data[0]; // You can loop if you want to show multiple
      document.getElementById("topic").textContent = appt.topic || "No topic";
      document.getElementById("mentorName").textContent =
        appt.mentor?.name || "Unknown";
      document.getElementById("time").textContent = appt.date;
      document.getElementById("menteeName").textContent =
        appt.mentee?.name || "You";
    } else {
      sessionContent.innerHTML = `<p>No upcoming sessions found ❌</p>`;
    }
  } catch (error) {
    loader.style.display = "none";
    sessionContent.innerHTML = `<p>Failed to load session ❌</p>`;
    console.error("Error:", error);
  }
});
