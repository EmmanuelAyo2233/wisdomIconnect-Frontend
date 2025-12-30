// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('.bottom-nav .nav-list li a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
            
//             navLinks.forEach(nav => nav.classList.remove('active'));

//             this.classList.add('active');
//         });
//     });
// });  

// const menuToggle = document.getElementById('menuToggle');
// const slidingMenu = document.getElementById('slidingMenu');
// const cancelBtn = document.getElementById('cancelBtn');
// const body = document.body;

// menuToggle.addEventListener('click', () => {
//     slidingMenu.classList.toggle('active');
//     body.classList.toggle('dimmed');
// });

// cancelBtn.addEventListener('click', () => {
//     slidingMenu.classList.remove('active');
// });

// body.addEventListener('click', (event) => {
//     if (!slidingMenu.contains(event.target) && !menuToggle.contains(event.target)) {
//         slidingMenu.classList.remove('active'); 
//     }
// });


// const profilePic = document.getElementById('profilePic');
// const hoverMenu = document.getElementById('hoverMenu');


// profilePic.addEventListener('click', (e) => {
//     e.stopPropagation();
//     const isVisible = hoverMenu.dataset.visible === 'true';
//     hoverMenu.dataset.visible = !isVisible; 
// });

// document.addEventListener('click', () => {
//     hoverMenu.dataset.visible = 'false';
// });


// hoverMenu.addEventListener('click', (e) => {
//     e.stopPropagation();
// });


// // Add click event to filter items
// document.querySelectorAll('.filter-item').forEach(item => {
//     item.addEventListener('click', () => {
//       // Highlight the selected filter
//       document.querySelectorAll('.filter-item').forEach(el => el.classList.remove('active'));
//       item.classList.add('active');
      
//       // Example action: Log the filter title
//       console.log(item.querySelector('.filter-title').textContent);
//     });
//   });
  

//   document.addEventListener("DOMContentLoaded", () => {
//     const filterGrid = document.querySelector(".filter-grid");
//     const backArrow = document.querySelector(".back-arrow");
//     const frontArrow = document.querySelector(".front-arrow");
  
//     // Function to update arrow visibility
//     const updateArrows = () => {
//       const scrollLeft = filterGrid.scrollLeft;
//       const maxScrollLeft = filterGrid.scrollWidth - filterGrid.clientWidth;
  
//       backArrow.style.display = scrollLeft > 0 ? "block" : "none";
//       frontArrow.style.display = scrollLeft < maxScrollLeft ? "block" : "none";
//     };
  
//     // Scroll actions
//     const scrollAmount = 200; // Adjust the scrolling amount as needed
//     backArrow.addEventListener("click", () => {
//       filterGrid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//       updateArrows();
//     });
//     frontArrow.addEventListener("click", () => {
//       filterGrid.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       updateArrows();
//     });
  
//     // Update arrows on scroll and on page load
//     filterGrid.addEventListener("scroll", updateArrows);
//     updateArrows();
//   });

  
//   // Select all filter items
// const filterItems = document.querySelectorAll('.filter-item');

// // Add click event listeners
// filterItems.forEach(item => {
//   item.addEventListener('click', () => {
//     // Remove 'active' class from all items
//     filterItems.forEach(i => i.classList.remove('active'));

//     // Add 'active' class to the clicked item
//     item.classList.add('active');
//   });
// });


// // Show full country name on hover
// document.querySelectorAll('.elder-name span').forEach((country) => {
//   country.addEventListener('mouseover', () => {
//     const tooltip = country.querySelector('.tooltip');
//     if (tooltip) tooltip.style.display = 'inline-block';
//   });

//   country.addEventListener('mouseout', () => {
//     const tooltip = country.querySelector('.tooltip');
//     if (tooltip) tooltip.style.display = 'none';
//   });
// });


// document.getElementById("notificationIcon").addEventListener("click", function (event) {
//   let dropdown = document.getElementById("notiDropdown");
//   dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
//   event.stopPropagation();
// });

