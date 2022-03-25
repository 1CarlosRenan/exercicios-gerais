// Crie uma função que verifique
// corretamente o tipo de dado

function verificaTipo(dado) {
    return Object.prototype.toString.call(dado)
}

const frase = ['', [], {}, 2, null, (x) => x, false]

frase.forEach((item) => console.log(verificaTipo(item)))


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
    }
})

// por padrão, todos os outros (configurable, writable, etc) são falses

delete quadrado.lados;

quadrado.lados = 3;
quadrado.new = 2;

console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(configuracao)

configuracao.width = 700;
configuracao.new = 'teste'

console.log(configuracao)


  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array


const strArr = [String, Array]

strArr.forEach((item) => {
    console.log(Object.getOwnPropertyNames(item.prototype))
})
