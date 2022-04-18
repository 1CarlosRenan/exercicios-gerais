// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputs = document.querySelectorAll('.CEP [readonly]');
const btn = document.querySelector('.CEP .button');
const cepInput = document.querySelector('.CEP #cep');

function handleClick(event){
    event.preventDefault();

    const cep = cepInput.value;
    getCEP(cep);
}

function getCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(r => {
            return r.json();
        }).then(dados => {
            inputs.forEach(item => {
                item.value = dados[item.id]
            })
        })
}

btn.addEventListener('click', handleClick)

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valor = document.querySelector('.blockchain .valor');

function atualizarValor() {
    fetch(`https://blockchain.info/ticker`)
        .then(r => {
            return r.json()
        }).then(valores => {
            valor.innerText = ('R$ ' + valores.BRL.buy).replace('.',',');
        })
}
atualizarValor()

setInterval(() => {
    atualizaValor()
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piada = document.querySelector('.piadaRandom .piada');
const btnPiada = document.querySelector('.piadaRandom button');

function atualizarPiada() {
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(r => {
        return r.json()
    }).then(dadosPiada => {
        piada.innerText = '"' + dadosPiada.value + '"';
    })
}
atualizarPiada();

btnPiada.addEventListener('click', atualizarPiada);

