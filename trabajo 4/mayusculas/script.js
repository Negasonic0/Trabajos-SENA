const textContent = document.getElementById("texto"); // Obtiene el elemento de texto
const botonConvertir = document.getElementById("convertir"); // Obtiene el botón de convertir
const resultado = document.getElementById("resultado"); // Obtiene el elemento donde se mostrará el resultado

//función para convertir el texto a mayúsculas
botonConvertir.addEventListener("click", () => {
  const texto = textContent.value.trim(); // Obtiene el valor del campo de texto
  resultado.textContent = texto.toUpperCase(); // Convierte el texto a mayúsculas y lo muestra
});