const expertiseSelect = document.getElementById('editExpertise');
const expertiseContainer = document.getElementById('selectedExpertiseContainer');
let selectedExpertise = [];

const fluentSelect = document.getElementById('fluentIn');
const fluentContainer = document.getElementById('selectedFluentContainer');
let selectedFluents = [];




// 🎯 On select change
// expertiseSelect.addEventListener("change", (e) => {
//   addTag(e.target.value, expertiseContainer, selectedExpertise, 5, "expertise");
//   expertiseSelect.selectedIndex = 0;
// });

// fluentSelect.addEventListener("change", (e) => {
//   addTag(e.target.value, fluentContainer, selectedFluents, 2, "fluent");
//   fluentSelect.selectedIndex = 0;
// });

// 👁️ Password toggle
document.querySelectorAll(".toggle-password").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const input = document.querySelector(toggle.getAttribute("toggle"));
    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = " 🙉";
    } else {
      input.type = "password";
      toggle.textContent = "🙈";
    }
  });
});


  function handleSelect(selectId, containerId, max, classType = '') {
    const select = document.getElementById(selectId);
    const container = document.getElementById(containerId);

    select.addEventListener('change', function () {
      const value = select.value;
      const text = select.options[select.selectedIndex].text;

      if (!value) return;

      const existing = container.querySelectorAll('.tag');
      if (existing.length >= max) {
        alert(`You can only select up to ${max}`);
        return;
      }

      if ([...existing].some(e => e.dataset.value === value)) return;

      const tag = document.createElement('div');
      tag.className = `tag ${classType ? value : 'fluent-tag'}`;
      tag.dataset.value = value;
      tag.innerHTML = `${text} <span>&times;</span>`;
      
      tag.querySelector('span').addEventListener('click', () => tag.remove());
      container.appendChild(tag);

      // Reset select
      select.value = '';
    });
  }

  function handleIndustrySelect() {
    const select = document.getElementById("editIndustry");
    const container = document.getElementById("selectedIndustryContainer");

    select.addEventListener("change", function () {
      const value = select.value;
      const text = select.options[select.selectedIndex].text;

      if (!value) return;

      const existing = container.querySelectorAll('.tag');
      if (existing.length >= 2) {
        alert("You can only select up to 2 industries");
        return;
      }

      if ([...existing].some(e => e.dataset.value === value)) return;

      const tag = document.createElement("div");
      tag.className = "tag industry-tag";
      tag.dataset.value = value;
      tag.innerHTML = `${text} <span>&times;</span>`;

      tag.querySelector("span").addEventListener("click", () => tag.remove());
      container.appendChild(tag);

      select.value = "";
    });
  }

  // Run everything on page load
  document.addEventListener('DOMContentLoaded', () => {
    handleSelect('editExpertise', 'selectedExpertiseContainer', 5, true);
    handleSelect('fluentIn', 'selectedFluentContainer', 2, false);
    handleIndustrySelect();
  });

  
  