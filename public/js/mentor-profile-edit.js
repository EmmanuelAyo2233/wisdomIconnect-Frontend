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



document.querySelector(".read-more").addEventListener("click", function() {
    let hiddenParagraphs = document.querySelectorAll(".long-text");
    hiddenParagraphs.forEach(p => p.classList.toggle("hidden"));

    if (hiddenParagraphs[0].classList.contains("hidden")) {
        this.textContent = "Read More";
    } else {
        this.textContent = "Read Less";
    }
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
    const modal = document.getElementById("viewAllModal");
    const closeModalBtn = document.querySelector(".close");
    const viewAllLink = document.querySelector(".view-all2");
    const calendarContainer = document.getElementById("calendar");
    const timeSlotsContainer = document.getElementById("timeSlots");
    const continueBtn = document.getElementById("continueBtn");
    const saveAvailabilityBtn = document.createElement("button");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const monthTitle = document.getElementById("monthTitle"); 
    const timeSelection = document.getElementById("timeSelectionSection");

    let currentMonth = 4; // March
    let currentYear = 2025;
    let selectedDate = "";
    let availableDates = {}; // Store mentor's available dates and slots

    saveAvailabilityBtn.textContent = "Save Availability";
    saveAvailabilityBtn.classList.add("hidden");

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

    function showCalendar() {
        calendarContainer.innerHTML = "";
        timeSlotsContainer.classList.add("hidden");
        continueBtn.classList.add("hidden");
        calendarContainer.classList.remove("hidden");
        prevMonthBtn.classList.remove("hidden");
        nextMonthBtn.classList.remove("hidden");

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

       
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDate = today.getDate();


        const isCurrentOrFutureMonth = currentYear > today.getFullYear() || 
  (currentYear === today.getFullYear() && currentMonth >= today.getMonth());

prevMonthBtn.disabled = !isCurrentOrFutureMonth;
nextMonthBtn.disabled = false; // Always allow going forward



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
            const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const cell = document.createElement("td");
            cell.textContent = day;

            if (
                (currentYear < todayYear) ||  
                (currentYear === todayYear && currentMonth < todayMonth) ||  
                (currentYear === todayYear && currentMonth === todayMonth && day < todayDate)  
            ) {
                cell.classList.add("disabled"); 
            } else {
                cell.classList.add("enabled"); 
                cell.addEventListener("click", () => showTimeSlots(dateKey));
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
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    showCalendar(); // Refresh the calendar view
});

prevMonthBtn.addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    showCalendar(); // Refresh the calendar view
});





    function showTimeSlots(date) {
        selectedDate = date;
        calendarContainer.classList.add("hidden");
        timeSlotsContainer.classList.remove("hidden");
        continueBtn.classList.remove("hidden");
        prevMonthBtn.classList.add("hidden");
        nextMonthBtn.classList.add("hidden");

        monthTitle.innerHTML = `<strong>Add Available Time Slots</strong>`;
        timeSlotsContainer.innerHTML = `
            <p><strong>${selectedDate}</strong> 
            <a href="#" id="changeLink">Change</a></p>
            <input type="time" id="timeInput" min="06:00" max="22:00">
            <button id="addTimeSlot">Add Slot</button>
            <div id="mentorSlots"></div>
        `;

        document.getElementById("changeLink").addEventListener("click", resetToCalendar);
        document.getElementById("addTimeSlot").addEventListener("click", addTimeSlot);

        displaySelectedSlots();
    }

    function addTimeSlot() {
        const timeInput = document.getElementById("timeInput").value;
        if (!timeInput) return;

        if (!availableDates[selectedDate]) {
            availableDates[selectedDate] = [];
        }

        if (!availableDates[selectedDate].includes(timeInput)) {
            availableDates[selectedDate].push(timeInput);
        }

        displaySelectedSlots();
    }

    function displaySelectedSlots() {
        const slotContainer = document.getElementById("mentorSlots");
        slotContainer.innerHTML = "";

        if (availableDates[selectedDate] && availableDates[selectedDate].length > 0) {
            availableDates[selectedDate].forEach(time => {
                const slotDiv = document.createElement("div");
                slotDiv.textContent = time;
                slotDiv.classList.add("slot-item");

                const removeBtn = document.createElement("button");
                removeBtn.textContent = "x";
                removeBtn.addEventListener("click", () => {
                    availableDates[selectedDate] = availableDates[selectedDate].filter(t => t !== time);
                    displaySelectedSlots();
                });

                slotDiv.appendChild(removeBtn);
                slotContainer.appendChild(slotDiv);
            });

            saveAvailabilityBtn.classList.remove("hidden");
        } else {
            saveAvailabilityBtn.classList.add("hidden");
        }
    }

    saveAvailabilityBtn.addEventListener("click", () => {
        alert("Availability saved successfully!");
        console.log("Mentor's Available Dates:", availableDates);
        modal.style.display = "none";
    });

    timeSlotsContainer.appendChild(saveAvailabilityBtn);

    function resetToCalendar() {
        showCalendar();
    }

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

    showCalendar();
});


