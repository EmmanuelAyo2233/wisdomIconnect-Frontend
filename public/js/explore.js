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
``
cancelBtn.```addEventListener('click', () => {
        s```lidingMenu.classList.remove('active');
    });

``
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


// Add click event to filter items
document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', () => {
      // Highlight the selected filter
      document.querySelectorAll('.filter-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      
      // Example action: Log the filter title
      console.log(item.querySelector('.filter-title').textContent);
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const filterGrid = document.querySelector(".filter-grid");
    const backArrow = document.querySelector(".back-arrow");
    const frontArrow = document.querySelector(".front-arrow");
  
    // Function to update arrow visibility
    const updateArrows = () => {
      const scrollLeft = filterGrid.scrollLeft;
      const maxScrollLeft = filterGrid.scrollWidth - filterGrid.clientWidth;
  
      backArrow.style.display = scrollLeft > 0 ? "block" : "none";
      frontArrow.style.display = scrollLeft < maxScrollLeft ? "block" : "none";
    };
  
    // Scroll actions
    const scrollAmount = 200; // Adjust the scrolling amount as needed
    backArrow.addEventListener("click", () => {
      filterGrid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      updateArrows();
    });
    frontArrow.addEventListener("click", () => {
      filterGrid.scrollBy({ left: scrollAmount, behavior: "smooth" });
      updateArrows();
    });
  
    // Update arrows on scroll and on page load
    filterGrid.addEventListener("scroll", updateArrows);
    updateArrows();
  });

  
  // Select all filter items
const filterItems = document.querySelectorAll('.filter-item');

// Add click event listeners
filterItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all items
    filterItems.forEach(i => i.classList.remove('active'));

    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});


// Show full country name on hover
document.querySelectorAll('.elder-name span').forEach((country) => {
  country.addEventListener('mouseover', () => {
    const tooltip = country.querySelector('.tooltip');
    if (tooltip) tooltip.style.display = 'inline-block';
  });

  country.addEventListener('mouseout', () => {
    const tooltip = country.querySelector('.tooltip');
    if (tooltip) tooltip.style.display = 'none';
  });
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
  