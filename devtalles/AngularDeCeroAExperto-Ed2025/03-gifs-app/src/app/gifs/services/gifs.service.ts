import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { Gif } from '../interfaces/gif.interface';

//* Cuando son interfaces, se recomienda agregar el "type". Esto ayuda al transpilador  de Ts a q no tiene q hacer mas trabajo con esa linea
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

import { environment } from '../../../environments/environment';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

/* {
  'goku': [gif1, gif2, gif3],
  'saitama': [gif1, gif2, gif3],
  'dragon ball': [gif1, gif2, gif3],
} */

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor() {
    this.loadTrendingGifs();
    console.log("Servicio creado!");
  }

  /* imageUrls: string[] = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
  ]; */

  //* INYECTANDO UNA DEPENDENCIA
  private http = inject(HttpClient);

  trendingGifs = signal(<Gif[]>[]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      },
    })
    .subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log({ gifs });
    });
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query,
      },
    })
    .pipe(
      map( ({ data }) => data),
      map( (items) => GifMapper.mapGiphyItemsToGifArray(items)),

      // TODO: historial
      tap((items) => {
        this.searchHistory.update((history) => ({
          ...history,
          [query.toLowerCase()]: items,
        }));
      })
    );
    /* .subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      console.log({ gifs });
    }); */
  }
}