document.getElementById("load-more-btn").addEventListener("click", function() {
    document.getElementById("more-comments").style.display = "block";
    this.style.display = "none"; // Hide the button after clicking
  });
  


  function showTimeSlots(card) {
    document.getElementById("timeSlotsContainer").classList.remove("hidden");
}

function openModal() {
    document.getElementById("viewAllModal").style.display = "block";
}

function closeModal() {
    document.getElementById("viewAllModal").style.display = "none";
}






document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("viewAllModal2");
    const closeModalBtn = document.querySelector(".close2");
    const viewAllLink = document.querySelector(".view-all3");
    const calendarContainer = document.getElementById("calendar2");
    const timeSlotsContainer = document.getElementById("timeSlots2");
    const continueBtn = document.getElementById("continueBtn2");
    const saveAvailabilityBtn = document.createElement("button2");
    const prevMonthBtn = document.getElementById("prevMonth2");
    const nextMonthBtn = document.getElementById("nextMonth2");
    const monthTitle = document.getElementById("monthTitle2"); 
    const timeSelection = document.getElementById("timeSelectionSection2");

    const today = new Date();
    let currentMonth = today.getMonth(); // 0 = January
    let currentYear = today.getFullYear();
    let selectedDate = "";
    let availableDates = {}; // Store mentor's available dates and slots

    saveAvailabilityBtn.textContent = "Save Availability";
    saveAvailabilityBtn.classList.add("hidden");

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

    function showCalendar() {
        calendarContainer.innerHTML = "";
        timeSlotsContainer.classList.add("hidden");
        continueBtn.classList.add("hidden");
        calendarContainer.classList.remove("hidden");
        prevMonthBtn.classList.remove("hidden");
        nextMonthBtn.classList.remove("hidden");

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;

        // prevMonthBtn.disabled = true;
        // nextMonthBtn.disabled = true;

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDate = today.getDate();

        const isCurrentOrFutureMonth = currentYear > today.getFullYear() || 
  (currentYear === today.getFullYear() && currentMonth >= today.getMonth());

prevMonthBtn.disabled = !isCurrentOrFutureMonth;
nextMonthBtn.disabled = false; // Always allow going forward



        

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
            const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const cell = document.createElement("td");
            cell.textContent = day;

            if (
                (currentYear < todayYear) ||  
                (currentYear === todayYear && currentMonth < todayMonth) ||  
                (currentYear === todayYear && currentMonth === todayMonth && day < todayDate)  
            ) {
                cell.classList.add("disabled"); 
            } else {
                cell.classList.add("enabled"); 
                cell.addEventListener("click", () => showTimeSlots(dateKey));
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


    prevMonthBtn.addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    showCalendar();
});

