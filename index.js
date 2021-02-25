import cipher from './cipher.js';

let mensaje = document.getElementById("mensaje");
let offset = document.getElementById("offset");
let botonDecode = document.getElementById("button_decode");
let botonEncode = document.getElementById("button_encode");
let mensajeGuardado = " ";
let offsetGuardado;

mensaje.addEventListener("keyup", function () {
  mensaje.value = mensaje.value.toUpperCase();
  mensajeGuardado = mensaje.value;
  //console.log(mensajeGuardado);
});

botonEncode.addEventListener("click", function () {
  offsetGuardado = parseInt(offset.value);
  cipher.encode(offsetGuardado, mensajeGuardado);
  //console.log(typeof offsetGuardado, mensajeGuardado); // validar el  tipo  de dato que offset

});

botonDecode.addEventListener("click", function () {
  offsetGuardado = parseInt(offset.value);
  cipher.decode(offsetGuardado, mensajeGuardado);
});


//console.log(cipher.decode);

