window.iniciarMap = function () {
    var coord = {lat: 6.244285, lng: -75.559647};

    // Configuración del mapa con estilos personalizados
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
            {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ weight: '2.00' }]
            },
            {
                featureType: 'all',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#9c9c9c' }]
            }
        ]
    });

    // Marcador personalizado con icono
    const marker = new google.maps.Marker({
        position: coord,
        map: map,
        title: 'Makar Lashes, Cejas y Makeup',
        animation: google.maps.Animation.DROP,
        icon: {
            url: 'images/logo2.png',
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 40)
        }
    });

    // InfoWindow con información de la tienda
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="text-align: center; font-family: 'Source Sans Pro', sans-serif; max-width: 250px;">
                <h3 style="color: #1b1f22; margin: 0 0 10px 0; font-weight: 600;">Makar Lashes, Cejas y Makeup</h3>
                <p style="margin: 5px 0; color: #666; font-size: 14px;">📍 Mall Boulevard 49, Local 139</p>
                <p style="margin: 5px 0; color: #666; font-size: 14px;">📍 Medellín, Antioquia</p>
                <p style="margin: 5px 0; color: #666; font-size: 14px;">📱 +57 301 4157784</p>
                <p style="margin: 10px 0 0 0; color: #1b1f22; font-size: 13px; font-style: italic;">
                    ¡Visítanos para realzar tu belleza natural!
                </p>
            </div>
        `
    });

    // Evento click en el marcador
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Evento hover en el marcador
    marker.addListener('mouseover', function() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    marker.addListener('mouseout', function() {
        marker.setAnimation(null);
    });

    // Evento hover en el mapa para efectos visuales
    map.addListener('mouseover', function() {
        document.getElementById('map').style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
    });

    map.addListener('mouseout', function() {
        document.getElementById('map').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    });

    // Evento de zoom para mostrar información
    map.addListener('zoom_changed', function() {
        var zoom = map.getZoom();
        if (zoom >= 16) {
            infoWindow.open(map, marker);
        }
    });

    // Agregar controles personalizados
    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map, coord);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}

// Control personalizado para centrar el mapa
function CenterControl(controlDiv, map, center) {
    // Botón de centrar
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginTop = '10px';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Centrar en la tienda';
    controlDiv.appendChild(controlUI);

    // Texto del botón
    var controlText = document.createElement('div');
    controlText.style.color = '#1b1f22';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '12px';
    controlText.style.lineHeight = '30px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = '<i class="fas fa-map-marker-alt"></i> Tienda';
    controlUI.appendChild(controlText);

    // Evento click para centrar
    controlUI.addEventListener('click', function() {
        map.setCenter(center);
        map.setZoom(16);
    });
}

// Función para ampliar imágenes de servicios
function initImageZoom() {
    // Agregar funcionalidad de clic a las imágenes de servicios
    const serviceImages = document.querySelectorAll('.imagen1 img, .imagen2 img, .imagen3 img, .imagen4 img');

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
