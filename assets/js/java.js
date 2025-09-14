// 🎀 Objeto para representar un comentario
class Comentario {
  constructor(nombre, correo, texto, valoracion) {
    this.nombre = nombre || "Anónimo";
    this.correo = correo || "No proporcionado";
    this.texto = texto;
    this.valoracion = valoracion || "Sin valorar";
  }

  mostrarEnConsola() {
    console.log("📩 Nuevo comentario recibido:");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Correo: ${this.correo}`);
    console.log(`Comentario: ${this.texto}`);
    console.log(`Valoración: ${this.valoracion}`);
  }
}

// 🎯 Función principal
function manejarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const texto = document.getElementById("comentario").value.trim();
  const valoracion = document.getElementById("valoracion").value;

  // ✅ Validación con condicionales
  if (!texto) {
    alert("⚠️ Por favor escribe un comentario antes de enviar.");
    return;
  }

  // ⚡ Creamos el objeto con la info
  const nuevoComentario = new Comentario(nombre, correo, texto, valoracion);

  // 📦 Mostrarlo en la consola (simula guardarlo)
  nuevoComentario.mostrarEnConsola();

  // 💬 Feedback con alert
  alert(`¡Gracias por tu comentario, ${nuevoComentario.nombre}! 💙`);

  // 🧠 Bonus: preguntar si quiere dejar otro
  const dejarOtro = prompt("¿Quieres dejar otro comentario? (sí/no)");
  if (dejarOtro && dejarOtro.toLowerCase() === "sí") {
    document.getElementById("sugerenciasForm").reset();
  } else {
    document.getElementById("mensajeExito").style.display = "block";
  }
}

// 🚀 Activar cuando cargue la página
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("sugerenciasForm")
    .addEventListener("submit", manejarFormulario);
});
