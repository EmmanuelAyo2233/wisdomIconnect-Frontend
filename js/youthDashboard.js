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
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const cardContainer = document.querySelector('.card-container');
const cardItems = document.querySelectorAll('.card-item');

let currentIndex = 0;
let visibleCards = getVisibleCardsCount(); 


function getVisibleCardsCount() {
    if (window.innerWidth <= 768) {
        return 2; 
    } else if (window.innerWidth <= 1024) {
        return 3;
    } else {
        return 4;
    }
}

function updateVisibleCards() {
    visibleCards = getVisibleCardsCount(); 

    cardItems.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCards - 1) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    
    cardItems[0].style.display = 'block';

    prevArrow.classList.toggle('disabled', currentIndex === 0);
    nextArrow.classList.toggle('disabled', currentIndex >= cardItems.length - (visibleCards - 1));
}

function changeCards(direction) {
    const slideCount = visibleCards - 1; 

    if (direction === 'next' && currentIndex < cardItems.length - slideCount) {
        currentIndex += slideCount;
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex -= slideCount;
    }

    updateVisibleCards();
}

prevArrow.addEventListener('click', () => changeCards('prev'));
nextArrow.addEventListener('click', () => changeCards('next'));


window.addEventListener('resize', updateVisibleCards);

window.addEventListener('load', updateVisibleCards);


document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const sidebar = document.getElementById('sidebar');

    function adjustLayout() {
        if (window.innerWidth <= 1190) {
            sidebar.style.display = 'none';
            mainContent.style.flex = '0 0 100%';
            mainContent.style.maxWidth = '100%';
        } else {
            sidebar.style.display = 'block'; 
            mainContent.style.flex = '0 0 auto';
            mainContent.style.maxWidth = '66.6667%';
        }
    }

   
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});


// Modal Elements
const openModalButton = document.getElementById('openModalButton');
const feedbackModal = document.getElementById('feedbackModal');
const closeModalButton = document.getElementById('closeModalButton');
const feedbackList = document.getElementById('feedbackList');
const confirmationModal = document.getElementById('confirmationModal');
const confirmDeleteButton = document.getElementById('confirmDeleteButton');
const cancelDeleteButton = document.getElementById('cancelDeleteButton');

let feedbackToDelete = null; 

openModalButton.addEventListener('click', () => {
    feedbackModal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    feedbackModal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === feedbackModal) {
        feedbackModal.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    storedFeedback.forEach(feedback => addFeedbackToList(feedback));
});


const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const elderName = document.getElementById('elderName').value;
    const topic = document.getElementById('topic').value;
    const feedbackText = document.getElementById('feedbackText').value;
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

  
    const feedback = {
        id: Date.now(),
        elderName,
        topic,
        feedbackText,
        date
    };

  
    addFeedbackToList(feedback);
    saveFeedbackToLocalStorage(feedback);

  
    feedbackForm.reset();
    feedbackModal.style.display = 'none';

    alert('Feedback submitted successfully!');
});


function addFeedbackToList(feedback) {
    const newFeedback = document.createElement('div');
    newFeedback.classList.add('feedback-card');
    newFeedback.dataset.id = feedback.id;
    newFeedback.innerHTML = `
        <p><strong>Elder:</strong> ${feedback.elderName}</p>
        <p><strong>Topic:</strong> ${feedback.topic}</p>
        <p class="feedback-text">"${feedback.feedbackText}"</p>
        <p class="feedback-date">Submitted on: ${feedback.date}</p>
        <button class="delete-feedback-btn">Delete</button>
    `;

    feedbackList.appendChild(newFeedback);

    
    newFeedback.querySelector('.delete-feedback-btn').addEventListener('click', () => {
        openConfirmationModal(feedback.id);
    });
}


function saveFeedbackToLocalStorage(feedback) {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    storedFeedback.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(storedFeedback));
}


function openConfirmationModal(feedbackId) {
    feedbackToDelete = feedbackId; 
    confirmationModal.style.display = 'flex';
}

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
    feedbackToDelete = null;
}

confirmDeleteButton.addEventListener('click', () => {
    if (feedbackToDelete) {
        deleteFeedback(feedbackToDelete);
        closeConfirmationModal(); 
    }
});

cancelDeleteButton.addEventListener('click', () => {
    closeConfirmationModal(); 
});

function deleteFeedback(id) {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    const updatedFeedback = storedFeedback.filter(feedback => feedback.id !== id);

   
    localStorage.setItem('feedback', JSON.stringify(updatedFeedback));

  
    const feedbackCard = document.querySelector(`.feedback-card[data-id="${id}"]`);
    if (feedbackCard) {
        feedbackCard.remove();
    }
}

