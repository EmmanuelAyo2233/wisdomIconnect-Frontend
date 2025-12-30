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

// document.querySelector(".read-more").addEventListener("click", function () {
//   let hiddenParagraphs = document.querySelectorAll(".long-text");
//   hiddenParagraphs.forEach((p) => p.classList.toggle("hidden"));

//   if (hiddenParagraphs[0].classList.contains("hidden")) {
//     this.textContent = "Read More";
//   } else {
//     this.textContent = "Read Less";
//   }
// });

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

// const profilePic = document.getElementById("profilePic");
// const profileUpload = document.getElementById("profileUpload");
// const editProfileBtn = document.getElementById("editProfileBtn");
// const updateProfile = document.getElementById("update-profile"); 
// const updateRes = document.getElementById("update-res")


// profileUpload.disabled = true;

// editProfileBtn.addEventListener("click", function () {
//     profileUpload.disabled = false;
//     profileUpload.click();
// });

// // Update Profile Picture
// profileUpload.addEventListener("change", function () {
//     const file = this.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             profilePic.src = e.target.result; 
//             if (sideNavPic) {
//                 sideNavPic.src = e.target.result;
//             }
//             if (updateProfile) {
//                 updateProfile.src = e.target.result; 
//             }

//             if (updateRes) {
//               updateRes.src = e.target.result; 
//           }

//         };
//         reader.readAsDataURL(file);

      
//         setTimeout(() => {
//             profileUpload.disabled = true;
//         }, 100);
//     }
// });


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



// ===== Utility to create tags with category colors =====
// ===== Utility to create tags with colors and cancel button =====
// ===== Utility: Create Tag =====
// ===== Selected Arrays =====

