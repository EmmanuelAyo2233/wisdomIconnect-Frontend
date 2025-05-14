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
    