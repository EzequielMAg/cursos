import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.html',
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]); // Señal inicializada como un arreglo vacio

  onSearch( query:string ) {
    this.gifService.searchGifs(query).subscribe(
      (resp) => {
        this.gifs.set(resp);
      }
    );
  }

}
