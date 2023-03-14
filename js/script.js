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






/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// numeri in gioco
let num1;
let num2;

const bNum1 = document.getElementById('bNum1');
const bNum2 = document.getElementById('bNum2');
const bVincitore = document.getElementById('bVincitore');

// numero random del giocatore 1
bNum1.addEventListener('click', function(){
    num1 = getRandomInt(1, 6);
    return document.getElementById('randomNumber1').innerHTML += num1;
});


// numero random del giocatore 2 
bNum2.addEventListener('click', function(){
    num2 = getRandomInt(1, 6);
    return document.getElementById('randomNumber2').innerHTML += num2;
});


// funzione che estrae il vincitore
bVincitore.addEventListener('click', function(){
    if(num1 > num2){
        return document.getElementById('risultato').innerHTML += `<h6 class="text-center text-success">Giocatore 1 vince</h6>`;
    } else if (num1 < num2){
        return document.getElementById('risultato').innerHTML += `<h6 class="text-center text-success">Giocatore 2 vince</h6>`;
    } else{
        return document.getElementById('risultato').innerHTML += `<h6 class="text-center text-danger">Parità</h6>`;
    }
})


