let inputTitolo = document.querySelector('#input-titolo');
let inputParagrafo = document.querySelector('#input-paragrafo');
let btnCrea = document.querySelector('#btn-crea');
let zonaArticoli = document.querySelector('#zona-articoli');

btnCrea.addEventListener('click', () => {
    
    let titoloValore = inputTitolo.value.trim();
    let paragrafoValore = inputParagrafo.value.trim();

    if (titoloValore === "" || paragrafoValore === "") {
        alert("Attenzione! Devi riempire sia il titolo che il paragrafo prima di pubblicare.");
        return; 
    }

    let nuovoArticolo = document.createElement('article');

    let h3 = document.createElement('h3');
    h3.innerHTML = titoloValore;

    let p = document.createElement('p');
    p.innerHTML = paragrafoValore;

    nuovoArticolo.appendChild(h3);
    nuovoArticolo.appendChild(p);

    zonaArticoli.appendChild(nuovoArticolo);

    inputTitolo.value = "";
    inputParagrafo.value = "";
});
