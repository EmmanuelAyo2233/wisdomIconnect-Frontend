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


document.getElementById("notificationIcon").addEventListener("click", function (event) {
    let dropdown = document.getElementById("notiDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });
  
  document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("notiDropdown");
    if (!dropdown.contains(event.target) && event.target.id !== "notificationIcon") {
        dropdown.style.display = "none";
    }
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
    


  const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all buttons
    tabs.forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');

    // Hide all content
    contents.forEach(c => c.style.display = 'none');

    // Show selected content
    document.getElementById(tab.dataset.tab).style.display = 'block';
  });
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

// State management
const currentDate = new Date()
let selectedDate = null
const availabilitySlots = []
const sessions = []
let editingSlotIndex = null

// Bootstrap Modal Import
const bootstrap = window.bootstrap

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  renderAvailabilityList()
  renderSessionsTable()
})

// Calendar Integration
function connectCalendar() {
  alert("Calendar integration feature coming soon!")
  skipCalendarIntegration()
}

function skipCalendarIntegration() {
  document.getElementById("calendarIntegrationSection").style.display = "none"
  document.getElementById("calendarSection").style.display = "block"
  renderCalendar()
}

function connectExternalCalendar(provider) {
  const providerName = provider === "google" ? "Google Calendar" : "Outlook"
  alert(`${providerName} integration coming soon! This will allow automatic syncing of your availability.`)
}

// Calendar Navigation
function previousMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1)
  renderCalendar()
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1)
  renderCalendar()
}

// Render Calendar
function renderCalendar() {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // Update header
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  document.getElementById("currentMonthYear").textContent = `${monthNames[month]} ${year}`

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  // Clear calendar
  const calendar = document.getElementById("calendar")
  calendar.innerHTML = ""

  // Add day headers
  const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  dayHeaders.forEach((day) => {
    const header = document.createElement("div")
    header.className = "calendar-day-header"
    header.textContent = day
    calendar.appendChild(header)
  })

  // Add previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = document.createElement("div")
    day.className = "calendar-day other-month"
    day.textContent = daysInPrevMonth - i
    calendar.appendChild(day)
  }

  // Add current month days
  const today = new Date()
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div")
    day.className = "calendar-day"
    day.textContent = i

    const dayDate = new Date(year, month, i)

    // Disable past dates
    if (dayDate <= today.setHours(0, 0, 0, 0)) {
      day.classList.add("disabled")
    } else {
      day.onclick = () => selectDate(year, month, i)
    }

    // Highlight selected date
    if (
      selectedDate &&
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === i
    ) {
      day.classList.add("selected")
    }

    calendar.appendChild(day)
  }

  // Add next month days to fill grid
  const totalCells = calendar.children.length - 7 // Subtract headers
  const remainingCells = 42 - totalCells - 7 // 6 rows * 7 days - headers
  for (let i = 1; i <= remainingCells; i++) {
    const day = document.createElement("div")
    day.className = "calendar-day other-month"
    day.textContent = i
    calendar.appendChild(day)
  }
}

// Select Date
function selectDate(year, month, day) {
  selectedDate = new Date(year, month, day)
  renderCalendar()

  // Show time selection
  const timeSelection = document.getElementById("timeSelection")
  timeSelection.style.display = "block"

  const options = { month: "short", day: "numeric", year: "numeric" }
  document.getElementById("selectedDate").textContent = selectedDate.toLocaleDateString("en-US", options)

  // Clear previous inputs if not editing
  if (editingSlotIndex === null) {
    document.getElementById("startTime").value = ""
    document.getElementById("endTime").value = ""
  }
}

// Save Slot
function saveSlot() {
  const startTime = document.getElementById("startTime").value
  const endTime = document.getElementById("endTime").value

  if (!startTime || !endTime) {
    alert("Please select both start and end times")
    return
  }

  if (startTime >= endTime) {
    alert("End time must be after start time")
    return
  }

  const slot = {
    date: new Date(selectedDate),
    startTime: startTime,
    endTime: endTime,
    status: "Available",
  }

  if (editingSlotIndex !== null) {
    availabilitySlots[editingSlotIndex] = slot
    sessions[editingSlotIndex] = slot
    editingSlotIndex = null
  } else {
    availabilitySlots.push(slot)
    sessions.push(slot)
  }

  // Update displays
  renderAvailabilityList()
  renderSessionsTable()

  // Close modal
  const modal = bootstrap.Modal.getInstance(document.getElementById("availabilityModal"))
  modal.hide()

  // Reset
  document.getElementById("timeSelection").style.display = "none"
  selectedDate = null

  alert("Availability slot saved successfully!")
}

