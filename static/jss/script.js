document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (menuIcon && dropdownMenu) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('rotate-90');
            dropdownMenu.classList.toggle('show');
        });
        window.addEventListener('click', (event) => {
            if (!event.target.matches('.menu-icon') && !event.target.closest('.dropdown')) {
                if (dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                    menuIcon.classList.remove('rotate-90');
                }
            }
        });
    }
});
