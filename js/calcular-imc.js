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
    console.log('Peso incorrecto');
    tdIMC.textContent = 'Peso incorrecto';
    pesoEsValido = false;
    paciente.classList.add('paciente-incorrecto');
  }

  if (altura < 0 || altura > 3.0) {
    console.log('Altura incorrecta');
    tdIMC.textContent = 'Altura incorrecta';
    alturaEsValida = false;
    paciente.classList.add('paciente-incorrecto');
  }

  if (pesoEsValido && alturaEsValida) {
    let imc = peso / (altura * altura);
    tdIMC.textContent = imc.toFixed(2);
  }
}

// pacientes.forEach((paciente) => {
//   console.log(paciente);

//   let tdpeso = paciente.querySelector('.info-peso');
//   let peso = tdpeso.textContent;
//   let tdaltura = paciente.querySelector('.info-altura');
//   let altura = tdaltura.textContent;
//   let tdIMC = paciente.querySelector('.info-imc');

//   let pesoEsValido = true;
//   let alturaEsValida = true;

//   if (peso < 0 || peso > 1000) {
//     console.log('Peso incorrecto');
//     tdIMC.textContent = 'Peso incorrecto';
//     pesoEsValido = false;
//   }

//   if (altura < 0 || altura > 3.0) {
//     console.log('Altura incorrecta');
//     tdIMC.textContent = 'Altura incorrecta';
//     alturaEsValida = false;
//   }

//   if (pesoEsValido && alturaEsValida) {
//     let imc = peso / (altura * altura);
//     tdIMC.textContent = imc;
//   }
// });
