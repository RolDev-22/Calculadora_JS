
function insert(valor) { //insertar los valores en pantalla, el valor entrante es de cada uno de los botones
  document.getElementById("pantallaCalcu").value += valor;
}

function borrar() { //limpiar pantalla 
  document.getElementById("pantallaCalcu").value = ""; //setea el valor en blanco a pantalla
}

function eliminarUno() { //eliminar un numero o caracter de la pantalla
  const valorPantalla = document.getElementById("pantallaCalcu").value; //seleccionamos el valor en pantalla

  let tamanoValor = valorPantalla.length; //tomamos el tamaño del string que hay en pantalla

  let valorNuevo = valorPantalla.slice(0, tamanoValor - 1); //eliminamos el ultimo valor de la cadena de string en pantalla

  document.getElementById("pantallaCalcu").value = valorNuevo; //seteamos el nuevo valor sin el que era el ultimo cuando se extrajo
}

function calcular() {
  const valorPantallaCal = document.getElementById("pantallaCalcu").value;

  if (valorPantallaCal.length > 0 && !comprovacion(valorPantallaCal[0])) { //si el tamaño de lo de la panatalla es mayor a cero y no comienza con * ó /
    const resultado = eval(valorPantallaCal); //Función interna de JS para realizar operaciones matemáticas con strings
    document.getElementById("pantallaCalcu").value = resultado;
  } else {
    document.getElementById("pantallaCalcu").value;
  }
}

function comprovacion(caracter){ //comprovación de que lo de la pantalla no inicia con * ó /
  return (caracter==='/' || caracter==='*'); //devolución de true si se cumple alguna, false si no
}