// document.addEventListener("click", function (event) {
//   let dropdown = document.getElementById("notiDropdown");
//   if (!dropdown.contains(event.target) && event.target.id !== "notificationIcon") {
//       dropdown.style.display = "none";
//   }
// });
  
// document.addEventListener("DOMContentLoaded", function () {
//   let messageBox = document.getElementById("messageBox");
//   let messageIcon = document.getElementById("messageIcon");

//   if (messageBox && messageIcon) {
//       function toggleMessageBox(event) {
//           event.stopPropagation();
//           if (messageBox.classList.contains("show")) {
//               messageBox.classList.remove("show");
//               setTimeout(() => {
//                   messageBox.style.display = "none";
//               }, 300); // Wait for animation to finish
//           } else {
//               messageBox.style.display = "block";
//               setTimeout(() => {
//                   messageBox.classList.add("show");
//               }, 10); // Slight delay for smooth effect
//           }
//       }

//       messageIcon.addEventListener("click", toggleMessageBox);

//       document.addEventListener("click", function (event) {
//           if (!messageBox.contains(event.target) && event.target !== messageIcon) {
//               messageBox.classList.remove("show");
//               setTimeout(() => {
//                   messageBox.style.display = "none";
//               }, 300);
//           }
//       });
//   }
// });
  

// // Utility: Update all profile images across dashboard
// function updateDashboardProfileImages(imageUrl) {
//   const profileImgs = document.querySelectorAll(
//     ".profile-pic1, .profile-img, .hover-profile-pic"
//   );
//   profileImgs.forEach((img) => {
//     img.src = `${imageUrl}?t=${Date.now()}`; // prevent caching old one
//   });
// }

// // On Page Load
// document.addEventListener("DOMContentLoaded", async () => {
//   const token = localStorage.getItem("mentorToken");
//   let userData = JSON.parse(localStorage.getItem("userData"));

//   // If we already cached profile
//   if (userData?.picture) {
//     updateDashboardProfileImages(userData.picture);
//   }

//   // Also fetch fresh from backend to be sure
//   try {
//     const res = await fetch("http://localhost:5000/api/v1/user/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     const data = await res.json();
//     if (data.status === "success") {
//       userData = data.data;

//       // Save in localStorage for next reload
//       localStorage.setItem("userData", JSON.stringify(userData));

//       // Update everywhere
//       if (userData.picture) {
//         updateDashboardProfileImages(userData.picture);
//       }
//     }
//   } catch (err) {
//     console.error("Failed to fetch user data for dashboard:", err);
//   }
// });




// document.addEventListener("DOMContentLoaded", async () => {
//   const token = localStorage.getItem("mentorToken");

//   if (!token) {
//     window.location.href = "/public/login.html";
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/v1/user/me", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       }
//     });

//     const result = await res.json();
//     console.log("User API result:", result);

//     if (res.ok && result.status === "success") {
//       const user = result.data;
//       const fullName = user.name || "Unknown User";

//       // Replace text in both sidebar + mobile
//       const profileNameEls = document.querySelectorAll(".profile-name");
//       const hoverProfileNameEls = document.querySelectorAll(".hover-profile-name");

//       profileNameEls.forEach(el => el.textContent = fullName);
//       hoverProfileNameEls.forEach(el => el.textContent = fullName);
//     } else {
//       console.error("Failed to fetch user details:", result.message);
//     }
//   } catch (err) {
//     console.error("Error fetching user details:", err);
//   }
// });



// const mentorContainer = document.getElementById('mentor-cards-container');
// const searchInput = document.getElementById('mentorSearch');
// const filterItem = document.querySelectorAll('.filter-item');
// let allMentors = []; // store all mentors globally

// // Always use mentor token
// function getTokenForPage() {
//   return localStorage.getItem("mentorToken");
// }

// // Load mentors from backend
// async function loadMentors() {
//   try {
//     const token = getTokenForPage();

//     if (!token) {
//       console.error("No token found, redirect to login");
//       return;
//     }

//     const res = await fetch("http://localhost:5000/api/v1/mentors", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     if (!res.ok) {
//       console.error(`❌ Failed to fetch mentors: ${res.status}`);
//       return;
//     }