function editSlot(index) {
  editingSlotIndex = index
  const slot = availabilitySlots[index]

  // Open modal
  const modal = new bootstrap.Modal(document.getElementById("availabilityModal"))
  modal.show()

  // Skip calendar integration screen
  skipCalendarIntegration()

  // Set the date
  selectedDate = new Date(slot.date)
  currentDate.setMonth(selectedDate.getMonth())
  currentDate.setFullYear(selectedDate.getFullYear())
  renderCalendar()

  // Show time selection with existing values
  const timeSelection = document.getElementById("timeSelection")
  timeSelection.style.display = "block"

  const options = { month: "short", day: "numeric", year: "numeric" }
  document.getElementById("selectedDate").textContent = selectedDate.toLocaleDateString("en-US", options)

  document.getElementById("startTime").value = slot.startTime
  document.getElementById("endTime").value = slot.endTime
}

function deleteSlot(index) {
  if (confirm("Are you sure you want to delete this availability slot?")) {
    availabilitySlots.splice(index, 1)
    sessions.splice(index, 1)
    renderAvailabilityList()
    renderSessionsTable()
  }
}

function renderAvailabilityList() {
  const list = document.getElementById("availabilityList")

  if (availabilitySlots.length === 0) {
    list.innerHTML = '<p class="text-muted text-center">No availability set yet</p>'
    return
  }

  list.innerHTML = ""

  availabilitySlots.forEach((slot, index) => {
    const item = document.createElement("div")
    item.className = "availability-item"

    const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" }
    const dateStr = slot.date.toLocaleDateString("en-US", options)

    item.innerHTML = `
      <div class="availability-item-date">${dateStr}</div>
      <div class="availability-item-time">${slot.startTime} - ${slot.endTime}</div>
      <div class="availability-item-actions">
        <button class="btn btn-edit" onclick="editSlot(${index})">Edit</button>
        <button class="btn btn-delete" onclick="deleteSlot(${index})">Delete</button>
      </div>
    `

    list.appendChild(item)
  })
}

// Render Sessions Table
function renderSessionsTable() {
  const tbody = document.getElementById("sessionsTableBody")

  if (sessions.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">No sessions yet</td></tr>'
    return
  }

  tbody.innerHTML = ""

  sessions.forEach((session) => {
    const row = document.createElement("tr")

    const options = { weekday: "short", month: "short", day: "numeric", year: "numeric" }
    const dateStr = session.date.toLocaleDateString("en-US", options)
    const timeStr = `${session.startTime} - ${session.endTime}`

    let statusClass = "status-available"
    if (session.status === "Booked") statusClass = "status-booked"
    if (session.status === "Pending") statusClass = "status-pending"

    row.innerHTML = `
            <td>${dateStr}</td>
            <td>${timeStr}</td>
            <td><span class="status-badge ${statusClass}">${session.status}</span></td>
        `

    tbody.appendChild(row)
  })
}

// Render Calendar Display (in Availability tab)
function renderCalendarDisplay() {
  const display = document.getElementById("calendarDisplay")

  if (availabilitySlots.length === 0) {
    display.innerHTML = '<p class="text-muted">No availability set yet. Click "Set Availability" to get started.</p>'
    return
  }

  // Create a mini calendar view showing availability
  display.innerHTML = '<div class="row g-2"></div>'
  const container = display.querySelector(".row")

  availabilitySlots.forEach((slot) => {
    const col = document.createElement("div")
    col.className = "col-md-4"

    const options = { month: "short", day: "numeric" }
    const dateStr = slot.date.toLocaleDateString("en-US", options)

    col.innerHTML = `
            <div class="availability-item">
                <div class="availability-item-date">${dateStr}</div>
                <div class="availability-item-time">${slot.startTime} - ${slot.endTime}</div>
            </div>
        `

    container.appendChild(col)
  })
}

// Reset modal when closed
// document.getElementById("availabilityModal").addEventListener("hidden.bs.modal", () => {
//   document.getElementById("calendarIntegrationSection").style.display = "block"
//   document.getElementById("calendarSection").style.display = "none"
//   document.getElementById("timeSelection").style.display = "none"
//   selectedDate = null
//   editingSlotIndex = null
// })



// ===============================
// Mentor Availability Management
// ===============================
const API_BASE = "http://localhost:5000/api/v1/availability";
let editingSlotId = null;

// 🔹 Load mentor info on page load
document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("mentorToken");
  if (!token) {
    alert("⚠️ Please log in again");
    return;
  }

  try {
    // Get mentor info
    const res = await fetch("http://localhost:5000/api/v1/user/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok && data?.data?.id) {
      localStorage.setItem("mentorId", data.data.id);
      fetchAvailability();
      fetchSchedule();
    } else {
      alert("⚠️ Could not verify mentor. Please log in again.");
    }
  } catch (err) {
    console.error("Error fetching mentor data:", err);
  }

  // Auto-calc duration when times change
  document.getElementById("startTime").addEventListener("change", calculateDuration);
  document.getElementById("endTime").addEventListener("change", calculateDuration);
});

