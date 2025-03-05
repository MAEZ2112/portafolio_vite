document.querySelector("form").addEventListener("submit", function (event) {
    const nombre = document.getElementById("txt_Nombre").value.trim();
    const email = document.getElementById("txt_Email").value.trim();
    const telefono = document.getElementById("txt_Numero").value.trim();
    const mensaje = document.getElementById("txtLongText").value.trim();

    let errores = [];

    if (nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        errores.push("El nombre solo puede contener letras y espacios.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.push("El correo electrónico no es válido.");
    }

    const telefonoRegex = /^[1-9][0-9]{7,11}$/;
    if (!telefonoRegex.test(telefono)) {
        if (telefono.startsWith("0")) {
            errores.push("El número de teléfono no puede comenzar con 0.");
        } else {
            errores.push("El número de teléfono debe tener entre 8 y 12 dígitos y no contener letras.");
        }
    }

    if (mensaje.length > 0 && mensaje.length < 10) {
        errores.push("Si decides escribir un mensaje, debe tener al menos 10 caracteres.");
    }

    if (errores.length > 0) {
        event.preventDefault();
        alert("Errores en el formulario:\n" + errores.join("\n"));
    }
});