document.getElementById("edad-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  if (!fechaNacimiento) {
    alert("Por favor, ingresa una fecha de nacimiento válida.");
    return;
  }

  const fechaNacimientoDate = new Date(fechaNacimiento);
  const hoy = new Date();

  let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

  // Ajustar si el cumpleaños aún no ha ocurrido este año
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
    edad--;
  }

  // Mostrar el resultado
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = `Tienes ${edad} años.`;
});