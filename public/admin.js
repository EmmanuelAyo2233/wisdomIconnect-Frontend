const mentorsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    expertise: ["JavaScript", "React", "Node.js"],
    experience: "5 years",
    bio: "Experienced full-stack developer with a passion for mentoring junior developers. I specialize in modern web technologies and have worked with startups and enterprise companies.",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    status: "pending",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    expertise: ["Python", "Machine Learning", "Data Science"],
    experience: "7 years",
    bio: "Data scientist and ML engineer with extensive experience in building scalable AI solutions. Love sharing knowledge about data science and machine learning.",
    linkedin: "https://linkedin.com/in/michaelchen",
    status: "pending",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    expertise: ["UX Design", "Product Design", "Figma"],
    experience: "4 years",
    bio: "Product designer focused on creating user-centered experiences. I enjoy mentoring aspiring designers and helping them develop their design thinking skills.",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    status: "pending",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@email.com",
    expertise: ["DevOps", "AWS", "Docker"],
    experience: "6 years",
    bio: "DevOps engineer with expertise in cloud infrastructure and automation. Passionate about helping developers understand deployment and scaling strategies.",
    linkedin: "https://linkedin.com/in/davidkim",
    status: "pending",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@email.com",
    expertise: ["Project Management", "Agile", "Scrum"],
    experience: "8 years",
    bio: "Certified Scrum Master and project manager with experience leading cross-functional teams. I love mentoring new project managers and sharing best practices.",
    linkedin: "https://linkedin.com/in/lisathompson",

    status: "pending",
  },
]

let currentMentorId = null

// Initialize the dashboard
document.addEventListener("DOMContentLoaded", () => {
  loadPendingMentors()
  updateStats()
  setupEventListeners()
})

// Load pending mentors into the table
function loadPendingMentors() {
  const tableBody = document.getElementById("pending-mentors-table")
  const pendingMentors = mentorsData.filter((mentor) => mentor.status === "pending")

  tableBody.innerHTML = ""

  pendingMentors.forEach((mentor) => {
    const row = document.createElement("tr")
    row.innerHTML = `
            <td><strong>${mentor.name}</strong></td>
            <td>
                ${mentor.expertise
                  .slice(0, 2)
                  .map((skill) => `<span class="expertise-tag">${skill}</span>`)
                  .join(" ")}
                ${mentor.expertise.length > 2 ? `<span class="expertise-tag">+${mentor.expertise.length - 2}</span>` : ""}
            </td>
            <td>${mentor.experience}</td>
            <td>${mentor.bio.substring(0, 50)}...</td>
            <td><a href="${mentor.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></td>
            <td><span class="status-tag status-${mentor.status}">${mentor.status}</span></td>
            <td>
                <button class="btn btn-approve" onclick="quickApprove(${mentor.id})">
                    <i class="fas fa-check"></i> Approve
                </button>
                <button class="btn btn-reject" onclick="quickReject(${mentor.id})">
                    <i class="fas fa-times"></i> Reject
                </button>
                <button class="btn btn-primary" onclick="viewMentor(${mentor.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `
    tableBody.appendChild(row)
  })
}

// Update dashboard statistics
function updateStats() {
  const pending = mentorsData.filter((m) => m.status === "pending").length
  const approved = mentorsData.filter((m) => m.status === "approved").length
  const rejected = mentorsData.filter((m) => m.status === "rejected").length

  document.getElementById("pending-count").textContent = pending
  document.getElementById("approved-count").textContent = approved
  document.getElementById("rejected-count").textContent = rejected
}

// Setup event listeners
function setupEventListeners() {
  // Close modal when clicking outside
  window.onclick = (event) => {
    const mentorModal = document.getElementById("mentor-modal")
    const confirmationModal = document.getElementById("confirmation-modal")

    if (event.target === mentorModal) {
      closeModal()
    }
    if (event.target === confirmationModal) {
      closeConfirmation()
    }
  }

  // Close modal with X button
  document.querySelector(".close").onclick = closeModal
}

// View mentor details in modal
function viewMentor(mentorId) {
  const mentor = mentorsData.find((m) => m.id === mentorId)
  if (!mentor) return

  currentMentorId = mentorId

  // Populate modal with mentor data
  document.getElementById("modal-name").textContent = mentor.name
  document.getElementById("modal-email").textContent = mentor.email
  document.getElementById("modal-linkedin").href = mentor.linkedin
  document.getElementById("modal-experience").textContent = `${mentor.experience} of experience`
  document.getElementById("modal-bio").textContent = mentor.bio


  // Populate expertise tags
  const expertiseContainer = document.getElementById("modal-expertise")
  expertiseContainer.innerHTML = mentor.expertise.map((skill) => `<span class="expertise-tag">${skill}</span>`).join("")

  // Show modal
  document.getElementById("mentor-modal").style.display = "block"
}

// Close mentor details modal
function closeModal() {
  document.getElementById("mentor-modal").style.display = "none"
  currentMentorId = null
}

// Quick approve from table
function quickApprove(mentorId) {
  showConfirmation(
    "Approve Mentor",
    "Are you sure you want to approve this mentor?",
    "btn-approve",
    "Yes, Approve",
    () => processMentorAction(mentorId, "approved"),
  )
}

// Quick reject from table
function quickReject(mentorId) {
  showConfirmation(
    "Reject Mentor",
    "Are you sure you want to reject this mentor? They will be converted to a mentee.",
    "btn-reject",
    "Yes, Reject",
    () => processMentorAction(mentorId, "rejected"),
  )
}

