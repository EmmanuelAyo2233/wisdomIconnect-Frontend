
  function togglePasswordWithMonkey(inputId, iconId) {
    const input = document.getElementById(inputId);
    const monkey = document.getElementById(iconId);

    if (!input || !monkey) return;

    if (input.type === "password") {
      input.type = "text";
      monkey.textContent = "🙉";
    } else {
      input.type = "password";
      monkey.textContent = "🙈";
    }
  }


  
  function setupTagging(selectId, containerId, max = Infinity) {
    const select = document.getElementById(selectId);
    const container = document.getElementById(containerId);
  
    select.addEventListener("change", function () {
      const value = select.value;
      const text = select.options[select.selectedIndex].text;
  
      if (!value) return;
  
      const existing = container.querySelectorAll(".tag");
      if (existing.length >= max) {
        alert(`You can only select up to ${max}`);
        return;
      }
  
      if ([...existing].some((e) => e.dataset.value === value)) return;
  
      const tag = document.createElement("div");
      tag.className = "tag";
      tag.dataset.value = value;
      tag.innerHTML = `${text} <span>&times;</span>`;
  
      tag.querySelector("span").addEventListener("click", () => tag.remove());
      container.appendChild(tag);
  
      select.value = "";
    });
  }
  
  function addExperience() {
    const container = document.getElementById("experienceContainer");
    const div = document.createElement("div");
    div.className = "experience-group";
    div.innerHTML = `
      <input type="text" placeholder="Describe your experience" />
      <input type="date" />
      <input type="date" />
      <button type="button" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(div);
  }
  
  function addEducation() {
    const container = document.getElementById("educationContainer");
    const div = document.createElement("div");
    div.className = "education-group";
    div.innerHTML = `
      <input type="text" placeholder="Institution or Certificate" />
      <input type="date" />
      <input type="date" />
      <button type="button" onclick="this.parentElement.remove()">Remove</button>
    `;
    container.appendChild(div);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setupTagging("expertise", "expertiseTags", 3);
    setupTagging("discipline", "disciplineTags");
    setupTagging("fluent", "fluentTags", 2);
  });





  ScrollReveal().reveal('.fade-in', {
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    beforeReveal: function (el) {
        el.classList.add('show');
    }
});

ScrollReveal().reveal('.fade-in-delay', {
    duration: 1000,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
    easing: 'ease-in-out',
    beforeReveal: function (el) {
        el.classList.add('show');
    }
});

ScrollReveal().reveal('.top', {
    duration: 1000,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out',
    easing: 'ease-in-out',
    beforeReveal: function (el) {
        el.classList.add('show');
    }
});

ScrollReveal().reveal('.fade-in-delay-2', {
    duration: 1000,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
    easing: 'ease-in-out',
    beforeReveal: function (el) {
        el.classList.add('show');
    }
});