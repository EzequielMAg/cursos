/*
*   No es necesario ponerle "interface" en el nombre del archivo, pero es una buena practica para reconocer rapidamente
*   que este archivo es una interface.

*   ¿Tenemos que importar estas interfaces en el modulo? No hace falta, porque las interfaces no tienen ninguna
*   contraparte de codigo en Js, son propias de Ts, osea significan cero lineas de codigo para Js.
*/


export interface Character {

  name: string;
  power: number;

}
