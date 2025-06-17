import { prophets } from './data/prophetsData.js';
import { initTheme, toggleTheme, currentTheme } from './utils/theme.js';
import { createBackToTopButton } from './components/backToTop.js';
import { displayProphets, filterProphets, searchProphets } from './services/prophetsService.js';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Theme
    initTheme();
    
    // Back to top button
    createBackToTopButton();
    
    // Initial display
    displayProphets();
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProphets(button.dataset.filter);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', () => {
        searchProphets(searchInput.value.toLowerCase());
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchProphets(searchInput.value.toLowerCase());
    });
    
    // Debounced search
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProphets(searchInput.value.toLowerCase());
        }, 300);
    });
    
    // Theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = currentTheme === 'light' ? '🌙' : '☀️';
    themeToggle.onclick = () => {
        const newTheme = toggleTheme();
        themeToggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    };
    document.querySelector('.navbar').appendChild(themeToggle);
});