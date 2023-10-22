import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from './../interfaces/gifs.interfaces';


@Injectable({ providedIn: 'root' })
export class GifsService {

  //Atributos extras agregados por mi
  private MAX_CAT_TAGS:number = 12;
  private MAX_CAT_GIFS:number = 100;


  // Va  contener toda la lista de nuestros gifs, la response de la consulta Http
  public gifList: Gif[] = [];

  // En este atributo se van a guardar todas las busquedas que se van haciendo
  private _tagsHistory: string[] = [];

  private apiKey:       string = "hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk";
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  //! Inyectamos el cliente/servicio del modulo que importamos para hacer peticiones HTTP en app.module
  constructor(private http: HttpClient) {

    this.loadLocalStorage();
    console.log("Gifs service Ready");
  }


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

  //async searchTag(tag: string): Promise<void> {
  searchTag(tag: string): void {

    if (tag.length === 0) return;

    this.organizeHistory(tag);

    /* // 1º forma
    fetch('https://api.giphy.com/v1/gifs/search?api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk&q=valorant&limit=10')
    .then( resp => resp.json() )
    .then( data => console.log(data) ); */

    /* // 2° forma
    const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=hsfozpJhEbcp802YIOc1Ka4Ydkz4pIgk&q=valorant&limit=10')
    const data = await resp.json();
    console.log(data); */

    // De esta forma podemos agrupar query params
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', `${this.MAX_CAT_GIFS}`)
      .set('q', tag);

    //* FORMA PODEROSA de Angular para hacer peticiones HTTP
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {

        this.gifList = resp.data;
        /* console.log( { gifs: this.gifList }); */
      });

  }

  //Metodo para validaciones
  private organizeHistory(tag: string) {

    // En nuestro arreglo vamos a guardar todo en minuscula
    tag = tag.toLowerCase();

    // Para eliminar del arreglo el tag que este repetido.
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag); // Agrega el tag al inicio

    // Limita el historial a 10 elementos
    this._tagsHistory = this._tagsHistory.splice(0, this.MAX_CAT_TAGS);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory)); //JSON.stringify: convierte un objeto en string
  }

  private loadLocalStorage():void {

    // Si no encuentra ninguno objeto en el LocalStorage, no hacemos nada
    if( !localStorage.getItem('history' )) return;

    // Si pasa para aca, tenemos data
    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );
    /* Se transforma el string a lo que necesitemos, porq retorna 'any' | undefined.
       y se usa el operador 'not null acceptor operator' ya que aunque hayamos validado
       que en tal punto ya no es null, Ts igual nos manda el mensaje de error.*/

    //if(this._tagsHistory.length > 0)
    if(this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

}
