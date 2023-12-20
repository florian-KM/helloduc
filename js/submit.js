// script.js

function submitForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Construire l'objet de données à partir des champs du formulaire
    const formData = {
        author: document.getElementById('author').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        sujet: document.getElementById('sujet').value,
        message: document.getElementById('comment').value,
    };

    // Appeler la fonction pour envoyer les données à l'API
    sendFormData(formData);
}

function sendFormData(formData) {
    // Remplacez 'API_ENDPOINT' par l'URL de l'API fournie
    const apiEndpoint = 'https://auth.hostinger.com/';

    // Utilisez la fonction fetch pour envoyer les données à l'API
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('API Response:', data);
        // Traitez la réponse de l'API ici si nécessaire
    })
    .catch(error => {
        console.error('Error sending data to API:', error);
        // Gérez les erreurs ici si nécessaire
    });
}
