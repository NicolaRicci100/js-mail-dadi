console.log('JS OK MAIL');

// array con le mail valide
const mails = ['pinco.pallino@gmail.com', 'johnny.beegonny@libero.it', 'larry.poggers@hotmail.com'];

// leggo l'array in console
console.log(mails);

// prendo dal DOM la mail immessa dall'utente e il bottone
const mailElement = document.getElementById('my-mail');
const buttonElement = document.getElementById('my-validation');

buttonElement.addEventListener('click', function(){
    let text = ('MAIL NON VALIDA');
    for(let i = 0; i < mails.length && text == ('MAIL NON VALIDA'); i++){
        if(mails[i] == mailElement.value){
            text = (mails[i] + ' è una MAIL VALIDA');
        }     
    }
    console.log(text);
})