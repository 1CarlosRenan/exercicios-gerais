import ValidarCpf from "./ex-0906-validar-cpf-component.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf);

console.log(validarCpf.iniciar())