let paciente = document.querySelector('#primer-paciente');
let tdpeso = paciente.querySelector('.info-peso');
let peso = tdpeso.textContent;
let tdaltura = paciente.querySelector('.info-altura');
let altura = tdaltura.textContent;

console.log(paciente);
console.log(tdpeso);
console.log(peso);
console.log(altura);

let imc = peso / (altura * altura);
console.log(imc);
