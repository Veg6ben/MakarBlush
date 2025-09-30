

// Función para ampliar imágenes de servicios
function initImageZoom() {
    // Agregar funcionalidad de clic a las imágenes de servicios
    const serviceImages = document.querySelectorAll('.imagen1 img, .imagen2 img, .imagen3 img, .imagen4 img, .imagen5 img, .imagen6 img, .image.precios img');

    serviceImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.title = 'Haz clic para ampliar';
        img.draggable = false; // Prevenir arrastrar imágenes

        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            // Ampliar la imagen con CSS
            if (this.style.transform === 'scale(1.9)') {
                this.style.transform = 'scale(1)';
                this.style.zIndex = 'auto';
            } else {
                this.style.transform = 'scale(1.9)';
                this.style.zIndex = '10';
            }

            return false;
        });

        // Prevenir comportamiento de arrastrar
        img.addEventListener('mousedown', function(e) {
            e.preventDefault();
            return false;
        });

        img.addEventListener('mouseup', function(e) {
            e.preventDefault();
            return false;
        });

        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });

        // Efecto hover mejorado
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '10';
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = 'auto';
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initImageZoom();
    initSliderNav();
});

// Función para ajustar los botones del slider
function initSliderNav() {
    const sliderNavButtons = document.querySelectorAll('.slider-nav');

    sliderNavButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            // No hacer scroll al índice
            return false;
        });
    });
}
