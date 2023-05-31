console.log('JS OK DADI');

//collegamento al bottone nel DOM
const rollElement = document.getElementById('my-dice');
//lancio i dadi
rollElement.addEventListener('click', function(){
    
    const userDice = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log('Umano ' + userDice); //risulato dado UMANO
    const cpuDice = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log('Computer ' + cpuDice); //risultato dado CPU

    if(userDice > cpuDice){             //se UMANO batte CPU
        console.log('vince l\'umano');
    } else if(userDice == cpuDice){     //se i risulati sono uguali
        console.log('pareggio');
    } else{                             //se CPU batte UMANO
        console.log('vince il computer');
    }

})