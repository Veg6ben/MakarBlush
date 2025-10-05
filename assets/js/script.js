

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

// Función para manejar el envío del formulario de contacto
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío por defecto

            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validar que los campos no estén vacíos
            if (!name || !email || !message) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            // Configurar EmailJS (reemplaza con tus credenciales)
            emailjs.init('rp54MXoD52S0wT9Yn'); // Clave pública proporcionada

            // Enviar el email
            emailjs.send('service_tpv0l42', 'template_l8pcros', {
                name: name,
                time: new Date().toLocaleString(),
                message: message,
                to_email: 'makarlashescejasymakeup@gmail.com'
            })
            .then(function(response) {
                alert('Mensaje enviado exitosamente!');
                contactForm.reset(); // Limpiar el formulario
            }, function(error) {
                alert('Error al enviar el mensaje. Inténtalo de nuevo.');
                console.error('Error:', error);
            });
        });
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initImageZoom();
    initSliderNav();
    initContactForm();
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
