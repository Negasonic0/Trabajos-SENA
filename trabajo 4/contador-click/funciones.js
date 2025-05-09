let contador = 0; // Inicializa el contador

const botonContar = document.getElementById("sumar"); // Obtiene el botón de contar
const resultado = document.getElementById("contador"); // Obtiene el elemento donde se mostrará el resultado

botonContar.addEventListener("click", () => {
  contador++; // Incrementa el contador
  resultado.textContent = `Contador: ${contador}`; // Actualiza el texto del resultado
});

// Función para reiniciar el contador
document.getElementById("reiniciar").addEventListener("click", function () {
  contador = 0; // Reinicia el contador
  document.getElementById("contador").textContent = "Contador reiniciado."; // Actualiza el texto del resultado
});