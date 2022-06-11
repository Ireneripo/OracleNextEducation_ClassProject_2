let botonAdicionar = document.querySelector('#adicionar-paciente');

botonAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  let form = document.querySelector('#form-adicionar');
  let paciente = capturarDatosPaciente(form);
  let tabla = document.querySelector('#tabla-pacientes');
  let pacienteTr = construirTr(paciente);
  tabla.appendChild(pacienteTr);
  form.reset();
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

//Crear una fila de la tabla
function construirTr(paciente) {
  let pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  //Agregar los tds al tr y el tr a la tabla
  pacienteTr.appendChild(construirTd(paciente.nombre, 'info-nombre'));
  pacienteTr.appendChild(construirTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(construirTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(construirTd(paciente.grasa, 'info-grasa'));
  pacienteTr.appendChild(construirTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

//Crear un td
function construirTd(dato, clase) {
  let td = document.createElement('td');
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}
