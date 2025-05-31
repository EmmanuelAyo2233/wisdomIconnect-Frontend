document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".bottom-nav .nav-list li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));

      this.classList.add("active");
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const slidingMenu = document.getElementById("slidingMenu");
const cancelBtn = document.getElementById("cancelBtn");
const body = document.body;

menuToggle.addEventListener("click", () => {
  slidingMenu.classList.toggle("active");
  body.classList.toggle("dimmed");
});

cancelBtn.addEventListener("click", () => {
  slidingMenu.classList.remove("active");
});

body.addEventListener("click", (event) => {
  if (
    !slidingMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    slidingMenu.classList.remove("active");
  }
});

const sideNavPic = document.getElementById("sideNavPic");
const hoverMenu = document.getElementById("hoverMenu");

sideNavPic.addEventListener("click", (e) => {
  e.stopPropagation();
  const isVisible = hoverMenu.dataset.visible === "true";
  hoverMenu.dataset.visible = !isVisible;
});

document.addEventListener("click", () => {
  hoverMenu.dataset.visible = "false";
});

hoverMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

document
  .getElementById("notificationIcon")
  .addEventListener("click", function (event) {
    let dropdown = document.getElementById("notiDropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });

document.addEventListener("click", function (event) {
  let dropdown = document.getElementById("notiDropdown");
  if (
    !dropdown.contains(event.target) &&
    event.target.id !== "notificationIcon"
  ) {
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
  const tabs = document.querySelectorAll(".tab");
  const contentsLeft = document.querySelectorAll(".left-content .content");
  const contentsRight = document.querySelectorAll(".right-content .content");
  const underline = document.querySelector(".underline");

  // Position underline initially
  const activeTab = document.querySelector(".tab.active");
  underline.style.left = activeTab.offsetLeft + "px";
  underline.style.width = activeTab.offsetWidth + "px";

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Move underline
      underline.style.left = this.offsetLeft + "px";
      underline.style.width = this.offsetWidth + "px";

      // Show corresponding content (left & right)
      const target = this.dataset.target;
      contentsLeft.forEach((content) => content.classList.remove("active"));
      contentsRight.forEach((content) => content.classList.remove("active"));

      document.getElementById(target + "-left").classList.add("active");
      document.getElementById(target + "-right").classList.add("active");
    });
  });
});

document.querySelector(".read-more").addEventListener("click", function () {
  let hiddenParagraphs = document.querySelectorAll(".long-text");
  hiddenParagraphs.forEach((p) => p.classList.toggle("hidden"));

  if (hiddenParagraphs[0].classList.contains("hidden")) {
    this.textContent = "Read More";
  } else {
    this.textContent = "Read Less";
  }
});

// document.getElementById("profileUpload").addEventListener("change", function(event) {
//   const file = event.target.files[0];
//   if (file) {
//       const reader = new FileReader();
//       reader.onload = function(e) {
//           document.getElementById("profilePic").src = e.target.result;
//           document.getElementById("sideNavPic").src = e.target.result;
//           document.getElementById("res-img").src = e.target.result; // Updates side nav image
//       };
//       reader.readAsDataURL(file);
//   }
// });

const profilePic = document.getElementById("profilePic");
const profileUpload = document.getElementById("profileUpload");
const editProfileBtn = document.getElementById("editProfileBtn");
const updateProfile = document.getElementById("update-profile"); 
const updateRes = document.getElementById("update-res")


profileUpload.disabled = true;

editProfileBtn.addEventListener("click", function () {
    profileUpload.disabled = false;
    profileUpload.click();
});

// Update Profile Picture
profileUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result; 
            if (sideNavPic) {
                sideNavPic.src = e.target.result;
            }
            if (updateProfile) {
                updateProfile.src = e.target.result; 
            }

            if (updateRes) {
              updateRes.src = e.target.result; 
          }

        };
        reader.readAsDataURL(file);

      
        setTimeout(() => {
            profileUpload.disabled = true;
        }, 100);
    }
});



