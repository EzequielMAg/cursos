Ya vimos que en este proyecto vamos a trabajar con una API de gifs que usan varias redes sociales (Fb, X, Teams, etc).

Traremos los gifs, se mostraran en el HomePage y se guardara en el sidebar una lista con tales busquedas.
Tenemos que empezar a pensar, que tal informacion la tenemos que guardar en algun lugar. Y este lugar va a ser en un SERVICIO.



## @Injectable({providedIn: 'root'})

- Con esta expresion: "providedIn: 'root'" (que se agrega automaticamente cuando creamos el servicio) estamos haciendo/diciendo que el servicio pueda estar disponible en toda la aplicacion. 
  En todos los modulos que injecten el servicio. Si no lo pusieramos, tendriamos que declarar el servicio en los providers del modulo del componente donde vamos a inyectar el servicio. Y si lo vamos a usar en otros modulos, tambien lo tenemos que exportar e importar en el otro modulo. Esa ultima parte, igual que como haciamos con los componentes que queriamos usar en otros modulos.
  Es una mejora desde la version 
