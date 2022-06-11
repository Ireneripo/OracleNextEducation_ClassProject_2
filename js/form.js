let botonAdicionar = document.querySelector('#adicionar-paciente');

botonAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  let form = document.querySelector('#form-adicionar');
  let paciente = capturarDatosPaciente(form);
  let pacienteTr = construirTr(paciente);

  let errores = validarPaciente(paciente);

  if (errores.length > 0) {
    exhibirMensajesErrores(errores);
    return;
  }

  let tabla = document.querySelector('#tabla-pacientes');
  tabla.appendChild(pacienteTr);
  form.reset();

  let mensajesErrores = document.querySelector('#mensajes-errores');
  mensajesErrores.innerHTML = '';
});

// Capturar los datos del formulario
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

// Crear una fila de la tabla
function construirTr(paciente) {
  let pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  // Agregar los tds al tr y el tr a la tabla
  pacienteTr.appendChild(construirTd(paciente.nombre, 'info-nombre'));
  pacienteTr.appendChild(construirTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(construirTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(construirTd(paciente.grasa, 'info-grasa'));
  pacienteTr.appendChild(construirTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

// Crear un td
function construirTd(dato, clase) {
  let td = document.createElement('td');
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}

// Validar un paciente
function validarPaciente(paciente) {
  let errores = [];

  if (paciente.nombre.length === 0) {
    errores.push('El nombre no puede estar vacío');
  }

  if (paciente.peso.length === 0) {
    errores.push('El peso no puede estar vacío');
  }

  if (paciente.altura.length === 0) {
    errores.push('La altura no puede estar vacía');
  }

  if (paciente.grasa.length === 0) {
    errores.push('El porcentaje de grasa no puede estar vacío');
  }

  if (!validarPeso(paciente.peso)) {
    errores.push('El peso es incorrescto');
  }

  if (!validarAltura(paciente.altura)) {
    errores.push('La altura es incorrecta');
  }
  return errores;
}

// Mostrar mensaje de error
function exhibirMensajesErrores(errores) {
  let ul = document.querySelector('#mensajes-errores');
  ul.innerHTML = '';

  errores.forEach((error) => {
    let li = document.createElement('li');
    li.textContent = error;
    ul.appendChild(li);
  });
}
