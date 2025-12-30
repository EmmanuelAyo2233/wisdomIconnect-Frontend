// Sample rejected mentors data
// const rejectedMentors = [
//   {
//     id: 1,
//     name: "John Smith",
//     email: "john.smith@email.com",
//     expertise: ["Web Development"],
//     experience: "1 year",
//     bio: "Junior developer looking to mentor others.",
//     linkedin: "https://linkedin.com/in/johnsmith",
//     rejectionReason: "Insufficient experience for mentoring role",
//     rejectedDate: "2024-01-25",
//   },
//   {
//     id: 2,
//     name: "Lisa Wang",
//     email: "lisa.wang@email.com",
//     expertise: ["Data Science"],
//     experience: "2 years",
//     bio: "Data analyst with basic Python skills.",
//     linkedin: "https://linkedin.com/in/lisawang",
//     rejectionReason: "Profile incomplete - missing portfolio examples",
//     rejectedDate: "2024-01-22",
//   },
// ]

// Load rejected mentors on page load
document.addEventListener("DOMContentLoaded", () => {
  loadRejectedMentors()
  setupSearchAndFilter()
})

function loadRejectedMentors() {
  const tableBody = document.getElementById("rejected-mentors-table")
  tableBody.innerHTML = ""

  rejectedMentors.forEach((mentor) => {
    const row = document.createElement("tr")
    row.innerHTML = `
            <td>${mentor.name}</td>
            <td>
                <div class="expertise-tags">
                    ${mentor.expertise.map((exp) => `<span class="expertise-tag">${exp}</span>`).join("")}
                </div>
            </td>
            <td>${mentor.experience}</td>
            <td>${mentor.rejectionReason}</td>
            <td>${mentor.rejectedDate}</td>
            <td>
                <button class="btn btn-small btn-primary" onclick="viewMentorDetails(${mentor.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `
    tableBody.appendChild(row)
  })
}

function viewMentorDetails(mentorId) {
  const mentor = rejectedMentors.find((m) => m.id === mentorId)
  if (!mentor) return

  document.getElementById("modal-name").textContent = mentor.name
  document.getElementById("modal-email").textContent = mentor.email
  document.getElementById("modal-linkedin").href = mentor.linkedin
  document.getElementById("modal-expertise").innerHTML = mentor.expertise
    .map((exp) => `<span class="expertise-tag">${exp}</span>`)
    .join("")
  document.getElementById("modal-experience").textContent = mentor.experience
  document.getElementById("modal-bio").textContent = mentor.bio
  document.getElementById("modal-rejection-reason").textContent = mentor.rejectionReason

  document.getElementById("mentor-modal").style.display = "block"
}

function reconsiderMentor() {
  showToast("Mentor moved to pending for reconsideration", "success")
  closeModal()
}

function closeModal() {
  document.getElementById("mentor-modal").style.display = "none"
}

function setupSearchAndFilter() {
  const searchInput = document.getElementById("search-rejected")
  const expertiseFilter = document.getElementById("expertise-filter-rejected")

  searchInput.addEventListener("input", filterMentors)
  expertiseFilter.addEventListener("change", filterMentors)
}

function filterMentors() {
  const searchTerm = document.getElementById("search-rejected").value.toLowerCase()
  const expertiseFilter = document.getElementById("expertise-filter-rejected").value

  const filteredMentors = rejectedMentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm) || mentor.email.toLowerCase().includes(searchTerm)
    const matchesExpertise = !expertiseFilter || mentor.expertise.includes(expertiseFilter)

    return matchesSearch && matchesExpertise
  })

  displayFilteredMentors(filteredMentors)
}

function displayFilteredMentors(mentors) {
  const tableBody = document.getElementById("rejected-mentors-table")
  tableBody.innerHTML = ""

  mentors.forEach((mentor) => {
    const row = document.createElement("tr")
    row.innerHTML = `
            <td>${mentor.name}</td>
            <td>
                <div class="expertise-tags">
                    ${mentor.expertise.map((exp) => `<span class="expertise-tag">${exp}</span>`).join("")}
                </div>
            </td>
            <td>${mentor.experience}</td>
            <td>${mentor.rejectionReason}</td>
            <td>${mentor.rejectedDate}</td>
            <td>
                <button class="btn btn-small btn-primary" onclick="viewMentorDetails(${mentor.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `
    tableBody.appendChild(row)
  })
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast")
  toast.textContent = message
  toast.className = `toast ${type} show`

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("mentor-modal")
  if (event.target === modal) {
    closeModal()
  }
}

// Close modal with escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})




let rejectedMentors = [];

// Load rejected mentors
async function loadRejectedMentors() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/admin/rejected-mentors");
    rejectedMentors = await res.json();

    renderRejectedMentors(rejectedMentors);
  } catch (err) {
    console.error("Error loading rejected mentors:", err);
  }
}

// Render table
function renderRejectedMentors(list) {
  const tableBody = document.getElementById("rejected-mentors-table");
  tableBody.innerHTML = "";

  list.forEach(mentor => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${mentor.name}</td>
      <td>${mentor.expertise || "N/A"}</td>
      <td>${mentor.experience || "N/A"}</td>
      <td>${mentor.rejectedDate ? new Date(mentor.rejectedDate).toLocaleDateString() : "N/A"}</td>
      <td>
        <button class="btn btn-primary" onclick="openMentorModalByIdRejected(${mentor.id})">
          <i class="fas fa-eye"></i> View
        </button>
        <button class="btn btn-approve" onclick="reconsiderMentor(${mentor.id})">
          <i class="fas fa-redo"></i> Reconsider
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Open modal
function openMentorModalByIdRejected(id) {
  const mentor = rejectedMentors.find(m => m.id === id);
  if (!mentor) return;

  document.getElementById("modal-name").innerText = mentor.name || "N/A";
  document.getElementById("modal-email").innerText = mentor.email || "N/A";
  document.getElementById("modal-linkedin").href = mentor.linkedin || "#";

  const expertiseContainer = document.getElementById("modal-expertise");
  expertiseContainer.innerHTML = mentor.expertise
    ? mentor.expertise.split(",").map(exp => `<span class="tag">${exp.trim()}</span>`).join(" ")
    : "N/A";

  document.getElementById("modal-experience").innerText = mentor.experience || "N/A";
  document.getElementById("modal-bio").innerText = mentor.bio || "N/A";

  // Show modal
  document.getElementById("mentor-modal").style.display = "block";
}

// Reconsider function
async function reconsiderMentor(id) {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/admin/reconsider-mentor/${id}`, {
      method: "PUT"
    });
    const data = await res.json();
    alert(data.message);
    loadRejectedMentors();
  } catch (err) {
    console.error("Error reconsidering mentor:", err);
  }
}

// Close modal
function closeModal() {
  document.getElementById("mentor-modal").style.display = "none";
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadRejectedMentors();

  document.querySelector("#mentor-modal .close").addEventListener("click", closeModal);

  // Search filter
  document.getElementById("search-rejected").addEventListener("input", e => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = rejectedMentors.filter(m => m.name.toLowerCase().includes(searchTerm));
    renderRejectedMentors(filtered);
  });

  document.getElementById("expertise-filter-rejected").addEventListener("change", e => {
    const expertise = e.target.value;
    const filtered = expertise
      ? rejectedMentors.filter(m => m.expertise && m.expertise.includes(expertise))
      : rejectedMentors;
    renderRejectedMentors(filtered);
  });
});
