document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initAnimations();
});

// Search Toggle Logic
function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchDropdown = document.getElementById('searchDropdown');

    if (searchToggle && searchDropdown) {
        searchToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            searchDropdown.classList.toggle('active');

            if (searchDropdown.classList.contains('active')) {
                searchDropdown.querySelector('input').focus();
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
                searchDropdown.classList.remove('active');
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchDropdown.classList.remove('active');
            }
        });
    }
}

// Intersection Observer for animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.animate-fade-in');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.style.animationPlaystore = 'paused';
            observer.observe(el);
        });
    }
}