function convertir() {
  // Obtener el texto ingresado por el usuario
  var textoOriginal = document.getElementById("texto").value;

  // Convertir el texto a UTF-8
  var textoFinal = unescape(encodeURIComponent(textoOriginal));

  //convertir guiones = â
  //textoFinal = textoFinal.replace("â","-");
  
  
  // var textoModificado = textoFinal;
  //var indice = textoModificado.toLowerCase().indexOf("â");
  //while (indice !== -1) {
  //  textoModificado = textoModificado.substring(0, indice) + "-" + textoModificado.substring(indice + 1);
  //  indice = textoModificado.toLowerCase().indexOf("â", indice + 1);
  // }
  //textoFinal = textoModificado;
  
  textoFinal = reemplazarPalabra(textoFinal,"â","-");
  
  //quitar = 
 //var textoModificado = textoFinal;
  //var indice = textoModificado.toLowerCase().indexOf("");
  //while (indice !== -1) {
   // textoModificado = textoModificado.substring(0, indice) + "" + textoModificado.substring(indice + 1);
   // indice = textoModificado.toLowerCase().indexOf("", indice + 1);
 // }
  //textoFinal = textoModificado;
  
  textoFinal = reemplazarPalabra(textoFinal,"","");
  
  //-
  // var textoModificado = textoFinal;
  //var indice = textoModificado.toLowerCase().indexOf("-");
  //while (indice !== -1) {
   // textoModificado = textoModificado.substring(0, indice) + "-" + textoModificado.substring(indice + 1);
   // indice = textoModificado.toLowerCase().indexOf("-", indice + 1);
  //}
  //textoFinal = textoModificado;
  
  textoFinal = reemplazarPalabra(textoFinal,"-","-");

  // Eliminar saltos de línea y otros caracteres especiales
  //textoFinal = textoFinal.replace(/\r?\n|\r/g, "");
  textoFinal = reemplazarPalabra(textoFinal,/\r?\n|\r/g,"");

  // Reemplazar espacios dobles por espacios
  //textoFinal = textoFinal.replace(/\s+/g, " ");
  textoFinal = reemplazarPalabra(textoFinal,/\s+/g," ");

  // Asegurarse de que el caracter de espacio sea UTF-8
  //textoFinal = textoFinal.replace(/ /g, "\u00A0");
  textoFinal = reemplazarPalabra(textoFinal,/ /g,"\u00A0");
  
   // Asegurarse de que los guiones sean guiones UTF-8
  //textoFinal = textoFinal.replace(/-/g, "\u2013");
  textoFinal = reemplazarPalabra(textoFinal,/-/g,"\u2013");
  
  
  //formato mac
   //textoFinal = textoFinal.replace(/\n/g, '\r');
   textoFinal = reemplazarPalabra(textoFinal,/\n/g,'\r');

  // Mostrar el resultado en el textarea correspondiente
  document.getElementById("resultado").value = textoFinal;
}

function reemplazarPalabra(textoOriginal, palabraOriginal, palabraNueva) {
  // Reemplazar todas las apariciones de la palabra original
  var textoModificado = textoOriginal;
  var indice = textoModificado.toLowerCase().indexOf(palabraOriginal.toLowerCase());
  while (indice !== -1) {
    textoModificado = textoModificado.substring(0, indice) + palabraNueva + textoModificado.substring(indice + palabraOriginal.length);
    indice = textoModificado.toLowerCase().indexOf(palabraOriginal.toLowerCase(), indice + palabraNueva.length);
  }

  // Devolver el nuevo texto con las palabras reemplazadas
  return textoModificado;
}