// 🔹 Calculate duration
function calculateDuration() {
  const start = document.getElementById("startTime").value;
  const end = document.getElementById("endTime").value;
  const durationDisplay = document.getElementById("durationDisplay");

  if (!start || !end) {
    durationDisplay.textContent = "";
    return;
  }

  const [startHour, startMin] = start.split(":").map(Number);
  const [endHour, endMin] = end.split(":").map(Number);
  const startDate = new Date(0, 0, 0, startHour, startMin);
  const endDate = new Date(0, 0, 0, endHour, endMin);

  let diff = (endDate - startDate) / (1000 * 60);
  if (diff < 0) diff += 24 * 60;

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  durationDisplay.textContent = `⏱ Duration: ${hours} hr${hours !== 1 ? "s" : ""} ${minutes} min`;
}

// 🔹 Validate slot input
function validateSlot(selectedDate, startTime, endTime) {
  const now = new Date();
  const slotDate = new Date(selectedDate + "T00:00");

  if (slotDate < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
    alert("⚠️ You cannot select a past date!");
    return false;
  }
  if (startTime >= endTime) {
    alert("⚠️ Start time must be before end time!");
    return false;
  }
  return true;
}

// 🔹 Save or update slot
async function saveSlot() {
  const selectedDate = document.getElementById("selectedDate").textContent.trim();
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const token = localStorage.getItem("mentorToken");

  if (!token) return alert("Please log in again ⚠️");
  if (!selectedDate || !startTime || !endTime) return alert("Please select date and time ⚠️");
  if (!validateSlot(selectedDate, startTime, endTime)) return;

  const day = new Date(selectedDate).toLocaleDateString("en-US", { weekday: "long" });
  const payload = { date: selectedDate, day, startTime, endTime, status: "available" };

  const method = editingSlotId ? "PUT" : "POST";
  const url = editingSlotId ? `${API_BASE}/${editingSlotId}` : API_BASE;

  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
      alert(editingSlotId ? "✅ Slot updated!" : "✅ Slot added!");
      fetchAvailability();
      fetchSchedule();
      const modal = bootstrap.Modal.getInstance(document.getElementById("availabilityModal"));
      modal.hide();
      resetModal();
    } else alert(`❌ ${data.message}`);
  } catch (err) {
    console.error("Error saving slot:", err);
    alert("Failed to save slot ❌");
  }
}