nextMonthBtn.addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
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

        monthTitle.innerHTML = `<strong>Add Available Time Slots</strong>`;
        timeSlotsContainer.innerHTML = `
            <p><strong>${selectedDate}</strong> 
            <a href="#" id="changeLink">Change</a></p>
            <input type="time" id="timeInput" min="06:00" max="22:00">
            <button id="addTimeSlot">Add Slot</button>
            <div id="mentorSlots2"></div>
        `;

        document.getElementById("changeLink").addEventListener("click", resetToCalendar);
        document.getElementById("addTimeSlot").addEventListener("click", addTimeSlot);

        displaySelectedSlots();
    }

    function addTimeSlot() {
        const timeInput = document.getElementById("timeInput").value;
        if (!timeInput) return;

        if (!availableDates[selectedDate]) {
            availableDates[selectedDate] = [];
        }

        if (!availableDates[selectedDate].includes(timeInput)) {
            availableDates[selectedDate].push(timeInput);
        }

        displaySelectedSlots();
    }

    function displaySelectedSlots() {
        const slotContainer = document.getElementById("mentorSlots2");
        slotContainer.innerHTML = "";

        if (availableDates[selectedDate] && availableDates[selectedDate].length > 0) {
            availableDates[selectedDate].forEach(time => {
                const slotDiv = document.createElement("div");
                slotDiv.textContent = time;
                slotDiv.classList.add("slot-item2");

                const removeBtn = document.createElement("button");
                removeBtn.textContent = "x";
                removeBtn.addEventListener("click", () => {
                    availableDates[selectedDate] = availableDates[selectedDate].filter(t => t !== time);
                    displaySelectedSlots();
                });

                slotDiv.appendChild(removeBtn);
                slotContainer.appendChild(slotDiv);
            });

            saveAvailabilityBtn.classList.remove("hidden");
        } else {
            saveAvailabilityBtn.classList.add("hidden");
        }
    }

    saveAvailabilityBtn.addEventListener("click", () => {
        alert("Availability saved successfully!");
        console.log("Mentor's Available Dates:", availableDates);
        modal.style.display = "none";
    });

    timeSlotsContainer.appendChild(saveAvailabilityBtn);

    function resetToCalendar() {
        showCalendar();
    }

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

    showCalendar();
});


// For Experience
const experienceCount = document.querySelectorAll('.experience-section .experience').length;
if (experienceCount <= 1) {
    document.getElementById('view-experience').style.display = 'none';
}

// For Education
const educationCount = document.querySelectorAll('.education-section .education').length;
if (educationCount <= 1) {
    document.getElementById('view-education').style.display = 'none';
}


function setupDropdown(id, limit = 2) {
    const container = document.querySelector(`#${id}`);
    const tags = container.querySelectorAll('.tag');
    const moreBtn = container.querySelector('.more-btn');

    if (tags.length <= limit && moreBtn) {
        moreBtn.style.display = 'none';
    }
}


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("editProfileModal");
  const openBtn = document.getElementById("editProfileBtn");
  const closeBtn = document.getElementById("modalCloseBtn");
  const cancelBtn = document.getElementById("cancelBtn3"); 
  const form = document.getElementById("mentorEditForm");

  const userNameEl = document.getElementById("userName");
  const userRoleEl = document.getElementById("userRole");
  const linkedinLink = document.getElementById("linkedin-link");

  const fullNameInput = document.getElementById("fullName");
  const yearsOfExperienceInput = document.getElementById("yearsOfExperience");
  const roleInput = document.getElementById("headlineRole");
  const bioInput = document.getElementById("bio");
  const linkedinInput = document.getElementById("linkedinUrl");
  const expertiseSelect = document.getElementById("expertiseSelect");
  const expertiseTagsEl = document.getElementById("expertiseTags");
  const disciplineInput = document.getElementById("disciplineInput");
  const disciplineTagsEl = document.getElementById("disciplineTags");
  const languageInput = document.getElementById("languageInput");
  const languageTagsEl = document.getElementById("languageTags");
  const addExperienceBtn = document.getElementById("addExperienceBtn");
  const experienceList = document.getElementById("experienceList");
  const addEducationBtn = document.getElementById("addEducationBtn");
  const educationList = document.getElementById("educationList");

  let expertiseList = [];
  let disciplineList = [];
  let languageList = [];
  let experiences = [];
  let education = [];
  let profileData = {}; 

  function renderTagsWithOverflow(container, list, maxVisible = 3, type) {
  container.innerHTML = "";
  if (!Array.isArray(list)) return;

  const visibleTags = list.slice(0, maxVisible);
  const hiddenTags = list.slice(maxVisible);

  // Render visible tags
  visibleTags.forEach((txt, idx) => {
    const span = document.createElement("span");
    span.className = "profile-ui-tag";
    span.innerHTML = `${txt} <button type="button" data-type="${type}" data-index="${idx}">&times;</button>`;
    container.appendChild(span);
  });

  if (hiddenTags.length > 0) {
    const moreSpan = document.createElement("span");
    moreSpan.className = "profile-ui-tag more";
    moreSpan.textContent = `+${hiddenTags.length} more`;
    moreSpan.style.cursor = "pointer";
    moreSpan.style.position = "relative";

    const dropdown = document.createElement("div");
    dropdown.className = "profile-ui-dropdown";
    dropdown.style.display = "none";
    dropdown.style.position = "absolute";
    dropdown.style.top = "100%";
    dropdown.style.left = "0";
    dropdown.style.background = "#fff";
    dropdown.style.border = "1px solid #ccc";
    dropdown.style.padding = "5px";
    dropdown.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    dropdown.style.zIndex = "1000";

    hiddenTags.forEach((txt, idx) => {
      const span = document.createElement("span");
      span.className = "profile-ui-tag";
      span.style.display = "block";
      span.style.marginBottom = "3px";
      span.textContent = txt;

      // Optional remove button
      const btn = document.createElement("button");
      btn.type = "button";
      btn.style.marginLeft = "5px";
      btn.textContent = "×";
      btn.addEventListener("click", () => {
        const hiddenIndex = maxVisible + idx;
        removeTag(type, hiddenIndex);
      });

      span.appendChild(btn);
      dropdown.appendChild(span);
    });

    moreSpan.appendChild(dropdown);

    moreSpan.addEventListener("click", (e) => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      dropdown.style.display = "none";
    });

    container.appendChild(moreSpan);
  }
}

