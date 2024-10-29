


document.addEventListener('DOMContentLoaded', function() {
  const windowsIcon = document.getElementById('windows-icon');
  const menu = document.getElementById('windows-menu');

  windowsIcon.addEventListener('click', function() {
      console.log('Icono de Windows clicado'); // Mensaje para verificar el clic
      if (menu.style.display === 'block') {
          menu.style.display = 'none'; // Ocultar el menú
      } else {
          menu.style.display = 'block'; // Mostrar el menú
      }
  });

///////////////////////////////////////////////////////////////////////////////////////////

    // Selecciona todos los botones y contenedores
    const yearButtons = document.querySelectorAll('.añitos');
    const containers = document.querySelectorAll('.container-year');

    // Verifica si existen los botones y contenedores
    if (yearButtons.length === 0 || containers.length === 0) {
        console.error("No se encontraron los botones de años o contenedores en el DOM.");
        return;
    }

    // Oculta todos los contenedores al inicio
    containers.forEach(container => container.style.display = 'none');

    // Agrega el evento a cada botón para mostrar el contenedor correspondiente
    yearButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            containers.forEach(container => container.style.display = 'none'); // Oculta todos los contenedores
            const targetContainer = document.querySelector(`.${btn.dataset.target}`);
            
            // Si el contenedor existe, se muestra
            if (targetContainer) {
                targetContainer.style.display = 'block';
                console.log(`Mostrando contenedor: ${btn.dataset.target}`);
            } else {
                console.error(`Contenedor no encontrado para el target: ${btn.dataset.target}`);
            }
        });
    });
/////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////
    const imagen = document.querySelector('.icono_cerrar');

    // Agregamos un evento de clic a la imagen
    imagen.addEventListener('click', function() {
        // Seleccionamos el div por su ID y lo ocultamos
        const div = document.getElementById('menu_fotos');
        div.style.display = 'none'; // Esto oculta el div
    });
});

const menuButton = document.getElementById('menuButton');
const submenu = document.getElementById('submenu');

menuButton.addEventListener('click', () => {
    if (submenu.classList.contains('hide')) {
        submenu.classList.remove('hide');
        submenu.classList.add('show');
    } else {
        submenu.classList.remove('show');
        submenu.classList.add('hide');
    }
});