document.addEventListener("DOMContentLoaded", function () {
  const profileEditOverlay = document.getElementById("profileEditOverlay");
  const openEditProfile = document.getElementById("openEditProfile");
  const closeEdit = document.getElementById("closeEdit");
  const saveProfile = document.getElementById("saveProfile");

  if (!profileEditOverlay || !openEditProfile || !closeEdit || !saveProfile) {
      console.error("One or more elements are missing from the DOM.");
      return;
  }

  const bioText = document.querySelector(".short-text");
  const experienceText = document.querySelector(".experience-title");
   const editBioInput = document.getElementById("editBio");
    const editNameInput = document.getElementById("editName");
    const editRoleInput = document.getElementById("editRole");
       const editExperienceInput = document.getElementById("editExperience");
  const editExpertise = document.getElementById("editExpertise");
  const selectedExpertiseContainer = document.getElementById("selectedExpertiseContainer");
  const editLanguage = document.getElementById("editLanguage");
  const selectedLanguageContainer = document.getElementById("selectedLanguageContainer");
  const editIndustry = document.getElementById("editIndustry");
  const selectedIndustryContainer = document.getElementById("selectedIndustriesContainer");

  let selectedExpertise = [];
  let selectedLanguages = [];
  let selectedIndustries = [];




  

  // Open modal
 openEditProfile.addEventListener("click", function () {
  const editBioInput = document.getElementById("editBio");
  const editExperienceInput = document.getElementById("editExperience");
  const editNameInput = document.getElementById("editName");
  const editRoleInput = document.getElementById("editRole");

  // 🔹 Define name and role from the page
  const nameDisplay = document.querySelector(".user-name");
  const roleDisplay = document.querySelector(".user-role");

  if (editBioInput && editExperienceInput) {
    editBioInput.value = bioText ? bioText.innerText.trim() : "";
    editExperienceInput.value = experienceText ? experienceText.innerText.trim() : "";
  }

  if (editNameInput && nameDisplay) {
    editNameInput.value = nameDisplay.innerText.trim();
  }

  if (editRoleInput && roleDisplay) {
    editRoleInput.value = roleDisplay.innerText.trim();
  }

  profileEditOverlay.style.display = "flex";
});


  // Close modal
  closeEdit.addEventListener("click", function () {
      profileEditOverlay.style.display = "none";
  });


   if (editBioInput && editExperienceInput && editNameInput && editRoleInput) {
        editBioInput.value = bioText ? bioText.innerText.trim() : "";
        editExperienceInput.value = experienceText ? experienceText.innerText.trim() : "";

        // Grab current name and role text from your HTML
        const currentName = document.querySelector(".user-name")?.innerText.trim() || "";
        const currentRole = document.querySelector(".user-role")?.innerText.trim() || "";

        editNameInput.value = currentName;
        editRoleInput.value = currentRole;
`x`
    }


  // Add expertise
  if (editExpertise) {
      editExpertise.addEventListener("change", function () {
          const value = editExpertise.value;
          
          if (selectedExpertise.length >= 5) {
              alert("You can only select up to 5 expertise!");
              return;
          }

          if (!selectedExpertise.includes(value)) {
              selectedExpertise.push(value);
              updateExpertiseDisplay();
          }
      });
  }


  // Update displays
  function updateExpertiseDisplay() {
      if (!selectedExpertiseContainer) return;
      selectedExpertiseContainer.innerHTML = "";
      selectedExpertise.forEach(exp => {
          const span = document.createElement("span");
          span.classList.add("selected-expertise", "expertise-item", exp);
          span.innerHTML = `${exp.charAt(0).toUpperCase() + exp.slice(1)} <span data-value="${exp}">✖</span>`;
          selectedExpertiseContainer.appendChild(span);
      });
  }

  function updateLanguageDisplay() {
    languageDisplay.innerHTML = ""; // Clear previous display

    selectedLanguages.forEach(lang => {
        const langItem = document.createElement("span");
        langItem.textContent = lang + " ✖"; // Add "✖" for removal
        langItem.classList.add("language-tag");
        langItem.dataset.value = lang; // Store value for easy removal

        languageDisplay.appendChild(langItem);
    });

    // Ensure the display container stays visible
    languageDisplay.style.display = selectedLanguages.length > 0 ? "block" : "none";
}

// ✅ Add language (Max 2)
if (editLanguage) {
    editLanguage.addEventListener("change", function () {
        const value = editLanguage.value.trim();

        if (!value) return;

        if (selectedLanguages.length >= 2) {
            alert("You can only select up to 2 languages!");
            return;
        }

        if (!selectedLanguages.includes(value)) {
            selectedLanguages.push(value);
            updateLanguageDisplay();
        } else {
            alert("You have already selected this language.");
        }
    });
}




// ✅ Function to update selected industries
function updateIndustryDisplay() {
    if (!selectedIndustryContainer) return;
    selectedIndustryContainer.innerHTML = ""; // Clear previous

    selectedIndustries.forEach(ind => {
        const span = document.createElement("span");
        span.classList.add("industry-item");
        span.innerHTML = `${ind.charAt(0).toUpperCase() + ind.slice(1)} <span data-value="${ind}">✖</span>`;
        selectedIndustryContainer.appendChild(span);
    });
}



// ✅ Limit selection of industries to 2
if (editIndustry) {
    editIndustry.addEventListener("change", function () {
        const value = editIndustry.value;

        if (selectedIndustries.length >= 2) {
            alert("You can only select up to 2 industries!");
            return;
        }

        if (!selectedIndustries.includes(value) && value !== "") {
            selectedIndustries.push(value);
            updateIndustryDisplay();
        }
    });
}


  
  saveProfile.addEventListener("click", function () {
    // Update Bio (Only if Edited)

    if (editNameInput && editRoleInput) {
        const newName = editNameInput.value.trim();
        const newRole = editRoleInput.value.trim();

        // Update profile display
        const nameDisplay = document.querySelector(".user-name");
        const roleDisplay = document.querySelector(".user-role");

        if (nameDisplay) nameDisplay.innerText = newName;
        if (roleDisplay) roleDisplay.innerText = newRole;

        // Optionally update other fields and/or send updated data to backend here

        
    }
        
    

  


    if (editBio.value.trim()) {
        bioText.innerText = editBio.value.trim();
    }

    // Update Experience (Only if Edited)
    if (editExperience.value.trim()) {
        experienceText.innerText = editExperience.value.trim();
    }

    // Update Expertise (Only if Selected)
    if (selectedExpertise.length > 0) {
        const expertiseGrid = document.querySelector(".expertise-grid");
        expertiseGrid.innerHTML = ""; // Clear old values
        selectedExpertise.forEach(exp => {
            const span = document.createElement("span");
            span.classList.add("expertise-item", exp);
            span.innerText = exp.charAt(0).toUpperCase() + exp.slice(1);
            expertiseGrid.appendChild(span);
        });
    }

    // Update Industries (Only if Selected)
    if (selectedIndustries.length > 0) {
        const industryContainer = document.querySelector(".experiecew .inline");
        industryContainer.innerHTML = ""; // Clear old values
        selectedIndustries.forEach(ind => {
            const p = document.createElement("p");
            p.classList.add("experiecew-item");
            p.innerText = ind.charAt(0).toUpperCase() + ind.slice(1);
            industryContainer.appendChild(p);
        });
    }

    // Update Languages (Only if Selected)
    if (selectedLanguages.length > 0) {
        const languageContainer = document.querySelector(".language");
        languageContainer.innerHTML = `<h3>Fluent in</h3>`; // Keep title
        selectedLanguages.forEach(lang => {
            const span = document.createElement("span");
            span.classList.add("language-item");
            span.innerText = lang.charAt(0).toUpperCase() + lang.slice(1);
            languageContainer.appendChild(span);
        });
    }

    // Hide the edit profile modal
    profileEditOverlay.style.display = "none";
});
  

});


