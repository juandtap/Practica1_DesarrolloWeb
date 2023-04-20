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
        
        return false;
    }
    if (apellido === "") {
       
        return false;
    }
    if (telefono === "") {
       
        return false;
    }
    if (email === "") {
        
        return false;
    }
    // Si todos los campos son válidos, enviamos el formulario
    alert('Datos enviados correctamente')
    return true;
}

function cambiarEstilo() {
    var estiloActual = document.getElementById("estilo-pagina").getAttribute("href");
    var nuevoEstilo = "";
    if (estiloActual == "styles1.css") {
      nuevoEstilo = "styles2.css";
    } else {
      nuevoEstilo = "styles1.css";
    }
    document.getElementById("estilo-pagina").setAttribute("href", nuevoEstilo);
  }
  