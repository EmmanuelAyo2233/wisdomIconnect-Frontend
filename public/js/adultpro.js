// document.addEventListener('DOMContentLoaded', function() {
//     const navLinks = document.querySelectorAll('.bottom-nav .nav-list li a');

//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
            
//             navLinks.forEach(nav => nav.classList.remove('active'));

//             this.classList.add('active');
//         });
//     });
// });

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
    



  const loveIcon = document.querySelector(".love-icon i");
const menuIcon = document.querySelector(".menu-icon");
const menuBox = document.querySelector(".menu-box");

// Wishlist Toggle (Filled Heart)
document.querySelector(".love-icon").addEventListener("click", function() {
    if (loveIcon.classList.contains("bi-heart")) {
        loveIcon.classList.replace("bi-heart", "bi-heart-fill");
        loveIcon.style.color = "red";
    } else {
        loveIcon.classList.replace("bi-heart-fill", "bi-heart");
        loveIcon.style.color = "#555";
    }
});


// Show/Hide Menu Box
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuBox = document.querySelector(".menu-box");

    // Toggle menu box on clicking menu icon
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents closing when clicking the icon
        menuBox.style.display = menuBox.style.display === "block" ? "none" : "block";
    });

    // Close menu if clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menuBox.contains(event.target) && !menuIcon.contains(event.target)) {
            menuBox.style.display = "none";
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const messageIcon = document.querySelector(".message-icon");
    const messageBox = document.querySelector(".custom-message-box");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".overlay");

  
    messageIcon.addEventListener("click", function () {
        messageBox.style.display = "block";
        overlay.style.display = "block"; 
    });

  
    closeBtn.addEventListener("click", function () {
        messageBox.style.display = "none";
        overlay.style.display = "none"; 
    });


    overlay.addEventListener("click", function () {
        messageBox.style.display = "none";
        overlay.style.display = "none"; 
    });
    
    document.querySelector(".message-icon").addEventListener("click", function() {
        document.querySelector(".custom-message-box").classList.add("show");
    });
    
    document.querySelector(".close-btn").addEventListener("click", function() {
        document.querySelector(".custom-message-box").classList.remove("show");
    });
    
    
});



document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contentsLeft = document.querySelectorAll(".left-content .content");
    const contentsRight = document.querySelectorAll(".right-content .content");
    const underline = document.querySelector(".underline");

    // Position underline initially
    const activeTab = document.querySelector(".tab.active");
    underline.style.left = activeTab.offsetLeft + "px";
    underline.style.width = activeTab.offsetWidth + "px";

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Move underline
            underline.style.left = this.offsetLeft + "px";
            underline.style.width = this.offsetWidth + "px";

            // Show corresponding content (left & right)
            const target = this.dataset.target;
            contentsLeft.forEach(content => content.classList.remove("active"));
            contentsRight.forEach(content => content.classList.remove("active"));

            document.getElementById(target + "-left").classList.add("active");
            document.getElementById(target + "-right").classList.add("active");
        });
    });
});







function toggleDropdown(id, event) {
    event.stopPropagation();
    var dropdown = document.getElementById(id);

    // Close all other dropdowns
    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.style.display = "none";
    });

    // Toggle the selected dropdown
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown when clicking anywhere else
document.addEventListener("click", function () {
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = "none");
});


document.addEventListener("click", function () {
    document.querySelectorAll('.dropdown2').forEach(d => d.style.display = "none");
});




function toggleExperiences() {
    var moreExperiences = document.getElementById("more-experiences");
    var viewAllBtn = document.querySelector(".view-all");

    if (moreExperiences.style.display === "none") {
        moreExperiences.style.display = "block";
        viewAllBtn.textContent = "View Less";
    } else {
        moreExperiences.style.display = "none";
        viewAllBtn.textContent = "View All";
    }
}

function toggleDetails(button) {
    var details = button.previousElementSibling;

    if (details.classList.contains("expanded")) {
        details.classList.remove("expanded");
        button.textContent = "View More";
    } else {
        details.classList.add("expanded");
        button.textContent = "View Less";
    }
}

function toggleSection(sectionId, buttonId) {
    let section = document.getElementById(sectionId);
    let button = document.getElementById(buttonId);

    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
        button.textContent = "View Less";
    } else {
        section.classList.add("hidden");
        button.textContent = "View All";
    }
}





// Toggle Community Stats & Top Areas of Impact
function toggleStats() {
    let moreStats = document.querySelector(".more-stats");
    let topImpact = document.querySelector(".top-impact");
    let toggleBtn = document.querySelector(".toggle-stats");

    if (moreStats.classList.contains("hidden")) {
        moreStats.classList.remove("hidden");
        topImpact.classList.remove("hidden");
        toggleBtn.innerHTML = 'See Less <i class="bi bi-chevron-up"></i>';
    } else {
        moreStats.classList.add("hidden");
        topImpact.classList.add("hidden");
        toggleBtn.innerHTML = 'See More <i class="bi bi-chevron-down"></i>';
    }
}

// Toggle Top Areas of Impact Details
function toggleImpact2() {
    let moreImpact2 = document.querySelector(".more-impact2");
    let toggleBtn2 = document.querySelector(".toggle-impact2");


    
    if ( moreImpact2.classList.contains("hidden")) {
        moreImpact2.classList.remove("hidden");
        toggleBtn2.innerHTML = 'Show less <i class="bi bi-chevron-up"></i></i>';
    } else {
        moreImpact2.classList.add("hidden");
        toggleBtn2.innerHTML = '+4 Others <i class="arrow-icon down"></i>';
    }

}


function toggleImpact() {
    let moreImpact = document.querySelector(".more-impact");
    let toggleBtn = document.querySelector(".toggle-impact");
    


    if (moreImpact.classList.contains("hidden")) {
        moreImpact.classList.remove("hidden");
        toggleBtn.innerHTML = 'Show less <i class="bi bi-chevron-up"></i></i>';
    } else {
        moreImpact.classList.add("hidden");
        toggleBtn.innerHTML = '+4 Others <i class="arrow-icon down"></i>';
    }
}







function toggleStats() {
    let moreStats = document.querySelector(".more-stats");
    let topImpact = document.querySelector(".top-impact");
    let toggleBtn = document.querySelector(".toggle-stats");

    if (moreStats.classList.contains("hidden")) {
        moreStats.classList.remove("hidden");
        topImpact.classList.remove("hidden");
        toggleBtn.innerHTML = 'See Less <i class="bi bi-chevron-up"></i>';
    } else {
        moreStats.classList.add("hidden");
        topImpact.classList.add("hidden");
        toggleBtn.innerHTML = 'See More <i class="bi bi-chevron-down"></i>';
    }



    
}

// Toggle Top Areas of Impact Details
function toggleImpact() {
    let moreImpact = document.querySelector(".more-impact");
    let moreImpact2 = document.querySelector(".more-impact2");
    let toggleBtn = document.querySelector(".toggle-impact");

    if (moreImpact.classList.contains("hidden")) {
        moreImpact.classList.remove("hidden");
        toggleBtn.innerHTML = 'Show less <i class="bi bi-chevron-up"></i></i>';
    } else {
        moreImpact.classList.add("hidden");
        toggleBtn.innerHTML = '+4 Others <i class="arrow-icon down"></i>';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const sessionCards = document.querySelectorAll(".session-card");
    const timeSlotsContainer = document.querySelector(".time-slots");
    const bookButton = document.querySelector(".book-session");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    const sessionTimes = {
        "2025-03-01": ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
        "2025-03-02": ["9:30 AM", "11:30 AM", "3:30 PM"],
        "2025-03-03": ["8:00 AM", "10:00 AM", "1:00 PM", "5:00 PM", "6:30 PM"],
        "2025-03-04": ["11:00 AM", "2:00 PM"]
    };

    let currentIndex = 0;
    const slotsPerPage = 6;
    let timeSlots = [];

    function showSessionSlots(card) {
        sessionCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const selectedDate = card.getAttribute("data-date");
        timeSlots = sessionTimes[selectedDate] || [];
        currentIndex = 0;

        renderSlots();
        updateNavigation();

        bookButton.disabled = false;
        bookButton.textContent = `Book Session for ${card.querySelector(".month").textContent}`;
    }

    function renderSlots() {
        timeSlotsContainer.innerHTML = timeSlots
            .slice(currentIndex, currentIndex + slotsPerPage)
            .map(time => `<button class="time-slot">${time}</button>`)
            .join("");
    }

    function updateNavigation() {
        leftArrow.style.display = currentIndex === 0 ? "none" : "inline-block";
        rightArrow.style.display = currentIndex + slotsPerPage >= timeSlots.length ? "none" : "inline-block";
    }

    rightArrow.addEventListener("click", function () {
        if (currentIndex + slotsPerPage < timeSlots.length) {
            currentIndex += slotsPerPage;
            renderSlots();
            updateNavigation();
        }
    });

    leftArrow.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex -= slotsPerPage;
            renderSlots();
            updateNavigation();
        }
    });

    sessionCards.forEach(card => {
        card.addEventListener("click", function () {
            showSessionSlots(this);
        });
    });

    timeSlotsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("time-slot")) {
            document.querySelectorAll(".time-slot").forEach(slot => slot.classList.remove("active"));
            event.target.classList.add("active");
        }
    });

    // Show the first session's available slots on load
    showSessionSlots(sessionCards[0]);
});



