console.log("El archivo contacto.js se ha cargado correctamente.");



let fullName = document.getElementById("nombre");
let email = document.getElementById("email");
let phone = document.getElementById("telefono");
let message = document.getElementById("mensaje");
let consultaForm = document.getElementById("consultaform");


function mostrarDatos() {
    
    let datos = [fullName.value, email.value, phone.value, message.value]; 
    console.log("Datos en array:", datos);
    console.log("Formulario enviado");
    console.log("Nombre:", datos[0]);
    console.log("Email:", datos[1]);
    console.log("Teléfono:", datos[2]);
    console.log("Mensaje:", datos[3]);
}

consultaForm.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Formulario enviado");
    console.log("Nombre:", fullName.value);
    console.log("Email:", email.value);
    console.log("Teléfono:", phone.value);
    console.log("Mensaje:", message.value);
    console.log("Gracias por contactarnos, " + fullName.value + ". Nos pondremos en contacto contigo pronto.");
    
   consultaForm.reset(); 

}
);





