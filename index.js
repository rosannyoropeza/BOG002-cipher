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

/*mensaje.addEventListener("keyup", function () {
  mensaje.value = mensaje.value.toUpperCase();
  mensajeGuardado = mensaje.value;
  //console.log(mensajeGuardado);
});*/
cerrar.addEventListener("click", close);
function close() {
  modal_container.classList.remove("show");
}

botonEncode.addEventListener("click", function () {
  //boton cifrar
  mensajeGuardado = mensaje.value;
  offsetGuardado = parseInt(offset.value);
  if (!offsetGuardado) {
    modal_container.classList.add("show");
    modal.innerHTML = `<p> INGRESA CLAVE </P>`;
    enviarBoton.style.display = "none";
  } else {
    let mensajeFinalGuardado = cipher.encode(offsetGuardado, mensajeGuardado);
    modal_container.classList.add("show");
    modal.innerHTML = `<h3> TU MENSAJE CIFRADO ES:</h3><br>
    ${mensajeFinalGuardado}<br>`;
    enviarBoton.style.display = "inline";

    //console.log(typeof offsetGuardado, mensajeGuardado); // validar el  tipo  de dato que offset
    //console.log(mensajeFinalGuardado);
  }
});

botonDecode.addEventListener("click", function () {
  // boton descifrar
  mensajeGuardado = mensaje.value;
  offsetGuardado = parseInt(offset.value);
  if (!offsetGuardado) {
    modal_container.classList.add("show");
    modal.innerHTML = `<p> INGRESA CLAVE </P>`;
  } else {
    let mensajeFinalGuardado = cipher.decode(offsetGuardado, mensajeGuardado);
    modal_container.classList.add("show");
    modal.innerHTML = `<h3> TU MENSAJE DESCIFRADO ES:</h3><br>
    ${mensajeFinalGuardado}<br>`;
    enviarBoton.style.display = "inline";
    //console.log(cipher.decode);
  }
});