document.addEventListener("DOMContentLoaded", function () {
    let timeSlots = document.querySelector(".time-slots");
    let leftArrow = document.querySelector(".arrow-left");
    let rightArrow = document.querySelector(".arrow-right");
    let maxVisible = 6; // Max slots visible before scroll
    let startIndex = 0;

    function updateArrows() {
        leftArrow.classList.toggle("disabled", startIndex === 0);
        rightArrow.classList.toggle("disabled", startIndex + maxVisible >= timeSlots.children.length);
    }

    function shiftSlots(direction) {
        let totalSlots = timeSlots.children.length;
        if (direction === "right" && startIndex + maxVisible < totalSlots) {
            startIndex += 3;
        } else if (direction === "left" && startIndex > 0) {
            startIndex -= 3;
        }

        let translateValue = -startIndex * 80 + "px";
        timeSlots.style.transform = `translateX(${translateValue})`;
        updateArrows();
    }

    leftArrow.addEventListener("click", () => shiftSlots("left"));
    rightArrow.addEventListener("click", () => shiftSlots("right"));

    // Initial check
    updateArrows();
});


// document.addEventListener("DOMContentLoaded", function () {
//     const desktopModal = document.getElementById("viewAllModal");
//     const mobileModal = document.getElementById("mobileViewAllModal"); // Mobile modal
//     const closeDesktopModalBtn = document.querySelector(".close");
//     const closeMobileModalBtn = document.querySelector(".close-mobile");
//     const checkAvailabilityBtn = document.getElementById("checkAvailability"); // Updated button target

//     // Open correct modal based on screen size
//     checkAvailabilityBtn.addEventListener("click", () => {
//         if (window.innerWidth <= 768) {
//             mobileModal.style.display = "flex";
//         } else {
//             desktopModal.style.display = "flex";
//         }
//     });

//     // Close desktop modal
//     closeDesktopModalBtn.addEventListener("click", () => {
//         desktopModal.style.display = "none";
//     });

//     // Close mobile modal
//     closeMobileModalBtn.addEventListener("click", () => {
//         mobileModal.style.display = "none";
//     });

//     // Close modal when clicking outside the content
//     desktopModal.addEventListener("click", (event) => {
//         if (event.target === desktopModal) {
//             desktopModal.style.display = "none";
//         }
//     });

//     mobileModal.addEventListener("click", (event) => {
//         if (event.target === mobileModal) {
//             mobileModal.style.display = "none";
//         }
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.getElementById("viewAllModal");
//     const closeModalBtn = document.querySelector(".close");
//     const viewAllLink = document.querySelector(".view-all2");
//     const calendarContainer = document.getElementById("calendar");
//     const timeSlotsContainer = document.getElementById("timeSlots");
//     const continueBtn = document.getElementById("continueBtn");
//     const bookingSection = document.getElementById("bookingSection");
//     const prevMonthBtn = document.getElementById("prevMonth");
//     const nextMonthBtn = document.getElementById("nextMonth");
//     const confirmBtn = document.getElementById("confirmBookingBtn");
//     const bookingDate = document.getElementById("bookingDate");
//     // const bookingTime = document.getElementById("bookingTime");
//     const monthTitle = document.getElementById("monthTitle"); 
//     const timeSelection = document.getElementById("timeSelectionSection");


//     let currentMonth = 10; // March
//     let currentYear = 2025;
//     let selectedDate = "";
//     let selectedTime = "";
//     const availableDates = {
//         "2025-05-06": ["4:30 PM", "6:00 PM"],
//         "2025-05-10": ["11:30 AM", "4:00 PM"],
//         "2025-05-12": ["10:00 AM", "2:30 PM"],
//         "2025-05-15": ["9:00 AM", "1:00 PM"],
//         "2025-05-19": ["9:00 AM", "1:00 PM"],
//         "2025-05-20": ["10:00 AM", "1:00 PM"],
//         "2025-05-23": ["12:00 AM", "8:00 PM"],
//         "2025-05-24": ["12:00 AM", "4:00 PM"],
//         "2025-05-26": ["12:00 AM", "8:00 PM"],
//         "2025-05-27": ["12:00 AM", "4:00 PM"],
//         "2025-05-02": ["12:00 AM", "4:00 PM"], // Fixed leading zero
//         "2025-08-03": ["12:00 AM", "4:00 PM"],
//         "2025-10-22": ["12:00 AM", "4:00 PM"]
//     };
//     // Open modal
//     viewAllLink.addEventListener("click", () => {
//         modal.style.display = "flex";
//         resetToCalendar();  
//         timeSelection.classList.remove("hidden");
//     });
    

//     closeModalBtn.addEventListener("click", () => {
//         modal.style.display = "none";
//     });
    
//     modal.addEventListener("click", (event) => {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     });

//     // Show calendar
//     function showCalendar() {
//         calendarContainer.innerHTML = "";
//         timeSlotsContainer.classList.add("hidden");
//         bookingSection.classList.add("hidden");
//         continueBtn.classList.add("hidden");
//         calendarContainer.classList.remove("hidden");
//         prevMonthBtn.classList.remove("hidden");
//         nextMonthBtn.classList.remove("hidden");
    
//         const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
   
    
//         const firstDay = new Date(currentYear, currentMonth, 1).getDay();
//         const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
//         // Get today's date
//         const today = new Date();
//         const todayYear = today.getFullYear();
//         const todayMonth = today.getMonth();
//         const todayDate = today.getDate();


//         const isTodayOrFuture = currentYear > todayYear || (currentYear === todayYear && currentMonth >= todayMonth);
// const isNotFuture = currentYear < todayYear || (currentYear === todayYear && currentMonth <= todayMonth);

// // Disable prev button if viewing current month or earlier
// prevMonthBtn.disabled = !isTodayOrFuture;
// // Disable next button if too far ahead (optional, like only allowing 12 months ahead)
// nextMonthBtn.disabled = false; // or set a limit



    
//         const calendarTable = document.createElement("table");
//         calendarTable.innerHTML = ` 
//             <tr>
//                 <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
//             </tr>
//         `;
    
//         let row = document.createElement("tr");
//         for (let i = 0; i < firstDay; i++) {
//             row.appendChild(document.createElement("td"));
//         }
    
//         for (let day = 1; day <= daysInMonth; day++) {
//             const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
//             const cell = document.createElement("td");
//             cell.textContent = day;
    
//             // Disable past dates automatically
//             if (
//                 (currentYear < todayYear) ||  
//                 (currentYear === todayYear && currentMonth < todayMonth) ||  
//                 (currentYear === todayYear && currentMonth === todayMonth && day < todayDate)  
//             ) {
//                 cell.classList.add("disabled"); 
//             } else {
            
//                 cell.classList.add("enabled"); 
            
               
//                 if (availableDates[dateKey]) {
//                     cell.classList.add("available");
//                     cell.addEventListener("click", () => showTimeSlots(dateKey));
//                 }
//             }
            
    
//             row.appendChild(cell);
    
//             if ((firstDay + day) % 7 === 0) {
//                 calendarTable.appendChild(row);
//                 row = document.createElement("tr");
//             }
//         }
    
//         calendarTable.appendChild(row);
//         calendarContainer.appendChild(calendarTable);
//     }
    


//     nextMonthBtn.addEventListener("click", () => {
//     currentMonth++;
//     if (currentMonth > 11) {
//         currentMonth = 0;
//         currentYear++;
//     }
//     showCalendar();
// });

// prevMonthBtn.addEventListener("click", () => {
//     currentMonth--;
//     if (currentMonth < 0) {
//         currentMonth = 11;
//         currentYear--;
//     }
//     showCalendar();
// });


    




