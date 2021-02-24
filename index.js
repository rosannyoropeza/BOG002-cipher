import cipher from './cipher.js';

let mensaje = document.getElementById("mensaje");
let offset = document.getElementById("offset");
let botonDecode = document.getElementById("button_decode");
let botonEncode = document.getElementById("button_encode");
let mensajeGuardado = " ";
let offsetGuardado = 0;

mensaje.addEventListener("keyup", function () {
  mensaje.value = mensaje.value.toUpperCase();
  mensajeGuardado = mensaje.value;
  //console.log(mensajeGuardado);
});

botonEncode.addEventListener("click", function () {
  offsetGuardado= offset.value;
  cipher.encode(offsetGuardado, mensajeGuardado);

});

botonDecode.addEventListener("click", function () {
  offsetGuardado= offset.value;
  cipher.encode(offsetGuardado, mensajeGuardado);
});


console.log(cipher.decode);

