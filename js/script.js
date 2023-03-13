/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// email valide
const invitati = [
    'esempio1@mail.it',
    'esempio2@mail.it',
    'esempio3@mail.it'
]
let idonei = '';

// bottone submit
const btn = document.querySelector('button');

 //evento al click 
btn.addEventListener('click', checkList);

 //funzione che verifica se l'email inserita è valida
function checkList(e) {
    e.preventDefault();
    const userMail = document.getElementById('mail').value;
    for (let i = 0; i < invitati.length; i++){
        if (userMail.toLowerCase() === invitati[i].toLowerCase()) {
            idonei = (invitati[i]);
        };
    };
    message()
}
//Message function
function message() {
let el = document.querySelector('h6');
    if (idonei) {
        el.innerText = `Benvenuto`;
    } else {
        el.innerText = `Spiacente, non sei stato invitato, controlla se i dati inseriti sono giusti`;
    }
}






