document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (menuIcon && dropdownMenu) {
        menuIcon.addEventListener('click', () => {
            // Toggle the rotation class on the icon
            menuIcon.classList.toggle('rotate-90');
            // Toggle the visibility of the dropdown
            dropdownMenu.classList.toggle('show');
        });

        // Optional: close the dropdown if the user clicks outside of it
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
