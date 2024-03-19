// Acceder al elemento HTML del input que recibe el texto a encriptar o desencriptar
const textoInput = document.getElementById("input");
const textoOutput = document.getElementById("output");

//interfaces que se encarga de dar formato, son las "llaves" de encriptación para las funciones de encriptar y desencriptar
//Requisitos: Debe funcionaar solo con letras minusculas, no debe ser utilizado con letras con acento ni caracteres especiales

const modelEncriptar = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};

const modelDesencriptar = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
};

// Funcion que se encarga de encriptar el texto ingresado, tomando como referencia el modelo para encriptarlo

function encriptar(texto) {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    //compara el texto ingresado dependiendo del modelo y lo encripta
    textoEncriptado += modelEncriptar[letra] !== undefined ? modelEncriptar[letra] : letra;
  }
  return textoEncriptado;  
}

document.getElementById("encriptar").addEventListener("click", () => {
  const texto = textoInput.value;
  const textoEncriptado = encriptar(texto);
  document.getElementById("output").innerText = textoEncriptado;
});

// Funcion que se encarga de desencriptar el texto ingresado, tomando como referencia el modelo
function desencriptar(texto) {
  let textoDesencriptado = textoInput.value;
  for (let clave in modelDesencriptar) {
    //Remplaza todas las letras del texto y las reemplaza 
    const expresionRegular = new RegExp(clave, 'g');
    textoDesencriptado = textoDesencriptado.replace(expresionRegular, modelDesencriptar[clave]);
  }
  console.log(textoDesencriptado);
  return textoDesencriptado;
}

document.getElementById("desencriptar").addEventListener("click", () => {
  const texto = textoInput.value;
  const textoDesencriptado = desencriptar(texto);
  document.getElementById("output").innerText = textoDesencriptado;
});
