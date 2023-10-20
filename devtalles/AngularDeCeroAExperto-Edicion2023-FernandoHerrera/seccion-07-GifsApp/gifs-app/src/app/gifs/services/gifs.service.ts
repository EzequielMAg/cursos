
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {

  // En este atributo se van a guardar todas las busquedas que se van haciendo
  private _tagsHistory: string[] = [];


  get tagsHistory(): string[] {
    //return [...this._tagsHistory]; // Sabemos que los arreglos se pasan por referencia. Aca el prof usa el operador spred para crear
    // otra referencia del arreglo (una copia del mismo en otro espacio de memoria).
    // Esto con el fin de proteger los valores originales y no se modifiquen en cualquier parte luego
    // de que se llama al getter, ya que se puede acceder a la informacion con tal referencia.
    // Dijo que es una buena idea hacer esto para tener mejor control y seguridad de nuestros elementos.

    return this._tagsHistory; // Tambien podemos dejarlo asi normal. Pero de la anterior forma es mas seguro.
    // Aunque no le veo el sentido... Que pasa si quiero realmente modificar el original.
    // Tendria que crear otro getter, uno para acceder a la referencia original y otro para crear copias.
    // Mejor sigo este camino y despues lo evalúo.
  }

  searchTag(tag: string): void {

    if (tag.length === 0) return;

    this.organizeHistory(tag);
  }

  //Metodo para validaciones
  private organizeHistory(tag: string) {

    // En nuestro arreglo vamos a guardar todo en minuscula
    tag = tag.toLowerCase();

    // Para eliminar del arreglo el tag que este repetido.
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( oldTag => oldTag !== tag );
    }

    this._tagsHistory.unshift(tag); // Agrega el tag al inicio

    // Limita el historial a 10 elementos
    this._tagsHistory = this._tagsHistory.splice(0, 10);

  }

}
