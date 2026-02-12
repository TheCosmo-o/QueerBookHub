// Burger toggle (mobilne menu)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Dropdown toggle (Kategorie)
const dropdownLinks = document.querySelectorAll('.dropdown > a');

dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // blokuje nawigację
        const parent = link.parentElement;

        // Zamykamy inne dropdowny
        dropdownLinks.forEach(l => {
            if (l !== link) l.parentElement.classList.remove('active');
        });

        parent.classList.toggle('active');
    });
});

// Submenu toggle (Książka/Komiks)
const submenuLinks = document.querySelectorAll('.submenu > a');

submenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // blokuje nawigację
        const parent = link.parentElement;

        // Zamykamy inne submenus w tym samym dropdown
        const siblings = parent.parentElement.querySelectorAll('.submenu');
        siblings.forEach(s => {
            if (s !== parent) s.classList.remove('active');
        });

        parent.classList.toggle('active');
    });
});
