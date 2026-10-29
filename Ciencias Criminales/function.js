
window.onload = function() {
    alert("¡Bienvenido al Portal de Ciencias Forenses!");
};

document.querySelectorAll("a").forEach(function(enlace) {
    enlace.onmouseover = function() {
        enlace.style.cursor = "pointer";
    };
});

document.querySelectorAll("form").forEach(function(formulario) {
    formulario.onsubmit = function(evento) {
        evento.preventDefault();

        alert("¡Tu formulario se ha enviado correctamente! Gracias por visitar el Portal de Ciencias Forenses.");

        formulario.reset();
    };
});
