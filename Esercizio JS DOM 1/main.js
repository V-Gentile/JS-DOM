let paragrafi = document.querySelectorAll('.testo');
let btnColore = document.querySelector('#btn-colore');
let btnGrassetto = document.querySelector('#btn-grassetto');
let btnVisibilita = document.querySelector('#btn-visibilita');

btnColore.addEventListener('click', () => {
    paragrafi.forEach(paragrafo => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        paragrafo.style.color = `rgb(${r}, ${g}, ${b})`;
    });
});

btnGrassetto.addEventListener('click', () => {
    paragrafi.forEach(paragrafo => {
        if (paragrafo.style.fontWeight === 'bold') {
            paragrafo.style.fontWeight = 'normal';
        } else {
            paragrafo.style.fontWeight = 'bold';
        }
    });
});

btnVisibilita.addEventListener('click', () => {
    paragrafi.forEach(paragrafo => {
        if (paragrafo.style.display === 'none') {
            paragrafo.style.display = 'block';
        } else {
            paragrafo.style.display = 'none';
        }
    });
});
