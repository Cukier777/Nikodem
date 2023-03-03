
//asd
const headings = document.querySelectorAll('h1');

// Iteruj przez każdy nagłówek i dodaj nasłuchiwanie zdarzeń
headings.forEach(heading => {
    // Pobierz tekst i pre pod tym nagłówkiem
    const text = heading.nextElementSibling;
    // Dodaj nasłuchiwanie zdarzeń do kliknięcia
    heading.addEventListener('click', () => {
        // Jeśli pre jest ukryte, to pokaż je, a jeśli jest widoczne, to ukryj je
        if (text.style.display === 'none') {
            text.style.display = 'block';
            heading.classList.add('open');
            heading.querySelector('img').setAttribute('src', 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/24/arrow-up-icon.png');
        } else {
            text.style.display = 'none';
            heading.classList.remove('open');
            heading.querySelector('img').setAttribute('src', 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/24/arrow-down-icon.png');
        }
    });
});