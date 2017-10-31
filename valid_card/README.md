# Tarjeta de crédito válida

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

# Pseudocodigo
  1. Crear una funcion que reciba datos
  2. Ingresar datos (por el Usuario)
  3. Verificar los datos ingresados.
      3.1 Si el usuario ingresa espacios (" "), el programa muestra una alerta.
  4. Invertir el arreglo.
  5. Buscar las posiciones pares del arreglo.
      5.1 Las posiciones pares multiplicar por dos.
  6. Si el resultado de la multiplicacion es mayor o igual a 10
      6.1 Sumar los dos digitos.
  7. Sumar todos los numeros de la posiciones pares e impares.
  8. El resultado de la suma de todos los numeros debe dividirse en 10
      8.1 Si el residuo de la division es 0, es valida!!
      8.2 Si el residuo de la division es diferente a 0, es invalida!!

# Diagrama de Flujo
  ![Tarjeta Valida](/asstent/images/validCard.jpg)