// Example usage for disciplines:



// --- Tag Rendering Functions ---
function renderTagsWithOverflow(container, list, maxVisible = 3, type) {
  container.innerHTML = "";

  const visibleTags = list.slice(0, maxVisible);
  const hiddenTags = list.slice(maxVisible);

  // Render visible tags
  visibleTags.forEach((txt, idx) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.innerHTML = `${txt} <button type="button" aria-label="Remove" data-type="${type}" data-index="${idx}">&times;</button>`;
    container.appendChild(span);
  });

  // If there are hidden tags, add a "+N more" button
  if (hiddenTags.length > 0) {
    const moreSpan = document.createElement("span");
    moreSpan.className = "tag more";
    moreSpan.textContent = `+${hiddenTags.length} more`;
    moreSpan.style.cursor = "pointer";
    moreSpan.addEventListener("click", () => {
      // Show hidden tags inline
      hiddenTags.forEach((txt, idx) => {
        const span = document.createElement("span");
        span.className = "tag";
        const realIdx = idx + maxVisible;
        span.innerHTML = `${txt} <button type="button" aria-label="Remove" data-type="${type}" data-index="${realIdx}">&times;</button>`;
        container.insertBefore(span, moreSpan);
      });
      moreSpan.remove();
    });
    container.appendChild(moreSpan);
  }
}

// Normal tag rendering (for discipline and language)
function renderTags(container, list, type) {
  container.innerHTML = "";
  if (!Array.isArray(list)) return;
  list.forEach((txt, idx) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.innerHTML = `${txt} <button type="button" data-type="${type}" data-index="${idx}">&times;</button>`;
    container.appendChild(span);
  });
}


// --- Remove Tag Handler ---
function removeTag(type, index) {
  if (type === "expertise") {
    expertiseList.splice(index, 1);
    renderTagsWithOverflow(expertiseTagsEl, expertiseList, 3, "expertise");
  }
disciplineTagsEl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = Number(e.target.dataset.index);
    disciplineList.splice(index, 1);
    renderTags(disciplineTagsEl, disciplineList, "discipline");
  }
});
  if (type === "language") {
    languageList.splice(index, 1);
    renderTags(languageTagsEl, languageList, "language");
  }
}

// --- Event Listeners for Remove Buttons ---
[expertiseTagsEl, disciplineTagsEl, languageTagsEl].forEach((container) => {
  container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON")
      removeTag(e.target.dataset.type, Number(e.target.dataset.index));
  });
});


