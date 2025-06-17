import { prophets } from '../data/prophetsData.js';
import { showBiography, showMiracles } from '../components/modal.js';
import { showLoading, hideLoading } from '../utils/loading.js';
import { createProphetCard } from '../components/prophetCard.js';

export function displayProphets(filteredProphets = prophets) {
    showLoading();
    
    setTimeout(() => {
        const prophetsContainer = document.querySelector('.prophets-container');
        prophetsContainer.innerHTML = '';
        
        filteredProphets.forEach(prophet => {
            const card = createProphetCard(prophet);
            prophetsContainer.appendChild(card);
        });
        
        hideLoading();
    }, 500);
}

export function filterProphets(category) {
    if (category === 'all') {
        displayProphets();
    } else {
        const filtered = prophets.filter(prophet => prophet.category === category);
        displayProphets(filtered);
    }
}

export function searchProphets(searchTerm) {
    const filtered = prophets.filter(prophet => 
        prophet.name.toLowerCase().includes(searchTerm) ||
        prophet.description.toLowerCase().includes(searchTerm) ||
        prophet.biography.toLowerCase().includes(searchTerm) ||
        prophet.timeline.toLowerCase().includes(searchTerm) ||
        prophet.miracles.some(miracle => 
            typeof miracle === 'object' ? 
            miracle.title.toLowerCase().includes(searchTerm) : 
            miracle.toLowerCase().includes(searchTerm)
        )
    );
    displayProphets(filtered);
}

// Make functions available globally for HTML onclick attributes
window.showProphetBio = (name) => showBiography(name, prophets);
window.showProphetMiracles = (name) => showMiracles(name, prophets);