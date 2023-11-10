//Elementos Nico
const puntajeNico = document.getElementById('puntajeNico');
const botonMenosNico = document.getElementById('botonMenosNico');
const botonMasNico = document.getElementById('botonMasNico');
const totalNico = document.getElementById('totalNico');
const dolaresNico = document.getElementById('dolaresNico');
const botonAgregarNico = document.getElementById('botonAgregarNico');

//Elementos Fran
const puntajeFran = document.getElementById('puntajeFran');
const botonMenosFran = document.getElementById('botonMenosFran');
const botonMasFran = document.getElementById('botonMasFran');
const totalFran = document.getElementById('totalFran');
const dolaresFran = document.getElementById('dolaresFran');
const botonAgregarFran = document.getElementById('botonAgregarFran');


let pNico = 0;
let pFran = 0;
let dNico = 0;
let dFran = 0;

botonMenosNico.addEventListener('click', () => {
    if(pNico > 0){
        pNico--;
    }
    puntajeNico.innerHTML = pNico;
});

botonMasNico.addEventListener('click', () => {
    pNico++;
    puntajeNico.innerHTML = pNico;
});

botonMenosFran.addEventListener('click', () => {
    if(pFran > 0){
        pFran--;
    }
    puntajeFran.innerHTML = pFran;
});

botonMasFran.addEventListener('click', () => {
    pFran++;
    puntajeFran.innerHTML = pFran;
});

botonAgregarNico.addEventListener('click', () => {
    dNico = dNico + parseFloat(dolaresNico.value);
    dolaresNico.value = '';
    totalNico.innerHTML = 'Total: ' + dNico + ' USD';
});

botonAgregarFran.addEventListener('click', () => {
    dFran = dFran + parseFloat(dolaresFran.value);
    dolaresFran.value = '';
    totalFran.innerHTML = 'Total: ' + dFran + ' USD';
});
