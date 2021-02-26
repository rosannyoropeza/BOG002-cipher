import cipher from "./cipher.js";

let mensaje = document.getElementById("mensaje");
let offset = document.getElementById("offset");
let botonDecode = document.getElementById("button_decode");
let botonEncode = document.getElementById("button_encode");
let mensajeFinal = document.getElementById("mensajefinal");
let mensajeGuardado = " ";
let offsetGuardado;

mensaje.addEventListener("keyup", function () {
  mensaje.value = mensaje.value.toUpperCase();
  mensajeGuardado = mensaje.value;
  //console.log(mensajeGuardado);
});

botonEncode.addEventListener("click", function () {
  //boton cifrar
  offsetGuardado = parseInt(offset.value);
  if (!offsetGuardado) {
    alert("INGRESAR CLAVE");
  } 
  else {
    let mensajeFinalGuardado = cipher.encode(offsetGuardado, mensajeGuardado);
    mensajeFinal.innerHTML = mensajeFinalGuardado;
    //console.log(typeof offsetGuardado, mensajeGuardado); // validar el  tipo  de dato que offset
    console.log(mensajeFinalGuardado);
  }
});

botonDecode.addEventListener("click", function () {
  // boton descifrar
  offsetGuardado = parseInt(offset.value);
  let mensajeFinalGuardado = cipher.decode(offsetGuardado, mensajeGuardado);
  console.log(mensajeFinalGuardado)
  mensajeFinal.innerHTML = mensajeFinalGuardado;
  //console.log(cipher.decode);
});
