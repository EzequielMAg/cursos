##One way dat binding - Enlazada en una sola via - Enlace unidireccional

- Existe un enlazado entre las variables declaradas en la clase-componente, "HeroComponent" del archivo "hero.component.ts" con el archivo "hero.component.html". Por eso podemos "invocarlas" para mostrar sus valores a través de la interpolacion.

- Pero en general Angular maneja lo que se define como "two way data binding" o enlace de datos bidireccional. Significa que si nosotros hacemos algun cambio desde el lado del template (el html),  que tambien puede suceder, tambien se va a actualizar el valor de la variable que esta en el componente (file: "hero.component.ts").

- En nuestras aplicaciones de Angular hay que tratar de priorizar el "One way dat binding", es decir, el poder cambiar el valor por una sola via. Hay que tratar de evitar lo mas posible el "two way data binding".

- Dentro de las llaves dobles de la interpolacion, se puede poner cualquierr codigo de JS, no nos referimos a TS porque finalmenbte el codigo de TS se traspila a Js. Podemos poner una operacion matematica, invocacion de funciones/metodos, variables, etc.

// -------------------------

- Cuando nos queda pendiente un metodo/funcion, y lo dejamos para despues, solo con la firma.. Es recomendable dejarle dentro del cuerpo de la funcion lo siguiente:
  `throw 'Metodo no implementado` y un TODO: para que el IDE nos marque que queda pendiente.


  