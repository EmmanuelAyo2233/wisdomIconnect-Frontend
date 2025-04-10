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

window.addEventListener('scroll', function() {
    let scrollButton = document.getElementById('scrollUpButton');
    if (window.scrollY > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});


document.getElementById('scrollUpButton').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});