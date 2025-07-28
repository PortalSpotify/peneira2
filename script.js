document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-btn');
    const redirectLink = 'https://www.example.com'; // Substitua pelo seu link desejado

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            window.location.href = redirectLink;
        });
    }