const tips = [
    {
        title: "#1 Tips for Success",
        topic: "How to prepare for your first meeting?",
        text: "Plan an agenda! Plan out the questions and topics you'd like to discuss. If you'd like to work together on long-term goals, set some time to discuss expectations for each other."
    },
    {
        title: "#2 Tips for Success",
        topic: "Research your mentor or expert.",
        text: "Learn about their background, expertise, and areas of interest to make the session more engaging and relevant."
    },
    {
        title: "#3 Tips for Success",
        topic: "Clarify your session goals.",
        text: "Identify what you want to achieve—whether it's gaining specific insights, solving a problem, or getting guidance on a project."
    },
    {
        title: "#4 Tips for Success",
        topic: "Prepare relevant materials.",
        text: "Gather documents, reports, or other resources that can guide the discussion effectively."
    },
    {
        title: "#5 Tips for Success",
        topic: "Engage and follow up.",
        text: "Take notes during the session, show enthusiasm, and send a thank-you note with key takeaways after the meeting."
    }
];

let currentTipIndex = 0;

const tipTitleElement = document.getElementById("tip-title");
const tipTopicElement = document.getElementById("tip-topic");
const tipTextElement = document.getElementById("tip-text");
const prevTipButton = document.getElementById("prev-tip");
const nextTipButton = document.getElementById("next-tip");

// Function to update the displayed tip
function updateTip() {
    const tip = tips[currentTipIndex];
    tipTitleElement.textContent = tip.title;
    tipTopicElement.textContent = tip.topic;
    tipTextElement.textContent = tip.text;
}

// Event listeners for navigation
prevTipButton.addEventListener("click", () => {
    currentTipIndex = (currentTipIndex - 1 + tips.length) % tips.length;
    updateTip();
});

nextTipButton.addEventListener("click", () => {
    currentTipIndex = (currentTipIndex + 1) % tips.length;
    updateTip();
});

// Initialize the first tip
updateTip();



const weekRangeElement = document.getElementById("week-range");
const calendarGridElement = document.getElementById("calendar-grid");
const sessionInfoElement = document.querySelector(".session-text"); // Target the session text element

let currentDate = new Date();

// Function to get the start and end of the week
function getWeekDates(date) {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Sunday
    const dates = Array.from({ length: 7 }, (_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        return day;
    });
    return dates;
}

function renderCalendar(date) {
    const weekDates = getWeekDates(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (weekRangeElement) {
        weekRangeElement.textContent = `${formatDate(weekDates[0])} - ${formatDate(weekDates[6])}`;
    }

    if (calendarGridElement) {
        calendarGridElement.innerHTML = weekDates
            .map(
                (d, i) =>
                    `<div class="day ${
                        d.getTime() === today.getTime() ? "current-day" : ""
                    }">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]}<br>${d.getDate()}</div>`
            )
            .join("");
    }

    if (sessionInfoElement) {
        sessionInfoElement.textContent = weekDates.some((d) => d.getDate() === 18)
            ? "You have an upcoming session!"
            : "You have no upcoming sessions.";
    }
}

function formatDate(date) {
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString(undefined, options);
}

document.getElementById("prev-week").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() - 7);
    renderCalendar(currentDate);
});

document.getElementById("next-week").addEventListener("click", () => {
    currentDate.setDate(currentDate.getDate() + 7);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);




const profilePic = document.getElementById('profilePic');
const hoverMenu = document.getElementById('hoverMenu');

// Toggle hover menu on profile picture click
profilePic.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the click event from bubbling up
    const isVisible = hoverMenu.dataset.visible === 'true';
    hoverMenu.dataset.visible = !isVisible; // Toggle the data-visible attribute
});

// Hide hover menu when clicking anywhere else
document.addEventListener('click', () => {
    hoverMenu.dataset.visible = 'false';
});

// Prevent hover menu from closing when clicking inside it
hoverMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// JavaScript to toggle active state and line visibility
const wisdomKeepersLink = document.getElementById('wisdom-keepers-link');
const groupSessionsLink = document.getElementById('group-sessions-link');
const wisdomLine = document.getElementById('wisdom-keepers-line');
const groupLine = document.getElementById('group-sessions-line');

// Set initial active state
wisdomKeepersLink.classList.add('active');
wisdomLine.style.width = '50%';
groupLine.style.width = '0';

// Add event listeners for both links
wisdomKeepersLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default behavior (page refresh)
  wisdomKeepersLink.classList.add('active');
  groupSessionsLink.classList.remove('active');
  wisdomLine.style.width = '50%';
  groupLine.style.width = '0';
});

groupSessionsLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default behavior (page refresh)
  groupSessionsLink.classList.add('active');
  wisdomKeepersLink.classList.remove('active');
  groupLine.style.width = '50%';
  wisdomLine.style.width = '0';
});