// document.addEventListener("DOMContentLoaded", function () {
//   const editIndustry = document.getElementById("editIndustry");
//   const selectedIndustryContainer = document.getElementById("selectedIndustriesContainer");


//   let selectedIndustries = [];


//   // ✅ Function to update selected industries
//   function updateIndustryDisplay() {
//       if (!selectedIndustryContainer) return;
//       selectedIndustryContainer.innerHTML = ""; // Clear previous

//       selectedIndustries.forEach(ind => {
//           const span = document.createElement("span");
//           span.classList.add("industry-item");
//           span.innerHTML = `${ind.charAt(0).toUpperCase() + ind.slice(1)} <span data-value="${ind}">✖</span>`;
//           selectedIndustryContainer.appendChild(span);
//       });
//   }



//   // ✅ Limit selection of industries to 2
//   if (editIndustry) {
//       editIndustry.addEventListener("change", function () {
//           const value = editIndustry.value;

//           if (selectedIndustries.length >= 2) {
//               alert("You can only select up to 2 industries!");
//               return;
//           }

//           if (!selectedIndustries.includes(value) && value !== "") {
//               selectedIndustries.push(value);
//               updateIndustryDisplay();
//           }
//       });
//   }

 
//   // ✅ Remove industry when clicking "✖"
//   if (selectedIndustryContainer) {
//       selectedIndustryContainer.addEventListener("click", function (e) {
//           if (e.target.tagName === "SPAN") {
//               selectedIndustries = selectedIndustries.filter(ind => ind !== e.target.dataset.value);
//               updateIndustryDisplay();
//           }
//       });
//   }