//     function showTimeSlots(date) {
//         selectedDate = date;
//         calendarContainer.classList.add("hidden");
//         timeSlotsContainer.classList.remove("hidden");
//         continueBtn.classList.remove("hidden");
//         prevMonthBtn.classList.add("hidden");
//         nextMonthBtn.classList.add("hidden");


//         monthTitle.innerHTML = `<strong>Available time slots</strong>`;
       

//         const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "long" });

//         timeSlotsContainer.innerHTML = `
//             <p><strong>${dayName}, ${date.split("-").reverse().join(" ")}</strong> 
//             <a href="#" id="changeLink">Change</a></p>
//         `;

//         availableDates[date].forEach(time => {
//             const slotButton = document.createElement("button");
//             slotButton.textContent = time;
//             slotButton.classList.add("slot-btn");

//             slotButton.addEventListener("click", () => {
//                 document.querySelectorAll(".slot-btn").forEach(btn => btn.classList.remove("selected"));
//                 slotButton.classList.add("selected");
//                 selectedTime = time;
//                 continueBtn.disabled = false;
//                 continueBtn.classList.add("active-btn")
                
//             });

//             timeSlotsContainer.appendChild(slotButton);
//         });

//         document.getElementById("changeLink").addEventListener("click", resetToCalendar);
//     }

    
//     function resetToCalendar() {
//         showCalendar();
//     }

    
// // Continue to booking section
// continueBtn.addEventListener("click", () => {
//     if (selectedDate && selectedTime) {
//         timeSlotsContainer.classList.add("hidden");
//         continueBtn.classList.add("hidden");
//         bookingSection.classList.remove("hidden");
//         timeSelection.classList.add("hidden");

//         bookingDate.innerHTML = `<i class="bi bi-calendar-date"></i> ${selectedDate}  
//                                  <i class="bi bi-clock"></i> ${selectedTime} 
//                                  <a href="#" id="changeBooking" style="margin-left: 10px; ">Change</a>`;

//         document.getElementById("changeBooking").addEventListener("click", (e) => {
//             e.preventDefault();
//             resetToCalendar();
//             timeSelection.classList.remove("hidden");
//             bookingSection.classList.add("hidden"); 
//         });
//     }
// });




// function resetToCalendar() {
//     showCalendar();
// }




//     confirmBtn.addEventListener("click", () => {
//         alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
//     });


//     prevMonthBtn.addEventListener("click", () => {
//         if (currentMonth > 2) {
//             currentMonth--;
//             showCalendar();
//         }
//     });

//     nextMonthBtn.addEventListener("click", () => {
//         if (currentMonth < 3) {
//             currentMonth++;
//             showCalendar();
//         }
//     });


    
// });
// document.addEventListener("DOMContentLoaded", async () => {
//   const token = localStorage.getItem("menteeToken");
//   const mentorUserId = localStorage.getItem("selectedMentorUserId");
//   const API_URL = "http://localhost:5000/api/v1";

//   if (!token) {
//     window.location.href = "/public/login.html";
//     return;
//   }
//   if (!mentorUserId) {
//     alert("❌ Mentor user ID not found. Please reopen the mentor profile.");
//     return;
//   }

//   const sessionCardsRow = document.querySelector(".session-cards-row");
//   const viewAllLink = document.querySelector(".view-all2");
//   const modal = document.getElementById("viewAllModal");
//   const closeModalBtn = document.querySelector(".close");
//   const calendarContainer = document.getElementById("calendar");
//   const monthTitle = document.getElementById("monthTitle");
//   const timeSlotsContainer = document.querySelector(".time-slots");
//   const continueBtn = document.getElementById("continueBtn");
//   const bookingSection = document.getElementById("bookingSection");
//   const bookingDate = document.getElementById("bookingDate");
//   const bookingTime = document.getElementById("bookingTime");
//   const prevMonthBtn = document.getElementById("prevMonth");
//   const nextMonthBtn = document.getElementById("nextMonth");
//   const confirmBookingBtn = document.getElementById("confirmBookingBtn");
//   const sessionTopic = document.getElementById("sessionTopic");
//   const sessionGoals = document.getElementById("sessionGoals");

//   let availabilityData = [];
//   let selectedDate = "";
//   let selectedTime = "";
//   let currentMonth, currentYear;

//   // =========================
//   // FETCH AVAILABILITY
//   // =========================
//   async function loadAvailability() {
//     try {
//       const res = await fetch(`${API_URL}/availability/${mentorUserId}`, {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       if (!res.ok) throw new Error("Failed to fetch availability");

//       const data = await res.json();
//       availabilityData = (data.data || []).filter(slot => {
//         // Only today or future dates
//         const slotDate = new Date(slot.date);
//         const today = new Date();
//         today.setHours(0,0,0,0);
//         return slotDate >= today;
//       });

//       renderFirstFourDates();
//       showTodaySlots();
//     } catch (err) {
//       console.error(err);
//       sessionCardsRow.innerHTML = "<p style='color:red;'>Error loading availability.</p>";
//     }
//   }

//   // =========================
//   // RENDER FIRST 4 DATES
//   // =========================
//   function renderFirstFourDates() {
//     sessionCardsRow.innerHTML = "";
//     const firstFour = availabilityData.slice(0, 4);
//     const todayStr = new Date().toISOString().split("T")[0];

//     firstFour.forEach(slot => {
//       const dateObj = new Date(slot.date);
//       const day = dateObj.toLocaleDateString("en-US", { weekday: "short" });
//       const month = dateObj.toLocaleDateString("en-US", { month: "short", day: "2-digit" });

//       const card = document.createElement("div");
//       card.classList.add("session-card");
//       card.style.display = "inline-block";
//       card.style.border = "1px solid black";
//       card.style.borderRadius = "6px";
//       card.style.padding = "6px 10px";
//       card.style.marginRight = "8px";
//       card.style.cursor = "pointer";
//       card.style.backgroundColor = slot.date === todayStr ? "#B22222" : "#fff";
//       card.style.color = slot.date === todayStr ? "#fff" : "#000";

//       card.dataset.date = slot.date;

//       card.innerHTML = `
//         <span class="day">${day}</span>
//         <span class="month">${month}</span>
//         <span class="slots"> ${slot.startTime} - ${slot.endTime}</span>
//       `;

//       card.addEventListener("click", () => {
//         selectedDate = slot.date;
//         selectedTime = `${slot.startTime} - ${slot.endTime}`;
//         showSelectedSlot(slot);
//       });

//       sessionCardsRow.appendChild(card);
//     });
//   }

//   // =========================
//   // SHOW TODAY’S SLOTS
//   // =========================
//   function showTodaySlots() {
//     const today = new Date();
//     const todayStr = today.toISOString().split("T")[0];
//     const todaySlot = availabilityData.find(slot => slot.date === todayStr);
//     if (todaySlot) {
//       selectedDate = todaySlot.date;
//       selectedTime = `${todaySlot.startTime} - ${todaySlot.endTime}`;
//       showSelectedSlot(todaySlot);
//     } else {
//       timeSlotsContainer.innerHTML = "<p>No available slots for today.</p>";
//     }
//   }

//   // =========================
//   // SHOW SELECTED SLOT
//   // =========================
//   function showSelectedSlot(slot) {
//     timeSlotsContainer.innerHTML = "";
//     const slotDiv = document.createElement("div");
//     slotDiv.style.border = "1px solid black";
//     slotDiv.style.borderRadius = "6px";
//     slotDiv.style.padding = "6px 10px";
//     slotDiv.style.display = "inline-block";
//     slotDiv.style.backgroundColor = "#fff";
//     slotDiv.textContent = `${slot.startTime} - ${slot.endTime}`;
//     timeSlotsContainer.appendChild(slotDiv);
//   }

//   // =========================
//   // VIEW ALL CALENDAR
//   // =========================
//   viewAllLink.addEventListener("click", () => {
//     modal.style.display = "flex";
//     const today = new Date();
//     currentMonth = today.getMonth();
//     currentYear = today.getFullYear();
//     renderCalendar(currentMonth, currentYear);
//   });

//   closeModalBtn.addEventListener("click", () => { modal.style.display = "none"; });
//   modal.addEventListener("click", e => { if(e.target===modal) modal.style.display="none"; });

//   function renderCalendar(month, year) {
//     calendarContainer.innerHTML = "";
//     const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     monthTitle.textContent = `${monthNames[month]} ${year}`;

//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     const table = document.createElement("table");
//     table.innerHTML = "<tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>";
//     let row = document.createElement("tr");

