/*
    En el ejercicio que anterior, creamos una variable "counter" a la cual medinte 3 botones, y una funcion de Angular (clic) en el elemento
    podiamos modificar el valor de la variable y mostrarla en tiempo real.
*   Aunque, por lo general vamos a buscar tener toda la logica, modularizada en componentes, que estos componentes a su vez sean pequeños,
*   encapsulados y que hagan una tarea en especifico.

*   En esta clase.. Creamos vamos a crear un componente de forma completamente MANUAL.
   Luego veremos otras formas de crear componentes de forma mas rapida, ya sea con Angular CLI o con snipeds.

!   Creando un componente de forma totalmente MANUAL
*   1º creamos la carpeta "counter" dentro de la carpeta "app".
*   2° Dentro de "counter" creamos el archivo "counter.component.ts".
       El nombre de este archivo hace referencia a que el mismo sera/es un COMPONENTE. Despues tendremos otros archivos que pueden llamarse:
       -counter.service, counter.directiv, counter.pipe, counter.gad(?, etc. Tal extension del nombre del archivo es parte de las buenas practicas
        de Angular para poder reconocer mejor cada archivo.
*   3° Dentro de tal archivo ts, creamos la clase "CounterComponent", la cual va a ser una clase comun y corriente, hasta que le agregamos el
*      decorador @Component.
       Y este decorador @Component lo vamos a importar de @angular/core, este, es una seccion de Angular la cual posee muchas funcionalidades:
       constantes, decoradores, funciones, etc.

*   4° Pero no termina ahi! Hay que darle cuerpo al componente:
       ....explicado al final de este archivo
*/

import { Component } from '@angular/core';  //Esto se agregó automaticamente al escribir el @Component, y seleccionarlo con el Intellisense

@Component({  //Decorador que transforma mi clase en un componente
  selector: 'app-counter',  //Etiqueta personalizada HTML. Aunque, a veces, no nos avise que necesita este atributo, cada componente debe tenerlo
  template: `
    <h3>Counter: {{ counter }} </h3>

    <button (click)="decreaseBy(1)">-1</button>
    <button (click)=" resetCounter()">Reset</button>
    <button (click)="increaseBy(1)">+1</button>
  `,  //Si yo creo un componente, necesito un template
})
export class CounterComponent {
  /*
*     Esta clase se va a transformar en un COMPONENTE, RECIEN cuando le agrege el decorador..
*     El cual empieza en la linea 3. */

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter() {
    this.counter = 10;
  }
}


/* //! PASOS para crear el decorador para transformar esta clase en un componente de forma MANUAL:
  Podria decir que el paso "cero" es tener la clase creada con el export, aunque este vacia como la de arriba

*   1°: @Componente({  })


*   2°: Breve explicacion, adentro de las llaves agrego 3 atributos principales del componente:
    @Componente({

      1° Tenemos el atributo "selector"      → va a ser el nombre de la etiqueta especial por la cual despues vamos a invocar este componente.
      2° Atributo "templateUrl" o "template" → archivo html al que se va a hacer referencia
      3° Atributo "styleUrls"                → para hacer referencia a la hoja de estilos, es un arreglo de archivos .css

    })

    Algo de explicacion extra de lo que hace cada atributo: xD
*    Atributo "selector":
*       En el HTML vamos a invocar el template referenciado a traves de una etiqueta con el nombre asignado en este selector.
*       Arriba se uso el nombre "app-counter".
*       Se aconseja siempre ponerle el guion medio para darnos cuenta facilmente que es un componente personalizado.

*    Atributo "template" o "templateUrl":
*       Vendria a ser lo que se va a mostrar en la pagina, una vez que se invoque el componente.
*       - Un template, puede ser de tipo "template?" normal, que seria como un string, formato inline. Mas arriba se uso este, y se asigno un h1.
*         Con este tipo de template inline, Herrera recomendo usarlo cuando tenemos hasta 4 lineas HTML.
*
*       - La otra forma de template, vendria a ser "templateUrl", en el cual debo agregar el path realtivo del documento HTML.
*         Esta formato de "templateUrl" se usa en el componente por default de este proyecto "app.component.ts"

*    Atributo "styleUrls": No es obligatorio ponerlo, osea que no te lo exige el compilar(? de Ts. Algo muy importante, es que todo el codigo CSS
*       que este en tal archivo, solo va a impactar sobre el HTML que esta vinculado a traves del componente. En pocas palabras, el CSS pertenece al componente.
        No se puede aplicar sus estilos sobre otros componentes. Esta encapsulado y esto es genial!

!   El componente tiene que tener POR LO MENOS 2 atributos: el "selector" y el "template"


!    Cuando creamos un componente en Angular, debemos definirlo en algun lugar, debe ser parte de un modulo.
        ¿Que modulo? Por el momento solo tenemos un modulo en nuestra aplicacion, el cual es: "app.module.ts".
        Tenemos que ir a la parte de declarations y agregar el nombre del componente alli! (el nombre de la clase)
*/


// -------------------------------------------
/* //* CLASE: FUNCIONALIDAD DEL CONTADOR


  Comenzamos viendo que: existen diferentes formas de crear un componente. Si tenemos instalado el sniped:
  "Angular Snippets" de John Papa, podemos escribir a-component y ya nos sale el desplegable del intellisense
  que al darle enter nos crea todo el codigo del componente de forma automatica (mas abajo se muestra como queda)
  y luego hay que cambiarle los valores default por el selector correspondente, el template q vamos a usar, etc..

  Ejemplo, esto nos genera el sniped:

  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'selector-name',
    templateUrl: 'name.component.html'
  })

  export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
  }


*/