function renderExpertiseUI(container, list, maxVisible = 3) {
  container.innerHTML = "";
  if (!Array.isArray(list)) return;

  const visibleTags = list.slice(0, maxVisible);
  const hiddenTags = list.slice(maxVisible);

  visibleTags.forEach((txt) => {
    const span = document.createElement("span");
    span.className = "profile-ui-tag"; // smaller style for UI
    span.textContent = txt;
    container.appendChild(span);
  });

  if (hiddenTags.length > 0) {
    const moreSpan = document.createElement("span");
    moreSpan.className = "profile-ui-tag more";
    moreSpan.textContent = `+${hiddenTags.length} more`;
    moreSpan.style.cursor = "pointer";
    moreSpan.style.position = "relative";

    const dropdown = document.createElement("div");
    dropdown.className = "profile-ui-dropdown";
    dropdown.style.display = "none";
    dropdown.style.position = "absolute";
    dropdown.style.top = "100%";
    dropdown.style.left = "0";
    dropdown.style.background = "#fff";
    dropdown.style.border = "1px solid #ccc";
    dropdown.style.padding = "3px";
    dropdown.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    dropdown.style.zIndex = "1000";

    hiddenTags.forEach(txt => {
      const span = document.createElement("span");
      span.className = "profile-ui-tag";
      span.style.display = "block";
      span.style.marginBottom = "2px";
      span.textContent = txt;
      dropdown.appendChild(span);
    });

    moreSpan.appendChild(dropdown);

    moreSpan.addEventListener("click", (e) => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      e.stopPropagation();
    });

    document.addEventListener("click", () => {
      dropdown.style.display = "none";
    });

    container.appendChild(moreSpan);
  }
}


function openModal() {
  modal.style.display = "flex";

  fullNameInput.value = profileData.name || "";
  roleInput.value = profileData.role || "";
  bioInput.value = profileData.bio || "";
  linkedinInput.value = profileData.linkedinUrl || "";

  // Always read from plural 'disciplines'
expertiseList = Array.isArray(profileData.expertise) ? profileData.expertise : [];
disciplineList = Array.isArray(profileData.discipline) ? profileData.discipline : [];
languageList = Array.isArray(profileData.fluentIn) ? profileData.fluentIn : [];
experiences = Array.isArray(profileData.experience) ? profileData.experience : [];
education = Array.isArray(profileData.education) ? profileData.education : [];


  renderTags(expertiseTagsEl, expertiseList, "expertise");
renderTags(disciplineTagsEl, disciplineList, "discipline");
  renderTags(languageTagsEl, languageList, "language");

  // Optionally, show first discipline in the input for quick edit
  disciplineInput.value = disciplineList[0] || "";

  // Experience
  experienceList.innerHTML = "";
  experiences.forEach((exp) => experienceList.appendChild(createExperienceCard(exp)));

  // Education
  educationList.innerHTML = "";
  education.forEach((ed) => educationList.appendChild(createEducationCard(ed)));
}


  function closeModal() {
    modal.style.display = "none";
  }

  openBtn?.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  expertiseSelect.addEventListener("change", () => {
    const val = expertiseSelect.value;
    if (!val || expertiseList.includes(val)) return;
    if (expertiseList.length >= 5) {
      alert("Max 5 expertise allowed");
      return;
    }
    expertiseList.push(val);
    renderTags(expertiseTagsEl, expertiseList, "expertise");
    expertiseSelect.value = "";
  });

  disciplineInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = disciplineInput.value.trim();
      if (!val || disciplineList.includes(val)) return;
      disciplineList.push(val);
      renderTags(disciplineTagsEl, disciplineList, "discipline");
      disciplineInput.value = "";
    }
  });

  languageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = languageInput.value.trim();
      if (!val || languageList.includes(val)) return;
      if (languageList.length >= 2) { alert("Max 2 languages"); return; }
      languageList.push(val);
      renderTags(languageTagsEl, languageList, "language");
      languageInput.value = "";
    }
  });

  function createExperienceCard(data = {}) {
    const wrap = document.createElement("div");
    wrap.className = "card";
    wrap.innerHTML = `
      <div class="row">
        <div class="col-6"><label>Title / Role</label><input type="text" name="exp_title" value="${data.title || ""}" /></div>
        <div class="col-6"><label>Company</label><input type="text" name="exp_company" value="${data.company || ""}" /></div>
        <div class="col-4"><label>Start Date</label><input type="date" name="exp_start" value="${data.startDate || ""}" /></div>
        <div class="col-4"><label>End Date</label><input type="date" name="exp_end" value="${data.endDate || ""}" ${data.present ? "disabled" : ""} /></div>
        <div class="col-4 inline"><label><input type="checkbox" name="exp_present" ${data.present ? "checked" : ""}/> Present</label> <button type="button" class="remove">Remove</button></div>
        <div class="col-12"><label>Description</label><textarea name="exp_desc">${data.description || ""}</textarea></div>
      </div>
    `;
    const present = wrap.querySelector('input[name="exp_present"]');
    const endDate = wrap.querySelector('input[name="exp_end"]');
    present.addEventListener("change", () => { endDate.disabled = present.checked; if(present.checked) endDate.value = ""; });
    wrap.querySelector(".remove").addEventListener("click", () => wrap.remove());
    return wrap;
  }

  function createEducationCard(data = {}) {
    const wrap = document.createElement("div");
    wrap.className = "card";
    wrap.innerHTML = `
      <div class="row">
        <div class="col-6"><label>Institution</label><input type="text" name="edu_school" value="${data.school || ""}" /></div>
        <div class="col-6"><label>Degree</label><input type="text" name="edu_degree" value="${data.degree || ""}" /></div>
        <div class="col-6"><label>Start Date</label><input type="date" name="edu_start" value="${data.startDate || ""}" /></div>
        <div class="col-6"><label>End Date</label><input type="date" name="edu_end" value="${data.endDate || ""}" /></div>
        <div class="col-12 inline"><button type="button" class="remove">Remove</button></div>
      </div>
    `;
    wrap.querySelector(".remove").addEventListener("click", () => wrap.remove());
    return wrap;
  }

  addExperienceBtn.addEventListener("click", () => experienceList.appendChild(createExperienceCard()));
  addEducationBtn.addEventListener("click", () => educationList.appendChild(createEducationCard()));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const expCards = Array.from(experienceList.querySelectorAll(".card"));
    const experiences = expCards.map(card => ({
      title: card.querySelector('input[name="exp_title"]').value.trim(),
      company: card.querySelector('input[name="exp_company"]').value.trim(),
      startDate: card.querySelector('input[name="exp_start"]').value,
      endDate: card.querySelector('input[name="exp_end"]').value,
      present: card.querySelector('input[name="exp_present"]').checked,
      description: card.querySelector('textarea[name="exp_desc"]').value.trim(),
    }));

    const eduCards = Array.from(educationList.querySelectorAll(".card"));
    const education = eduCards.map(card => ({
      school: card.querySelector('input[name="edu_school"]').value.trim(),
      degree: card.querySelector('input[name="edu_degree"]').value.trim(),
      startDate: card.querySelector('input[name="edu_start"]').value,
      endDate: card.querySelector('input[name="edu_end"]').value,
    }));

