/**
 * Comprendre - Scripts spécifiques
 * Animations et interactions pour cette catégorie
 */

document.addEventListener('DOMContentLoaded', () => {
    initProjectAnimations();
    initImageGallery();
});

/**
 * Animations des project cards au scroll
 */
function initProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        projectCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            observer.observe(card);
        });
    }
}

/**
 * Galerie d'images (pour future implémentation)
 */
function initImageGallery() {
    const visualContainers = document.querySelectorAll('.project-visual');
    
    visualContainers.forEach(container => {
        container.addEventListener('click', () => {
            // Future: ouvrir une lightbox ou galerie
            console.log('Gallery click - feature à implémenter');
        });
    });
}

/**
 * Hover effect amélioré pour les badges
 */
const badges = document.querySelectorAll('.badge');
badges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
