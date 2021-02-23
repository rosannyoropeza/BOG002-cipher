
let mensaje = document.getElementById("mensaje");

mensaje.addEventListener("keyup", function(){
  mensaje.value = mensaje.value.toUpperCase(); 
  console.log(mensaje.value);
});

import cipher from './cipher.js';

console.log(cipher);

