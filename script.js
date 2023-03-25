function convertir() {
  // Obtener el texto ingresado por el usuario
  var textoOriginal = document.getElementById("texto").value;

  // Convertir el texto a UTF-8
  var textoUtf8 = unescape(encodeURIComponent(textoOriginal));

  // Eliminar saltos de línea y otros caracteres especiales
  var textoLimpio = textoUtf8.replace(/\r?\n|\r/g, "");

  // Reemplazar espacios dobles por espacios
  var textoFinal = textoLimpio.replace(/\s+/g, " ");

  // Asegurarse de que el caracter de espacio sea UTF-8
  textoFinal = textoFinal.replace(/ /g, "\u00A0");
  
   // Asegurarse de que los guiones sean guiones UTF-8
  textoFinal = textoLimpio.replace(/-/g, "\u2013");

  // Mostrar el resultado en el textarea correspondiente
  document.getElementById("resultado").value = textoFinal;
}
