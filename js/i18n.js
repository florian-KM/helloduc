const translations = {
    'Fr': {
        'navbar.hello': 'Accueil',
        'navbar.Organisations': 'Organisations',
        'navbar.Enseignants': 'Enseignants',
        'navbar.Parents': 'Parents',
        'fr': 'Français',
        'fr': 'Français',
        'fr': 'Français',
        'fr': 'Français',
        'fr': 'Français',
        'fr': 'Français',
        'fr': 'Français',
        'fr': 'Français',
        
    },
    
    'En': {
        'navbar.hello': 'Home',
        'navbar.Organisations': 'Organizations',
        'navbar.Enseignants': 'Teachers',
        'navbar.Parents': 'Parents',
    },
    // Ajoutez d'autres clés et traductions au besoin
};

function translate(key, lang) {
    return translations[lang][key] ? translations[lang][key] || key : key;
}


document.addEventListener('DOMContentLoaded', function () {
    // Charger la page avec la langue par défaut (en anglais)
    translatePage('En');
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