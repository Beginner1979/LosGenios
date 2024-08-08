function contacto(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert("Formulario procesado");
}

// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón por su ID y agregar el evento onclick
    document.getElementById("botonBuscador").onclick = contacto;
});