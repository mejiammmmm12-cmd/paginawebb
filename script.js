const botonTema = document.getElementById("cambiarTema");

if (botonTema) {
    botonTema.addEventListener("click", function() {
        document.body.classList.toggle("tema-oscuro");
    });
}

const formulario = document.getElementById("miFormulario");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const mensaje = document.getElementById("mensaje");

        mensaje.textContent = "¡Gracias, " + nombre +
            "! Tu formulario se completó correctamente.";

        formulario.reset();
    });
}