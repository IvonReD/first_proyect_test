function isValidCard (num){
  var dateNum = prompt('Ingrese los numeros de su tarjeta:');
  var dateOne = dateNum.split(""); // dividimos la cadena
  var invertNum = dateOne.reverse(); // invertimos los valores
  var unitNum = invertNum.join();
  var mulNum = "";
  var mulNumNew = "";
  suma = 0;
  for(var i=0; i < unitNum.length; i +=2){ // empieza a contar desde el ultimo elemento hasta el primero
    /*compara que si se ingresa un espacio marca una alerta*/
    if( unitNum.indexOf (' ') != -1){
        alert("No ingresar espacios!!");
        return;
     }
      mulNum = parseInt(unitNum.charAt(i))*2; // multiplicar la posicion par por dos

      if(mulNum >=10){  // si el resultado tiene dos digitos se suman entre ellos
       mulNum = mulNumNew.charAt(0) + mulNumNew.charAt(1);
       suma= suma + mulNum;
     }

  }

  document.write("El Numero de la tarjeta es:" + " " );
}
isValidCard();


























function isValidCard (num){
  var dateNum = parseInt(prompt('Ingrese los numeros de su tarjeta:'));
  var newDateNum = dateNum.length;
  var newList= [];

  for(var i=0; i < newDateNum; i++){

     newList= newDateNum.split(newDateNum.push());

  }
  document.write(newList);
}

isValidCard();