document.addEventListener('DOMContentLoaded', () => {
  const profileOverlay = document.getElementById('profileEditOverlay');
  const openBtn = document.getElementById('openEditProfile');
  const closeBtn = document.getElementById('closeEdit');
  const saveBtn = document.getElementById('saveProfile');

  const expertiseSelect = document.getElementById('editExpertise');
  const languageSelect = document.getElementById('editLanguage');
  const industrySelect = document.getElementById('editIndustry');
  const interestSelect = document.getElementById('editInterest');

  const expertiseContainer = document.getElementById('selectedExpertiseContainer');
  const languageContainer = document.getElementById('languageDisplay');
  const industryContainer = document.getElementById('selectedIndustriesContainer');
  const interestContainer = document.getElementById('selectedInterests');
  const experienceWrapper = document.getElementById('experienceWrapper');
  const addExperienceBtn = document.getElementById('addExperience');

  let selectedExpertise = [];
  let selectedLanguages = [];
  let selectedIndustries = [];
  let selectedInterests = [];
  let experience = [];
  let profileData = {}; // store fetched profile

  // ===== Tag Creation =====
  function createTag(text, container, max, selectedArray) {
    if (!text || selectedArray.includes(text)) return;
    if (selectedArray.length >= max) {
        alert(`You can select up to ${max} items`);
        return;
    }
    selectedArray.push(text);
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = text;

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = '×';
    removeBtn.className = 'remove-tag';
    removeBtn.onclick = () => {
        selectedArray.splice(selectedArray.indexOf(text), 1);
        tag.remove();
    };
    tag.appendChild(removeBtn);
    container.appendChild(tag);
  }

  // ===== Add Experience Block =====
  function addExperienceBlock(exp = {}) {
    const block = document.createElement('div');
    block.className = 'experience-block';
    block.innerHTML = `
      <input type="text" class="exp-title" placeholder="Job Title" value="${exp.title || ''}">
      <input type="text" class="exp-company" placeholder="Company" value="${exp.company || ''}">
      <input type="date" class="exp-start" value="${exp.startDate || ''}">
      <input type="date" class="exp-end" value="${exp.endDate || ''}" ${exp.present ? 'disabled' : ''}>
      <label>
        <input type="checkbox" class="exp-present" ${exp.present ? 'checked' : ''}> Present
      </label>
      <button type="button" class="remove-exp">Remove</button>
    `;
    const presentCheckbox = block.querySelector('.exp-present');
    const endDateInput = block.querySelector('.exp-end');
    presentCheckbox.addEventListener('change', () => {
      endDateInput.disabled = presentCheckbox.checked;
      if (presentCheckbox.checked) endDateInput.value = '';
    });
    block.querySelector('.remove-exp').onclick = () => block.remove();
    experienceWrapper.appendChild(block);
  }

  addExperienceBtn.addEventListener('click', () => addExperienceBlock());

  // ===== Open Modal =====
  openBtn.addEventListener('click', () => {
    profileOverlay.classList.add('active');

    // Reset
    expertiseContainer.innerHTML = ''; selectedExpertise = [];
    languageContainer.innerHTML = ''; selectedLanguages = [];
    industryContainer.innerHTML = ''; selectedIndustries = [];
    interestContainer.innerHTML = ''; selectedInterests = [];
    experienceWrapper.innerHTML = '';

    // Prefill modal from profileData
    document.getElementById('editName').value = profileData.name || '';
    document.getElementById('editRole').value = profileData.role || '';
    document.getElementById('editBio').value = profileData.bio || '';
    document.getElementById('editPhone').value = profileData.phone || '';

    (profileData.expertise || []).forEach(e => createTag(e, expertiseContainer, 5, selectedExpertise));
    (profileData.fluentIn || []).forEach(l => createTag(l, languageContainer, 2, selectedLanguages));
    (profileData.industries || []).forEach(i => createTag(i, industryContainer, 2, selectedIndustries));
    (profileData.interests || []).forEach(i => createTag(i, interestContainer, 5, selectedInterests));
    (profileData.experience || []).forEach(exp => addExperienceBlock(exp));
  });

  closeBtn.addEventListener('click', () => profileOverlay.classList.remove('active'));
  profileOverlay.addEventListener('click', (e) => {
    if (e.target === profileOverlay) profileOverlay.classList.remove('active');
  });

  // ===== Handle Select Changes =====
  [expertiseSelect, languageSelect, industrySelect, interestSelect].forEach(sel => {
    sel?.addEventListener('change', function() {
      const mapping = {
        'editExpertise': [selectedExpertise, expertiseContainer, 5],
        'editLanguage': [selectedLanguages, languageContainer, 2],
        'editIndustry': [selectedIndustries, industryContainer, 2],
        'editInterest': [selectedInterests, interestContainer, 5],
      };
      const [arr, container, max] = mapping[this.id];
      createTag(this.value, container, max, arr);
      this.selectedIndex = 0;
    });
  });

  // ===== Save to Backend =====
  saveBtn.addEventListener('click', async () => {
    // Gather experiences
    experience = [];
    document.querySelectorAll('.experience-block').forEach(block => {
      experience.push({
        title: block.querySelector('.exp-title').value.trim(),
        company: block.querySelector('.exp-company').value.trim(),
        startDate: block.querySelector('.exp-start').value,
        endDate: block.querySelector('.exp-end').value,
        present: block.querySelector('.exp-present').checked
      });
    });

    // Payload
 const payload = {
  name: document.getElementById('editName').value.trim(),
  role: document.getElementById('editRole').value.trim(),
  bio: document.getElementById('editBio').value.trim(),
  phone: document.getElementById('editPhone').value.trim(),
  expertise: selectedExpertise,
  fluentIn: selectedLanguages,
  industries: selectedIndustries,
  interests: selectedInterests,
  experience: experience
};
  console.log("Payload to save:", payload);

try {
  // pick the correct token for mentee
  const token = localStorage.getItem('menteeToken'); 
  const res = await fetch('http://localhost:5000/api/v1/user/me/update', {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify(payload)
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || 'Failed to update');

  profileData = result.data || payload;
  updateUI(profileData);
  profileOverlay.classList.remove('active');
  alert('Profile updated successfully!');
} catch (err) {
  console.error(err);
  alert('Failed to update profile. Check console.');
}
  });
  // ===== Update Profile UI =====
  function updateUI(data) {
    document.querySelector('.user-name').textContent = data.name || '';
    document.querySelector('.user-role').textContent = data.role || '';
    document.querySelector('.about-content .short-text').textContent = data.bio || '';
    if(document.querySelector('.user-phone'))
      document.querySelector('.user-phone').textContent = data.phone || '';

    const mainExpertise = document.getElementById('expertiseContainer');
    mainExpertise.innerHTML = '';
    (data.expertise || []).forEach(e => {
      const span = document.createElement('span');
      span.className = 'expertise-item';
      span.textContent = e;
      mainExpertise.appendChild(span);
    });

    const mainLang = document.getElementById('languageContainer');
    mainLang.innerHTML = '';
    (data.fluentIn || []).forEach(l => {
      const span = document.createElement('span');
      span.className = 'language-item';
      span.textContent = l;
      mainLang.appendChild(span);
    });

    const mainIndustries = document.getElementById('industryContainer');
    mainIndustries.innerHTML = '';
    (data.industries || []).forEach(i => {
      const p = document.createElement('p');
      p.className = 'experiecew-item';
      p.textContent = i;
      mainIndustries.appendChild(p);
    });

    const mainInterests = document.getElementById('selectedInterests');
    mainInterests.innerHTML = '';
    (data.interests || []).forEach(i => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = i;
      mainInterests.appendChild(span);
    });

    const mainExp = document.querySelector('.experience-container');
    mainExp.innerHTML = '<h3>Experience</h3>';
    (data.experience || []).forEach(exp => {
      const div = document.createElement('div');
      div.className = 'experience-item';
      let dateText = '';
      if(exp.startDate) {
        dateText = exp.present ? `${exp.startDate} – Present` : `${exp.startDate} – ${exp.endDate || ''}`;
      } else {
        dateText = exp.present ? 'Present' : '';
      }
      div.innerHTML = `
        <i class="bi bi-briefcase experience-icon"></i>
        <div class="experience-details">
          <p class="experience-title">${exp.title || ''}</p>
          <p class="experience-company">${exp.company || ''}</p>
        </div>
        <span class="experience-dates">${dateText}</span>
      `;
      mainExp.appendChild(div);
    });
  }

  // ===== Fetch Profile from Backend =====
async function fetchProfile() {
  try {
    // use mentee token
    const token = localStorage.getItem('menteeToken'); 
    const res = await fetch('http://localhost:5000/api/v1/user/me', {
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}` 
      }
    });
    if(!res.ok) throw new Error('Failed to fetch profile');
    const result = await res.json();
    profileData = result.data || {};
    updateUI(profileData);
  } catch(err) {
    console.error('Error fetching profile:', err);
  }
}

fetchProfile();

});



// --- Elements ---
// --- Elements ---
const profileInput  = document.querySelector("#profileUpload");
const editBtn       = document.querySelector("#editProfileBtn");

// Grab ALL profile images in the UI (main profile + sidebar + hover, etc.)
const profileImgs = document.querySelectorAll(
  "#profilePic, .hover-profile-pic, .profile-img, .profile-pic1"
);

// --- Pick token dynamically ---
const token =localStorage.getItem("menteeToken");
const API_BASE = "http://localhost:5000/api/v1/user";

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
      img.src = "css/img/default-profile.png"; // fallback
    }
  });
}

// --- Load user ---
async function loadUser() {
  try {
    const res = await fetch(`${API_BASE}/me`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    const pic = json?.data?.picture || null;
    console.log("User data:", json);
    applyProfileImg(pic);
  } catch (e) {
    console.error("Failed to load user:", e);
  }
}

// --- Events ---
if (editBtn && profileInput) {
  editBtn.addEventListener("click", () => profileInput.click());
}

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
        console.error("Upload failed:", data);
        throw new Error(data.message || "Upload failed");
      }

      console.log("Upload success:", data);

      bumpVersion();
      if (data.imageUrl) {
        applyProfileImg(data.imageUrl);
      }

      await loadUser();
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




