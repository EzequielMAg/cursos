Un modulo, nuevamente, no es mas que una simple clase que tiene un decorador.

Un modulo en si, es un agrupador. Es decir, encapsula componentes, servicios, entre otros. 
El objetivo de los modulos es que sus elementos esten encapsulados y protegidos del mundo exterior.
Si yo necesito exponer algo al mundo externo, seria fuera de la carpeta counter principal, debo exportarlos. Esto lo logramos a traves del atributo "exports" del modulo.

Cualquier proyecto de angular debe tener mas de un modulo.

Procederemos a crear un modulo, de forma MANUAL!

Para compartir componentes entre modulos, debo exportarlos, eso ya lo vimos, pero TAMBIEN debemos importarlos en el modulo donde lo vamos a utilizar. Entonces debemos buscar el atributo IMPORTS y ahi agregar el nombre del modulo que contiene el componente que necesitamos.

Una forma ordenada de tener las importaciones.. Seria en el siguiente orden:
- Importaciones de JS (si es que las tuvieramos), luego las de Angular, librerias de terceros y despues finalmente las de nuestro codigo (primero las importaciones de nuestros modulos y luego las de nuestros componentes).



``Los modulos van en los imports``
