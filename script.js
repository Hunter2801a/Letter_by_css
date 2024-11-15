let pantallas = document.querySelectorAll('.pantalla');

function mostrarPantalla(numero) {
  pantallas.forEach((pantalla, index) => {
    if (index === numero) {
      pantalla.classList.add('active');
    } else {
      pantalla.classList.remove('active');
    }
  });
}
console.log("El archivo JavaScript se ha cargado correctamente");
