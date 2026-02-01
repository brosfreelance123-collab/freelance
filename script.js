// 1. Live Shop Status (9:30 AM - 11:50 PM)
function updateStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const time = currentHour + (currentMin / 60);

    const statusEl = document.getElementById('store-status');

    if (time >= 9.5 && time <= 23.83) {
        statusEl.textContent = "● OPEN NOW";
        statusEl.style.background = "#25D366";
    } else {
        statusEl.textContent = "○ CLOSED";
        statusEl.style.background = "#d32f2f";
    }
}

// 2. Scroll Animation
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    updateStatus();
    
    const animatedElements = document.querySelectorAll('.cat-card, .gallery-grid img');
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});
