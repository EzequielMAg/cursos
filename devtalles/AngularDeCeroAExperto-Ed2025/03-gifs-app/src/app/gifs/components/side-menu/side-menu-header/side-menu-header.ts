import { Component } from '@angular/core';
import { environment } from '@environments/environment.development';
/* import { environment } from '../../../../../environments/environment.development'; */

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
})
export class SideMenuHeaderComponent {
  envs = environment;



}