//     const today = new Date();
//     const todayStr = today.toISOString().split("T")[0];

//     for(let i=0;i<firstDay;i++) row.appendChild(document.createElement("td"));

//     for(let d=1; d<=daysInMonth; d++){
//       const cell = document.createElement("td");
//       cell.textContent = d;
//       const cellDateStr = `${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
//       const pastDate = new Date(cellDateStr) < today;
//       if(pastDate) cell.classList.add("disabled");
//       if(availabilityData.some(s=>s.date===cellDateStr)){
//         cell.classList.add("available");
//         cell.style.cursor = "pointer";
//         cell.addEventListener("click", ()=>{
//           const slot = availabilityData.find(s=>s.date===cellDateStr);
//           selectedDate = slot.date;
//           selectedTime = `${slot.startTime} - ${slot.endTime}`;
//           showSelectedSlot(slot);
//           modal.style.display="none";
//         });
//       }
//       row.appendChild(cell);
//       if((row.children.length)%7===0){ table.appendChild(row); row=document.createElement("tr"); }
//     }
//     table.appendChild(row);
//     calendarContainer.appendChild(table);
//   }

//   prevMonthBtn.addEventListener("click", ()=>{
//     currentMonth--;
//     if(currentMonth<0){currentMonth=11;currentYear--;}
//     renderCalendar(currentMonth,currentYear);
//   });
//   nextMonthBtn.addEventListener("click", ()=>{
//     currentMonth++;
//     if(currentMonth>11){currentMonth=0;currentYear++;}
//     renderCalendar(currentMonth,currentYear);
//   });

//   // =========================
//   // CONFIRM BOOKING
//   // =========================
//   confirmBookingBtn.addEventListener("click", async () => {
//     const topic = sessionTopic.value.trim();
//     const goals = sessionGoals.value.trim();
//     if (!selectedDate || !selectedTime || !topic || !goals){
//       alert("⚠️ Please select a date, time, and fill in all fields."); return;
//     }
//     try {
//       const res = await fetch(`${API_URL}/appointment/book/${mentorUserId}`,{
//         method:"POST",
//         headers:{
//           "Authorization":`Bearer ${token}`,
//           "Content-Type":"application/json"
//         },
//         body:JSON.stringify({date:selectedDate,time:selectedTime,topic,goals})
//       });
//       const result = await res.json();
//       if(res.ok){
//         alert("✅ Booking confirmed!");
//         bookingSection.classList.add("hidden");
//         sessionTopic.value="";
//         sessionGoals.value="";
//       }else alert(result.message||"❌ Failed to book session");
//     } catch(err){console.error(err); alert("⚠️ Something went wrong");}
//   });

//   // Run
//   loadAvailability();
// });


document.getElementById("load-more-btn").addEventListener("click", function() {
    document.getElementById("more-comments").style.display = "block";
    this.style.display = "none"; // Hide the button after clicking
  });



// document.addEventListener("DOMContentLoaded", function () {
//     const checkAvailabilityBtn = document.getElementById("checkAvailability");
//     const viewAllModal = document.getElementById("viewAllModal");
//     const mobileViewAllModal = document.getElementById("mobileViewAllModal");
//     const closeModalBtns = document.querySelectorAll(".close"); // Select all close buttons

//     // Modal Open and Close Handling
//     checkAvailabilityBtn.addEventListener("click", () => {
//         if (window.innerWidth <= 768) {
//             mobileViewAllModal.style.display = "flex"; // Show mobile modal
//         } else {
//             viewAllModal.style.display = "flex"; // Show desktop modal
//         }
//     });

//     // Close modals when clicking close buttons
//     closeModalBtns.forEach(btn => {
//         btn.addEventListener("click", () => {
//             viewAllModal.style.display = "none";
//             mobileViewAllModal.style.display = "none";
//         });
//     });

//     // Close modal when clicking outside content
//     window.addEventListener("click", (event) => {
//         if (event.target === viewAllModal) {
//             viewAllModal.style.display = "none";
//         }
//         if (event.target === mobileViewAllModal) {
//             mobileViewAllModal.style.display = "none";
//         }
//     });

    // Mobile Modal Calendar

   

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("viewAllModal2");
    const closeModalBtn = document.querySelector(".close2");
    const viewAllLink = document.querySelector(".view-all3");
    const calendarContainer = document.getElementById("calendar2");
    const timeSlotsContainer = document.getElementById("timeSlots2");
    const continueBtn = document.getElementById("continueBtn2");
    const bookingSection = document.getElementById("bookingSection2");
    const prevMonthBtn = document.getElementById("prevMonth2");
    const nextMonthBtn = document.getElementById("nextMonth2");
    const confirmBtn = document.getElementById("confirmBookingBtn2");
    const bookingDate = document.getElementById("bookingDate2");
    // const bookingTime = document.getElementById("bookingTime");
    const monthTitle = document.getElementById("monthTitle2"); 
    const timeSelection = document.getElementById("timeSelectionSection2");


    const today = new Date();
    let currentMonth = today.getMonth(); // 0 = January
    let currentYear = today.getFullYear();
    let selectedDate = "";
    let selectedTime = "";
    const availableDates = {
        "2025-05-06": ["4:30 PM", "6:00 PM"],
        "2025-05-10": ["11:30 AM", "4:00 PM"],
        "2025-05-12": ["10:00 AM", "2:30 PM"],
        "2025-05-15": ["9:00 AM", "1:00 PM"],
        "2025-05-19": ["9:00 AM", "1:00 PM"],
        "2025-05-20": ["10:00 AM", "1:00 PM"],
        "2025-05-23": ["12:00 AM", "8:00 PM"],
        "2025-05-24": ["12:00 AM", "4:00 PM"],
        "2025-05-26": ["12:00 AM", "8:00 PM"],
        "2025-05-27": ["12:00 AM", "4:00 PM"],
        "2025-05-02": ["12:00 AM", "4:00 PM"], // Fixed leading zero
        "2025-05-03": ["12:00 AM", "4:00 PM"],
        "2025-05-04": ["12:00 AM", "4:00 PM"]
    };
    // Open modal
    viewAllLink.addEventListener("click", () => {
        modal.style.display = "flex";
        resetToCalendar();  
        timeSelection.classList.remove("hidden");
    });
    

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Show calendar
    function showCalendar() {
        calendarContainer.innerHTML = "";
        timeSlotsContainer.classList.add("hidden");
        bookingSection.classList.add("hidden");
        continueBtn.classList.add("hidden");
        calendarContainer.classList.remove("hidden");
        prevMonthBtn.classList.remove("hidden");
        nextMonthBtn.classList.remove("hidden");
    
       const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

        monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    


    
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
        // Get today's date
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDate = today.getDate();

        const isTodayOrFuture = currentYear > todayYear || (currentYear === todayYear && currentMonth >= todayMonth);
        const isNotFuture = currentYear < todayYear || (currentYear === todayYear && currentMonth <= todayMonth);

        // Disable prev button if viewing current month or earlier
        prevMonthBtn.disabled = !isTodayOrFuture;
        // Disable next button if too far ahead (optional, like only allowing 12 months ahead)
        nextMonthBtn.disabled = false; // or set a limit



    
        const calendarTable = document.createElement("table");
        calendarTable.innerHTML = `
            <tr>
                <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
            </tr>
        `;
    
        let row = document.createElement("tr");
        for (let i = 0; i < firstDay; i++) {
            row.appendChild(document.createElement("td"));
        }
    
        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(1, "0")}`;
            const cell = document.createElement("td");
            cell.textContent = day;
    
            // Disable past dates automatically
            if (
                (currentYear < todayYear) ||  
                (currentYear === todayYear && currentMonth < todayMonth) ||  
                (currentYear === todayYear && currentMonth === todayMonth && day < todayDate)  
            ) {
                cell.classList.add("disabled"); 
            } else {
            
                cell.classList.add("enabled"); 
            
               
                if (availableDates[dateKey]) {
                    cell.classList.add("available");
                    cell.addEventListener("click", () => showTimeSlots(dateKey));
                }
            }
            
    
            row.appendChild(cell);
    
            if ((firstDay + day) % 7 === 0) {
                calendarTable.appendChild(row);
                row = document.createElement("tr");
            }
        }
    
        calendarTable.appendChild(row);
        calendarContainer.appendChild(calendarTable);
    }



    nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    showCalendar();
});

prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    showCalendar();
});

    




    function showTimeSlots(date) {
        selectedDate = date;
        calendarContainer.classList.add("hidden");
        timeSlotsContainer.classList.remove("hidden");
        continueBtn.classList.remove("hidden");
        prevMonthBtn.classList.add("hidden");
        nextMonthBtn.classList.add("hidden");


        monthTitle.innerHTML = `<strong>Available time slots</strong>`;
       

        const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "long" });

        timeSlotsContainer.innerHTML = `
            <p><strong>${dayName}, ${date.split("-").reverse().join(" ")}</strong> 
            <a href="#" id="changeLink">Change</a></p>
        `;

        availableDates[date].forEach(time => {
            const slotButton = document.createElement("button");
            slotButton.textContent = time;
            slotButton.classList.add("slot-btn");

            slotButton.addEventListener("click", () => {
                document.querySelectorAll(".slot-btn").forEach(btn => btn.classList.remove("selected"));
                slotButton.classList.add("selected");
                selectedTime = time;
                continueBtn.disabled = false;
                continueBtn.classList.add("active-btn")
                
            });

            timeSlotsContainer.appendChild(slotButton);
        });

        document.getElementById("changeLink").addEventListener("click", resetToCalendar);
    }

    
    function resetToCalendar() {
        showCalendar();
    }

    
// Continue to booking section
continueBtn.addEventListener("click", () => {
    if (selectedDate && selectedTime) {
        timeSlotsContainer.classList.add("hidden");
        continueBtn.classList.add("hidden");
        bookingSection.classList.remove("hidden");
        timeSelection.classList.add("hidden");

        bookingDate.innerHTML = `<i class="bi bi-calendar-date"></i> ${selectedDate}  
                                 <i class="bi bi-clock"></i> ${selectedTime} 
                                 <a href="#" id="changeBooking" style="margin-left: 10px; ">Change</a>`;

        document.getElementById("changeBooking").addEventListener("click", (e) => {
            e.preventDefault();
            resetToCalendar();
            timeSelection.classList.remove("hidden");
            bookingSection.classList.add("hidden"); 
        });
    }
});




function resetToCalendar() {
    showCalendar();
}




    confirmBtn.addEventListener("click", () => {
        alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
    });


    prevMonthBtn.addEventListener("click", () => {
        if (currentMonth > 2) {
            currentMonth--;
            showCalendar();
        }
    });

    nextMonthBtn.addEventListener("click", () => {
        if (currentMonth < 3) {
            currentMonth++;
            showCalendar();
        }
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


async function loadMentorProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const mentorId = urlParams.get("mentorId"); // ✅ e.g., ?mentorId=210001
  const token = localStorage.getItem("menteeToken");

  try {
    const res = await fetch(`http://localhost:5000/api/v1/mentors/${mentorId}`, {
      headers: { "Authorization": `Bearer ${token}` }
    });

    // ✅ Try to parse JSON safely
    let json;
    try {
      json = await res.json();
    } catch (parseErr) {
      console.error("❌ Failed to parse response as JSON:", parseErr);
      throw new Error("Invalid JSON from server");
    }

    console.log("🔍 Raw mentor profile response:", json);

    if (!res.ok) {
      console.error("❌ Mentor profile fetch failed:", json);
      throw new Error(json.message || "Failed to fetch mentor profile");
    }

    const mentor = json.data || {}; // ✅ Corrected this variable name

    // ✅ Store both IDs for later use (like booking/availability)
    localStorage.setItem("selectedMentorId", mentor.id); // mentor table ID
    localStorage.setItem("selectedMentorUserId", mentor.user_id); // user table ID ✅

    // ✅ Render mentor data (you already have this function)
    renderProfile(mentor);

  } catch (err) {
    console.error("❌ Error in loadMentorProfile:", err);
  }
}

