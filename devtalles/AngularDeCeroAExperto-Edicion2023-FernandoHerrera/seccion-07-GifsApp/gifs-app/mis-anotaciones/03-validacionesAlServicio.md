Trabajando con el servicio "gifs" en el emetodo "searchTag" nos damos cuenta que para lograr las funcionalidad que queremos, como:

- Que no se ingresen busquedas vacias
- O que ingrese demasiadas y se haga una lista larga y desborde el navbar, queremos limitarlo a 10 elementos
- O que... Cuando ingrese una busqueda repetida se detecte esto y se agregue al historial, aparezca al principoio, pero se borre la busqueda anterior dentro del array.. 

Pero ara hacer todo esto, debemos agregar mucha logica dentro de tal metodo y no esta bueno, porque el metodo estaria haciendo muchas cosas ademas de su tarea prinicpal (BAJA COHESION), que es agregar el tag al historial... Entonces para esto vamos a crear otro metodo, uno privado llamdo "organizeHistory".




