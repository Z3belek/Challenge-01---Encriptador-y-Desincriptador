// Encriptar y desenciptar
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Botones //

// Botón para encriptar
const btnEncriptar = document.getElementById("btn-encriptar");

// Botón para desencriptar
const btnDesencriptar = document.getElementById("btn-desencriptar");

// Botón para limpiar los textarea
const btnLimpiar = document.getElementById("btn-limpiar");

// Botón para copiar el texto encriptado
const btnCopiar = document.getElementById("btn-copiar");


// Eventos //

// Evento para encriptar
btnEncriptar.addEventListener("click", () => {
    const texto = document.getElementById("encrypt-decrypt").value;
    const textoEncriptado = encriptar(texto);
    document.getElementById("result").value = textoEncriptado;
});

// Evento para desencriptar
btnDesencriptar.addEventListener("click", () => {
    const texto = document.getElementById("encrypt-decrypt").value;
    const textoDesencriptado = desencriptar(texto);
    document.getElementById("result").value = textoDesencriptado;
});

// Evento para limpiar los textarea
btnLimpiar.addEventListener("click", limpiar);

// Evento para copiar el texto encriptado
btnCopiar.addEventListener("click", () => {
    if (document.getElementById("result").value === "") {
        alert("No hay texto para copiar");
    } else {
        copiar()
        alert("Texto copiado");
    }
});

// Si no se ingresa texto, se muestra una imagen en bg-result, si se ingresa texto, se oculta la imagen y se muestra el texto encriptado
btnEncriptar.addEventListener("click", () => {
    if (document.getElementById("result").value !== "") {
        if (document.getElementById("result").value === "undefined") {
            console.log("undefined");
        } else {
            document.getElementById("bg-result").classList.add("bg-result-show");
            document.getElementById("bg-result-none").classList.add("bg-result-none-hidden");
        }
    } else {
        document.getElementById("bg-result").classList.remove("bg-result-show");
        document.getElementById("bg-result-none").classList.remove("bg-result-none-hidden");
    }
});

btnDesencriptar.addEventListener("click", () => {
    if (document.getElementById("result").value !== "") {
        if (document.getElementById("result").value === "undefined") {
            console.log("undefined");
        } else {
            document.getElementById("bg-result").classList.add("bg-result-show");
            document.getElementById("bg-result-none").classList.add("bg-result-none-hidden");
        }
    } else {
        document.getElementById("bg-result").classList.remove("bg-result-show");
        document.getElementById("bg-result-none").classList.remove("bg-result-none-hidden");
    }
});

btnLimpiar.addEventListener("click", () => {
    document.getElementById("bg-result").classList.remove("bg-result-show");
    document.getElementById("bg-result-none").classList.remove("bg-result-none-hidden");
});


// Función para encriptar
function encriptar(texto) {
    if (validarTexto(texto)) {
        alert("El texto ingresado no es válido");
        return;
    } else {
        let textoDesencriptado = [];
        for (let i = 0; i < texto.length; i++) {
            switch (texto[i]) {
                case "a":
                    textoDesencriptado.push("ai");
                    break;
                case "e":
                    textoDesencriptado.push("enter");
                    break;
                case "i":
                    textoDesencriptado.push("imes");
                    break;
                case "o":
                    textoDesencriptado.push("ober");
                    break;
                case "u":
                    textoDesencriptado.push("ufat");
                    break;
                default:
                    textoDesencriptado.push(texto[i]);
                    break;
            }
        }
        return textoDesencriptado.join("");
    }
}

// Función para desencriptar
function desencriptar(texto) {
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

// Función para limpiar el textarea
function limpiar() {
    document.getElementById("encrypt-decrypt").value = "";
    document.getElementById("result").value = "";
}

// Función para copiar el texto
function copiar(texto) {
    navigator.clipboard.writeText(document.getElementById("result").value);
}

// Función para validar el texto ingresado
function validarTexto(texto) {
    const regex = new RegExp(/[^a-z ]/);
    return regex.test(texto);
}