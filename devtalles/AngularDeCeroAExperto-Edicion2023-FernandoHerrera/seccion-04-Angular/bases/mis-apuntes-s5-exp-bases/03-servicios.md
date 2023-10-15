## Servicios 
- Asi como pensamos en componentes y en modulos, tenemos que empezar a pensar en donde es el lugar correcto o mas conveniente mantener nuestra informacion, es decir, la data o el estado que se va generando a lo largo que las personas estan usando nuestra aplicacion.

- +INFO: https://angular.io/guide/singleton-services 

- Al igual que los componentes y modulos, podemos clearlo con la extension angular schematics o con Angular CLI o con un sniped.

 - Sniped para crear un servicio: a-service (tab):
 import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() { }
  
}

- Por el momento vamos a trabajar con servicios publicos.
  Inyectaremos un servicio publico de la siguiente forma:
  ``constructor(private dbzService: DbzService) {}``
    Esto lo realizamos en el archivo "main-page.component.ts", Inyectando el servicio en el componente "MainPageComponent"


## Servicios privados
Es una buena practica. Es lo que debemos implementar.
Debemos agregar metodos getters y otros metodos necesarios que se conecten con el servicio para poder utilizarlo correctamente, en el file "main-page.component.html". 
