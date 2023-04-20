console.log('Hello!');

function cambiaColor() {
    document.getElementById("texto").style.color = "blue";
}

// hace que los links sean abiertos en una nueva tab del navegador
var footerLinks = document.querySelectorAll("footer a");
  for (var i = 0; i < footerLinks.length; i++) {
    footerLinks[i].setAttribute("target", "_blank");
  }

var telefonoInput = document.getElementById("telefono");

telefonoInput.addEventListener("input", function () {
    var telefonoValue = telefonoInput.value;
    var ultimoCaracter = telefonoValue.charAt(telefonoValue.length - 1);

    if (isNaN(ultimoCaracter)) {
        telefonoInput.value = telefonoValue.slice(0, -1);
    }
});



function validar() {
    // Obtenemos los valores de los campos
    var nombres = document.getElementById("nombres").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();

    // Validamos los campos
    if (nombres === "") {
        document.getElementById("error-nombres").innerHTML = "Por favor, ingrese su nombre";
        return false;
    }
    if (apellido === "") {
        document.getElementById("error-apellido").innerHTML = "Por favor, ingrese su apellido";
        return false;
    }
    if (telefono === "") {
        document.getElementById("error-telefono").innerHTML = "Por favor, ingrese su número de teléfono";
        return false;
    }
    if (email === "") {
        document.getElementById("error-email").innerHTML = "Por favor, ingrese su correo electrónico";
        return false;
    }
    // Si todos los campos son válidos, enviamos el formulario
    alert('Datos enviados correctamente')
    return true;
}