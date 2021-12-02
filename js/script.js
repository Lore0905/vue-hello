Vue.config.devtools = true;

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const titleText = new Vue(
    {
        el: '#root',
        data: {
            title: 'Ciao, questo è il mio primo esercizio utilizzando Vue.js'
        }
    }
);
