let paciente = document.querySelector('#primer-paciente');
let tdpeso = paciente.querySelector('.info-peso');
let peso = tdpeso.textContent;
let tdaltura = paciente.querySelector('.info-altura');
let altura = tdaltura.textContent;
let tdIMC = paciente.querySelector('.info-imc');
let imc = peso / (altura * altura);
tdIMC.textContent = imc;

if (peso < 0 || peso > 1000) {
  console.log('Peso incorrecto');
}

if (altura < 0 || altura > 4.0) {
  console.log('Altura incorrecta');
}
