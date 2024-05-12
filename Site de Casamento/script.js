document.addEventListener("DOMContentLoaded", function() {
    const sections = ['pre-casamento', 'dia-da-noiva', 'cerimonia', 'festa', 'lua-de-mel'];
    const numImages = 15; // Total de imagens disponíveis
    const numImagesPerColumn = Math.ceil(numImages / sections.length);

    sections.forEach((section, index) => {
        const gallery = document.getElementById(section);
        for (let i = 1; i <= numImagesPerColumn; i++) {
            const imageIndex = index * numImagesPerColumn + i;
            if (imageIndex > numImages) break; 

            const img = document.createElement('img');
            img.src = `static/imagem${imageIndex}.svg`;
            img.alt = `${section} ${i}`;
            img.classList.add('loading'); 

            img.onload = () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
            };

            gallery.appendChild(img);
        }
    });
});
