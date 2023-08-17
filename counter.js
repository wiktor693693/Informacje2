    const visitButton = document.querySelector('.visit-button');
    const visitCountElement = document.getElementById('visit-count');

    // Załaduj bieżącą wartość licznika z local storage
    let biezacaWartoscLicznika = parseInt(localStorage.getItem('visitCount')) || 0;

    // Zwiększ wartość licznika
    biezacaWartoscLicznika++;

    // Zapisz zaktualizowaną wartość licznika w local storage
    localStorage.setItem('visitCount', biezacaWartoscLicznika);

    // Wyświetl wartość licznika
    visitCountElement.textContent = biezacaWartoscLicznika;