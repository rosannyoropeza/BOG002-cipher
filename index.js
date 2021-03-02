import cipher from "./cipher.js";

let mensaje = document.getElementById("mensaje");
let offset = document.getElementById("offset");
let botonDecode = document.getElementById("button_decode");
let botonEncode = document.getElementById("button_encode");
let mensajeGuardado = " ";
let offsetGuardado;
let modal_container = document.getElementById("modal_container");
let cerrar = document.getElementById("cerrar");
let modal = document.getElementById("modal");
let enviarBoton = document.getElementById("enviar");
let destino = document.getElementById("destino");

/*mensaje.addEventListener("keyup", function () {
  mensaje.value = mensaje.value.toUpperCase();
  mensajeGuardado = mensaje.value;
  //console.log(mensajeGuardado);
});*/
cerrar.addEventListener("click", close);
function close() {
  modal_container.classList.remove("show");
}

// enviarBoton.addEventListener("click", function(){
//   let celDestino = parseInt(destino.value);
//   window.open("https://wa.me/" + celDestino + "?text=" + "");
// });

botonEncode.addEventListener("click", function () {
  //boton cifrar
  modal_container.classList.add("show");
  try {
    mensajeGuardado = mensaje.value;
    offsetGuardado = parseInt(offset.value);
    let mensajeFinalGuardado = cipher.encode(offsetGuardado, mensajeGuardado);
    modal.innerHTML = `<h3> TU MENSAJE CIFRADO ES:</h3><br> ${mensajeFinalGuardado}<br><br>`;
    enviarBoton.style.display = "inline";
    enviarBoton.addEventListener("click", function(){
      let celDestino = parseInt(destino.value);
      window.open("https://wa.me/" + celDestino + "?text=" + mensajeFinalGuardado);
    });
    
  } catch (error) {
    modal.innerHTML = error.message;
    enviarBoton.style.display = "none";
  }
});

botonDecode.addEventListener("click", function () {
  // boton descifrar
  modal_container.classList.add("show");
  try {
    mensajeGuardado = mensaje.value;
    offsetGuardado = parseInt(offset.value);
    let mensajeFinalGuardado = cipher.decode(offsetGuardado, mensajeGuardado);
    modal.innerHTML = `<h3> TU MENSAJE DESCIFRADO ES:</h3><br> ${mensajeFinalGuardado}<br><br>`;
    enviarBoton.style.display = "inline";
    enviarBoton.addEventListener("click", function(){
      let celDestino = parseInt(destino.value);
      window.open("https://wa.me/" + celDestino + "?text=" + mensajeFinalGuardado);
    });
  } catch (error) {
    modal.innerHTML = error.message;
    enviarBoton.style.display = "none";
  }
});
