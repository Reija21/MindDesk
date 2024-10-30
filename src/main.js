document.addEventListener('DOMContentLoaded', function() {
    const windowsIcon = document.getElementById('windows-icon');
    const menu = document.getElementById('windows-menu');

    windowsIcon.addEventListener('click', function() {
        console.log('Icono de Windows clicado');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Mostrar/Ocultar divs de años
    const yearButtons = document.querySelectorAll('.añitos');
    const containers = document.querySelectorAll('.container-year');
    if (yearButtons.length === 0 || containers.length === 0) {
        console.error("No se encontraron los botones de años o contenedores en el DOM.");
        return;
    }
    containers.forEach(container => container.style.display = 'none');

    yearButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            containers.forEach(container => container.style.display = 'none');
            const targetContainer = document.querySelector(`.${btn.dataset.target}`);
            if (targetContainer) {
                targetContainer.style.display = 'block';
                console.log(`Mostrando contenedor: ${btn.dataset.target}`);
            } else {
                console.error(`Contenedor no encontrado para el target: ${btn.dataset.target}`);
            }
        });
    });

    // Mostrar/Ocultar menú de configuración
    const menuButtonConfig = document.getElementById('fotos');
    const submenuConfig = document.getElementById('menu_fotos');
    if (menuButtonConfig && submenuConfig) {
        console.log("Icono de Configuración y menú encontrados.");
        menuButtonConfig.addEventListener('click', () => {
            console.log("Icono de configuración clicado");
            if (submenuConfig.style.display === 'none' || submenuConfig.style.display === '') {
                submenuConfig.style.display = 'block';
                console.log("Menú de configuración mostrado");
            } else {
                submenuConfig.style.display = 'none';
                console.log("Menú de configuración ocultado");
            }
        });
    } else {
        console.error("No se encontraron el icono o el menú de configuración en el DOM");
    }

        // Mostrar/Ocultar menú de configuración
        const menuButtonFotos = document.getElementById('configuracion');
        const submenuFotos = document.getElementById('menu_config');
        if (menuButtonFotos && submenuFotos) {
            console.log("Icono de Configuración y menú encontrados.");
            menuButtonFotos.addEventListener('click', () => {
                console.log("Icono de configuración clicado");
                if (submenuFotos.style.display === 'none' || submenuFotos.style.display === '') {
                    submenuFotos.style.display = 'block';
                    console.log("Menú de configuración mostrado");
                } else {
                    submenuFotos.style.display = 'none';
                    console.log("Menú de configuración ocultado");
                }
            });
        } else {
            console.error("No se encontraron el icono o el menú de configuración en el DOM");
        }

    
    // Cerrar aplicación al hacer clic en el icono de cierre
    const imagen = document.querySelector('.icono_cerrar');
    imagen.addEventListener('click', function() {
        const div = document.getElementById('menu_fotos');
        
        
        div.style.display = 'none';
    });

    

    // Arrastre con límites para el contenedor de la aplicación
    const nombreApp = document.querySelector('.nombre_app');
    const container = document.getElementById('menu_fotos');
    const container2 = document.getElementById('menu_config');
    let isDragging = false;
    let startX, startY;

    if (nombreApp && container) {
        nombreApp.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX - container.offsetLeft;
            startY = e.clientY - container.offsetTop;
            container.style.position = 'absolute';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const newLeft = e.clientX - startX;
                const newTop = e.clientY - startY;

                // Limitar el movimiento dentro de la ventana
                const maxLeft = window.innerWidth - container.offsetWidth;
                const maxTop = window.innerHeight - container.offsetHeight;

                // Aplicar los límites
                container.style.left = `${Math.min(Math.max(0, newLeft), maxLeft)}px`;
                container.style.top = `${Math.min(Math.max(0, newTop), maxTop)}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    } else {
        console.error("Elemento para arrastrar o contenedor no encontrado.");
    }


});
