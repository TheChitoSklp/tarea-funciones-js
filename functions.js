// Ejercicio 1: Mayúsculas y Minúsculas
// Texto inicial: "Hola Mundo"
// Tarea: Convertir toda la cadena a mayúsculas, y luego a minúsculas.
function MayusculasMinusculas(texto) {
  console.log(texto.toUpperCase());
  console.log(texto.toLowerCase());
}
MayusculasMinusculas("Hola Mundo");

// Ejercicio 2: Contando Caracteres
// Texto inicial: "JavaScript es asombroso"
// Tarea: Contar cuántas letras 'a' contiene la cadena.
function contarCaracteres(texto) {
  let contador = 0;
  contador = texto
    .split("")
    .filter((char) => char !== " ")
    .join("").length;
  return console.log(contador);
}
contarCaracteres("JavaScript es asombroso");
// Ejercicio 3: Extracción de Subcadenas
// Texto inicial: "Desarrollo con JavaScript"
// Tarea: Extraer la palabra "JavaScript" de la cadena completa.
function extraerSubcadena(texto, subcadena) {
  let indice = texto.indexOf(subcadena);
  if (indice !== -1) {
    return console.log(texto.substring(indice, indice + subcadena.length));
  }
  return "Subcadena no encontrada";
}
extraerSubcadena("desarrollo con javascript", "javascript");
// Ejercicio 4: Comparación de Cadenas
// Texto inicial: "Hola", "hola"
// Tarea: Determinar si las dos cadenas son iguales, ignorando mayúsculas y minúsculas.
function compararCadenas(cadena1, cadena2) {
  return console.log(cadena1.toLowerCase() === cadena2.toLowerCase());
}
compararCadenas("Hola", "hola");
// Ejercicio 5: Concatenación
// Texto inicial: "Hola", "Mundo"
// Tarea: Concatenar las dos cadenas para formar "Hola Mundo".
function concatenarCadenas(cadena1, cadena2) {
  return console.log(cadena1 + " " + cadena2);
}
concatenarCadenas("hola", "mundo");
// Ejercicio 6: Eliminación de Espacios
// Texto inicial: "    JavaScript    "
// Tarea: Eliminar los espacios en blanco al principio y al final de la cadena.
function eliminarEspacios(texto) {
  return console.log(texto.trim());
}
eliminarEspacios("   JavaScript   ");
// Ejercicio 7: Reemplazo de Palabras
// Texto inicial: "JavaScript es genial"
// Tarea: Reemplazar "genial" por "asombroso".
function reemplazarPalabra(texto, aremplazar, reemplazo) {
  return console.log(texto.replace(aremplazar, reemplazo));
}
reemplazarPalabra("JavaScript es genial", "genial", "asombroso");
// Ejercicio 8: Inversión de Cadena
// Texto inicial: "Desarrollo"
// Tarea: Invertir el orden de los caracteres de la cadena.
function invertirCadena(texto) {
  return console.log(texto.split("").reverse().join(""));
}
invertirCadena("desarrollo");
// Ejercicio 9: División en Array
// Texto inicial: "manzana,banana, cereza"
// Tarea: Dividir la cadena en un array utilizando la coma como separador.
function dividirEnArray(texto) {
  return console.log(texto.split(","));
}
dividirEnArray("manzana,banana, cereza");
// Ejercicio 10: Encuentra la Posición
// Texto inicial: "Aprendiendo JavaScript"
// Tarea: Encontrar la posición inicial de la palabra "JavaScript".
function encontrarPosicion(texto, subcadena) {
  return console.log(texto.indexOf(subcadena));
}
encontrarPosicion("aprendiendo javascript", "javascript");
