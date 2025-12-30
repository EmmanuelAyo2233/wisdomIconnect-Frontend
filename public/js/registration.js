// const form = document.getElementById("registerForm");
// const errorEls = {
//   name: document.getElementById("error-name"),
//   email: document.getElementById("error-email"),
//   password: document.getElementById("error-password"),
//   confirmPassword: document.getElementById("error-confirm-password"),
// };

// function clearErrors() {
//   for (const el of Object.values(errorEls)) {
//     el.textContent = "";
//   }
// }

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   clearErrors();

//   const name = form.name.value.trim();
//   const email = form.email.value.trim();
//   const password = form.password.value;
//   const confirmPassword = form.confirmPassword.value;
//   const userType = form.userType.value;

//   let hasError = false;

//   // Name required
//   if (!name) {
//     errorEls.name.textContent = "Name is required.";
//     hasError = true;
//   }

//   // Email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!email) {
//     errorEls.email.textContent = "Email is required.";
//     hasError = true;
//   } else if (!emailRegex.test(email)) {
//     errorEls.email.textContent = "Enter a valid email address.";
//     hasError = true;
//   }

//   // Password validation
//   if (!password) {
//     errorEls.password.textContent = "Password is required.";
//     hasError = true;
//   } else if (password.length < 8) {
//     errorEls.password.textContent = "Password must be at least 8 characters.";
//     hasError = true;
//   }

//   // Confirm password
//   if (confirmPassword !== password) {
//     errorEls.confirmPassword.textContent = "Passwords do not match.";
//     hasError = true;
//   }

//   if (hasError) return;

//   const data = { name, email, password, confirmPassword, userType };

//   try {
//     const res = await fetch("http://localhost:5000/api/v1/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();