// ===============================
// Toggle sections (no change)
// ===============================
function toggleSection(sectionId, btnId) {
  const section = document.getElementById(sectionId);
  const btn = document.getElementById(btnId);
  if (!section || !btn) return;

  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    btn.textContent = "Hide";
  } else {
    section.classList.add("hidden");
    btn.textContent = "View All";
  }
}

// ===============================
// Toggle "View More" for details
// ===============================
function toggleDetails(btn) {
  const details = btn.previousElementSibling;
  if (!details) return;

  if (details.classList.contains("expanded")) {
    details.classList.remove("expanded");
    btn.textContent = "View More";
  } else {
    details.classList.add("expanded");
    btn.textContent = "Hide";
  }
}


function renderProfile(data) {
  // ✅ Basic info
  document.querySelector(".user-profile-img img").src = data.picture || "images/default-avatar.png";
  document.querySelector(".user-name").textContent = `${data.name} ${data.countryCode ? " " + data.countryCode : ""}`;
  document.querySelector(".user-role").textContent = data.role || "";


  // ✅ Update modal content dynamically
const modalMentorImg = document.querySelector(".modal-mentor-img");
const modalMentorName = document.querySelector(".modal-mentor-name");
const modalMentorRole = document.querySelector(".modal-mentor-role");

      document.querySelector(".mentor-img2").src = data.picture || "css/img/default-mentor.jpg";
      document.querySelector(".mentor-name2").textContent = data.name || "Unknown";
      document.querySelector(".mentor-role2").textContent = data.role || "Mentor";

if (modalMentorImg) modalMentorImg.src = data.picture || "images/default-avatar.png";
if (modalMentorName) modalMentorName.textContent = data.name || "Unknown Mentor";
if (modalMentorRole) modalMentorRole.textContent = data.role || "No role specified";





  // ✅ Bio (shortened with toggle)
  const bioContainer = document.getElementById("shortBio");
  const maxLength = 150;
  if (data.bio && data.bio.length > maxLength) {
    bioContainer.innerHTML = `
      ${data.bio.substring(0, maxLength)}...
      <span class="read-more" style="color:#b22222; cursor:pointer;">Read more</span>
    `;
    bioContainer.querySelector(".read-more").addEventListener("click", () => {
      bioContainer.innerHTML = `
        ${data.bio} 
        <span class="read-less" style="color:#b22222; cursor:pointer;">Read less</span>
      `;
      bioContainer.querySelector(".read-less").addEventListener("click", () => renderProfile(data));
    });
  } else {
    bioContainer.textContent = data.bio || "";
  }
console.log("Expertise:", data.expertise);
console.log("Disciplines (raw):", data.disciplines || data.discipline);
console.log("Fluent In (raw):", data.fluentIn || data.languages);
console.log("👀 Mentor isOnline from backend:", data.isOnline);

renderLimitedTags(".expertise-tags", data.expertise || []);
renderLimitedTags(".discipline-tags", data.discipline || data.discipline || []);
renderLimitedTags(".language-tags", data.fluentIn || data.languages || []);


const linkedinAnchor = document.querySelector(".social-icons1 .social-icons a");
console.log("🔎 Anchor element:", linkedinAnchor);
console.log("🔎 LinkedIn URL from backend:", data.linkedinUrl);

if (linkedinAnchor && data.linkedinUrl) {
  linkedinAnchor.href = data.linkedinUrl;
  linkedinAnchor.target = "_blank"; 
  console.log("✅ LinkedIn link set successfully:", linkedinAnchor.href);
} else {
  console.log("❌ LinkedIn link not set (missing anchor or URL)");
}





console.log("Experience Data:", data.experience);
console.log("Education Data:", data.education);


  // ✅ Experience
 // ========== EXPERIENCE ==========
function renderExperience(experiences, expanded = false) {
  const container = document.querySelector(".experience1");
  container.innerHTML = "";

  if (!experiences || experiences.length === 0) return;

  const countBadge = experiences.length > 1 ? `<span class="count-badge">${experiences.length}</span>` : "";

  let header = `
    <div class="section-header">
      <h2>Experience ${countBadge}</h2>
      ${experiences.length > 1 ? `<button class="view-all-btn">${expanded ? "View Less" : "View All"}</button>` : ""}
    </div>
  `;

  let body = "";

  if (!expanded) {
    // Show only first item (preview)
    const first = experiences[0];
    body = `
      <div class="experience-header">
        <div class="icon2"><i class="bi bi-briefcase-fill"></i></div>
        <div class="title">
          <h3>${first.title}</h3>
          <p class="company">${first.company}</p>
        </div>
        <p class="timeframe">${first.startDate} - ${first.present ? "Present" : first.endDate}</p>
      </div>
    `;
  } else {
    // Show ALL items with details
    body = experiences.map((exp, i) => `
      <div class="experience-header ${i > 0 ? "with-border" : ""}">
        <div class="icon2"><i class="bi bi-briefcase-fill"></i></div>
        <div class="title">
          <h3>${exp.title}</h3>
          <p class="company">${exp.company}</p>
          ${exp.description ? `<p class="desc">${exp.description}</p>` : ""}
        </div>
        <p class="timeframe">${exp.startDate} - ${exp.present ? "Present" : exp.endDate}</p>
      </div>
    `).join("");
  }

  container.innerHTML = header + body;

  // Attach toggle again
  const btn = container.querySelector(".view-all-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      renderExperience(experiences, !expanded);
    });
  }
}

