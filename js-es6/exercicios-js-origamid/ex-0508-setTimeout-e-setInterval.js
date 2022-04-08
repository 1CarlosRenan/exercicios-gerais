// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.querySelector('body');

// setInterval(mudarCor, 2000);

let corAtual = '';
function mudarCor() {
    if (corAtual === 'red') {
        corAtual = 'blue'
        body.style.background = corAtual;
    } else {
        corAtual = 'red'
        body.style.background = corAtual;
    }
}

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const tempo = document.querySelector('h1');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 100);

    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
}

