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

document.addEventListener("DOMContentLoaded", function () {
    const chatItems = document.querySelectorAll(".chat-item");
    const chatArea = document.querySelector(".chat-area");
    const chatMessages = document.querySelector(".chat-messages");
    const chatHeader = document.querySelector(".chat-header");
    const sendButton = document.querySelector(".send-button");
    const messageInput = document.querySelector(".chat-input textarea");
    const defaultMessage = document.querySelector(".default-message"); 

   
    if (!chatArea || !chatMessages || !chatHeader || !sendButton || !messageInput) {
        console.error("❌ One or more chat elements are missing.");
        return;
    }

  
    function openChat(name, avatar) {
        console.log("📩 Opening chat for:", name); 
    
        chatArea.style.display = "block"; 
    
       
        const defaultMessage = document.querySelector(".default-message");
        if (defaultMessage) {
            defaultMessage.style.display = "none";
        }
    
       
        chatHeader.innerHTML = `
            <img src="${avatar}" alt="${name}" class="chat-avatar" />
            <p class="chat-username">${name}</p>
        `;
    
      
        chatMessages.innerHTML = `
            <div class="message received">
                <p class="message-text">Hey there! 👋 I’d love to connect with you. If you have any questions, suggestions, or just want to chat, feel free to drop a message. Let’s make something great together!</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
            <div class="message sent">
                <p class="message-text">Hey! 👋 That sounds awesome! I’m always open to connecting. Let’s share ideas and create something amazing together! 🚀</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
    
       
        const chatInput = document.querySelector(".chat-input");
        if (chatInput) {
            chatInput.style.display = "flex"; 
        }
    }
    
    
    // Attach event listeners to chat items
    if (chatItems.length === 0) {
        console.error("❌ No chat items found.");
    }

    chatItems.forEach((item) => {
        item.addEventListener("click", function () {
            console.log("🖱️ Chat item clicked:", item); 

            const nameElement = this.querySelector(".chat-name");
            const avatarElement = this.querySelector(".chat-avatar");

            if (nameElement && avatarElement) {
                const name = nameElement.innerText;
                const avatar = avatarElement.src;
                openChat(name, avatar);
            } else {
                console.error("❌ Chat item missing name or avatar.");
            }
        });
    });

    // Function to send a message
    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            addMessage(messageText);
            messageInput.value = ""; 
        }
    });

    // Function to add a message to chat
    function addMessage(text) {
        if (!chatMessages) return;

        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = `    
            <p class="message-text">${text}</p>
            <span class="message-time">${getCurrentTime()}</span>
        `;
        chatMessages.appendChild(messageElement);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const chatItems = document.querySelectorAll(".chat-item");

    chatItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all chat items
            chatItems.forEach(chat => chat.classList.remove("active"));

            // Add active class to the clicked chat
            this.classList.add("active");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const chatItems = document.querySelectorAll('.chat-item');
    const messageSidebar = document.querySelector('.message-sidebar');
    const chatArea = document.querySelector('.chat-area');
    const chatInput = document.querySelector('.chat-input');
  
    chatItems.forEach(item => {
      item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          messageSidebar.classList.remove('active');
          chatArea.classList.add('active');
        }
        // Add your chat loading logic here
        chatInput.style.display = 'flex';
      });
    });
  
    // Add back button functionality for mobile
    chatArea.querySelector('.chat-header').insertAdjacentHTML('afterbegin', 
      '<button class="back-button" style="display: none;"><i class="fas fa-arrow-left"></i></button>'
    );
  
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
      chatArea.classList.remove('active');
      messageSidebar.classList.add('active');
      chatInput.style.display = 'none';
    });
  
    // Show/hide menu on mobile
    document.querySelector('.menu-btn').addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        document.querySelector('.menu-options').classList.toggle('show');
      }
    });
  });
















  document.addEventListener("DOMContentLoaded", function () {
    const chatItems = document.querySelectorAll(".chat-item");
    const sidebar = document.querySelector(".message-sidebar");
    const chatArea = document.querySelector(".chat-area");

    chatItems.forEach((item) => {
        item.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                // Show chat area and hide sidebar on small screens
                sidebar.classList.add("hidden");
                chatArea.classList.add("active");

                // Update chat header with the selected user's name
                const userName = item.querySelector(".chat-name").textContent;
                chatArea.querySelector(".chat-username").textContent = userName;

                // Show chat input
                chatArea.querySelector(".chat-input").style.display = "flex";
            }
        });
    });

    // Add a back button to return to the sidebar
    const chatHeader = document.querySelector(".chat-header");
    const backButton = document.createElement("button");
    backButton.innerHTML = "← Back";
    backButton.classList.add("back-button");
    chatHeader.prepend(backButton);

    backButton.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            // Show sidebar and hide chat area on small screens
            sidebar.classList.remove("hidden");
            chatArea.classList.remove("active");

            // Hide chat input
            chatArea.querySelector(".chat-input").style.display = "none";
        }
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