

function codeCesar(cipher){
  var arrText = prompt('Ingresa el dato a cifrar:');
  var newText= arrText.toUpperCase();
  var newChain = "";
  var newCharacter = "";
  var newArrText = [];

    for(var i=0; i<newText.length; i++){  // realiza la iteracion de la cadena que Ingresa

        /*Se valua que los dotos no sean espacios  y numeros, En caso contrario manda un mensaje*/
      if( newText.indexOf (' ') != -1 || newText.indexOf (parseInt('0')) != -1 || newText.indexOf (parseInt('1')) != -1
       || newText.indexOf (parseInt('2')) != -1 || newText.indexOf (parseInt('3')) != -1 || newText.indexOf (parseInt('4')) != -1
       || newText.indexOf (parseInt('5')) != -1 || newText.indexOf (parseInt('6')) != -1 || newText.indexOf (parseInt('7')) != -1
       || newText.indexOf (parseInt('8')) != -1 || newText.indexOf (parseInt('9')) != -1){

         alert("Los datos no corresponden solo letras, Ingrese nuevamente la informacion!!");
         return;
      }
      /* Se convierte de codigo ASCII  a string
         Se avanza 7 espacion dentro del codigo ASCII (formula del( X + n) %26)
         x= posicion de la letra
         n= numero fijo (33) */
    newCharacter = newText[i].charCodeAt() + 7;
           /*Se evalua, si pasa de Z (90 = ASCII)  regresar el valor transformado*/
           if( newCharacter <= 90 ){
                newChain = (String.fromCharCode(newCharacter)); // convierte los caracteres ASCII en String
                newArrText.push(newChain);
            }else {
             //Se resta newChar - 90(valor de Z), y la diferencia se sumara a 64.
              difDigits = newCharacter - 90;   //si la posicion de la letra es mayor a 90 se resta 90
              newCharacter = 64 + difDigits;  // una vez restado se le suma 64 para obtener el nuevo valor
              newChain = (String.fromCharCode(newCharacter)); //Convierte de codigo ASCII a una letra
              newArrText.push(newChain);
          }
    }

document.write("La Cadena Cifrada es:" + " " + newArrText);  // Se muestra en pagina, se une los elementos

}

codeCesar();
