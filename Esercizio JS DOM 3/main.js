let rubrica = [
    { nome: "Antonio", telefono: "3331234567" },
    { nome: "Chiara", telefono: "3289876543" }
];

let inputNome = document.querySelector('#input-nome');
let inputTelefono = document.querySelector('#input-telefono');
let btnAggiungi = document.querySelector('#btn-aggiungi');
let btnModifica = document.querySelector('#btn-modifica');
let btnCancella = document.querySelector('#btn-cancella');
let btnToggle = document.querySelector('#btn-toggle');
let tabella = document.querySelector('#tabella');
let tbodyContatti = document.querySelector('#tbody-contatti');

function mostraContatti() {
    tbodyContatti.innerHTML = ""; 
    
    rubrica.forEach(contatto => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${contatto.nome}</td><td>${contatto.telefono}</td>`;
        tbodyContatti.appendChild(tr);
    });
}

btnAggiungi.addEventListener('click', () => {
    rubrica.push({ nome: inputNome.value, telefono: inputTelefono.value });
    mostraContatti();
});

btnModifica.addEventListener('click', () => {
    for (let i = 0; i < rubrica.length; i++) {
        if (rubrica[i].nome === inputNome.value) {
            rubrica[i].telefono = inputTelefono.value; 
        }
    }
    mostraContatti();
});

btnCancella.addEventListener('click', () => {
    rubrica = rubrica.filter(c => c.nome !== inputNome.value);
    mostraContatti();
});

btnToggle.addEventListener('click', () => {
    if (tabella.style.display === 'none') {
        tabella.style.display = 'block';
        btnToggle.innerHTML = "Nascondi Rubrica";
    } else {
        tabella.style.display = 'none';
        btnToggle.innerHTML = "Mostra Rubrica";
    }
});

mostraContatti();