// });

// document.addEventListener("DOMContentLoaded", function () {
//   const editLanguage = document.getElementById("editLanguage");
//   const languageDisplay = document.getElementById("languageDisplay");

//   if (!languageDisplay) {
//       console.error("Error: #languageDisplay element not found!");
//       return;
//   }

//   let selectedLanguages = [];

//   function updateLanguageDisplay() {
//       languageDisplay.innerHTML = ""; // Clear previous display

//       selectedLanguages.forEach(lang => {
//           const langItem = document.createElement("span");
//           langItem.textContent = lang + " ✖"; // Add "✖" for removal
//           langItem.classList.add("language-tag");
//           langItem.dataset.value = lang; // Store value for easy removal

//           languageDisplay.appendChild(langItem);
//       });

//       // Ensure the display container stays visible
//       languageDisplay.style.display = selectedLanguages.length > 0 ? "block" : "none";
//   }

//   // ✅ Add language (Max 2)
//   if (editLanguage) {
//       editLanguage.addEventListener("change", function () {
//           const value = editLanguage.value.trim();

//           if (!value) return;

//           if (selectedLanguages.length >= 2) {
//               alert("You can only select up to 2 languages!");
//               return;
//           }

//           if (!selectedLanguages.includes(value)) {
//               selectedLanguages.push(value);
//               updateLanguageDisplay();
//           } else {
//               alert("You have already selected this language.");
//           }
//       });
//   }

//   // ✅ Remove language when clicking "✖"
//   languageDisplay.addEventListener("click", function (e) {
//       if (e.target.tagName === "SPAN") {
//           selectedLanguages = selectedLanguages.filter(lang => lang !== e.target.dataset.value);
//           updateLanguageDisplay();
//       }
//   });

//   // Ensure display container is visible initially if there are selected languages
//   updateLanguageDisplay();
// });







