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


