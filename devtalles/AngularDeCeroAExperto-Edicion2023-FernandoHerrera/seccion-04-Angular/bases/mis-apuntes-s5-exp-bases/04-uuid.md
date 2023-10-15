- Fuente: https://www.npmjs.com/package/uuid

- Gracias a esta herramienta podremos crear ID's unicos para nuestros personajes de DBZ en este caso.

- Importamos lo siguiente ne nuestro file "dbz.servie.ts": ``import { v4 } from "uuid";``

- Le cambiamos el nombre de la siguiente forma: ``import { v4 as uuid } from "uuid";``

- v4, ahora renombra uuid, es una funcion. Solo tenemos que invocarla y nos retorna un id unico, el cual asignaremos al atributo id de nuestras interfaces que la necesiten.


 
