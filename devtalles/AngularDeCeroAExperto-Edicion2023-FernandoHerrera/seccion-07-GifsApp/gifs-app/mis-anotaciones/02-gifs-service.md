Ya vimos que en este proyecto vamos a trabajar con una API de gifs que usan varias redes sociales (Fb, X, Teams, etc).

Traeremos los gifs, se mostraran en el HomePage y se guardara en el sidebar una lista con tales busquedas.
Tenemos que empezar a pensar, que tal informacion la tenemos que guardar en algun lugar. Y este lugar va a ser en un SERVICIO.



## @Injectable({providedIn: 'root'})

- Con esta expresion: "providedIn: 'root'" (que se agrega automaticamente cuando creamos el servicio) estamos haciendo/diciendo que el servicio pueda estar disponible en toda la aplicacion. 
  En todos los modulos que injecten el servicio. Si no lo pusieramos, tendriamos que declarar el servicio en los providers del modulo del componente donde vamos a inyectar el servicio. Y si lo vamos a usar en otros modulos, tambien lo tenemos que exportar e importar en el otro modulo. Esa ultima parte, igual que como haciamos con los componentes que queriamos usar en otros modulos.
  Es una mejora desde la version 


## Al servicio hay que inyectarlo!
- Si, esto es un fundamental para poder usarlo! Debemos inyectarlo en los componentes donde lo vamos a necesitar (file '.component.ts').

- Lo vamos a necesitar em el componente de busqueda, asi que procedemos a inyectarlo en tal commponente (file: 'search-box.component.ts').

- Luego de haberlo inyectado en el componente, los atributos del servicio, todo en general, osea su metodos tambien, etc, van a poder ser accedidos como si fuera del componente mismo! Usando el operador 'this'.

## Como trabaja nuestro servicio junto con el componente 'search-box':
Tenemos ya realizado parte del servicio 'gifs', y este ya esta inyectado en el componente 'search.box'.
Entonces, tenemos un metodo en tal componente, que agarra el valor ingresado por el usuario en el input de busqueda, y ese valor se lo pasa al servicio por otro metodo que esta en el servicio (llamado igual): searchTag(tag: string) { . . . } y es el servicio quien se encarga de agregar tal valor al arreglo de busquedas (que esta almacenado en el mismo serivicio, ya que es data de nuestra app).
<br>

## TAREA:
- Queremos mostrar los gifs buscados en formato lista dentro del sidebar. 
- A nivel de codigo, tenemos el componente 'sidebar' y por otro lado, el arreglo con los elemetos buscados guardados en el servicio.
- **La tarea consiste en inyectar el servicio en tal componente e imprimir las busquedas realizadas.**

PD: Logre completa la tarea exitosamente! :)
