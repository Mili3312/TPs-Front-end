 //VALIDAR FORMULARIO ANTES DE ENVIARLO
 function validarFormulario() {
    var form = document.getElementById("alumno-form");
    var nombre = form.name.value;
    var apellido = form.lastname.value;
    var legajo = form.file.value;
    var email = form.email.value;

    //VERIFICA LOS CAMPOS QUE SON OBLIGATORIOS
    if (!nombre || !apellido || !legajo || !email) {
        mostrarError("Todos los campos son obligatorios.");
        return false;
    }
//VALIDA EL FORMATO DEL EMAIL
    if (!validarEmail(email)) {
        mostrarError("El formato del correo electrónico no es válido.");
        return false;
    }

    return true;
}

//MUESTRA MENSAJE DE ERROR
function mostrarError(mensaje) {
    var errorDiv = document.getElementById("error-message");
    errorDiv.innerText = mensaje;
    errorDiv.style.display = "block";
    //OCULTA EL MENSAJE DESPUÉS DEL TIEMPO ORDENADO
    setTimeout(function() {
        errorDiv.style.display = "none";
    }, 3000);
}
//VALIDAR EL FORMATO DEL EMAIL
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//CALCULA EL PROMEDIO DE LAS NOTAS INGRESADAS
function calcularPromedio() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var nota5 = parseFloat(document.getElementById("nota5").value);

    var totalNotas = 0;
    var cantidadNotas = 0;

    //SUMA LAS NOTAS VALIDAS Y CUENTA LA CANTIDAD DE NOTAS QUE SE INGRESARON
    if (!isNaN(nota1)) {
        totalNotas += nota1;
        cantidadNotas++;
    }
    if (!isNaN(nota2)) {
        totalNotas += nota2;
        cantidadNotas++;
    }
    if (!isNaN(nota3)) {
        totalNotas += nota3;
        cantidadNotas++;
    }
    if (!isNaN(nota4)) {
        totalNotas += nota4;
        cantidadNotas++;
    }
    if (!isNaN(nota5)) {
        totalNotas += nota5;
        cantidadNotas++;
    }

    //CALCULAR EL PROMEDIO SI HAY NOTAS INGRESADS
    if (cantidadNotas > 0) {
    var promedio = totalNotas / cantidadNotas;
    document.getElementById("resultado-promedio").innerText = "Promedio: " + promedio.toFixed(2);
    //SI NO SE INGRESÓ NOTA NO DA NINGÚN PROMEDIO
} else {
    document.getElementById("resultado-promedio").innerText = "";
}
}


