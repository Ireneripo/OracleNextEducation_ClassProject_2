let botonAdicionar = document.querySelector('#adicionar-paciente');

botonAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  let form = document.querySelector('#form-adicionar');
  let paciente = capturarDatosPaciente(form);
  let tabla = document.querySelector('#tabla-pacientes');
  let pacienteTr = construirTr(paciente);
  tabla.appendChild(pacienteTr);
});

//Capturar los datos del formulario
function capturarDatosPaciente(form) {
  let paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    grasa: form.grasa.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };

  return paciente;
}

function construirTr(paciente) {
  //Crear los tds y un tr
  let pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  let nombreTd = document.createElement('td');
  nombreTd.classList.add('info-nombre');

  let pesoTd = document.createElement('td');
  pesoTd.classList.add('info-peso');

  let alturaTd = document.createElement('td');
  alturaTd.classList.add('info-altura');

  let grasaTd = document.createElement('td');
  grasaTd.classList.add('info-grasa');

  let imcTd = document.createElement('td');
  imcTd.classList.add('info-imc');

  //Asignar los valores a la propiedad textContent
  nombreTd.textContent = paciente.nombre;
  alturaTd.textContent = paciente.altura;
  pesoTd.textContent = paciente.peso;
  grasaTd.textContent = paciente.grasa;
  imcTd.textContent = paciente.imc;

  //Agregar los tds al tr y el tr a la tabla
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(grasaTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}