//     const data = await res.json();

//     if (data.status === "success") {
//       console.log("📌 Mentors received from backend:", data.data);

//       // ✅ Decode user id from token
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       const loggedInUserId = payload.id || payload.userId || payload.user_id;
//       console.log("Logged-in user id:", loggedInUserId);

//       // ✅ Filter out logged-in mentor
//       allMentors = data.data.filter(
//         (m) => m.user_id !== loggedInUserId && m.user?.id !== loggedInUserId
//       );

//       renderMentorCards(allMentors);
//     } else {
//       console.error("❌ Unexpected response:", data);
//     }
//   } catch (err) {
//     console.error("❌ Error loading mentors:", err);
//   }
// }

// function renderMentorCards(mentors) {
//   mentorContainer.innerHTML = '';

//   if (!mentors.length) {
//     mentorContainer.innerHTML = `<p class="text-center text-muted">No mentors found</p>`;
//     return;
//   }

//   mentors.forEach(m => {
//     let expertise = [];
//     try {
//       expertise = typeof m.expertise === 'string' ? JSON.parse(m.expertise) : (m.expertise || []);
//     } catch (e) {
//       expertise = [];
//     }

//     const card = document.createElement('a');
//     card.href = `mentor-adultprofile.html?mentorId=${m.id}`;
//     card.classList.add('card-link');

//     card.innerHTML = `
//       <div class="elder-card">
//         <div class="elder-card-header">
//           <img src="${m.user?.picture || 'images/default-avatar.png'}" 
//                alt="${m.user?.name || 'Mentor'}" class="elder-photo" />
//         </div>
//         <div class="elder-card-body">
//           <h3 class="elder-name">
//             <span class="country-code" data-tooltip="${m.countryCode || 'NG'}">${m.countryCode || 'NG'}</span> 
//             ${m.user?.name || 'Unknown'}
//           </h3>
//           <p class="elder-offers">
//             <i class="fas fa-clipboard-list"></i> ${expertise.length ? expertise.join(', ') : 'N/A'}
//           </p>
//           <p class="elder-sessions">
//             <i class="fas fa-calendar-check"></i> ${m.sessions || 0} sessions (${m.reviews || 0} reviews)
//           </p>
//         </div>
//         <div class="elder-card-footer">
//           <div class="experience">
//             <p>Experience</p>
//             <span>${m.yearsOfExperience || 0} years</span>
//           </div>
//           <div class="attendance">
//             <p>Avg. Attendance</p>
//             <span>${m.attendance || '0%'}</span>
//           </div>
//         </div>
//       </div>
//     `;

//     mentorContainer.appendChild(card);
//   });
// }

// // ✅ Search functionality
// searchInput.addEventListener('input', (e) => {
//   const searchTerm = e.target.value.toLowerCase();

//   const filtered = allMentors.filter(m => {
//     const name = m.user?.name?.toLowerCase() || '';
//     const expertise = Array.isArray(m.expertise) 
//       ? m.expertise.join(' ').toLowerCase() 
//       : (typeof m.expertise === 'string' ? m.expertise.toLowerCase() : '');
    
//     return name.includes(searchTerm) || expertise.includes(searchTerm);
//   });

//   renderMentorCards(filtered);
// });

// // ✅ Filter mentors by expertise
// filterItems.forEach(item => {
//   item.addEventListener('click', e => {
//     e.preventDefault();

//     // toggle active class
//     filterItems.forEach(f => f.classList.remove('active'));
//     item.classList.add('active');

//     const expertise = item.getAttribute('data-expertise');

//     if (expertise === "all") {
//       // Show all mentors
//       renderMentorCards(allMentors);
//       return;
//     }

//     // Filter mentors by expertise
//     const filtered = allMentors.filter(m => {
//       let expList = [];
//       try {
//         expList = typeof m.expertise === 'string' ? JSON.parse(m.expertise) : (m.expertise || []);
//       } catch (e) {}
//       return expList.includes(expertise);
//     });

//     renderMentorCards(filtered);
//   });
// });

// // Run after fetching mentors
// loadMentors();
