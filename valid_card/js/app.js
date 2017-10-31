function isValidCard (num){
  var dateNum = parseInt(prompt('Ingrese los numeros de su tarjeta:'));
  var newDateNum = dateNum.length;
  var newList= [];

  for(var i=0; i < newDateNum; i++){
    if( newDateNum.indexOf (' ') != -1){
        alert("No ingresar espacios!!");
        return;
     }
     newList= newDateNum.split(newDateNum.push());

  }
  document.write(newList);
}

isValidCard();
