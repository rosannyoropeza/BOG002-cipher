export function information() {
    const info = `
        <div>
            <h1>Bienvenid@s</h1>
            <p>
                En <strong>Secretos de Amig@s</strong> podras enviar mensajes encriptados mediante la red social WhatsApp.
            </p>
            <p>
                El tipo de encriptación que usamos es el metodo del <strong>Cifrado Cesar</strong>. El cual requiere de un código de encriptación
                que corresponde a la cantidad de desplazamientos en el alfabeto que le permitira cifrar o descifrar el mensaje.
            </p>
            <p>
                <strong>RECUERDA!!!</strong> Para descifrar el mensaje debes saber con que código se encripto.
            </p>
            <hr>
            <h1>Instrucciones</h1>

            <ol>
                <li value="1.">Seleciones el pais, para obtener el prefijo del número de teléfono al cual se enviara el mensaje.</li>
                <li value="2.">Ingrese el número teléfono de destino.</li>
                <li value="3.">Ingrese el código de encriptación. <strong>RECUERDA!</strong> puede ser positivo o negativo.</li>
                <li value="4.">Ingresa el mensaje.</li>
                <li value="5.">Selecciona la opción que desees. (Cifrar o descifrar).</li>
            </ol>

            <p>
                Seguidamente se abrira una ventana, donde podra visualizar su mensaje de acuerdo a la opción seleccionada. Ahora
                solo tendra que hacer <strong>click en el boton de whatsApp</strong> para que sea enviado al número que introdujo como
                destinatario.
            </p>
            <hr>
            <h4>
                Gracias por ser parte de Secretos de Amig@s.
            </h4>

            <h4>
                Donde tus secretos, si son secretos.
            </h4>
    </div>`;

    const divInformacion = document.createElement("divInformacion");
    divInformacion.innerHTML = info;

    return divInformacion;
}