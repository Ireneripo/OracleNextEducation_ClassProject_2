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
  let pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  let nombreTd = construirTd(paciente.nombre, 'info-nombre');
  let pesoTd = construirTd(paciente.peso, 'info-peso');
  let alturaTd = construirTd(paciente.altura, 'info-altura');
  let grasaTd = construirTd(paciente.grasa, 'info-grasa');
  let imcTd = construirTd(paciente.imc, 'info-imc');

  //Agregar los tds al tr y el tr a la tabla
  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(grasaTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function construirTd(dato, clase) {
  let td = document.createElement('td');
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}
