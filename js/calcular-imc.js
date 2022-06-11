let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  let tdpeso = paciente.querySelector('.info-peso');
  let peso = tdpeso.textContent;
  let tdaltura = paciente.querySelector('.info-altura');
  let altura = tdaltura.textContent;
  let tdIMC = paciente.querySelector('.info-imc');

  let pesoEsValido = true;
  let alturaEsValida = true;

  if (peso < 0 || peso > 1000) {
    tdIMC.textContent = 'Peso incorrecto';
    pesoEsValido = false;
    paciente.classList.add('paciente-incorrecto');
  }

  if (altura < 0 || altura > 3.0) {
    tdIMC.textContent = 'Altura incorrecta';
    alturaEsValida = false;
    paciente.classList.add('paciente-incorrecto');
  }

  if (pesoEsValido && alturaEsValida) {
    tdIMC.textContent = calcularIMC(peso, altura);
  }
}

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}