// 🔹 Fetch all availability slots for logged-in mentor
async function fetchAvailability() {
  const list = document.getElementById("availabilityList");
  const currentList = document.getElementById("currentAvailability");
  const token = localStorage.getItem("mentorToken");

  list.innerHTML = `<p class="text-muted text-center">Loading...</p>`;
  if (currentList) currentList.innerHTML = `<p class="text-muted text-center">Loading...</p>`;

  try {
    const res = await fetch(`${API_BASE}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    if (res.ok && Array.isArray(data.data)) {
      const today = new Date();

      const validSlots = data.data.filter(slot => {
        const slotDate = new Date(slot.date);
        return slotDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
      });

      validSlots.sort((a, b) => new Date(`${a.date}T${a.startTime}`) - new Date(`${b.date}T${b.startTime}`));

      list.innerHTML = validSlots.length
        ? validSlots
            .map(
              slot => `
          <div class="availability-item d-flex justify-content-between align-items-center p-2 mb-2 rounded bg-light">
            <div>
              <strong>${slot.day}</strong> — ${slot.date}<br>
              <small>${slot.startTime} - ${slot.endTime}</small>
            </div>
            <div>
              <button class="btn btn-sm btn-outline-primary" 
                onclick="editAvailability(${slot.id}, '${slot.date}', '${slot.startTime}', '${slot.endTime}')">
                Edit
              </button>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteAvailability(${slot.id})">
                Delete
              </button>
            </div>
          </div>`
            )
            .join("")
        : `<p class="text-muted text-center">No upcoming availability</p>`;

      if (currentList) {
        const nextFour = validSlots.slice(0, 4);
        currentList.innerHTML = nextFour.length
          ? nextFour
              .map(
                slot => `
            <div class="current-slot p-2 mb-2 bg-success-subtle rounded text-center">
              <strong>${slot.day}</strong> — ${slot.date}<br>
              <small>${slot.startTime} - ${slot.endTime}</small>
            </div>`
              )
              .join("")
          : `<p class="text-muted text-center">No upcoming slots</p>`;
      }
    } else {
      list.innerHTML = `<p class="text-muted text-center">No availability yet</p>`;
      if (currentList) currentList.innerHTML = `<p class="text-muted text-center">No upcoming slots</p>`;
    }
  } catch (err) {
    console.error("Error fetching availability:", err);
    list.innerHTML = `<p class="text-muted text-center">Failed to load availability ❌</p>`;
    if (currentList) currentList.innerHTML = `<p class="text-muted text-center">Failed to load ❌</p>`;
  }
}

// 🔹 Edit slot
function editAvailability(id, date, start, end) {
  editingSlotId = id;
  document.getElementById("calendarIntegrationSection").style.display = "none";
  document.getElementById("calendarSection").style.display = "block";
  document.getElementById("timeSelection").style.display = "block";
  document.getElementById("selectedDate").textContent = date;
  document.getElementById("startTime").value = start;
  document.getElementById("endTime").value = end;
  calculateDuration();

  const modal = new bootstrap.Modal(document.getElementById("availabilityModal"));
  modal.show();
}

// 🔹 Delete slot
async function deleteAvailability(id) {
  const token = localStorage.getItem("mentorToken");
  if (!confirm("Delete this slot?")) return;
  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (res.ok) {
      alert("✅ Slot deleted!");
      fetchAvailability();
      fetchSchedule();
    } else alert(`❌ ${data.message}`);
  } catch (err) {
    console.error(err);
  }
}

// 🔹 Reset modal
function resetModal() {
  editingSlotId = null;
  document.getElementById("selectedDate").textContent = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";
  document.getElementById("durationDisplay").textContent = "";
  document.getElementById("calendarIntegrationSection").style.display = "block";
  document.getElementById("calendarSection").style.display = "none";
}

// 🔹 Fetch schedule table
async function fetchSchedule() {
  const tbody = document.getElementById("sessionsTableBody");
  if (!tbody) return;
  const token = localStorage.getItem("mentorToken");

  try {
    const res = await fetch(`${API_BASE}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    if (res.ok && Array.isArray(data.data)) {
      const today = new Date();
      const upcoming = data.data.filter(slot => {
        const slotDate = new Date(slot.date);
        return slotDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
      });

      upcoming.sort((a, b) => new Date(`${a.date}T${a.startTime}`) - new Date(`${b.date}T${b.startTime}`));

      tbody.innerHTML = upcoming.length
        ? upcoming
            .map(
              slot => `
          <tr>
            <td>${slot.date}</td>
            <td>${slot.startTime} - ${slot.endTime}</td>
            <td>${slot.status}</td>
          </tr>`
            )
            .join("")
        : `<tr><td colspan="3" class="text-center text-muted">No sessions yet</td></tr>`;
    } else {
      tbody.innerHTML = `<tr><td colspan="3" class="text-center text-muted">No sessions yet</td></tr>`;
    }
  } catch (err) {
    console.error(err);
  }
}



// 🔹 Fetch schedule table
// async function fetchSchedule(mentorId) {
//   const tbody = document.getElementById("sessionsTableBody");
//   if (!tbody) return;

//   try {
//     const res = await fetch(`${API_BASE}/${mentorId}`);
//     const data = await res.json();

//     if (res.ok && Array.isArray(data.data) && data.data.length > 0) {
//       const upcoming = data.data.filter(slot => new Date(slot.date) >= new Date());
//       upcoming.sort((a, b) => new Date(`${a.date}T${a.startTime}`) - new Date(`${b.date}T${b.startTime}`));

//       tbody.innerHTML = upcoming
//         .map(slot => `
//           <tr>
//             <td>${slot.date}</td>
//             <td>${slot.startTime} - ${slot.endTime}</td>
//             <td>${slot.status}</td>
//           </tr>`).join("");
//     } else {
//       tbody.innerHTML = `<tr><td colspan="3" class="text-center text-muted">No sessions yet</td></tr>`;
//     }
//   } catch (err) {
//     console.error("Error fetching schedule:", err);
//   }
// }

// 🔹 Fetch schedule into “All Sessions”
// async function fetchSchedule(mentorId) {
//   const tbody = document.getElementById("sessionsTableBody");
//   if (!tbody) return;

//   try {
//     const res = await fetch(`${API_BASE}/${mentorId}`);
//     const data = await res.json();

//     if (res.ok && Array.isArray(data.data) && data.data.length > 0) {
//       tbody.innerHTML = data.data
//         .filter((slot) => new Date(slot.date) >= new Date())
//         .map(
//           (slot) => `
//         <tr>
//           <td>${slot.date}</td>
//           <td>${slot.startTime} - ${slot.endTime}</td>
//           <td>${slot.status}</td>
//         </tr>`
//         )
//         .join("");
//     } else {
//       tbody.innerHTML = `<tr><td colspan="3" class="text-center text-muted">No sessions yet</td></tr>`;
//     }
//   } catch (err) {
//     console.error("Error fetching schedule:", err);
//   }
// }