// ========== EDUCATION ==========
// ========== EDUCATION ==========
function renderEducation(education, expanded = false) {
  const container = document.querySelector(".education-section");
  container.innerHTML = "";

  if (!education || education.length === 0) return;

  const countBadge = education.length > 1 ? `<span class="count-badge">${education.length}</span>` : "";

  let header = `
    <div class="section-header">
      <h2>Education ${countBadge}</h2>
      ${education.length > 1 ? `<button class="view-all-btn">${expanded ? "View Less" : "View All"}</button>` : ""}
    </div>
  `;

  let body = "";

  if (!expanded) {
    // Preview = only first
    const first = education[0];
    body = `
      <div class="education-header">
        <div class="education-title">
          <i class="bi bi-mortarboard icon"></i>
          <div class="title2">
            <h3>${first.degree}</h3>
            <p class="institution">${first.school}</p>
          </div>
        </div>
        <p class="duration">${first.startDate} - ${first.endDate}</p>
      </div>
    `;
  } else {
    // Show ALL with borders for items after the first
    body = education.map((edu, i) => `
      <div class="education-header ${i > 0 ? "with-border" : ""}">
        <div class="education-title">
          <i class="bi bi-mortarboard icon"></i>
          <div class="title2">
            <h3>${edu.degree}</h3>
            <p class="institution">${edu.school}</p>
            ${edu.description ? `<p class="desc">${edu.description}</p>` : ""}
          </div>
        </div>
        <p class="duration">${edu.startDate} - ${edu.endDate}</p>
      </div>
    `).join("");
  }

  container.innerHTML = header + body;

  // Attach toggle
  const btn = container.querySelector(".view-all-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      renderEducation(education, !expanded);
    });
  }
}


// Usage
renderExperience(data.experience || []);
renderEducation(data.education || []);


  // ✅ Availability
  renderAvailability(data.isOnline);
  
}
function renderLimitedTags(selector, items) {
  const container = document.querySelector(selector);
  container.innerHTML = "";

  if (!items || items.length === 0) return;

  const maxVisible = 3;
  const visibleItems = items.slice(0, maxVisible);
  const extraItems = items.slice(maxVisible);

  // Render first few
  visibleItems.forEach(item => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = item;
    container.appendChild(span);
  });

  if (extraItems.length > 0) {
    // Show "+N more"
    const moreBtn = document.createElement("span");
    moreBtn.className = "tag more-btn";
    moreBtn.textContent = `+${extraItems.length}`;
    container.appendChild(moreBtn);

    // Dropdown container
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown-tags";
    dropdown.style.display = "none";

    extraItems.forEach(item => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = item;
      dropdown.appendChild(span);
    });

    container.appendChild(dropdown);

    // Toggle show/hide
    moreBtn.addEventListener("click", () => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  }
}

function renderAvailability(isOnline) {
  const availabilityDiv = document.querySelector(".availability-big");
  if (isOnline) {
    availabilityDiv.textContent = "Available";
    availabilityDiv.classList.add("available");
    availabilityDiv.classList.remove("unavailable");
  } else {
    availabilityDiv.textContent = "Unavailable";
    availabilityDiv.classList.add("unavailable");
    availabilityDiv.classList.remove("available");
  }
}


// ✅ Call on page load
loadMentorProfile();


