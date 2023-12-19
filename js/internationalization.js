
document.addEventListener('DOMContentLoaded', function () {
    // Charger la page avec la langue par défaut (en anglais)
    translatePage('Fr');
});

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translatedText = translate(key, lang);
        element.textContent = translatedText;
    });
}

function changeLanguage(selectedLang) {
    translatePage(selectedLang);
}