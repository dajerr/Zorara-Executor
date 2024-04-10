
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    // Prepara los datos del formulario para enviar
    var formData = new FormData(form);

    // Usa Fetch API para enviar el formulario de manera asincrónica
    fetch("https://formspree.io/f/xayrojbk", { // Asegúrate de reemplazar con tu URL de Formspree
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        // Si la respuesta es exitosa, muestra un mensaje de éxito
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
        form.reset(); // Opcional: Limpia el formulario después del envío exitoso
      } else {
        response.json().then(data => {
          if (data.errors) {
            // Muestra los errores devueltos por Formspree
            alert("Error en el formulario: " + data.errors.map(error => error.message).join(", "));
          } else {
            // Manejo de errores no esperados
            alert("Oops! Algo salió mal y no pudimos enviar tu formulario.");
          }
        });
      }
    })
    .catch(error => {
      // Manejo de errores de red (por ejemplo, problemas de conexión)
      alert("Oops! Hubo un problema al enviar tu formulario.");
    });
  });
});
