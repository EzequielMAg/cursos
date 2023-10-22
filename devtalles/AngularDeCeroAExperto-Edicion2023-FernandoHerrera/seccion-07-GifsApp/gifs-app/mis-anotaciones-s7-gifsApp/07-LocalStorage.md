- Cuando recargamos el navegador, perdemos todo lo que teniamos haciendo, en este caso, nuestros gifs y la lista del sidebar de los gifs buscados.

- Nosotros queremos mantener la informacion luego de actualizar la pagina.

- Angular, en gral ningun framework de frontend, Vue, React (libreria), ninguno se conecta directamente a una BD.
  Aplicaciones puramente de frontend, no pueden conectarse a una BD. Aunque se pudiera hacer, seria un riesgos de seguridad tremendo.
  Porque el codigo de js es expuesto, y se puede ver en el lado del cliente. Porque el cliente recibe todo el codigo del cliente.

- Si usamos un insert into, ahi lo mirariamos, y cuando usamos insert usamos credenciales, y estas credenciales tambien estarian expuestas. Por el cual no es conveniente pensar de esta forma, igual no se puede hacer. 

- Angular, como React, como Esbelt, como Vue, como cualq otro framework de fronted, nuevamente hablando del lado del navegador web del cliente usan los backend para que este sea quien trabaje con la BD porque el backend esta protegido. No cualquiera puede ver el codigo fuente del backend.

- No tenemos ningun backend hasta el momento. Pero, igualmente. tenemos otras herramientas para hacer persistente la informacion de nuestra aplicacion:
    - LOCAL STORAGE.
    - SESSION STORAGE.
    - COOKIES.

Las 3 sirven para mentener cierto tipo de datos: objetos serializados como string.
Solo string soportan. 

- Diferencias entre ellos:
   - LOCAL STORAGE y SESSION STORAGE tienen un limite de almacenamiento mayor al de las COOKIES.
     En estos 2 primeros, dependiendo del navegador web pueden llegar hasta 50mb, pero usualmente es mayor el epsacio de estops lugares que las cookies.

- Diferencias particulares:
    - LOCAL STORAGE: persistente siempre.
    - SESSION STORAGE: persistente hasta que se cierre el navegador. Apenas se cierra el navegador web, se limpia automaticamente toda la informacion.
    - COOKIES: toda la informacion que tengamos aca, automaticamente van a viajar al Backend. Por algo nos preguntan siempre.
               Son utilizadas para compartir informacion entre el frontend y el backend. Viajan cuando hacemos peticiones GET, POST, cualq tipo de peticion con algun backend, las cookies viajan..

<br>

Creamos un metodo en nuestro servicio, el cual va a guardar la data en el Local Storage.

<pre>
      private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
      }
</pre>


- Para guardar algo usamos el metodo del objeto LocalStorage: setItem
- RemoveItem: Para borrar algo.
- .length: p/ saber la cant de elementos.
- getItem: obtener un elemento.

<br>

- El local storage no se importa de ningun lugar. Solo lo usamos y ya, ya que es soportado por JS, viene en el EcmaScript y ya lo tenemos en TS.

- Todo lo que guardemos en el local storage, solo va a ser visible en el host actual (localhost:4200).
- Segun en que dominio, solo podremos ver, lo que se graba en el dominio en el que se esta parado.
               


