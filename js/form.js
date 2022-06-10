let botonAdicionar = document.querySelector('#adicionar-paciente');

botonAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  let form = document.querySelector('#form-adicionar');

  let nombre = form.nombre.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let grasa = form.grasa.value;

  let tabla = document.querySelector('#tabla-pacientes');

  let pacienteTr = document.createElement('tr');
  let nombreTd = document.createElement('td');
  let pesoTd = document.createElement('td');
  let alturaTd = document.createElement('td');
  let grasaTd = document.createElement('td');
  let imcTd = document.createElement('td');

  nombreTd.textContent = nombre;
  alturaTd.textContent = altura;
  pesoTd.textContent = peso;
  grasaTd.textContent = grasa;
  imcTd.textContent = calcularIMC(peso, altura);

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(grasaTd);
  pacienteTr.appendChild(imcTd);

  tabla.appendChild(pacienteTr);

  console.log(pacienteTr);
});
