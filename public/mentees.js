// Sample mentees data
// const mentees = [
//   {
//     id: 1,
//     name: "Alex Thompson",
//     email: "alex.thompson@email.com",
//     interests: ["Web Development", "JavaScript"],
//     goals: "Learn full-stack development and build my first web application",
//     assignedMentor: "Sarah Johnson",
//     status: "Active",
//     progress: "Completed HTML/CSS basics, currently learning JavaScript",
//     joinDate: "2024-02-01",
//   },
//   {
//     id: 2,
//     name: "Maria Garcia",
//     email: "maria.garcia@email.com",
//     interests: ["Data Science", "Python"],
//     goals: "Transition from marketing to data science career",
//     assignedMentor: "Michael Chen",
//     status: "Active",
//     progress: "Learning Python fundamentals and statistics",
//     joinDate: "2024-01-28",
//   },
//   {
//     id: 3,
//     name: "David Kim",
//     email: "david.kim@email.com",
//     interests: ["UI/UX Design", "Figma"],
//     goals: "Improve design skills and build a portfolio",
//     assignedMentor: "Emily Rodriguez",
//     status: "Completed",
//     progress: "Successfully completed design bootcamp and landed first job",
//     joinDate: "2023-12-15",
//   },
//   {
//     id: 4,
//     name: "Sophie Brown",
//     email: "sophie.brown@email.com",
//     interests: ["Mobile Development", "React Native"],
//     goals: "Build mobile apps for iOS and Android",
//     assignedMentor: "Not Assigned",
//     status: "Inactive",
//     progress: "Waiting for mentor assignment",
//     joinDate: "2024-02-10",
//   },
// ]

// Load mentees on page load
document.addEventListener("DOMContentLoaded", () => {
  loadMentees()
  setupSearchAndFilter()
})

function loadMentees() {
  const tableBody = document.getElementById("mentees-table")
  tableBody.innerHTML = ""

  mentees.forEach((mentee) => {
    const row = document.createElement("tr")
    const statusClass = mentee.status.toLowerCase().replace(" ", "-")

    row.innerHTML = `
            <td>${mentee.name}</td>
            <td>${mentee.email}</td>
            <td>
                <div class="expertise-tags">
                    ${mentee.interest.map((interest) => `<span class="expertise-tag">${interest}</span>`).join("")}
                </div>
            </td>
            <td>${mentee.assignedMentor}</td>
            <td><span class="status-badge ${statusClass}">${mentee.status}</span></td>
            <td>${mentee.joinDate}</td>
            <td>
                <button class="btn btn-small btn-primary" onclick="viewMenteeDetails(${mentee.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `
    tableBody.appendChild(row)
  })
}

function viewMenteeDetails(menteeId) {
  const mentee = mentees.find((m) => m.id === menteeId)
  if (!mentee) return

  document.getElementById("modal-name").textContent = mentee.name
  document.getElementById("modal-email").textContent = mentee.email
  document.getElementById("modal-interests").innerHTML = mentee.interest
    .map((interest) => `<span class="expertise-tag">${interest}</span>`)
    .join("")
  document.getElementById("modal-goals").textContent = mentee.goals
  document.getElementById("modal-mentor").textContent = mentee.assignedMentor
  document.getElementById("modal-status").textContent = mentee.status
  document.getElementById("modal-progress").textContent = mentee.progress

  document.getElementById("mentee-modal").style.display = "block"
}

function closeMenteeModal() {
  document.getElementById("mentee-modal").style.display = "none"
}

function setupSearchAndFilter() {
  const searchInput = document.getElementById("search-mentees")
  const statusFilter = document.getElementById("status-filter-mentees")

  searchInput.addEventListener("input", filterMentees)
  statusFilter.addEventListener("change", filterMentees)
}

function filterMentees() {
  const searchTerm = document.getElementById("search-mentees").value.toLowerCase()
  const statusFilter = document.getElementById("status-filter-mentees").value

  const filteredMentees = mentees.filter((mentee) => {
    const matchesSearch =
      mentee.name.toLowerCase().includes(searchTerm) ||
      mentee.email.toLowerCase().includes(searchTerm) ||
      mentee.assignedMentor.toLowerCase().includes(searchTerm)
    const matchesStatus = !statusFilter || mentee.status === statusFilter

    return matchesSearch && matchesStatus
  })

  displayFilteredMentees(filteredMentees)
}

