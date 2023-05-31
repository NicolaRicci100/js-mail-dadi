console.log('JS OK DADI');


const rollElement = document.getElementById('my-dice');
rollElement.addEventListener('click', function(){
    const userDice = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log('Umano ' + userDice);
    const cpuDice = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log('Computer ' + cpuDice);

    if(userDice > cpuDice){
        console.log('vince l\'umano');
    } else if(userDice == cpuDice){
        console.log('pareggio');
    } else{
        console.log('vince il computer');
    }

})