const payload = {
  name: fullNameInput.value.trim() || profileData.name,
  role: roleInput.value.trim() || profileData.role,
  bio: bioInput.value.trim() || profileData.bio,
  linkedinUrl: linkedinInput.value.trim() || profileData.linkedinUrl,
  expertise: expertiseList,
  disciplines: disciplineList.length ? disciplineList : profileData.disciplines || [], // 🔹 fixed naming
  fluentIn: languageList,
  experience: experiences,
  education: education,
  yearsOfExperience: yearsOfExperienceInput?.value || profileData.yearsOfExperience || 0,
};
 console.log("Payload to save:", payload);

   try {
  // use mentor token
  const token = localStorage.getItem("mentorToken"); 

  const res = await fetch("http://localhost:5000/api/v1/user/me/update", {
    method: "PATCH",
     credentials: "include",
    headers: { 
      "Content-Type": "application/json", 
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!res.ok) { 
    console.error(result); 
    alert("Failed to save profile: " + result.message); 
    return; 
  }

  profileData = result.data || payload;
  updateTemplateUI(profileData);
  closeModal();
  alert("Profile updated successfully!");
} catch(err) {
  console.error("Network error:", err);
  alert("Failed to save profile. See console.");
}
  });
function updateTemplateUI(data) {
  console.log("Profile data received from backend:", data);
  userNameEl.textContent = data.name || "";
  userRoleEl.textContent = data.role || "";

  // Bio
 const bioPreview = document.getElementById("bioPreview");
const bioRest = document.getElementById("bioRest");
const readMoreBtn = document.getElementById("readMoreBtn");

const bioText = data.bio || "";
const previewLength = 150;

// Find the last space before 150 characters (so we don't cut mid-word)
let cutoff = bioText.slice(0, previewLength).lastIndexOf(" ");
cutoff = cutoff > 0 ? cutoff : previewLength;

if (bioText.length > previewLength) {
  bioPreview.textContent = bioText.slice(0, cutoff) + "... ";
  bioRest.textContent = bioText.slice(cutoff);
  readMoreBtn.style.display = "inline";
} else {
  bioPreview.textContent = bioText;
  readMoreBtn.style.display = "none";
}

// Toggle show/hide
if (readMoreBtn) {
  readMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    bioRest.classList.toggle("hidden");

    if (bioRest.classList.contains("hidden")) {
      readMoreBtn.textContent = "Read More";
    } else {
      readMoreBtn.textContent = "Read Less";
    }
  });
}


  // LinkedIn
  if (data.linkedinUrl && /^https?:\/\//i.test(data.linkedinUrl)) {
    linkedinLink.setAttribute("href", data.linkedinUrl);
    linkedinLink.classList.remove("disabled");
  } else {
    linkedinLink.setAttribute("href", "#");
    linkedinLink.classList.add("disabled");
  }

  // Helper to find container by title text
  function findCategoryContainer(titleText) {
  const category = Array.from(document.querySelectorAll(".category")).find(
    (cat) =>
      cat.querySelector(".title")?.textContent.replace(":", "").trim() ===
      titleText
  );
  return category?.querySelector(".tags");
}