function displayFilteredMentees(mentees) {
  const tableBody = document.getElementById("mentees-table")
  tableBody.innerHTML = ""

  mentees.forEach((mentee) => {
    const row = document.createElement("tr")
    const statusClass = mentee.status.toLowerCase().replace(" ", "-")

    row.innerHTML = `
            <td>${mentee.name}</td>
            <td>${mentee.email}</td>
            <td>
                <div class="expertise-tags">
                    ${mentee.interest.map((interest) => `<span class="expertise-tag">${interest}</span>`).join("")}
                </div>
            </td>
            <td>${mentee.assignedMentor}</td>
            <td><span class="status-badge ${statusClass}">${mentee.status}</span></td>
            <td>${mentee.joinDate}</td>
            <td>
                <button class="btn btn-small btn-primary" onclick="viewMenteeDetails(${mentee.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `
    tableBody.appendChild(row)
  })
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("mentee-modal")
  if (event.target === modal) {
    closeMenteeModal()
  }
}

// Close modal with escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenteeModal()
  }
})

let menteesList = [];

async function loadMentees() {
    try {
        const res = await fetch("http://localhost:5000/api/v1/admin/mentees");
        menteesList = await res.json();
        renderMentees(menteesList);
    } catch (err) {
        console.error("Error loading mentees:", err);
    }
}

function renderMentees(list) {
    const tableBody = document.getElementById("mentees-table");
    tableBody.innerHTML = "";

    list.forEach(mentee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${mentee.name}</td>
            <td>${mentee.email}</td>
            <td>${mentee.interest}</td>
            <td>${mentee.bio}</td>
            <td>${mentee.status}</td>
            <td>${new Date(mentee.joinDate).toLocaleDateString()}</td>
            <td>
    <button class="btn btn-primary" onclick="openMenteeModalById(${mentee.id})">
        <i class="fas fa-eye"></i> View
    </button>
    <button class="btn btn-danger" onclick="deleteMentee(${mentee.id})">
        <i class="fas fa-trash"></i> Delete
    </button>
</td>

        `;
        tableBody.appendChild(row);
    });
}

function openMenteeModalById(id) {
    const mentee = menteesList.find(m => m.id === id);
    if (!mentee) return;

    document.getElementById("modal-name").innerText = mentee.name;
    document.getElementById("modal-email").innerText = mentee.email;
    document.getElementById("modal-interests").innerText = mentee.interest;
    document.getElementById("modal-bio").innerText = mentee.bio;
    document.getElementById("modal-status").innerText = mentee.status;

    document.getElementById("mentee-modal").style.display = "block";
}

function closeMenteeModal() {
    document.getElementById("mentee-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    loadMentees();

    // Modal close
    document.querySelector("#mentee-modal .close").addEventListener("click", closeMenteeModal);

    // Search filter
    document.getElementById("search-mentees").addEventListener("input", e => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = menteesList.filter(m => m.name.toLowerCase().includes(searchTerm));
        renderMentees(filtered);
    });

    document.getElementById("status-filter-mentees").addEventListener("change", e => {
        const status = e.target.value;
        const filtered = status
            ? menteesList.filter(m => m.status === status)
            : menteesList;
        renderMentees(filtered);
    });
});





function openMenteeModalById(id) {
    const mentee = menteesList.find(m => m.id === id);
    if (!mentee) return;

    document.getElementById("modal-name").innerText = mentee.name;
    document.getElementById("modal-email").innerText = mentee.email;
    document.getElementById("modal-interests").innerText = mentee.interest;
    document.getElementById("modal-bio").innerText = mentee.bio;
    document.getElementById("modal-status").innerText = mentee.status;
    document.getElementById("modal-join-date").innerText = new Date(mentee.joinDate).toLocaleDateString();
    document.getElementById("mentee-modal").style.display = "block";
}

function closeMenteeModal() {
    document.getElementById("mentee-modal").style.display = "none";
}

// Delete mentee
async function deleteMentee(id) {
    if (!confirm("Are you sure you want to delete this mentee?")) return;

    try {
        const res = await fetch(`http://localhost:5000/api/v1/admin/mentee/${id}`, {
            method: "DELETE"
        });

        const data = await res.json();
        alert(data.message);

        // Reload mentees after deletion
        loadMentees();
    } catch (err) {
        console.error("Error deleting mentee:", err);
        alert("Failed to delete mentee");
    }
}

// Filters
document.addEventListener("DOMContentLoaded", () => {
    loadMentees();

    document.querySelector("#mentee-modal .close").addEventListener("click", closeMenteeModal);

    document.getElementById("search-mentees").addEventListener("input", e => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = menteesList.filter(m => m.name.toLowerCase().includes(searchTerm));
        renderMentees(filtered);
    });

    document.getElementById("status-filter-mentees").addEventListener("change", e => {
        const status = e.target.value;
        const filtered = status
            ? menteesList.filter(m => m.status === status)
            : menteesList;
        renderMentees(filtered);
    });
});