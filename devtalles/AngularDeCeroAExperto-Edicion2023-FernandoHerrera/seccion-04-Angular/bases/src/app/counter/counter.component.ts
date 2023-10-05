import { Component } from '@angular/core';  //Esto se agregó automaticamente al escribir el @Component, y seleccionarlo con el Intellisense

@Component({  //Decorador que transforma mi clase en un componente
  selector: 'app-counter',  //Etiqueta personalizada HTML. Aunque no nos avise que necesita este atributo, cada componente debe tenerlo
  template: '<h1>Hola counter</h1>',  //Si yo creo un componente, necesito un template
})
export class CounterComponent {
  /* Esta clase se va a transformar en un COMPONENTE, RECIEN cuando le agrege el decorador..
     El cual empieza en la linea 3. */

}
/* //! PASOS para crear el decorador para transformar esta clase en un componente de forma MANUAL:
  Podria decir que el paso "cero" es tener la clase creada con el export, aunque este vacia como la de arriba

*   1°: @Componente({
*       })

*   2°: Dentro de las llaves, agrego el atributo "template", que vendria a ser lo que se va a mostrar en la pagina, una vez que se invoque
*       el componente.
*       Un template, puede set de tipo "template?", que seria como un string, un template inline. Arriba se uso este, y se asigno un h1.
*       La otra forma de template, vendria a ser "templateUrl?", en el cual debo agregar el path realtivo del documento HTML.
*       Esta formato de "templateUrl" se usa en el componente por default de este proyecto "app.component.ts"

*   3°: Esto por ahi lo podriamos hacer en el paso 2°, es indistinto, pero debemos ponerle un nombre con el cual va a ser invocado este
*       componente, atributo denominado "selector". Luego, en el HTML vamos a invocar el template referenciado a traves de una etiqueta con
*       el nombre asignado en este selector. Arriba se uso el nombre "app-counter".

*   4°: Cuando creamos un componente en Angular, debemos definirlo en algun lugar, debe ser parte de un modulo.
        ¿Que modulo? Por el momento solo tenemos un modulo en nuestra aplicacion, el cual es: "app.module.ts".
        Tenemos que ir a la parte de declarations
*/
