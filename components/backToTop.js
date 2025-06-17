export function createBackToTopButton() {
    const button = document.createElement('div');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}