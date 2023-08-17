// Pobieranie elementów z DOM
const themeSelect = document.getElementById('theme'); // To jest <select> z opcjami motywów
const styleLink = document.getElementById('main-style'); // To jest link do arkusza stylów

// Funkcja do zmiany motywu
function changeTheme(selectedTheme) {
    if (selectedTheme === 'light') {
        styleLink.href = 'style_white.css'; // Zastosuj style dla jasnego motywu
    } else if (selectedTheme === 'dark') {
        styleLink.href = 'style.css'; // Zastosuj style dla ciemnego motywu
    }
}

// Obsługa zmiany wyboru motywu
themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
    changeTheme(selectedTheme);

    // Dodatkowo, jeśli chcesz zapisywać wybór użytkownika w pamięci, użyj localStorage lub zmień URL
    // np. localStorage.setItem('selectedTheme', selectedTheme);
    // lub
    // window.location.search = `?theme=${selectedTheme}`;
});

// Poniższy fragment kodu można umieścić w pliku o nazwie "plugin.js" i podłączyć do każdej strony za pomocą <script src="plugin.js"></script>
