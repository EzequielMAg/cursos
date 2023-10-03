/* 
*   VIDEO N° 246: Uso de modulos en Ts
*/

import {Persona} from "./05-02-Persona"; /* No es necesario especificar el .ts, porq automaticamente nos reconoce el 

    archivo de typescript. Sin embargo, para ejecutar nuestros modulos, no basta con abrir nuestro archivo index.html, 
    en este caso se necesita resovler a trave del concepto de web pack, ya que se necesita de un servidor para que se 
    resuelvan los modulos
!   Ejecutamos el siguiente comando:    npm install webpack  webpack-cli webpack-dev-server
    Luego se descarga el webpack, ya que necesitamos empaquetar y distribuir nuestros modulos a este servidor, basicamente es 
    como hacer un deploy de nuestra applicacion al servidor

*   Como siguiente paso, vamos a instalar el TypeScript loader, para que podamos cargar nuestras clases
!   Usamos el siguiente comando:    npm install typescript ts-loader --save-dev

*   Luego, generamos nuestro archivo package.json, a traves del siguiente comando:
!   npm init -y

    Luego en el archivo package.json, agregamos al final, el siguiente codigo:
    "start": "webpack-dev-server --mode development"
    Con tal comando se va a poder ejecutar el comando start, lo que va a hacer ese ejcutar nuestro webpack server en el modo de
    desarrollo

    Y finalmente vamos a crear nuestro archivo "webpack.config.js", donde se pega el codigo pasado por el prof
    El cual lo que va a hacer es inicialziar nuestro servidor de webpack
*/


let persona1 = new Persona("Ezequiel");

console.log("hola");
console.log(persona1.nombre);


