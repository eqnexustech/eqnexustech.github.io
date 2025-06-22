// Lógica para el menú hamburguesa
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Event listener para el botón del menú
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Alterna la clase 'hidden' para mostrar/ocultar el menú
});

// Cerrar menú móvil al hacer clic en un enlace del menú
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Oculta el menú después de hacer clic en un enlace
        // También cerramos cualquier desplegable abierto dentro del menú móvil
        const openDropdowns = mobileMenu.querySelectorAll('.dropdown-menu:not(.hidden)');
        openDropdowns.forEach(dropdown => {
            dropdown.classList.add('hidden');
        });
    });
});

// Lógica para el menú desplegable del perfil (Desktop)
const dropdownButtonProfile = document.getElementById('dropdown-button-profile');
const dropdownMenuProfile = document.getElementById('dropdown-menu-profile');

if (dropdownButtonProfile && dropdownMenuProfile) {
    dropdownButtonProfile.addEventListener('click', (event) => {
        event.stopPropagation(); // Previene que el clic se propague al documento y cierre el menú inmediatamente
        dropdownMenuProfile.classList.toggle('hidden');
    });

    // Cerrar el menú desplegable si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!dropdownButtonProfile.contains(event.target) && !dropdownMenuProfile.contains(event.target)) {
            dropdownMenuProfile.classList.add('hidden');
        }
    });

    // Cerrar el menú desplegable al hacer clic en una opción dentro de él
    dropdownMenuProfile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenuProfile.classList.add('hidden');
        });
    });
}


// Lógica para el menú desplegable del perfil (Mobile)
const dropdownButtonMobileProfile = document.getElementById('dropdown-button-mobile-profile');
const dropdownMenuMobileProfile = document.getElementById('dropdown-menu-mobile-profile');

if (dropdownButtonMobileProfile && dropdownMenuMobileProfile) {
    dropdownButtonMobileProfile.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownMenuMobileProfile.classList.toggle('hidden');
    });

    // No necesitamos un event listener para document.click para el menú móvil
    // porque el menú móvil principal ya se encarga de cerrarse al hacer clic en un enlace.
    // Simplemente cerramos el desplegable si se hace clic en un enlace dentro de él.
    dropdownMenuMobileProfile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenuMobileProfile.classList.add('hidden');
            // Opcional: También podrías querer cerrar el menú móvil principal aquí
            // mobileMenu.classList.add('hidden');
        });
    });
}