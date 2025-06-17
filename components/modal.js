export function showBiography(prophet, prophets) {
    const prophetData = prophets.find(p => p.name === prophet);
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${prophetData.name}</h2>
            <p>${prophetData.biography}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeModal = modal.querySelector('.close-modal');
    closeModal.onclick = () => modal.remove();
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

export function showMiracles(prophet, prophets) {
    const prophetData = prophets.find(p => p.name === prophet);
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Miracles of ${prophetData.name}</h2>
            <div class="miracles-grid">
                ${prophetData.miracles.map(miracle => `
                    <div class="miracle-item">
                        <div class="miracle-image-container">
                            <img src="${typeof miracle === 'object' ? miracle.image : 'https://via.placeholder.com/300x200?text=Miracle+Image'}" 
                                 alt="${typeof miracle === 'object' ? miracle.title : miracle}" 
                                 class="miracle-image" 
                                 onerror="this.src='https://via.placeholder.com/300x200?text=Miracle+Image'">
                        </div>
                        <h3>${typeof miracle === 'object' ? miracle.title : miracle}</h3>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeModal = modal.querySelector('.close-modal');
    closeModal.onclick = () => modal.remove();
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}