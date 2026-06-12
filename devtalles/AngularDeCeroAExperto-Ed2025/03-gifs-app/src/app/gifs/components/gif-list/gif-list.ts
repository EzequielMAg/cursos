import { Component, input, signal } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.html',
})
export class GifListComponent {
  //gifs = input.required<String[]>();
  gifs = input.required<Gif[]>();
 }
