let currentPanel = 1;
const totalPanels = 5; // Número total de painéis

function changePanel(direction) {
    currentPanel += direction;

    if (currentPanel < 1) {
        currentPanel = totalPanels;
    } else if (currentPanel > totalPanels) {
        currentPanel = 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.style.display = 'none'); // Oculta todos os painéis
    panels[currentPanel - 1].style.display = 'flex'; // Exibe o painel atual
}

// Chame a função updateCarousel 
updateCarousel();