document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("menteeToken");
  const mentorUserId = localStorage.getItem("selectedMentorUserId");
  const API_URL = "http://localhost:5000/api/v1";

  if (!token) return (window.location.href = "/public/login.html");
  if (!mentorUserId) return  alert("❌ Mentor user ID not found.");

  const sessionCardsContainer = document.querySelector(".session-cards-row");
  const mainTimeSlots = document.querySelector(".time-slots");
  const bookSessionBtn = document.querySelector(".book-session");

  const modal = document.getElementById("viewAllModal");
  const viewAllLink = document.querySelector(".view-all2");
  const closeModalBtn = document.querySelector(".close");

  const calendarContainer = document.getElementById("calendar");
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");
  const monthTitle = document.getElementById("monthTitle");

  let modalTimeSlots =
    document.getElementById("modalTimeSlots") ||
    document.querySelector(".modal-time-slots");
  if (!modalTimeSlots && modal) {
    modalTimeSlots = document.createElement("div");
    modalTimeSlots.id = "modalTimeSlots";
    modalTimeSlots.className = "modal-time-slots";
    if (calendarContainer && calendarContainer.parentNode)
      calendarContainer.parentNode.insertBefore(
        modalTimeSlots,
        calendarContainer.nextSibling
      );
    else modal.appendChild(modalTimeSlots);
  }

  const continueBtn = document.getElementById("continueBtn");
  const bookingSection = document.getElementById("bookingSection");
  const bookingDate = document.getElementById("bookingDate");
  const bookingTime = document.getElementById("bookingTime");
  const sessionTopic = document.getElementById("sessionTopic");
  const sessionGoals = document.getElementById("sessionGoals");
  const confirmBookingBtn = document.getElementById("confirmBookingBtn");

  let availabilityData = [];
  let selectedDate = "";
  let selectedTime = "";
  let flowFromDefault = false;

  let currentMonth = null;
  let currentYear = null;

  // Load availability
  async function loadAvailability() {
    try {
      const res = await fetch(`${API_URL}/availability/${mentorUserId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error(`Failed (${res.status})`);
      const data = await res.json();
      availabilityData = data.data || [];

      const today = new Date();
      availabilityData = availabilityData.filter(
        (s) => new Date(s.date) >= new Date(today.setHours(0, 0, 0, 0))
      );
      availabilityData.sort((a, b) => new Date(a.date) - new Date(b.date));

      renderFirstFourCards();
      showDefaultTodaySlots();
    } catch (err) {
      console.error(err);
      sessionCardsContainer.innerHTML =
        "<p style='color:red;'>Error loading sessions.</p>";
    }
  }

  // Render first 4 cards
  function renderFirstFourCards() {
    sessionCardsContainer.innerHTML = "";
    sessionCardsContainer.style.display = "flex";
    sessionCardsContainer.style.gap = "10px";

    const uniqueDates = [...new Set(availabilityData.map((s) => s.date))].slice(
      0,
      4
    );

    uniqueDates.forEach((date) => {
      const dateObj = new Date(date);
      const day = dateObj.toLocaleDateString("en-US", { weekday: "short" });
      const month = dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      });
      const count = availabilityData.filter((s) => s.date === date).length;

      const card = document.createElement("div");
      card.classList.add("session-card");
      card.dataset.date = date;
      card.style.cursor = "pointer";
      card.style.padding = "8px";
      card.style.border = "1px solid #000";
      card.style.borderRadius = "5px";
      card.style.textAlign = "center";
      card.style.minWidth = "70px";
      card.style.fontSize = "13px";
      card.innerHTML = `<span class="day">${day}</span>
                        <span class="month">${month}</span>
                        <span class="slots">${count} slot${count > 1 ? "s" : ""}</span>`;

      card.addEventListener("click", () => {
        showMainTimeSlotsForDate(date);
      });

      sessionCardsContainer.appendChild(card);
    });
  }

  // Show today's slots
// Show default slots (first available date)
function showDefaultTodaySlots() {
  if (!availabilityData.length) {
    mainTimeSlots.innerHTML = "<p>No available slots.</p>";
    if (bookSessionBtn) bookSessionBtn.disabled = true;
    return;
  }

  // get unique sorted dates
  const uniqueDates = [...new Set(availabilityData.map((s) => s.date))].sort(
    (a, b) => new Date(a) - new Date(b)
  );

  // pick the *first* available date (since we removed today)
  const firstAvailable = uniqueDates[0];
  if (firstAvailable) {
    showMainTimeSlotsForDate(firstAvailable);

    // mark its card as selected visually
    document.querySelectorAll(".session-card").forEach((card) => {
      card.classList.toggle("selected", card.dataset.date === firstAvailable);
    });
  }
}


  // Show main slots
  function showMainTimeSlotsForDate(date) {
    selectedDate = date;
    selectedTime = "";
    mainTimeSlots.innerHTML = "";

    const slotsForDate = availabilityData.filter((s) => s.date === date);
    if (!slotsForDate.length) {
      mainTimeSlots.innerHTML = "<p>No available slots.</p>";
      if (bookSessionBtn) bookSessionBtn.disabled = true;
      return;
    }

    slotsForDate.forEach((slot) => {
      const btn = document.createElement("button");
      btn.textContent = `${slot.startTime} - ${slot.endTime}`;
      btn.classList.add("slot-btn");
      btn.style.marginRight = "6px";

      btn.addEventListener("click", () => {
        mainTimeSlots.querySelectorAll(".slot-btn").forEach((b) => {
          b.classList.remove("selected");
          b.style.background = "";
          b.style.color = "";
        });
        btn.classList.add("selected");
        btn.style.background = "#B22222";
        btn.style.color = "#fff";
        selectedTime = `${slot.startTime} - ${slot.endTime}`;
        if (bookSessionBtn) bookSessionBtn.disabled = false;
      });

      mainTimeSlots.appendChild(btn);
    });

    document.querySelectorAll(".session-card").forEach((card) => {
      card.classList.toggle("selected", card.dataset.date === date);
    });

    if (bookSessionBtn) bookSessionBtn.disabled = true;
  }

  // Book from default section
  if (bookSessionBtn) {
    bookSessionBtn.addEventListener("click", () => {
      if (!selectedDate || !selectedTime)
        return alert("Please select a time slot first.");
      flowFromDefault = true;
      openConfirmBookingModal(selectedDate, selectedTime);
    });
  }

  // Open confirm booking modal
  function openConfirmBookingModal(date, time) {
    modal.style.display = "flex";
    calendarContainer?.classList.add("hidden");
    modalTimeSlots?.classList.add("hidden");
    continueBtn?.classList.add("hidden");
    bookingSection?.classList.remove("hidden");

    bookingDate.textContent = `📅 ${date}`;
    bookingTime.textContent = time;

    const old = bookingDate.querySelector(".booking-change-btn");
    if (old) old.remove();

    const change = document.createElement("button");
    change.textContent = "Change";
    change.className = "booking-change-btn";
    change.style.cssText = `
      margin-left: 10px;
      color: #B22222;
      background: none;
      border: none;
      font-weight: 500;
      cursor: pointer;
    `;
    change.addEventListener(
      "mouseenter",
      () => (change.style.textDecoration = "underline")
    );
    change.addEventListener(
      "mouseleave",
      () => (change.style.textDecoration = "none")
    );
    change.addEventListener("click", () => {
      if (flowFromDefault) {
        modal.style.display = "none";
      } else {
        bookingSection.classList.add("hidden");
        modalTimeSlots.classList.add("hidden");
        calendarContainer.classList.remove("hidden");
        continueBtn.classList.add("hidden");
      }
    });
    bookingDate.appendChild(change);
  }

  // Confirm booking
 if (confirmBookingBtn) {
  confirmBookingBtn.addEventListener("click", async () => {
    const topic = sessionTopic.value.trim();
    const goals = sessionGoals.value.trim();

    if (!selectedDate || !selectedTime || !topic || !goals)
      return alert("Please fill all fields before confirming!");

    try {
      const token = localStorage.getItem("menteeToken");
      const mentorUserId = localStorage.getItem("selectedMentorUserId");
      const API_URL = "http://localhost:5000/api/v1";

      const res = await fetch(`${API_URL}/appointments/book/${mentorUserId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
  date: selectedDate,
  startTime: selectedTime.split(" - ")[0].trim(),
  endTime: selectedTime.split(" - ")[1].trim(),
  topic,
  goals,
}),

      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Booking confirmed!");
        sessionTopic.value = "";
        sessionGoals.value = "";
        modal.style.display = "none"; // same modal hide behavior
        await loadAvailability(); // keep same refresh logic
      } else {
        alert(result.message || "❌ Failed to book session.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Booking error.");
    }
  });
}

  document.addEventListener("DOMContentLoaded", () => {
  const lastStep = localStorage.getItem("lastModalStep");
  const lastDate = localStorage.getItem("lastSelectedDate");
  const lastTime = localStorage.getItem("lastSelectedTime");

  if (lastStep === "timeSlots" && lastDate) {
    showModalTimeSlotsForDate(lastDate);
  } else if (lastStep === "calendar") {
    calendarContainer.classList.remove("hidden");
  }
});


  // View all
  if (viewAllLink) {
    viewAllLink.addEventListener("click", () => {
      flowFromDefault = false;
      modal.style.display = "flex";
      bookingSection?.classList.add("hidden");
      modalTimeSlots?.classList.add("hidden");
      continueBtn?.classList.add("hidden");
      calendarContainer?.classList.remove("hidden");
      const today = new Date();
      currentMonth = today.getMonth();
      currentYear = today.getFullYear();
      renderCalendar();
    });
  }

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // click outside to close
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  prevMonthBtn?.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });
  nextMonthBtn?.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });

function renderCalendar() {
  if (!calendarContainer) return;
  calendarContainer.innerHTML = "";
  monthTitle.style.display = "block";
  prevMonthBtn.style.display = "inline-block";
  nextMonthBtn.style.display = "inline-block";

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const table = document.createElement("table");
  table.innerHTML =
    "<tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>";

  let row = document.createElement("tr");
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement("td");
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cell.textContent = d;

    const cellDate = new Date(dateStr);
    const todayDate = new Date(todayStr);

    // Disable past and current date
    if (cellDate <= todayDate) {
      cell.classList.add("disabled");
    } 
    // Show available future slots
    else if (availabilityData.some(s => s.date === dateStr)) {
      cell.classList.add("available");
      cell.addEventListener("click", () => showModalTimeSlotsForDate(dateStr));
    }

    row.appendChild(cell);

    if ((firstDay + d) % 7 === 0) {
      table.appendChild(row);
      row = document.createElement("tr");
    }
  }

  table.appendChild(row);
  calendarContainer.appendChild(table);
}

  function showModalTimeSlotsForDate(date) {
  selectedDate = date;
  selectedTime = "";

  // Hide calendar, show time slots
  calendarContainer.classList.add("hidden");
  modalTimeSlots.classList.remove("hidden");
  modalTimeSlots.innerHTML = "";

  // Save last step for modal persistence
  localStorage.setItem("lastModalStep", "timeSlots");
  localStorage.setItem("lastSelectedDate", date);

  const slotsForDate = availabilityData.filter((s) => s.date === date);
  if (!slotsForDate.length) {
    modalTimeSlots.innerHTML = "<p>No available slots.</p>";
    return;
  }

  // Add "Change date" link
  const changeLink = document.createElement("p");
  changeLink.textContent = "← Change date";
  changeLink.style.color = "#B22222";
  changeLink.style.cursor = "pointer";
  changeLink.style.fontWeight = "500";
  changeLink.addEventListener("click", () => {
    modalTimeSlots.classList.add("hidden");
    calendarContainer.classList.remove("hidden");
    continueBtn.classList.add("hidden");

    localStorage.setItem("lastModalStep", "calendar");
  });
  modalTimeSlots.appendChild(changeLink);

  // Generate time slots
  slotsForDate.forEach((slot) => {
    const btn = document.createElement("button");
    btn.textContent = `${slot.startTime} - ${slot.endTime}`;
    btn.classList.add("slot-btn");
    btn.style.marginRight = "6px";

   btn.addEventListener("click", () => {
  // Unselect all before selecting the clicked one
  modalTimeSlots.querySelectorAll(".slot-btn").forEach((b) => {
    b.classList.remove("selected");
    b.style.background = "";
    b.style.color = "";
  });

  // Select this one
  btn.classList.add("selected");
  btn.style.background = "#B22222";
  btn.style.color = "#fff";

  selectedTime = `${slot.startTime} - ${slot.endTime}`;

  // ✅ Enable and style continue button properly
  continueBtn.disabled = false;
  continueBtn.classList.add("active");
  continueBtn.style.cursor = "pointer";
   continueBtn.style.background = "#B22222";
    continueBtn.style.color = "#fff";

  // Save state for persistence
  localStorage.setItem("lastModalStep", "timeSlots");
  localStorage.setItem("lastSelectedTime", selectedTime);
});


    modalTimeSlots.appendChild(btn);
  });

  if (continueBtn) {
    continueBtn.classList.remove("hidden");
    continueBtn.disabled = true;
    continueBtn.style.background = "#ccc";
  }
}


  continueBtn?.addEventListener("click", () => {
    if (!selectedDate || !selectedTime)
      return alert("Please select a time slot first.");
    flowFromDefault = false;
    openConfirmBookingModal(selectedDate, selectedTime);
  });

  loadAvailability();
});
loadMentorProfile();













