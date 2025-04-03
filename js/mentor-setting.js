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
    function enableEdit(button) {
        let section = button.closest(".section");
        let info = section.querySelector(".info");
        let input = section.querySelector(".hidden-input");
        let dropdown = section.querySelector(".dropdown");
        let saveBtn = section.querySelector(".save-btn");

        if (!input) return; // Prevents errors if input doesn't exist

        if (button.innerText === "Edit") {
            button.innerText = "Cancel";
            if (info) info.style.display = "none"; // Hide text info if exists
            input.style.display = "block"; // Show input field
            input.value = info ? info.innerText : ""; // Prefill input if info exists
            if (dropdown) dropdown.style.display = "block"; // Show dropdown if exists
            if (saveBtn) saveBtn.style.display = "inline-block"; // Show Save button
        } else {
            button.innerText = "Edit";
            if (info) info.style.display = "block"; // Show text info
            input.style.display = "none"; // Hide input field
            if (dropdown) dropdown.style.display = "none"; // Hide dropdown
            if (saveBtn) saveBtn.style.display = "none"; // Hide Save button
        }
    }

    // Attach event listeners to all edit buttons
    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", function () {
            enableEdit(this);
        });
    });

    // Attach event listeners to all save buttons
    document.querySelectorAll(".save-btn").forEach(button => {
        button.addEventListener("click", function () {
            let section = this.closest(".section");
            let info = section.querySelector(".info");
            let input = section.querySelector(".hidden-input");
            let editBtn = section.querySelector(".edit-btn");

            if (!info || !input || !editBtn) return; // Prevent errors

            if (input.value.trim() !== "") {
                info.innerText = input.value; // Save new input text
            }

            info.style.display = "block"; // Show info
            input.style.display = "none"; // Hide input
            this.style.display = "none"; // Hide save button
            editBtn.innerText = "Edit"; // Reset edit button text
        });
    });

    let deleteBtn = document.querySelector(".delete-btn");
    if (deleteBtn) {
        deleteBtn.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                alert("Account deleted!");
            }
        });
    }

    // Dropdown Logic
    function setupDropdown(inputSelector, dropdownSelector, selectedSelector, options, maxSelection = null) {
        let input = document.querySelector(inputSelector);
        let dropdown = document.querySelector(dropdownSelector);
        let selectedContainer = document.querySelector(selectedSelector);

        if (!input || !dropdown || !selectedContainer) return; // Prevent errors

        function populateDropdown() {
            dropdown.innerHTML = "";
            options.forEach(option => {
                let div = document.createElement("div");
                div.classList.add("dropdown-option");
                div.innerText = option;

                div.addEventListener("click", function () {
                    let selectedItems = selectedContainer.querySelectorAll(".selected-item");
                    if (maxSelection && selectedItems.length >= maxSelection) {
                        alert(`You can select up to ${maxSelection} options only.`);
                        return;
                    }

                    let selectedDiv = document.createElement("div");
                    selectedDiv.classList.add("selected-item");
                    selectedDiv.innerHTML = `${option} <span class="remove">×</span>`;

                    selectedDiv.querySelector(".remove").addEventListener("click", function () {
                        selectedDiv.remove();
                    });

                    selectedContainer.appendChild(selectedDiv);
                    dropdown.style.display = "none"; // Hide after selection
                });

                dropdown.appendChild(div);
            });
        }

        input.addEventListener("focus", function () {
            dropdown.style.display = "block";
        });

        document.addEventListener("click", function (event) {
            if (!input.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.style.display = "none";
            }
        });

        populateDropdown();
    }

    setupDropdown("#expertiseInput", "#expertiseDropdown", "#expertiseSelected", [
        "Content Writing", "UI/UX Design", "Software Development", "Marketing",
        "Finance", "Data Science", "Cybersecurity", "SEO", "Public Speaking",
        "Leadership", "AI & ML", "Cloud Computing", "Game Development",
        "Photography", "Product Management", "Video Editing", "E-commerce",
        "Python Programming", "JavaScript Development", "Social Media Strategy"
    ], 3);

    setupDropdown("#disciplineInput", "#disciplineDropdown", "#disciplineSelected", [
        "Social Media Writing", "Content Marketing", "Event Marketing",
        "Customer Success", "Community Management", "Product Marketing",
        "Program Management", "Project Management", "UX Research",
        "Brand Management", "Digital Marketing", "Sales", "Human Resources",
        "Web Development", "Mobile App Development", "Game Design",
        "Artificial Intelligence", "Machine Learning", "Blockchain", "Business Analysis"
    ]);
    
});


document.addEventListener("DOMContentLoaded", function () {
    let profileImage = document.getElementById("profileImage");
    let profileInput = document.getElementById("profileInput");
    let profileEditBtn = document.getElementById("profileEditBtn");

    profileEditBtn.addEventListener("click", function () {
        profileInput.click();
    });

    profileInput.addEventListener("change", function () {
        let file = profileInput.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
