- Recordar que la peticion Http sale desde el servicio, pero que el que dispara ese procedimiento, es el componente de busqueda.

- Vamos a inyectar el servicio GifsService en el componente home-page, luego se lo pasamos al componente hijo card-list. 
  De esta forma podremos mostrar todos los Gifs de la response.

- De esta forma anterior estariamos modularizando mas los componentes.. En vez de inyectar el servicio directamente en el card-list...

