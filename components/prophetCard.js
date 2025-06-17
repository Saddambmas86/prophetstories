export function createProphetCard(prophet) {
    const card = document.createElement('div');
    card.className = 'prophet-card';
    
    card.innerHTML = `
        <div class="card-header">
            <img src="${prophet.image}" alt="${prophet.name}" class="prophet-image" loading="lazy">
        </div>
        <div class="prophet-info">
            <h3>${prophet.name}</h3>
            <div class="timeline">${prophet.timeline}</div>
            <p>${prophet.description}</p>
            <div class="card-footer">
                <button class="read-more" onclick="window.showProphetBio('${prophet.name}')">Read Biography</button>
                <button class="view-miracles" onclick="window.showProphetMiracles('${prophet.name}')">View Miracles</button>
            </div>
        </div>
    `;
    
    return card;
}