window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("youthUser"));
  if (!user) return;

  // 🔤 Name & Role
  document.querySelector(".user-name").textContent = `${user.name} 🇳🇬`;
  document.querySelector(".user-role").textContent = user.role || "No role provided";

  // 📝 Bio
  const fullBio = user.bio || "No bio provided.";
  const sentences = fullBio.split(/\.\s+/);
  document.querySelector(".short-text").textContent = sentences.slice(0, 2).join(". ") + ".";
  document.querySelector(".long-text").textContent = sentences.slice(2).join(". ") + ".";

const expertiseList = JSON.parse(user.expertise || "[]");
const expertiseGrid = document.querySelector(".expertise-grid");
expertiseGrid.innerHTML = "";

// Map expertise text to class names
const colors = ['#3498db', '#e67e22', '#2ecc71', '#9b59b6', '#34495e', '#1abc9c'];

expertiseList.forEach((exp, i) => {
  const cleanExp = exp.replace(" ×", "").trim();
  const span = document.createElement("span");
  span.className = "expertise-item";
  span.textContent = cleanExp;
  // assign color by index
  span.style.backgroundColor = colors[i % colors.length];
  span.style.color = 'white';
  expertiseGrid.appendChild(span);
});


  // 🌍 Fluent In (Max 2 shown, rest as +n)
  const fluentList = JSON.parse(user.fluentIn || "[]");
  const languageSection = document.querySelector(".language");
  languageSection.innerHTML = '<h3>Fluent in</h3>';
  fluentList.slice(0, 2).forEach((lang) => {
    const span = document.createElement("span");
    span.className = "language-item";
    span.textContent = lang.replace(" ×", "");
    languageSection.appendChild(span);
  });
  if (fluentList.length > 2) {
    const more = document.createElement("span");
    more.className = "language-item";
    more.textContent = `+${fluentList.length - 2}`;
    languageSection.appendChild(more);
  }

  // 🏢 Industries
  const industryContainer = document.querySelector(".experiecew .inline");
  industryContainer.innerHTML = "";
  const industries = (user.industry || "").split(",").map(i => i.trim());
  industries.forEach((ind) => {
    const p = document.createElement("p");
    p.className = "experiecew-item";
    p.textContent = ind.replace(" ×", "");
    industryContainer.appendChild(p);
  });


  const experienceDetails = document.querySelector(".experience-details");
  experienceDetails.querySelector(".experience-title").textContent = user.role || "No title provided";
  experienceDetails.querySelector(".experience-company").textContent = user.experienceDescription || "No experience description.";

  const expPresent = document.querySelector(".experience-present");
  if (user.endDate === null || user.endDate.toLowerCase().includes("present")) {
    expPresent.textContent = "Present";
  } else {
    expPresent.textContent = new Date(user.endDate).toLocaleDateString();
  }
});

let selectedExpertise = [];
let selectedLanguages = [];
let selectedIndustries = [];

// Create tag with cancel button
function createTag(containerId, value, className) {
  const container = document.getElementById(containerId);

  // Prevent duplicate tags in DOM
  if (Array.from(container.children).some(el => el.dataset.value === value)) return;

  const tag = document.createElement("span");
  tag.className = className;
  tag.dataset.value = value;
  tag.style.margin = "4px";
  tag.style.padding = "4px 8px";
  tag.style.borderRadius = "8px";
  tag.style.display = "inline-block";

  if (className === "expertise-tag") {
    tag.style.backgroundColor = "#3498db";
    tag.style.color = "#fff";
  } else if (className === "language-tag") {
    tag.style.backgroundColor = "#ccc";
    tag.style.color = "#000";
  } else if (className === "industry-tag") {
    tag.style.backgroundColor = "#8e44ad";
    tag.style.color = "#fff";
  }

  tag.textContent = value;

  const cancelBtn = document.createElement("span");
  cancelBtn.innerHTML = " ×";
  cancelBtn.style.cursor = "pointer";
  cancelBtn.style.marginLeft = "6px";
  cancelBtn.addEventListener("click", function () {
    tag.remove();

    if (className === "expertise-tag") {
      selectedExpertise = selectedExpertise.filter(item => item !== value);
    } else if (className === "language-tag") {
      selectedLanguages = selectedLanguages.filter(item => item !== value);
    } else if (className === "industry-tag") {
      selectedIndustries = selectedIndustries.filter(item => item !== value);
    }
  });

  tag.appendChild(cancelBtn);
  container.appendChild(tag);
}

