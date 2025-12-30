// // Sample approved mentors data
// const approvedMentors = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     email: "sarah.johnson@email.com",
//     expertise: ["Web Development", "React"],
//     experience: "5+ years",
//     bio: "Full-stack developer with expertise in React and Node.js. Passionate about mentoring junior developers.",
    
//     linkedin: "https://linkedin.com/in/sarahjohnson",
//     activeMentees: 3,
//     rating: 4.8,
//     approvedDate: "2024-01-15",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     email: "michael.chen@email.com",
//     expertise: ["Data Science", "Python"],
//     experience: "7+ years",
//     bio: "Data scientist with experience in machine learning and AI. Love helping others break into tech.",

//     linkedin: "https://linkedin.com/in/michaelchen",
//     activeMentees: 5,
//     rating: 4.9,
//     approvedDate: "2024-01-10",
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     email: "emily.rodriguez@email.com",
//     expertise: ["UI/UX Design", "Figma"],
//     experience: "4+ years",
//     bio: "UX designer focused on creating intuitive user experiences. Experienced in design systems and user research.",
  
//     linkedin: "https://linkedin.com/in/emilyrodriguez",
//     activeMentees: 2,
//     rating: 4.7,
//     approvedDate: "2024-01-20",
//   },
// ]

// Load approved mentors on page load
document.addEventListener("DOMContentLoaded", () => {
  loadApprovedMentors()
  setupSearchAndFilter()
})



function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let starsHTML = ""

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'
  }

  return starsHTML
}

function viewMentorDetails(mentorId) {
  const mentor = approvedMentors.find((m) => m.id === mentorId)
  if (!mentor) return

  document.getElementById("modal-name").textContent = mentor.name
  document.getElementById("modal-email").textContent = mentor.email
  document.getElementById("modal-linkedin").href = mentor.linkedin
  document.getElementById("modal-expertise").innerHTML = mentor.expertise
    .map((exp) => `<span class="expertise-tag">${exp}</span>`)
    .join("")
  document.getElementById("modal-experience").textContent = mentor.experience
  document.getElementById("modal-bio").textContent = mentor.bio

  document.getElementById("modal-mentees").textContent = `${mentor.activeMentees} active mentees`
  document.getElementById("modal-rating").innerHTML =
    generateStars(mentor.rating) + ` <span class="rating-number">${mentor.rating}</span>`

  document.getElementById("mentor-modal").style.display = "block"
}

function closeModal() {
  document.getElementById("mentor-modal").style.display = "none"
}

function setupSearchAndFilter() {
  const searchInput = document.getElementById("search-approved")
  const expertiseFilter = document.getElementById("expertise-filter-approved")

  searchInput.addEventListener("input", filterMentors)
  expertiseFilter.addEventListener("change", filterMentors)
}

function filterMentors() {
  const searchTerm = document.getElementById("search-approved").value.toLowerCase()
  const expertiseFilter = document.getElementById("expertise-filter-approved").value

  const filteredMentors = approvedMentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm) || mentor.email.toLowerCase().includes(searchTerm)
    const matchesExpertise = !expertiseFilter || mentor.expertise.includes(expertiseFilter)

    return matchesSearch && matchesExpertise
  })

  displayFilteredMentors(filteredMentors)
}

function displayFilteredMentors(mentors) {
  const tableBody = document.getElementById("approved-mentors-table")
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
            <td>${mentor.activeMentees}</td>
            <td>
                <div class="rating-stars">
                    ${generateStars(mentor.rating)}
                    <span class="rating-number">${mentor.rating}</span>
                </div>
            </td>
            <td>${mentor.approvedDate}</td>
            <td>
                <button class="btn btn-small btn-primary" onclick="viewMentorDetails(${mentor.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `
    tableBody.appendChild(row)
  })
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





let approvedMentors = [];

// Load approved mentors from backend
async function loadApprovedMentors() {
    try {
        const res = await fetch("http://localhost:5000/api/v1/admin/approved-mentors");
        approvedMentors = await res.json();
        console.log("Approved mentors fetched:", approvedMentors);
        const tableBody = document.getElementById("approved-mentors-table");
        tableBody.innerHTML = "";

        approvedMentors.forEach(mentor => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><strong>${mentor.name}</strong></td>
                <td>
                    ${(mentor.expertise || "")
                        .split(",")
                        .map(skill => `<span class="expertise-tag">${skill.trim()}</span>`)
                        .join(" ")}
                </td>
                <td>${mentor.experience || "N/A"}</td>
                <td>${mentor.activeMentees || 0}</td>
                <td>${mentor.rating || "N/A"}</td>
            <td>${mentor.approvedDate ? new Date(mentor.approvedDate).toLocaleDateString() : "N/A"}</td>


                <td>
                    <button class="btn btn-primary" onclick="openMentorModalById(${mentor.id})">
                        <i class="fas fa-eye"></i> View
                    </button>


                    <button class="btn btn-danger" onclick="deleteMentor(${mentor.id})">
  <i class="fas fa-trash"></i> Delete
</button>

                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (err) {
        console.error("Error loading approved mentors:", err);
    }
}

// Open modal by mentor ID
function openMentorModalById(id) {
    const mentor = approvedMentors.find(m => m.id === id);
    if (!mentor) return;

    openMentorModal(mentor);
}

// Modal logic
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
    document.getElementById("modal-mentees").innerText = mentor.activeMentees || 0;
    document.getElementById("modal-rating").innerText = mentor.rating || "N/A";

    // Show modal
    document.getElementById("mentor-modal").style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById("mentor-modal").style.display = "none";
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    loadApprovedMentors();

    // Modal close button
    document.querySelector("#mentor-modal .close").addEventListener("click", closeModal);

    // Optional: Search filter
    document.getElementById("search-approved").addEventListener("input", e => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = approvedMentors.filter(m => m.name.toLowerCase().includes(searchTerm));
        renderApprovedMentors(filtered);
    });

    document.getElementById("expertise-filter-approved").addEventListener("change", e => {
        const expertise = e.target.value;
        const filtered = expertise
            ? approvedMentors.filter(m => m.expertise && m.expertise.includes(expertise))
            : approvedMentors;
        renderApprovedMentors(filtered);
    });
});

// Helper to re-render filtered mentors
function renderApprovedMentors(list) {
    const tableBody = document.getElementById("approved-mentors-table");
    tableBody.innerHTML = "";
    

    list.forEach(mentor => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${mentor.name}</strong></td>
            <td>
                ${(mentor.expertise || "").split(",").map(skill => `<span class="expertise-tag">${skill.trim()}</span>`).join(" ")}
            </td>
            <td>${mentor.experience || "N/A"}</td>
            <td>${mentor.activeMentees || 0}</td>
            <td>${mentor.rating || "N/A"}</td>
         <td>${mentor.approvedAt ? new Date(mentor.approvedAt).toLocaleDateString() : "N/A"}</td>

           

            <td>
                <button class="btn btn-primary" onclick="openMentorModalById(${mentor.id})">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `;
         console.log("Approved mentors fetched:", approvedMentors);

       

        tableBody.appendChild(row);
    });
}


async function deleteMentor(id) {
  if (!confirm("Are you sure you want to delete this mentor?")) return;

  try {
    const res = await fetch(`http://localhost:5000/api/v1/admin/delete-mentor/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message);

    // Refresh the table
    loadApprovedMentors();
  } catch (err) {
    console.error("Error deleting mentor:", err);
    alert("Failed to delete mentor");
  }
}
