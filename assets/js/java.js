//  Lista para almacenar todos los comentarios (array)
let comentarios = [];

//  Clase para representar un comentario (POO)
class Comentario {
  constructor(nombre, correo, texto, valoracion) {
    this.nombre = nombre || "Anónimo";
    this.correo = correo || "No proporcionado";
    this.texto = texto;
    this.valoracion = valoracion || "Sin valorar";
    this.fecha = new Date().toLocaleString();
  }
}

//  Función para validar texto (estructura de control con if)
function validarTexto(texto) {
  if (!texto || texto.trim() === "") {
    return false;
  }
  return true;
}

// Función para mostrar comentarios en el DOM
function mostrarComentarios() {
  let lista = document.getElementById("listaComentarios");
  lista.innerHTML = "";

  for (let i = 0; i < comentarios.length; i++) {
    let c = comentarios[i];

    // crear elemento HTML dinámicamente
    let card = document.createElement("div");
    card.className = "comentario-card";
    card.innerHTML = `
      <h4>${c.nombre} (${c.valoracion}⭐)</h4>
      <p>${c.texto}</p>
      <small>${c.fecha}</small>
    `;
    lista.appendChild(card);
  }
}

//  Función para manejar el envío del formulario
function manejarFormulario(event) {
  event.preventDefault(); // evitar recargar la página

  // obtener datos del formulario
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let texto = document.getElementById("comentario").value;
  let valoracion = document.getElementById("valoracion").value;

  // validar
  if (!validarTexto(texto)) {
    alert("⚠️ Escribe un comentario antes de enviar.");
    return;
  }

  // crear objeto comentario
  let nuevo = new Comentario(nombre, correo, texto, valoracion);

  // guardar en el array
  comentarios.push(nuevo);

  // depurar por consola
  console.log("📋 Comentarios actuales:", comentarios);

  // actualizar la vista en pantalla
  mostrarComentarios();

  alert("💌 ¡Comentario enviado con éxito!");

  // limpiar formulario
  event.target.reset();
}

// ⚡ Evento principal cuando la página carga
document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("sugerenciasForm");
  formulario.addEventListener("submit", manejarFormulario);
});