//     if (res.ok) {
//       alert("Registered successfully!");
//       form.reset();
//     } else {
//       errorEls.email.textContent = result.message || "Registration failed.";
//     }
//   } catch (err) {
//     errorEls.email.textContent = "Network error. Try again.";
//     console.error(err);
//   }
// });


  // Registration flow state
        let currentStep = 0;
        let selectedRole = '';
        let formData = {};
        
        // Topics/Interests list
        const topics = [
            'Career Development', 'Mental Health & Well-Being', 'Technology & Innovation',
            'Personal Growth', 'Social & Community Issues', 'Job Search Strategies',
            'Resume Building', 'Interview Skills', 'Networking', 'Time Management',
            'Public Speaking', 'Project Management', 'Leadership', 'Self-Worth',
            'Goal-Setting', 'Handling Failures', 'Building Resilience', 'Starting a Side Hustle',
            'Financial Literacy', 'Client Management', 'Scaling Ideas', 'Study Techniques',
            'College Applications', 'STEM Subjects', 'Lifelong Learning', 'Stress Management',
            'Work-Life Balance', 'Building Positive Habits'
        ];
        
        // Initialize the form
        document.addEventListener('DOMContentLoaded', function() {
            setupRoleSelection();
            setupFormValidation();
            setupMultiSelect();
            setupBioCounters();
        });
        
        // Role selection setup
        function setupRoleSelection() {
            const roleOptions = document.querySelectorAll('.role-option');
            const roleNextBtn = document.getElementById('role-next');
            
            roleOptions.forEach(option => {
                option.addEventListener('click', function() {
                    roleOptions.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedRole = this.dataset.role;
                    roleNextBtn.disabled = false;
                });
            });
            
            roleNextBtn.addEventListener('click', function() {
                if (selectedRole) {
                    nextStep();
                }
            });
        }
        
        // Form validation setup
        function setupFormValidation() {
            const form = document.getElementById('common-form');
            const inputs = form.querySelectorAll('input');
            const nextBtn = document.getElementById('step1-next');
            
            inputs.forEach(input => {
                input.addEventListener('input', validateCommonForm);
                input.addEventListener('blur', validateField);
            });
            
            document.getElementById('step1-back').addEventListener('click', previousStep);
            nextBtn.addEventListener('click', function() {
                if (validateCommonForm()) {
                    saveFormData();
                    nextStep();
                }
            });
            
            document.getElementById('step2-back').addEventListener('click', previousStep);
            document.getElementById('step2-submit').addEventListener('click', submitRegistration);
        }
        
        // Multi-select setup
        function setupMultiSelect() {
            setupTopicsSelect('mentor-topics', 'mentor-selected-topics', 3);
            setupTopicsSelect('mentee-interests', 'mentee-selected-interests', 5);
        }
        
        function setupTopicsSelect(containerId, selectedId, maxItems) {
            const container = document.getElementById(containerId);
            const selectedContainer = document.getElementById(selectedId);
            let selectedItems = [];
            
            // Populate topics
            topics.forEach(topic => {
                const option = document.createElement('div');
                option.className = 'multi-select-option';
                option.textContent = topic;
                option.addEventListener('click', function() {
                    if (this.classList.contains('selected')) {
                        // Remove item
                        this.classList.remove('selected');
                        selectedItems = selectedItems.filter(item => item !== topic);
                    } else if (selectedItems.length < maxItems) {
                        // Add item
                        this.classList.add('selected');
                        selectedItems.push(topic);
                    }
                    updateSelectedItems();
                });
                container.appendChild(option);
            });
            
            function updateSelectedItems() {
                selectedContainer.innerHTML = '';
                selectedItems.forEach(item => {
                    const tag = document.createElement('div');
                    tag.className = 'selected-item';
                    tag.innerHTML = `
                        ${item}
                        <span class="remove-item" onclick="removeItem('${item}')">&times;</span>
                    `;
                    selectedContainer.appendChild(tag);
                });
                
                // Update validation
                if (containerId === 'mentor-topics') {
                    validateMentorForm();
                } else {
                    validateMenteeForm();
                }
            }
            
            window.removeItem = function(item) {
                selectedItems = selectedItems.filter(i => i !== item);
                container.querySelectorAll('.multi-select-option').forEach(opt => {
                    if (opt.textContent === item) {
                        opt.classList.remove('selected');
                    }
                });
                updateSelectedItems();
            };
        }
        
        // Bio word counters
        function setupBioCounters() {
            setupBioCounter('mentor-bio', 'mentor-bio-count');
            setupBioCounter('mentee-bio', 'mentee-bio-count');
        }
        
        function setupBioCounter(textareaId, counterId) {
            const textarea = document.getElementById(textareaId);
            const counter = document.getElementById(counterId);
            
            textarea.addEventListener('input', function() {
                const words = this.value.trim().split(/\s+/).filter(word => word.length > 0);
                const wordCount = this.value.trim() === '' ? 0 : words.length;
                counter.textContent = `${wordCount}/200 words`;
                
                if (wordCount > 200) {
                    counter.style.color = 'var(--destructive)';
                } else {
                    counter.style.color = 'var(--muted-foreground)';
                }
                
                // Trigger validation
                if (textareaId === 'mentor-bio') {
                    validateMentorForm();
                }
            });
        }
        
        // Validation functions
        function validateField(event) {
            const field = event.target;
            const errorElement = document.getElementById(field.id + '-error');
            let isValid = true;
            let errorMessage = '';
            
            if (field.hasAttribute('required') && !field.value.trim()) {
                isValid = false;
                errorMessage = 'This field is required';
            } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            } else if (field.id === 'password' && field.value && field.value.length < 8) {
                isValid = false;
                errorMessage = 'Password must be at least 8 characters';
            } else if (field.id === 'confirm-password' && field.value !== document.getElementById('password').value) {
                isValid = false;
                errorMessage = 'Passwords do not match';
            } else if (field.id === 'linkedin' && field.value && !isValidURL(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid URL';
            }
            
            if (errorElement) {
                if (isValid) {
                    errorElement.classList.add('hidden');
                } else {
                    errorElement.textContent = errorMessage;
                    errorElement.classList.remove('hidden');
                }
            }
            
            return isValid;
        }
        
        function validateCommonForm() {
            const form = document.getElementById('common-form');
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!validateField({ target: input })) {
                    isValid = false;
                }
            });
            
            // Check password match
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                isValid = false;
            }
            
            document.getElementById('step1-next').disabled = !isValid;
            return isValid;
        }
        
        function validateMentorForm() {
            const bio = document.getElementById('mentor-bio').value.trim();
            const bioWords = bio === '' ? 0 : bio.split(/\s+/).filter(word => word.length > 0).length;
            const selectedTopics = document.querySelectorAll('#mentor-topics .multi-select-option.selected');
            const experience = document.getElementById('experience').value;
            
            let isValid = true;
            
            // Validate bio
            if (!bio) {
                showError('mentor-bio-error', 'Bio is required');
                isValid = false;
            } else if (bioWords > 200) {
                showError('mentor-bio-error', 'Bio must be 200 words or less');
                isValid = false;
            } else {
                hideError('mentor-bio-error');
            }
            
            // Validate topics
            if (selectedTopics.length === 0) {
                showError('mentor-topics-error', 'Please select at least one topic');
                isValid = false;
            } else {
                hideError('mentor-topics-error');
            }
            
            // Validate experience
            if (!experience) {
                showError('experience-error', 'Please select your experience level');
                isValid = false;
            } else {
                hideError('experience-error');
            }
            
            document.getElementById('step2-submit').disabled = !isValid;
            return isValid;
        }
        
        function validateMenteeForm() {
            const selectedInterests = document.querySelectorAll('#mentee-interests .multi-select-option.selected');
            let isValid = true;
            
            // Validate interests
            if (selectedInterests.length === 0) {
                showError('mentee-interests-error', 'Please select at least one interest');
                isValid = false;
            } else {
                hideError('mentee-interests-error');
            }
            
            document.getElementById('step2-submit').disabled = !isValid;
            return isValid;
        }
        
        // Helper functions
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        
        function isValidURL(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        }
        
        function showError(elementId, message) {
            const element = document.getElementById(elementId);
            element.textContent = message;
            element.classList.remove('hidden');
        }
        
        function hideError(elementId) {
            const element = document.getElementById(elementId);
            element.classList.add('hidden');
        }
        
        // Navigation functions
        function nextStep() {
            const steps = ['step-0', 'step-1', 'step-2'];
            
            // Hide current step
            document.getElementById(steps[currentStep]).classList.add('hidden');
            
            // Move to next step
            currentStep++;
            
            // Show next step
            document.getElementById(steps[currentStep]).classList.remove('hidden');
            
            // Update progress
            updateProgress();
            
            // Setup role-specific form
            if (currentStep === 2) {
                setupRoleSpecificForm();
            }
        }
        
        function previousStep() {
            const steps = ['step-0', 'step-1', 'step-2'];
            
            // Hide current step
            document.getElementById(steps[currentStep]).classList.add('hidden');
            
            // Move to previous step
            currentStep--;
            
            // Show previous step
            document.getElementById(steps[currentStep]).classList.remove('hidden');
            
            // Update progress
            updateProgress();
        }
        
        function updateProgress() {
            const progressPercent = Math.round(((currentStep + 1) / 3) * 100);
            document.getElementById('step-text').textContent = `Step ${currentStep + 1} of 3`;
            document.getElementById('progress-percent').textContent = `${progressPercent}%`;
            document.getElementById('progress-fill').style.width = `${progressPercent}%`;
        }
        
        function setupRoleSpecificForm() {
            if (selectedRole === 'mentor') {
                document.getElementById('mentor-form').classList.remove('hidden');
                document.getElementById('mentee-form').classList.add('hidden');
                
                // Add validation listeners
                document.getElementById('mentor-bio').addEventListener('input', validateMentorForm);
                document.getElementById('experience').addEventListener('change', validateMentorForm);
            } else {
                document.getElementById('mentee-form').classList.remove('hidden');
                document.getElementById('mentor-form').classList.add('hidden');
                
                // Validate mentee form
                validateMenteeForm();
            }
        }
        
        function saveFormData() {
            const form = document.getElementById('common-form');
            const formDataObj = new FormData(form);
            
            for (let [key, value] of formDataObj.entries()) {
                formData[key] = value;
            }
            
            formData.role = selectedRole;
        }
        
        function submitRegistration() {
            // Save role-specific data
            if (selectedRole === 'mentor') {
                if (!validateMentorForm()) return;
                
                formData.bio = document.getElementById('mentor-bio').value;
                formData.experience = document.getElementById('experience').value;
                formData.linkedin = document.getElementById('linkedin').value;
                formData.topics = Array.from(document.querySelectorAll('#mentor-topics .multi-select-option.selected'))
                    .map(el => el.textContent);
            } else {
                if (!validateMenteeForm()) return;
                
                formData.bio = document.getElementById('mentee-bio').value;
                formData.interests = Array.from(document.querySelectorAll('#mentee-interests .multi-select-option.selected'))
                    .map(el => el.textContent);
            }
            
            // Simulate API call
            console.log('[v0] Registration data:', formData);
            
            // Show success message
            document.getElementById('step-2').classList.add('hidden');
            document.getElementById('success-message').classList.remove('hidden');
            
            // Update progress to 100%
            document.getElementById('step-text').textContent = 'Registration Complete';
            document.getElementById('progress-percent').textContent = '100%';
            document.getElementById('progress-fill').style.width = '100%';
        }

        



        const roleOptions = document.querySelectorAll('.role-option');
