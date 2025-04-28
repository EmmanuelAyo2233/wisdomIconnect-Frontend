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

      if (editBioInput && editExperienceInput) {
          editBioInput.value = bioText ? bioText.innerText.trim() : "";
          editExperienceInput.value = experienceText ? experienceText.innerText.trim() : "";
   
        }

      profileEditOverlay.style.display = "flex";
  });

  // Close modal
  closeEdit.addEventListener("click", function () {
      profileEditOverlay.style.display = "none";
  });

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


// ✅ Remove industry when clicking "✖"
if (selectedIndustryContainer) {
    selectedIndustryContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "SPAN") {
            selectedIndustries = selectedIndustries.filter(ind => ind !== e.target.dataset.value);
            updateIndustryDisplay();
        }
    });
}




  // Remove items
  if (selectedExpertiseContainer) {
      selectedExpertiseContainer.addEventListener("click", function (e) {
          if (e.target.tagName === "SPAN") {
              selectedExpertise = selectedExpertise.filter(exp => exp !== e.target.dataset.value);
              updateExpertiseDisplay();
          }
      });
  }

// ✅ Remove language when clicking "✖"
languageDisplay.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        selectedLanguages = selectedLanguages.filter(lang => lang !== e.target.dataset.value);
        updateLanguageDisplay();
    }
});

  if (selectedIndustryContainer) {
      selectedIndustryContainer.addEventListener("click", function (e) {
          if (e.target.tagName === "SPAN") {
              selectedIndustries = selectedIndustries.filter(ind => ind !== e.target.dataset.value);
              updateIndustryDisplay();
          }
      });
  }
  saveProfile.addEventListener("click", function () {
    // Update Bio (Only if Edited)
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
