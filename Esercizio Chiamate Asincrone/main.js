let inputSecondi = document.querySelector('#input-secondi');
let displayTimer = document.querySelector('#display-timer');
let btnStart = document.querySelector('#btn-start');
let btnPausa = document.querySelector('#btn-pausa');
let btnReset = document.querySelector('#btn-reset');

let intervallo = null; 
let tempoRimanente = 0; 

btnStart.addEventListener('click', () => {
    
    if (intervallo !== null) {
        return; 
    }

    if (tempoRimanente === 0) {
        let secondiInseriti = parseInt(inputSecondi.value);
        
        if (isNaN(secondiInseriti) || secondiInseriti < 1 || secondiInseriti > 500) {
            alert("Attenzione! Inserisci un numero compreso tra 1 e 500.");
            return;
        }
        
        tempoRimanente = secondiInseriti;
    }

    displayTimer.textContent = tempoRimanente;

    intervallo = setInterval(() => {
        tempoRimanente--; 
        displayTimer.textContent = tempoRimanente; 

        if (tempoRimanente <= 0) {
            clearInterval(intervallo); 
            intervallo = null;         
            alert("Tempo scaduto!");
            
            tempoRimanente = 0; 
        }
    }, 1000); 
});

btnPausa.addEventListener('click', () => {
    clearInterval(intervallo);
    intervallo = null; 
});

btnReset.addEventListener('click', () => {
    clearInterval(intervallo);
    intervallo = null;
    tempoRimanente = 0;
    
    inputSecondi.value = "";
    displayTimer.textContent = ""; 
});
