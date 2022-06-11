let pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  let tdpeso = paciente.querySelector('.info-peso');
  let peso = tdpeso.textContent;
  let tdaltura = paciente.querySelector('.info-altura');
  let altura = tdaltura.textContent;
  let tdIMC = paciente.querySelector('.info-imc');

  let pesoEsValido = validarPeso(peso);
  let alturaEsValida = validarAltura(altura);

  if (!pesoEsValido) {
    tdIMC.textContent = 'Peso incorrecto';
    pesoEsValido = false;
    paciente.classList.add('paciente-incorrecto');
  }

  if (!alturaEsValida) {
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

function validarPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  }
  return false;
}

function validarAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  }
  return false;
}
