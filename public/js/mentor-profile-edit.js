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


    // window.addEventListener('DOMContentLoaded', () => {
    //     const user = JSON.parse(localStorage.getItem('elderUser'));
    
    //     if (!user) {
    //     window.location.href = 'login.html'; // redirect if not logged in
    //     return;
    //     }
    
    //     // 🌍 Name + Role + Flag
    //     // document.getElementById('userName').textContent = `${user.full_name} 🇳🇬`;
    //     // document.getElementById('userRole').textContent = user.role || 'No role provided';
    
    //     // ✍️ Bio
    //     const fullBio = user.bio || 'No bio added yet';
    //     const sentences = fullBio.split('. ');
    //     document.getElementById('shortBio').textContent = sentences.slice(0, 2).join('. ') + '.';
    //     document.getElementById('longBio1').textContent = sentences.slice(2, 4).join('. ') + '.';
    //     document.getElementById('longBio2').textContent = sentences.slice(4, 6).join('. ') + '.';
    //     document.getElementById('longBio3').textContent = sentences.slice(6).join('. ') + '.';
    
    // });

    
    
    
    

    window.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('elderUser'));
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  // 🌍 Name + Role + Flag
  document.getElementById('userName').textContent = `${user.full_name} 🇳🇬`;
  document.getElementById('userRole').textContent = user.role || 'No role provided';

  // ✍️ Bio
  const fullBio = user.bio || 'No bio added yet';
  const sentences = fullBio.split('. ');
  document.getElementById('shortBio').textContent = sentences.slice(0, 2).join('. ') + '.';
  document.getElementById('longBio1').textContent = sentences.slice(2, 4).join('. ') + '.';
  document.getElementById('longBio2').textContent = sentences.slice(4, 6).join('. ') + '.';
  document.getElementById('longBio3').textContent = sentences.slice(6).join('. ') + '.';

 
  // 🗣️ Fluent In
  const languages = JSON.parse(user.fluent_in || '[]');
  const langContainer = document.querySelector('.category.fluent .tags') || document.querySelectorAll('.category')[2].querySelector('.tags');
  languages.forEach(l => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = l.replace(' ×', '');
    langContainer.appendChild(tag);
  });


   // 💡 Expertise
  const expertiseList = JSON.parse(user.expertise || '[]');
  const expertiseContainer = document.querySelector('.category.expertise .tags') || document.querySelector('.category .tags');
  expertiseList.forEach((item, i) => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = item.replace(' ×', '');
    tag.style.backgroundColor = '#fde2e2';
    tag.style.color = '#d32f2f';
    tag.style.border = '1px solid #d32f2f';
    expertiseContainer.appendChild(tag);
  });

  // 📘 Disciplines
  const disciplines = JSON.parse(user.disciplines || '[]');
  const disciplineContainer = document.querySelector('.category.disciplines .tags') || document.querySelectorAll('.category')[1].querySelector('.tags');
  disciplines.forEach(d => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = d.replace(' ×', '');
    disciplineContainer.appendChild(tag);
  });


  





    const experiences = user.experience ? JSON.parse(user.experience) : [];
    const firstExpContainer = document.querySelector('.experience1 .experience-header');
    const expBag = document.querySelector('.experience1 .bag');
    const viewMoreBtn = document.getElementById('view-experience');
    const moreExpWrapper = document.getElementById('more-experience');

    // Show experience count
    expBag.textContent = experiences.length;

    // Show first experience in static block
    if (experiences.length > 0) {
        const first = experiences[0];
        firstExpContainer.querySelector('h3').textContent = first.description || 'No Title';
        firstExpContainer.querySelector('.company').textContent = user.role || '';
        firstExpContainer.querySelector('.timeframe').textContent = `${first.startDate} - ${first.endDate}`;
    } else {
        document.querySelector('.experience1').remove();
    }

    // Clear the full experience container
    moreExpWrapper.innerHTML = '';

    // Add all experiences to the View All section
    experiences.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'experience';
        div.innerHTML = `
            <div class="experience-header">
                <div class="icon2"><i class="bi bi-briefcase-fill"></i></div>
                <div class="title">
                    <h3>${exp.description}</h3>
                    <p class="company">${user.role || ''}</p>
                </div>
                <p class="timeframe">${exp.startDate} - ${exp.endDate}</p>
            </div>
            <ul class="experience-details">
                ${(exp.details || [])
                    .map(detail => `<li>${detail}</li>`)
                    .join('')}
            </ul>
            <span class="view-more" onclick="toggleDetails(this)">View More</span>
        `;
        moreExpWrapper.appendChild(document.createElement('hr'));
        moreExpWrapper.appendChild(div);
    });

    // Initially hide the full section
    moreExpWrapper.classList.add('hidden');


    const educationList = user.education ? JSON.parse(user.education) : [];
    const eduBag = document.querySelector('.education-section .bag');
    const staticEdu = document.querySelector('.education-section .education'); // the first block
    const viewEduBtn = document.getElementById('view-education');
    const moreEduWrapper = document.createElement('div');
    moreEduWrapper.id = 'more-education';
    moreEduWrapper.classList.add('hidden');
    staticEdu.insertAdjacentElement('afterend', moreEduWrapper);

    // Update badge count
    eduBag.textContent = educationList.length;

    // Render static education (first one)
    if (educationList.length > 0) {
        const first = educationList[0];
        staticEdu.querySelector('h3').textContent = first.degree || 'No Degree';
        staticEdu.querySelector('.institution').textContent = first.institution || 'No Institution';
        staticEdu.querySelector('.duration').textContent = `${first.startDate} - ${first.endDate}`;
    } else {
        staticEdu.remove(); // if there's nothing, remove static
    }

    // Render the remaining education items (if any)
    educationList.slice(1).forEach(edu => {
        const div = document.createElement('div');
        div.className = 'education';
        div.innerHTML = `
            <div class="education-header">
                <div class="education-title">
                    <i class="bi bi-mortarboard icon"></i>
                    <div class="title2">
                        <h3>${edu.degree || 'No Degree'}</h3>
                        <p class="institution">${edu.institution || 'No Institution'}</p>
                    </div>
                </div>
                <p class="duration">${edu.startDate} - ${edu.endDate}</p>
            </div>
        `;
        moreEduWrapper.appendChild(document.createElement('hr'));
        moreEduWrapper.appendChild(div);
    });

    // If only one education, auto-show and remove View All button
    if (educationList.length <= 1) {
        viewEduBtn?.remove();
        moreEduWrapper.classList.remove('hidden');
    }

 const logoutButtons = document.querySelectorAll('.logout-btn');

logoutButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem('elderUser');
      window.location.href = 'adultlog.html';
    }
  });
});


});

// Toggle function (can be shared with experience)
function toggleSection(sectionId, btnId) {
    const section = document.getElementById(sectionId);
    const button = document.getElementById(btnId);

    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = 'Hide';
    } else {
        section.classList.add('hidden');
        button.textContent = 'View All';
    }
}




// Toggle show/hide for experience list
function toggleSection(sectionId, btnId) {
    const section = document.getElementById(sectionId);
    const button = document.getElementById(btnId);

    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = 'Hide';
    } else {
        section.classList.add('hidden');
        button.textContent = 'View All';
    }
}

// Toggle show/hide for experience details
function toggleDetails(el) {
    const details = el.previousElementSibling;
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        el.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        el.textContent = 'View More';
    }
}



