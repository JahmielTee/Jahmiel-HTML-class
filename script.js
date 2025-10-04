// Add dark mode class to html if saved in localStorage
if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(isDark) {
     if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    feather.replace(); // Refresh icons
    themeToggle.checked = isDark;
    themeToggleMobile.checked = isDark;
}

// Check for saved theme or preferred scheme on load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
   applyTheme(true);
} else {
   applyTheme(false);
}

// Listen for toggle changes
themeToggle.addEventListener('change', (e) => applyTheme(e.target.checked));
themeToggleMobile.addEventListener('change', (e) => applyTheme(e.target.checked));

// Initialize Vanta.js globe animation
VANTA.GLOBE({
    el: "#vanta-globe",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x667eea,
    backgroundColor: 0x0,
    size: 1.00
});

// Initialize Feather Icons
feather.replace();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu on link click
        const mobileMenu = document.getElementById('mobile-menu');
        if(!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card-hover').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// --- SCRIPT FOR MOBILE MENU ---
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
