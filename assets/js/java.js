document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sugerenciasForm");
  const mensaje = document.getElementById("mensajeExito");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que recargue la página

    // Aquí podrías enviar los datos a un servidor en el futuro
    mensaje.style.display = "block";

    // Limpia el formulario
    form.reset();

    // Oculta el mensaje después de 4 segundos
    setTimeout(() => {
      mensaje.style.display = "none";
    }, 4000);
  });
});
