let misPacientes = document.querySelectorAll('.paciente');
console.log(misPacientes);

misPacientes.forEach((paciente) => {
  console.log(paciente);
  paciente.addEventListener('dblclick', function () {
    this.remove();
  });
});
