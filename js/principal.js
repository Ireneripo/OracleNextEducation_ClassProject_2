let paciente = document.querySelector('#primer-paciente');
let tdpeso = paciente.querySelector('.info-peso');
let peso = tdpeso.textContent;
let tdaltura = paciente.querySelector('.info-altura');
let altura = tdaltura.textContent;
let tdIMC = paciente.querySelector('.info-imc');

let pesoEsValido = true;
let alturaEsValida = true;

//verdadero o falso ---> verdadero

if (peso < 0 || peso > 1000) {
  console.log('Peso incorrecto');
  tdIMC.textContent = 'Peso incorrecto';
  pesoEsValido = false;
}

//verdadero o falso ---> verdadero
if (altura < 0 || altura > 3.0) {
  console.log('Altura incorrecta');
  tdIMC.textContent = 'Altura incorrecta';
  alturaEsValida = false;
}

//verdadero y ferdadero ---> verdadero
//verdadero y falso ---> falso
if (pesoEsValido && alturaEsValida) {
  let imc = peso / (altura * altura);
  tdIMC.textContent = imc;
}
