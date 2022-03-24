const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiro = comidas.shift();
const ultimo = comidas.pop();

comidas.push('Arroz')
comidas.unshift('Peixe','Batata')

console.log(primeiro, ultimo, comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort().reverse()

const temJo = estudantes.includes('Joana')
const temJu = estudantes.includes('Juliana')
console.log(estudantes, temJo, temJu)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const ulLi = html.split('section').join('ul').split('div').join('li')

console.log(ulLi)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice()

carros.pop()
console.log(cloneCarros, carros)