const userTypeInput = document.getElementById('userType');
const roleNextBtn = document.getElementById('role-next');

roleOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Highlight selected role visually
    roleOptions.forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');

    // Set hidden input value
    userTypeInput.value = option.dataset.role;

    // Enable continue button
    roleNextBtn.disabled = false;
  });
});

async function submitRegistration() {
    // Gather basic form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const userType = selectedRole; // from your role selection step

    // Role-specific fields
    let roleData = {};

    if (userType === 'mentor') {
        // Convert experience string to number
        const experienceValue = document.getElementById('experience').value;
        let yearsOfExperience = null;

        switch(experienceValue) {
            case "6-months": yearsOfExperience = 0; break;
            case "1-year": yearsOfExperience = 1; break;
            case "2-years": yearsOfExperience = 2; break;
            case "3-years": yearsOfExperience = 3; break;
            case "4-years": yearsOfExperience = 4; break;
            case "5-years": yearsOfExperience = 5; break;
            case "6-plus": yearsOfExperience = 6; break;
            default:
                alert("Please select a valid experience");
                return;
        }

        roleData = {
    shortBio: document.getElementById('mentor-bio').value.trim(),
    yearsOfExperience,
    linkedinUrl: document.getElementById('linkedin').value.trim(),
    expertise: Array.from(document.querySelectorAll('#mentor-topics .multi-select-option.selected'))
                .map(el => el.textContent.trim())
};

    } else if (userType === 'mentee') {
        roleData = {
            shortBio: document.getElementById('mentee-bio').value.trim(),
            interests: Array.from(document.querySelectorAll('#mentee-interests .multi-select-option.selected'))
                        .map(el => el.textContent.trim())
        };
    }

    const data = {
        name,
        email,
        password,
        confirmPassword,
        userType,
        ...roleData
    };

    console.log("Data being sent to backend:", data);

    try {
        const response = await fetch('http://localhost:5000/api/v1/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Registration successful!');
            window.location.href = '/public/login.html';
        } else {
            console.error("Signup error:", result);
            alert(result.message || 'Registration failed');
        }
    } catch (error) {
        console.error("Signup error:", error);
        alert('Network error. Try again.');
    }
}