// Update tags
const expertiseContainer = findCategoryContainer("Expertise");
const disciplineContainer = findCategoryContainer("Disciplines");
const languageContainer = findCategoryContainer("Fluent In");

// Expertise
if (expertiseContainer) {
  expertiseContainer.classList.add("profile-ui-taglist");
  renderExpertiseUI(expertiseContainer, data.expertise || [], 3);
}

// Disciplines
if (disciplineContainer) {
  const disciplineArray = Array.isArray(data.disciplines)
    ? data.disciplines
    : Array.isArray(data.discipline)
    ? data.discipline
    : JSON.parse(data.discipline || "[]");

  disciplineContainer.innerHTML = "";
  disciplineArray.forEach((item) => {
    const span = document.createElement("span");
    span.className = "tag discipline-tag";
    span.textContent = item;
    disciplineContainer.appendChild(span);
  });
}

// Languages
if (languageContainer) {
  languageContainer.innerHTML = "";
  (data.fluentIn || []).forEach((lang) => {
    const span = document.createElement("span");
    span.className = "tag language-tag";
    span.textContent = lang;
    languageContainer.appendChild(span);
  });
}

const experienceContainer = document.querySelector(".experience-section .experience1");
const moreExperienceContainer = document.getElementById("more-experience");

// Safe parser for experience
function safeParseExperience(exp) {
  try {
    if (!exp) return [];
    return typeof exp === "string" ? JSON.parse(exp) : exp;
  } catch {
    return [];
  }
}

if (experienceContainer && moreExperienceContainer) {
  // ✅ Try multiple fields (mentor vs mentee)
  const experiences = safeParseExperience(data.experience || data.experiences || []);

  const count = experiences.length;

  // Header
  experienceContainer.innerHTML = `
    <div class="header2">
      <h2>Experience <span class="bag">${count}</span></h2>
      ${count > 0 ? `<span id="view-experience" class="view-all" onclick="toggleSection('more-experience', 'view-experience')">View All</span>` : ""}
    </div>
  `;

  moreExperienceContainer.innerHTML = "";

  // --- first experience ---
  if (count > 0) {
    const firstExp = experiences[0];
    experienceContainer.innerHTML += `
      <div class="experience">
        <div class="experience-header">
          <div class="icon2"><i class="bi bi-briefcase-fill"></i></div>
          <div class="title">
            <h3>${firstExp.title || ""}</h3>
            <p class="company">${firstExp.company || ""}</p>
          </div>
          <p class="timeframe">${firstExp.startDate || ""} - ${firstExp.present ? "Present" : firstExp.endDate || ""}</p>
        </div>
      </div>
    `;
  }

  // --- all experiences ---
  experiences.forEach(exp => {
    moreExperienceContainer.innerHTML += `
      <hr>
      <div class="experience">
        <div class="experience-header">
          <div class="icon2"><i class="bi bi-briefcase-fill"></i></div>
          <div class="title">
            <h3>${exp.title || ""}</h3>
            <p class="company">${exp.company || ""}</p>
          </div>
          <p class="timeframe">${exp.startDate || ""} - ${exp.present ? "Present" : exp.endDate || ""}</p>
        </div>
        ${exp.description ? `<ul class="experience-details">${exp.description.split("\n").map(d => `<li>${d}</li>`).join("")}</ul>` : ""}
      </div>
    `;
  });
}