// Load from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const storedUser = JSON.parse(localStorage.getItem("youthUser"));
  if (!storedUser) return;

  // Fill input fields
  document.getElementById("editName").value = storedUser.name || "";
  document.getElementById("editRole").value = storedUser.role || "";
  document.getElementById("editBio").value = storedUser.bio || "";
  document.getElementById("editExperience").value = storedUser.experienceDescription || "";

  // Clear existing tag displays
  document.getElementById("selectedExpertiseContainer").innerHTML = "";
  document.getElementById("languageDisplay").innerHTML = "";
  document.getElementById("selectedIndustriesContainer").innerHTML = "";

  // Parse and load stored tags
  selectedExpertise = JSON.parse(storedUser.expertise || "[]");
  selectedLanguages = JSON.parse(storedUser.fluentIn || "[]");
  selectedIndustries = JSON.parse(storedUser.industry || "[]");

  selectedExpertise.forEach(item => createTag("selectedExpertiseContainer", item, "expertise-tag"));
  selectedLanguages.forEach(item => createTag("languageDisplay", item, "language-tag"));
  selectedIndustries.forEach(item => createTag("selectedIndustriesContainer", item, "industry-tag"));
});

// Tag adding handlers
document.addEventListener("DOMContentLoaded", () => {
  // Expertise
  document.getElementById("editExpertise").addEventListener("change", function () {
    const val = this.value.trim();
    if (!val || selectedExpertise.includes(val)) return;
    if (selectedExpertise.length >= 5) return alert("You can select up to 5 expertise");

    selectedExpertise.push(val);
    createTag("selectedExpertiseContainer", val, "expertise-tag");
  });

  // Languages
  document.getElementById("editLanguage").addEventListener("change", function () {
    const val = this.value.trim();
    if (!val || selectedLanguages.includes(val)) return;
    if (selectedLanguages.length >= 2) return alert("You can select up to 2 languages");

    selectedLanguages.push(val);
    createTag("languageDisplay", val, "language-tag");
  });

  // Industries
  document.getElementById("editIndustry").addEventListener("change", function () {
    const val = this.value.trim();
    if (!val || selectedIndustries.includes(val)) return;

    selectedIndustries.push(val);
    createTag("selectedIndustriesContainer", val, "industry-tag");
  });

  // Save Profile
  document.getElementById("saveProfile").addEventListener("click", async () => {
    const storedUser = JSON.parse(localStorage.getItem("youthUser"));
    if (!storedUser || !storedUser.id) return alert("User ID not found");

    const updatedData = {
      id: storedUser.id,
      name: document.getElementById("editName").value.trim(),
      role: document.getElementById("editRole").value.trim(),
      bio: document.getElementById("editBio").value.trim(),
      experienceDescription: document.getElementById("editExperience").value.trim(),
      expertise: JSON.stringify(selectedExpertise),
      fluentIn: JSON.stringify(selectedLanguages),
      industry: JSON.stringify(selectedIndustries)
    };

    try {
      const response = await fetch("/api/update-profile/youth", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
      });

      const result = await response.json();
      if (!response.ok) return alert("❌ " + (result.error || "Update failed"));

      // Update local storage
      localStorage.setItem("youthUser", JSON.stringify({ ...storedUser, ...updatedData }));
      alert("✅ Profile updated!");
    } catch (err) {
      console.error(err);
      alert("❌ Error updating profile");
    }
  });
});
