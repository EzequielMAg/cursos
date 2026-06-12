const dia = 2;

switch (dia) { // Recordar que el switch hace la comparacion estricta: === (valor y tipo)
  case 0:
    console.log('Es Domingo');
    break;
  case 1:
    console.log('Es Lunes');
    break
  case 2:
    console.log('Es Martes');
    break
  case 3:
    console.log('Es Miércoles');
    break
  case 4:
    console.log('Es Jueves');
    break
  case 5:
    console.log('Es Viernes');
    break
  case 6:
    console.log('Es Sábado');
    break
  default:
    console.log("El valor ingresado es incorrecto!");
}

// NOTA: no olvidarse los BREAK si no, va a seguir de largo y en este caso imprimir mas msjs 
//       ademas de la opcion deseada