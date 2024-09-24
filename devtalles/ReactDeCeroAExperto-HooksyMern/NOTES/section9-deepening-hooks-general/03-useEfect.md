# Hook useEffect

### 1. Uso sin dependencias:
- No es recomendable usar un useEffect sin el segundo parametro de dependencias, si se espera que se ejecute solo en casos específicos. Las dependencias son las condiciones por las cuales queremos que el useEffect se vuelva a disparar. 

- Cuando se omite el arreglo de dependencias, el useEffect se ejecutará después de cada render del componente, lo que puede ocasionar comportamientos no deseados o incluso problemas de rendimiento. Por eso, siempre es importante tener un manejo adecuado de las dependencias.

### 2. Dependencias:
- El arreglo de dependencias contiene las variables que se monitorean para saber si el useEffect debe volver a ejecutarse. El useEffect se volverá a disparar cuando una de esas variables cambie de valor, lo que es ideal para manejar actualizaciones basadas en esos cambios.

### 3. Arreglo vacío:
- Anteriormente usamos el useEffect con un arreglo vacio en el segundo parametro, esto significa que el useEffect solo se va a ejecutar una vez (cuando el componente se monte por primera vez), y no se ejecutará de nuevo ya que no hay ninguna variable para analizar si cambio o no. Podria ejecutarse de nuevo si el componente se desmonta y vuelva a montarse.

- Recordar que el useEffect se va a disparar siempre por lo menos 1 vez, la primera vez que se monta nuestro componente, y entiendase montar componente, cuando este se renderiza.

### 4. Separar useEffect para diferentes variables:

- No se recomienda tener un useEffect que este analizando el cambio de distintas variables, si nosotros tenemos que hacer acciones diferentes segun el cambio de varias variables, se recomienda tener varios useEffect especializados para cada variable.


# Función de limpieza (cleanup function):

Es importante recordar que dentro del useEffect podemos retornar una función de limpieza que se ejecutará antes de que el componente se desmonte o cuando el useEffect se vuelva a ejecutar por un cambio en las dependencias. Esto es importante para limpiar escuchadores de eventos, suscripciones, timers o cualquier recurso que el componente esté utilizando. De no hacerlo, podrían generarse errores, como intentar modificar el estado de un componente que ya fue desmontado, o dejar recursos sin liberar, lo cual afectaría el rendimiento de la aplicación.