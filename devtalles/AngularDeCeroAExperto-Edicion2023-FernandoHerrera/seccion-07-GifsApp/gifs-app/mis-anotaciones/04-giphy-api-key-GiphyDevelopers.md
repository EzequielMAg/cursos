LINK: https://developers.giphy.com/dashboard/?create=true

- Entramos a tal pag para usar la API.

- Click en "create a App"

- Tenemos dos formas para crear la "app": "SDK" o " API".
  La diferencia es que 'API' es mediante una peticion HTTP que es justamente con el que vamos a trabajar.
  Y el  kit de desarrollo de software (SDK), consiste en que usemos una libreria de ellos, la instalamos como dependencia y podemos usar los metodos que nos dan para conectarnos con su backend.

- Entonces, selecionas API, next
- Nombre de la app y descripcion, next next
- Nos genera un enlace que seria la "clave API".
- Creamos una nueva prop private "apiKey" en nuestro gifs service con el enlace generado. Esta no va acambiar, asi que tambien poriamos crear la como una constante... Pero por el momento lo dejamos como atributo :v
- Abrimos postman
- En la pagina "giphy" vamos a la pestaña de la documentacion, luego a la guia de inicio rapido, mejor: https://developers.giphy.com/docs/api/#quick-start-guide
- De la pag sacamos un enlace, pero es el siguiente. Igual.. Hay q leer la docu! 
- Vamos a postman y pegamos: api.giphy.com/v1/gifs/search
- Aunq si lo mandamos d esta forma nos va a tirar un error:
<pre>
    {
        "data": [],
        "meta": {
            "status": 401,
            "msg": "No API key found in request.",
            "response_id": ""
        }
    }
</pre>

- Debemos usar "query params". Quedaria asi: 
 ``api.giphy.com/v1/gifs/search? api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk``
 Que le agregamos nuestra api_Key al final, como valor del atributo

- Trabajando con postman, finalmente asi nos queda nuestra query: 
``api.giphy.com/v1/gifs/search?api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk&q=valorant&limit=10``

