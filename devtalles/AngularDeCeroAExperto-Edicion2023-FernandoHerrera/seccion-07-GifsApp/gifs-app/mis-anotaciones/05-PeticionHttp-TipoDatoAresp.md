## Peticion Http 
Vamos a realziar una peticion Http a este endPoint:
``https://api.giphy.com/v1/gifs/search?api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk&q=valorant&limit=10``
Y vamos a traer la data del endpoint a nuestra aplicacion.
- Hay varias formas para hacer esto "como todo en la vida". Angular ya viene con su propio paquete y componente para hacer peticiones Http basado en observables.
<br>

Para repasar, Fernando nos muestra que en Angular podemos acceder tranquilamente a las promesas y asinc await de JS.
Por eso mismo, nos muestra a hacer la consulta Http con el fetch y luego con el asyncd await.
Tambien podemos usar axius que seria una alternativa al fetch.
Podemos usar las formas anteriores para hacer una peticion Http, pero posiblemente vamos a trabajar con interceptores o  subscribers, para subscribirnos a las respuesta, por que pueden ser que se emtan mas de una vez, o queremos cancelarlo,m y con el fetch no se puede cancelar.. Entonces hay varios motivos por las que nos conviene usar la herramienta propia de angular para consultas Http.
<br>

- Para realizar peticiones HTTP Angular tiene una herramienta poderosa...

- Pero para poder utilizarla debemos importarla, y lo haremos en el modulo principal, porque probablemente la vamos a utilizar en varios modulos. Procedemos a importarlo en el "app.module":

- ``import { HttpClientModule } from "@angular/common/http";``

- Y tambien lo agregamos, ya que es un modulo, en los imports → "HttpClientModule".

- Esto nos habilita a poder usar todo lo que tal modulo exporte.

- Luego en el GifService:
 <pre>
      //! Inyectamos el cliente/servicio del modulo que importamos para hacer peticiones HTTP en app.module
      constructor(private http: HttpClient) { }
 </pre>
<br>

- Y ahora si ya podemos hacer la consulta! Lo haremos en el metodo 'searchTag'.
Buscar en el metodo, pero empezaria algo asi "this.http." accedemos a traves del servicio inyectado y ahora podemos acceder a los metodos para hacer peticiones como : delete, get, put, patch, delete, post, request, etc.

- La consulta Http (al principio) nos queda algo como esto: ``"this.http.get('https://api.giphy.com/v1/gifs/search?api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk&q=valorant&limit=10')";``

- Luego vamos a optimizar este choclo de link, modularizandolo con "new HttpParams()" para agrupar query params.

- **ALGO IMPORTANTE:** despues de la consulta del get, hariamos .then() etc.. Pero esto ya no es una promesa. Al trabajar con este servicio de Angular HttpClient, estamos trabajando con un **Observable**.
Leer la def de tal en el pdf de atajos al final de todo.

- Luego de haber leido. Este observable, solo nos va a emitir un valor, la rta del get. Pero hay observables que son continuos, que siempre estan emitiendo valores.

- Bueno, la cosa que tenemos que subscribirnos al observable para poder agarrar/"·escuchar" el valor que va a emitir, la rta/response de la consulta Http.


## Vamos a agregar un tipo de dato a una respuesta HTTP
Necesitamos mappear las interfaces para que Ts detecte los tipos de datos que vienen dentro de la response.
Para esto vamo a copiar la response de la query "api.giphy.com/v1/gifs/search?api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk&q=valorant&limit=10".
Y la pegamos en la siguiente herramienta: "https://app.quicktype.io/". Esta nos ayudara a tipar rapidamente algo! Vamoo!


## Paste JSON as Code
Con esta extension, podemos usar la misma herramienta de la pag "QuickType" sin salir de Vs code.. Esta genial!
Va, la extension es de los creadores de la misma pag.
Entonces, una vez copiado el JSON de la response por la query que hicimos en Postman, usamos el siguiente comando: 
``CTRL + SHIPFT + P y luego >Paste JSon as code`` Le ponemos un nombre q nos pide, y listo!!!
