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


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".booking-tab");
    const sections = document.querySelectorAll(".booking-content");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove("active"));
        // Hide all sections
        sections.forEach((s) => s.classList.add("hidden"));
  
        // Add active class to clicked tab
        tab.classList.add("active");
  
        // Show the correct section
        const sectionId = tab.getAttribute("data-section");
        document.getElementById(sectionId).classList.remove("hidden");
      });
    });
  });
  


  function cancelSession() {
    if (confirm("Are you sure you want to cancel this session?")) {
      document.querySelector(".upcoming-session").remove(); // Remove from UI
    }
  }
  

  function cancelPendingSession() {
    if (confirm("Are you sure you want to cancel this pending session?")) {
      document.querySelector(".pending-session").remove();
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let notificationIcon = document.getElementById("notificationIcon");
    let dropdown = document.getElementById("notiDropdown");

    // Toggle visibility on click
    notificationIcon.addEventListener("click", function (event) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && event.target !== notificationIcon) {
            dropdown.style.display = "none";
        }
    });
});
