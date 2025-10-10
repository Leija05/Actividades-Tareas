document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("miFormulario");
    const resultado = document.getElementById("resultado");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        resultado.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo electrónico:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
            <p style="color:green;">¡Formulario enviado correctamente!</p>
        `;
        formulario.reset();
    });
});