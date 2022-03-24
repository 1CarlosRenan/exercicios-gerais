// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrCursos = Array.from(cursos)

const arrInfo = arrCursos.map((item) => { 
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
})

console.log(arrCursos)
console.log(arrInfo)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQueCem = numeros.filter( x => x > 100);

console.log(maiorQueCem)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const verifica = instrumentos.some(item => item === 'Baixo')

console.log(verifica)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((soma, atual, index) => {
  const valor  = +atual.preco.replace('R$ ','').replace(',','.');
  return soma + valor;
}, 0)

console.log(totalCompras)