function redirigirContactoDetalles(contacto) {
    window.location.href = 'DetallesContacto.html?contacto=' + encodeURIComponent(contacto);
}