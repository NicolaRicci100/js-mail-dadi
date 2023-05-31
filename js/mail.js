console.log('JS OK MAIL');

// array con le mail valide
const mails = ['pinco.pallino@gmail.com', 'johnny.beegonny@libero.it', 'larry.poggers@hotmail.com'];

// leggo l'array in console
console.log(mails);

// prendo dal DOM la mail immessa dall'utente e il bottone
const mailElement = document.getElementById('my-mail');
let buttonElement = document.getElementById('my-validation');

buttonElement = addEventListener('click', function(){
    for(let i = 0; i <= mails.length; i++){
    console.log(mails[i]);

        if(mails[i] == mailElement){
            console.log('MAIL VALIDA');
        } else {
            console.log('MAIL NON VALIDA');
        }

    }
})