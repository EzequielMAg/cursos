Para realizar peticiones HTTP Angular tiene una herramienta poderosa...

Pero para poder utilizarla debemos importarla, y lo haremos en el modulo principal, porque probablemente la vamos a utilizar en varios modulos. Procedemos a importarlo en el "app.module":

``import { HttpClientModule } from "@angular/common/http";``

Y tambien lo agregamos, ya que es un modulo, en los imports → "HttpClientModule".


## Vamos a agregar un tipo de dato a una respuesta HTTP
Necesitamos mappear las interfaces para que Ts detecte los tipos de datos que vienen dentro de la response.
Para esto vamo a copiar la response de la query "api.giphy.com/v1/gifs/search?api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk&q=valorant&limit=10".
Y la pegamos en la siguiente herramienta: "https://app.quicktype.io/". Esta nos ayudara a tipar rapidamente algo! Vamoo!


## Paste JSON as Code
Con esta extension, podemos usar la misma herramienta de la pag "QuickType" sin salir de Vs code.. Esta genial!
Va, la extension es de los creadores de la misma pag.
Entonces, una vez copiado el JSON de la response por la query que hicimos en Postman, usamos el siguiente comando: 
``CTRL + SHIPFT + P y luego >Paste JSon as code`` Le ponemos un nombre q nos pide, y listo!!!
