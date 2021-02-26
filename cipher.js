const cipher = {
  //  decifrar
  decode: function (offsetGuardado, mensajeGuardado) {
    let formula; //declaro  variable  para aplicar  la  formula  cifrado
    let resultado = " "; //declaro  donde se  va  a guardar la cadena  concatenada

    for (let i = 0; i < mensajeGuardado.length; i++) {
      // recorremos la cadena de caracteres
      let mensajeAscci = mensajeGuardado.charCodeAt(i); //convertimos en  ascii
      if (mensajeAscci === 32) {
        formula = " ";
      } else {
        formula = ((mensajeAscci - 65 - offsetGuardado) % 26) + 65;
        if (formula < 65) {
          //si  el  numero ascci  es  menor a 65
          formula = formula + 26; // se le suma 26 que es la cantidad  de  letras del alfabeto
        }
      }
      let mensajeFinal = String.fromCharCode(formula); //convertir de ascii  a caracter
      resultado += mensajeFinal;
    }
    //console.log(resultado);
    return resultado;
  },

  //cifrar
  encode: function (offsetGuardado, mensajeGuardado) {
    let formula; //declaro  variable  para aplicar  la  formula  cifrado
    let resultado = " ";
    for (let i = 0; i < mensajeGuardado.length; i++) {
      // recorremos la cadena de caracteres
      let mensajeAscci = mensajeGuardado.charCodeAt(i); //convertimos en  ascii
      if (mensajeAscci === 32) {
        formula = "";
      } else {
        formula = ((mensajeAscci - 65 + offsetGuardado) % 26) + 65;
      }
      let mensajeFinal = String.fromCharCode(formula); //convertir de ascii  a caracter
      resultado += mensajeFinal;
    }
    //console.log(resultado);
    return resultado;
  },
};

export default cipher;

