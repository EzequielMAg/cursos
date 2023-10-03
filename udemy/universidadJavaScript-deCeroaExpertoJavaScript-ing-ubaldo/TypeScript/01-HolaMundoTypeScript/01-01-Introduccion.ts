/* 
*   VIDEO N° 240: Introduccion a TypeScript

    TS esta escrito con JS, asi que cualquier codigo de JS compila perfectamente sobre TS.
    Aunque Ts arega varias caracteristicas que hacen mas facil us trabajo con JS, por lo que
    TS se conoce como un super set de JS.

    TS nos va a permitir usar tipos
    La rapida deteccion de errores al momento de estar escribiendo nuestro codigo, y no al momento 
    de ejecutarlo como sucedia con JS.
*/

/* 
*   VIDEO N° 241: Instalacion de TypeScript
    En el CMD escribimos: npm install -g typescript
    -g para que podamos instalarlo a nivel global, y podamos acceder a TS  desde cualquier ubicacion
    Destacar que, hay que tener instalado node.. Y luego al oprimir enter, se instala auomaticamente 
    la ultima version de TS.

    Se creo la carpeta "01-HolaMundoTypeScript.js"
    Dentro creamos archivos "index.html", "funciones.js", a este le pusimos una funcion comun y la llamamos
    lo vimos por el navegador... Y luego a este ultimo file, lo renombramos al formato de ".ts"
*   Pero a los archivos TS hay que hacerlos que "compilen", y esto lo hacemos escribiendo en la terminal:
*   "tsc <nombreArchivo>"" junto con su extension ".ts" o igualmente se puede omitir
*   Esto automaticamente nos crea el archivo con el mismo nombre, pero en .js :v

*   Ahora, lo deseable es que cuando estemos trabajando con un proyecto que es de TS le ppodamos indicar al IDE 
*   que estamos trabajando precisamente con un proyecto de TS.
*   Para eso usamos el comando: tsc -init
    Luego nos crea un archivo de configuracion de TS

*   Como tercer paso seria ideal que se conviertieran automaticamente nuestros archivos TS a JS, para ello
*   ejecutamos el comando: "tsc -w" -> Automaticamente se transpila a JS
*/