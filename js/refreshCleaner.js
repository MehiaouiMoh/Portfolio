document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Remplacer l'URL sans recharger la page
        history.pushState(null, '', window.location.pathname);
    });
});
