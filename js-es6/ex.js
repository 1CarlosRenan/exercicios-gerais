// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll('p');

const caracteresTotal = Array.prototype.reduce.call(p, function(acumulador, atual) {
    const pTotal = atual.innerText.length
    return acumulador + pTotal
}, 0)

console.log(caracteresTotal)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function novosElementos(tag, classe, conteudo) {
    const elemento = document.createElement(tag);

    classe? elemento.classList.add(classe) : null;
    conteudo? elemento.innerText = conteudo : null;

    return elemento
}

console.log(novosElementos('html','ativo','conteudo'))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = novosElementos.bind(null,'h1','titulo')

console.log(h1Titulo('conteudo'))