document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("menteeToken");
  const mentorUserId = localStorage.getItem("selectedMentorUserId");
  const API_URL = "http://localhost:5000/api/v1";

  if (!token) return (window.location.href = "/public/login.html");
  if (!mentorUserId) return alert("❌ Mentor user ID not found.");

  const modal = document.getElementById("viewAllModal2");
  const viewAllLink = document.querySelector(".view-all3");
  const closeModalBtn = document.querySelector(".close2");
  const calendarContainer = document.getElementById("calendar2");
  const timeSlotsContainer = document.getElementById("timeSlots2");
  const continueBtn = document.getElementById("continueBtn2");
  const bookingSection = document.getElementById("bookingSection2");
  const bookingDate = document.getElementById("bookingDate2");
  const confirmBtn = document.getElementById("confirmBookingBtn2");
  const monthTitle = document.getElementById("monthTitle2");
  const timeSelection = document.getElementById("timeSelectionSection2");
  const nextAvailableEl = document.getElementById("nextAvailable");

  let availabilityData = [];
  let selectedDate = "";
  let selectedTime = "";
  let currentMonth = null;
  let currentYear = null;

  // --- Load availability from backend ---
  async function loadAvailability() {
    try {
      const res = await fetch(`${API_URL}/availability/${mentorUserId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch availability");
      const data = await res.json();
      availabilityData = data.data || [];

      // Filter past dates
      const now = new Date();
      availabilityData = availabilityData
        .filter((s) => new Date(`${s.date}T${s.startTime}`) >= now)
        .sort((a, b) => new Date(`${a.date}T${a.startTime}`) - new Date(`${b.date}T${b.startTime}`));

      showNextAvailable();
      renderDefaultSlots();
    } catch (err) {
      console.error(err);
      if (nextAvailableEl) nextAvailableEl.textContent = "No upcoming slots.";
      alert("Failed to load availability.");
    }
  }

  // --- Show next available slot ---
// --- Show next available slot ---
function showNextAvailable() {
  if (!availabilityData.length || !nextAvailableEl) return;

  const now = new Date();

  // Filter all future slots and sort
  const upcomingSlots = availabilityData
    .filter(s => new Date(`${s.date}T${s.startTime}`) >= now)
    .sort((a, b) => new Date(`${a.date}T${a.startTime}`) - new Date(`${b.date}T${b.startTime}`));

  if (!upcomingSlots.length) {
    nextAvailableEl.textContent = "No upcoming slots.";
    return;
  }

  // Get the first slot (earliest upcoming)
  const firstSlot = upcomingSlots[0];
  const dateStr = new Date(firstSlot.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timeStr = firstSlot.startTime;

  nextAvailableEl.innerHTML = `Next available: <strong>${dateStr}, ${timeStr}</strong>`;

  // Also pre-select this slot for default view
  selectedDate = firstSlot.date;
}

// --- Default first available slot ---
function renderDefaultSlots() {
  if (!availabilityData.length) {
    timeSlotsContainer.innerHTML = "<p>No available slots.</p>";
    return;
  }

  // Make sure we pick the earliest upcoming slot (after now)
  const now = new Date();
  const upcomingSlots = availabilityData
    .filter(s => new Date(`${s.date}T${s.startTime}`) >= now)
    .sort((a, b) => new Date(`${a.date}T${a.startTime}`) - new Date(`${b.date}T${b.startTime}`));

  if (!upcomingSlots.length) {
    timeSlotsContainer.innerHTML = "<p>No available slots.</p>";
    return;
  }

  // Pick the first upcoming slot
  selectedDate = upcomingSlots[0].date;
  showTimeSlots(selectedDate, false);
}

  // --- Open modal ---
  viewAllLink?.addEventListener("click", () => {
    modal.style.display = "flex";
    bookingSection.classList.add("hidden");
    timeSlotsContainer.classList.add("hidden");
    continueBtn.classList.add("hidden");
    calendarContainer.classList.remove("hidden");

    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    showCalendar();
  });

  closeModalBtn?.addEventListener("click", () => { modal.style.display = "none"; });

  window.addEventListener("resize", () => { modal.style.display = "none"; });
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

  // --- Calendar rendering ---
  function showCalendar() {
    calendarContainer.innerHTML = "";
    monthTitle.style.display = "block";
    document.getElementById("prevMonth2").style.display = "inline-block";
    document.getElementById("nextMonth2").style.display = "inline-block";

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const table = document.createElement("table");
    table.innerHTML = "<tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>";
    let row = document.createElement("tr");

    for (let i = 0; i < firstDay; i++) row.appendChild(document.createElement("td"));

    for (let d = 1; d <= daysInMonth; d++) {
      const cell = document.createElement("td");
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
      cell.textContent = d;

      const todayStr = new Date().toISOString().split("T")[0];
      if (new Date(dateStr) < new Date(todayStr)) {
        cell.classList.add("disabled");
      } else if (availabilityData.some(s => s.date === dateStr)) {
        cell.classList.add("available");
        cell.addEventListener("click", () => {
          monthTitle.style.display = "none";
          document.getElementById("prevMonth2").style.display = "none";
          document.getElementById("nextMonth2").style.display = "none";
          showTimeSlots(dateStr, true);
        });
      }

      row.appendChild(cell);
      if ((firstDay + d) % 7 === 0) {
        table.appendChild(row);
        row = document.createElement("tr");
      }
    }
    table.appendChild(row);
    calendarContainer.appendChild(table);
  }

  // --- Show time slots ---
  function showTimeSlots(date, fromModal = false) {
    selectedDate = date;
    selectedTime = "";

    if (fromModal) calendarContainer.classList.add("hidden");
    timeSlotsContainer.classList.remove("hidden");
    continueBtn.classList.remove("hidden");
    timeSlotsContainer.innerHTML = `<p><strong>${new Date(date).toDateString()}</strong> <a href="#" id="changeLink">Change</a></p>`;

    const slotsForDate = availabilityData.filter(s => s.date === date);
    slotsForDate.forEach(slot => {
      const btn = document.createElement("button");
      btn.textContent = `${slot.startTime} - ${slot.endTime}`;
      btn.classList.add("slot-btn");

      btn.addEventListener("click", () => {
        timeSlotsContainer.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedTime = `${slot.startTime} - ${slot.endTime}`;
        continueBtn.disabled = false;
        continueBtn.classList.add("active");
  continueBtn.style.cursor = "pointer";
   continueBtn.style.background = "#B22222";
    continueBtn.style.color = "#fff";
      });

      timeSlotsContainer.appendChild(btn);
    });

    document.getElementById("changeLink").addEventListener("click", resetToCalendar);
    continueBtn.disabled = true;
  }

  continueBtn.addEventListener("click", () => {
    if (!selectedDate || !selectedTime) return alert("Select a time slot first.");

    timeSlotsContainer.classList.add("hidden");
    continueBtn.classList.add("hidden");
    bookingSection.classList.remove("hidden");

    bookingDate.innerHTML = `<i class="bi bi-calendar-date"></i> ${selectedDate}  
                             <i class="bi bi-clock"></i> ${selectedTime} 
                             <a href="#" id="changeBooking" style="margin-left: 10px;">Change</a>`;

    document.getElementById("changeBooking").addEventListener("click", (e) => {
      e.preventDefault();
      resetToCalendar();
    });
  });

  confirmBtn.addEventListener("click", () => {
    alert(`Booking confirmed for ${selectedDate} at ${selectedTime}`);
    modal.style.display = "none";
  });

  function resetToCalendar() {
    timeSlotsContainer.classList.add("hidden");
    continueBtn.classList.add("hidden");
    bookingSection.classList.add("hidden");

    monthTitle.style.display = "block";
    document.getElementById("prevMonth2").style.display = "inline-block";
    document.getElementById("nextMonth2").style.display = "inline-block";
    calendarContainer.classList.remove("hidden");

    showCalendar();
  }

  // --- Month navigation ---
  document.getElementById("prevMonth2")?.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    showCalendar();
  });

  document.getElementById("nextMonth2")?.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    showCalendar();
  });

  await loadAvailability();
});
loadMentorProfile();