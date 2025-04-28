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



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("viewAllModal");
    const closeModalBtn = document.querySelector(".close");
    const viewAllLink = document.querySelector(".view-all2");
    const calendarContainer = document.getElementById("calendar");
    const timeSlotsContainer = document.getElementById("timeSlots");
    const continueBtn = document.getElementById("continueBtn");
    const bookingSection = document.getElementById("bookingSection");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");
    const confirmBtn = document.getElementById("confirmBookingBtn");
    const bookingDate = document.getElementById("bookingDate");
    // const bookingTime = document.getElementById("bookingTime");
    const monthTitle = document.getElementById("monthTitle"); 
    const timeSelection = document.getElementById("timeSelectionSection");


    let currentMonth = 3; // March
    let currentYear = 2025;
    let selectedDate = "";
    let selectedTime = "";
    const availableDates = {
        "2025-03-06": ["4:30 PM", "6:00 PM"],
        "2025-03-10": ["11:30 AM", "4:00 PM"],
        "2025-03-12": ["10:00 AM", "2:30 PM"],
        "2025-03-15": ["9:00 AM", "1:00 PM"],
        "2025-03-19": ["9:00 AM", "1:00 PM"],
        "2025-03-20": ["10:00 AM", "1:00 PM"],
        "2025-03-23": ["12:00 AM", "8:00 PM"],
        "2025-03-24": ["12:00 AM", "4:00 PM"],
        "2025-03-26": ["12:00 AM", "8:00 PM"],
        "2025-03-27": ["12:00 AM", "4:00 PM"],
        "2025-04-02": ["12:00 AM", "4:00 PM"], // Fixed leading zero
        "2025-04-03": ["12:00 AM", "4:00 PM"],
        "2025-04-04": ["12:00 AM", "4:00 PM"]
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
    
        const monthNames = ["January", "February", "March", "April"];
        monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
        prevMonthBtn.disabled = true;
        nextMonthBtn.disabled = true;
    
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
        // Get today's date
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDate = today.getDate();
    
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


    let currentMonth = 3; // March
    let currentYear = 2025;
    let selectedDate = "";
    let selectedTime = "";
    const availableDates = {
        "2025-03-06": ["4:30 PM", "6:00 PM"],
        "2025-03-10": ["11:30 AM", "4:00 PM"],
        "2025-03-12": ["10:00 AM", "2:30 PM"],
        "2025-03-15": ["9:00 AM", "1:00 PM"],
        "2025-03-19": ["9:00 AM", "1:00 PM"],
        "2025-03-20": ["10:00 AM", "1:00 PM"],
        "2025-03-23": ["12:00 AM", "8:00 PM"],
        "2025-03-24": ["12:00 AM", "4:00 PM"],
        "2025-03-26": ["12:00 AM", "8:00 PM"],
        "2025-03-27": ["12:00 AM", "4:00 PM"],
        "2025-04-02": ["12:00 AM", "4:00 PM"], // Fixed leading zero
        "2025-04-03": ["12:00 AM", "4:00 PM"],
        "2025-04-04": ["12:00 AM", "4:00 PM"]
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
    
        const monthNames = ["January", "February", "March", "April"];
        monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
        prevMonthBtn.disabled = true;
        nextMonthBtn.disabled = true;
    
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
        // Get today's date
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDate = today.getDate();
    
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





