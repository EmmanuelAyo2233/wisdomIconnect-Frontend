
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
      <textarea name="details[]" placeholder="e.g. Managed online communities"></textarea>
      <textarea name="details[]" placeholder="e.g. Hosted monthly events"></textarea>   
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
      <input type="text" name="degree" placeholder="e.g. B.Sc. in Computer Science">
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



document.querySelector('.register').addEventListener('click', async function (e) {
  e.preventDefault();

  // Basic Fields
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const bio = document.getElementById('bio').value;
  const role = document.getElementById('role').value;

  // Expertise (from tags)
  const expertiseTags = Array.from(document.querySelectorAll('#expertiseTags .tag')).map(tag => tag.textContent.trim());

  // Disciplines
  const disciplineTags = Array.from(document.querySelectorAll('#disciplineTags .tag')).map(tag => tag.textContent.trim());

  // Fluent In
  const fluentTags = Array.from(document.querySelectorAll('#fluentTags .tag')).map(tag => tag.textContent.trim());

  // Experience
const experiences = Array.from(document.querySelectorAll('#experienceContainer .experience-group')).map(group => {
  const inputs = group.querySelectorAll('input');
  const detailsInput = group.querySelector('textarea'); // Or however you're collecting details

  return {
    description: inputs[0].value,
    startDate: inputs[1].value,
    endDate: inputs[2].value,
    details: detailsInput ? detailsInput.value.split('\n').filter(line => line.trim() !== '') : []
  };
});


  // Education
 const education = Array.from(document.querySelectorAll('#educationContainer .education-group')).map(group => {
  const inputs = group.querySelectorAll('input');

  return {
    institution: inputs[0].value,
    degree: inputs[1].value, // New degree input (must be added to the form)
    startDate: inputs[2].value,
    endDate: inputs[3].value
  };
});



  if (!fullName) {
    document.getElementById('fullNameError').textContent = 'Full name is required';
    hasError = true;
  }

  // Email
  if (!email) {
    document.getElementById('emailError').textContent = 'Email is required';
    hasError = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format';
    hasError = true;
  }

  // Password
  if (!password) {
    document.getElementById('passwordError').textContent = 'Password is required';
    hasError = true;
  } else if (password.length < 8) {
    document.getElementById('passwordError').textContent = 'At least 8 characters';
    hasError = true;
  }

  // Role
  if (!role) {
    document.getElementById('roleError').textContent = 'Role is required';
    hasError = true;
  }

  // Bio
  if (!bio) {
    document.getElementById('bioError').textContent = 'Bio is required';
    hasError = true;
  }

  // Tags and multi-selects
  if (!expertiseTags.length) {
    document.getElementById('expertiseError').textContent = 'Select at least one expertise';
    hasError = true;
  }

  if (!disciplineTags.length) {
    document.getElementById('disciplineError').textContent = 'Select at least one discipline';
    hasError = true;
  }

  if (!fluentTags.length) {
    document.getElementById('fluentError').textContent = 'Select at least one language';
    hasError = true;
  }

  // Validate experience
experiences.forEach((exp, index) => {
  const start = new Date(exp.startDate);
  const end = exp.present ? null : new Date(exp.endDate);

  if (!exp.startDate || (!exp.present && !exp.endDate)) {
    document.getElementById('experienceError').textContent = `Please fill the start and end date for experience ${index + 1}`;
    hasError = true;
  } else if (!exp.present && start > end) {
    document.getElementById('experienceError').textContent = `Start date must be before end date in experience ${index + 1}`;
    hasError = true;
  }
});

// Validate education
education.forEach((edu, index) => {
  const start = new Date(edu.startDate);
  const end = edu.present ? null : new Date(edu.endDate);

  if (!edu.startDate || (!edu.present && !edu.endDate)) {
    document.getElementById('educationError').textContent = `Please fill the start and end date for education ${index + 1}`;
    hasError = true;
  } else if (!edu.present && start > end) {
    document.getElementById('educationError').textContent = `Start date must be before end date in education ${index + 1}`;
    hasError = true;
  }
});



  // Create payload
  const payload = {
    fullName,
    email,
    password,
    bio,
    role,
    expertise: expertiseTags,
    discipline: disciplineTags,
    fluentIn: fluentTags,
    experience: experiences,
    education
  };

  try {
    const res = await fetch('http://localhost:5000/api/register/elder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (res.ok) {
      alert('Elder registered successfully!');
      setTimeout(() => {
        window.location.href = "/adultlog.html";
      }, 500);
    } else {
      alert('Error: ' + data.message || 'Registration failed');
    }
  } catch (err) {
    console.error('Error:', err);
    alert('Something went wrong.');
  }
});
