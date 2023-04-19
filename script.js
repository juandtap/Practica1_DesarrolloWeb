console.log('Hello!');

function cambiaColor() {
    document.getElementById("texto").style.color = "blue";
}

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
    return true;
}