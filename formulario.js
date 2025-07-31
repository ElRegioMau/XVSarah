document.getElementById("confirmacion-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    nombre: form.nombre.value,
    telefono: form.telefono.value,
    invitados: form.invitados.value,
    asistencia: form.asistencia.value,
    mensaje: form.mensaje.value
  };

  fetch("https://script.google.com/macros/s/AKfycbwA5SpjX4BKHDRMCl-uFg230Ybg_ACW_Z0rwJb9axPxvyUTzkGjfmoskQn5G8Cgt4hepQ/exec", {
    method: "POST",
    mode: "no-cors", // Para evitar problemas de CORS
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  alert("Gracias por confirmar. ¡Te esperamos!");
  form.reset();
});
