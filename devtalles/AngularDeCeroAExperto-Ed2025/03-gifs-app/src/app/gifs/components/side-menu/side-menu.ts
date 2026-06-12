import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from "./side-menu-header/side-menu-header";
import { SideMenuOptionsComponent } from "./side-menu-options/side-menu-options";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.html',
})
export class SideMenuComponent { }