// --- EDUCATION ---
const educationContainer = document.querySelector(".education-section");
const moreEducationContainer = document.getElementById("more-education");

if (educationContainer && moreEducationContainer) {
  const education = data.education || [];
  const count = education.length;

  const eduHeader = educationContainer.querySelector(".education-header h2 span.bag");
  if (eduHeader) eduHeader.textContent = count;

  moreEducationContainer.innerHTML = "";

  education.forEach((edu, idx) => {
    const eduHTML = `
      <div class="education">
        <div class="education-header">
          <div class="education-title">
            <i class="bi bi-mortarboard icon"></i>
            <div class="title2">
              <h3>${edu.degree || ""}</h3>
              <p class="institution">${edu.school || ""}</p>
            </div>
          </div>
          <p class="duration">${edu.startDate || ""} - ${edu.endDate || ""}</p>
        </div>
      </div>
    `;

    if (idx === 0) {
      const firstEduDiv = educationContainer.querySelector(".education");
      if (firstEduDiv) firstEduDiv.replaceWith(document.createRange().createContextualFragment(eduHTML));
    } else {
      moreEducationContainer.innerHTML += `<hr>${eduHTML}`;
    }
  });
}
}
async function fetchProfile() {
  try {
    const token = localStorage.getItem("mentorToken"); // use mentorToken

    const res = await fetch("http://localhost:5000/api/v1/user/me", {
      method: "GET",
       credentials: "include",
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${token}` 
      },
    });

    if (!res.ok) throw new Error("Failed to fetch profile");
    
    const response = await res.json();
    profileData = response.data || {};
    updateTemplateUI(profileData);
  } catch(err) {
    console.error("Error fetching profile:", err);
  }
}

fetchProfile();
});

// --- Elements ---
const profileInput = document.querySelector("#profileInput"); // hidden file input
const pencilIcon   = document.querySelector(".profile-img-pencil");

const API_BASE = "http://localhost:5000/api/v1/user";
const token    = localStorage.getItem("mentorToken");

// Grab ALL profile images in the UI (main profile, sidenav, mobile, etc.)
const profileImgs = document.querySelectorAll(
  ".user-profile-img img, .profile-pic1, .profile-img, .hover-profile-pic"
);

// --- Helpers ---
function bumpVersion() {
  const v = Date.now().toString();
  localStorage.setItem("pf_ver", v);
  return v;
}
function currentVersion() {
  return localStorage.getItem("pf_ver") || "";
}
function withBust(url) {
  if (!url) return url;
  const sep = url.includes("?") ? "&" : "?";
  const v = currentVersion();
  return v ? `${url}${sep}v=${v}` : url;
}

// Apply new image to ALL profile images
function applyProfileImg(url) {
  profileImgs.forEach((img) => {
    if (url) {
      img.src = withBust(url);
    } else {
      img.src = "default-profile.jpg"; // fallback
    }
  });
}

// --- Load fresh user ---
async function loadUser() {
  try {
    const res = await fetch(`${API_BASE}/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    const pic = json?.data?.picture || null;
    console.log("User data (on load):", json);
    applyProfileImg(pic);
  } catch (e) {
    console.error("Failed to load user:", e);
  }
}

// --- Events ---
// Pencil click → open file picker
if (pencilIcon && profileInput) {
  pencilIcon.addEventListener("click", () => profileInput.click());
}

// File input → upload picture
if (profileInput) {
  profileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("picture", file);

    try {
      const res = await fetch(`${API_BASE}/me/picture`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Upload failed payload:", data);
        throw new Error(data.message || "Upload failed");
      }

      console.log("Upload success:", data);

      bumpVersion();
      if (data.imageUrl) {
        applyProfileImg(data.imageUrl); // ✅ update all profile images
      }

      await loadUser(); // refresh from API
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload profile picture.");
    } finally {
      profileInput.value = "";
    }
  });
}

// Initial load
loadUser();




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