// Approve mentor from modal
function approveMentor() {
  if (!currentMentorId) return

  showConfirmation(
    "Approve Mentor",
    "Are you sure you want to approve this mentor?",
    "btn-approve",
    "Yes, Approve",
    () => {
      processMentorAction(currentMentorId, "approved")
      closeModal()
    },
  )
}

// Reject mentor from modal
function rejectMentor() {
  if (!currentMentorId) return

  showConfirmation(
    "Reject Mentor",
    "Are you sure you want to reject this mentor? They will be converted to a mentee.",
    "btn-reject",
    "Yes, Reject",
    () => {
      processMentorAction(currentMentorId, "rejected")
      closeModal()
    },
  )
}

// Show confirmation modal
function showConfirmation(title, message, buttonClass, buttonText, onConfirm) {
  document.getElementById("confirmation-title").textContent = title
  document.getElementById("confirmation-message").textContent = message

  const confirmBtn = document.getElementById("confirm-btn")
  confirmBtn.textContent = buttonText
  confirmBtn.className = `btn ${buttonClass}`
  confirmBtn.onclick = () => {
    onConfirm()
    closeConfirmation()
  }

  document.getElementById("confirmation-modal").style.display = "block"
}

// Close confirmation modal
function closeConfirmation() {
  document.getElementById("confirmation-modal").style.display = "none"
}

// Process mentor approval/rejection
function processMentorAction(mentorId, newStatus) {
  const mentor = mentorsData.find((m) => m.id === mentorId)
  if (!mentor) return

  mentor.status = newStatus

  // Update UI
  loadPendingMentors()
  updateStats()

  // Show success message
  const action = newStatus === "approved" ? "approved" : "rejected"
  const message =
    newStatus === "approved" ? "Mentor approved successfully!" : "Mentor rejected. User converted to mentee."

  showToast(message, newStatus === "approved" ? "success" : "error")
}

// Show toast notification
function showToast(message, type = "success") {
  const toast = document.getElementById("toast")
  toast.textContent = message
  toast.className = `toast ${type === "error" ? "error" : ""}`
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// Navigation helper (for other pages)
function navigateTo(page) {
  window.location.href = page
}





// admin.js (frontend)

// Load pending mentors into the table
async function loadPendingMentors() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/admin/pending-mentors");
    const mentors = await res.json();

    console.log("Mentor data from backend:", mentors);

    const tableBody = document.getElementById("pending-mentors-table");
    tableBody.innerHTML = "";

    mentors.forEach(mentor => {
      const shortBio = mentor.bio ? mentor.bio.substring(0, 50) + "..." : "N/A";
      const expertiseTags = mentor.expertise
        ? mentor.expertise.split(",").map(exp => `<span class="tag">${exp.trim()}</span>`).join(" ")
        : "N/A";

      const row = `
        <tr>
          <td>${mentor.name || "N/A"}</td>
          <td>${mentor.experience || "N/A"}</td>
          <td>${expertiseTags}</td>
          
          <td>${shortBio}</td>
          <td><a href="${mentor.linkedin || "#"}" target="_blank">${mentor.linkedin ? "Profile" : "N/A"}</a></td>
          <td>${mentor.status || "N/A"}</td>
          <td>
            <button class="btn btn-view" onclick='openMentorModal(${JSON.stringify(mentor)})'>
              <i class="fas fa-eye"></i> View
            </button>
            <button class="btn btn-approve" onclick="approveMentor(${mentor.id})">
              <i class="fas fa-check"></i> Approve
            </button>
            <button class="btn btn-reject" onclick="rejectMentor(${mentor.id})">
              <i class="fas fa-times"></i> Reject
            </button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

  } catch (error) {
    console.error("Error loading mentors:", error);
  }
}

// Open mentor details modal
function openMentorModal(mentor) {
  document.getElementById("modal-name").innerText = mentor.name || "N/A";
  document.getElementById("modal-email").innerText = mentor.email || "N/A";
  document.getElementById("modal-linkedin").href = mentor.linkedin || "#";

  // Expertise as tags
  const expertiseContainer = document.getElementById("modal-expertise");
  expertiseContainer.innerHTML = mentor.expertise
    ? mentor.expertise.split(",").map(exp => `<span class="tag">${exp.trim()}</span>`).join(" ")
    : "N/A";

  document.getElementById("modal-experience").innerText = mentor.experience || "N/A";
  document.getElementById("modal-bio").innerText = mentor.bio || "N/A";

  // Show modal
  document.getElementById("mentor-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("mentor-modal").style.display = "none";
}




// Load dashboard stats (counts)
async function loadStats() {
    try {
        const res = await fetch("http://localhost:5000/api/v1/admin/stats");
        const stats = await res.json();

        document.getElementById("pending-count").textContent = stats.mentorsPending;
        document.getElementById("approved-count").textContent = stats.mentorsApproved;
        document.getElementById("rejected-count").textContent = stats.mentorsRejected;
        document.getElementById("mentees-count").textContent = stats.mentees;
    } catch (error) {
        console.error("Error loading stats:", error);
    }
}

// Call this when page loads
loadStats();

// Approve mentor
async function approveMentor(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/v1/admin/approve-mentor/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        });

        if (!res.ok) throw new Error("Failed to approve mentor");

        await loadPendingMentors();
       await loadStats();   
    } catch (error) {
        console.error("Error approving mentor:", error);
    }
}

// Reject mentor
async function rejectMentor(id) {
    try {
        const res = await fetch(`http://localhost:5000/api/v1/admin/reject-mentor/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        });

        if (!res.ok) throw new Error("Failed to reject mentor");

        await loadPendingMentors();
      await loadStats();   
    } catch (error) {
        console.error("Error rejecting mentor:", error);
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
    loadPendingMentors();
    loadStats();
});
