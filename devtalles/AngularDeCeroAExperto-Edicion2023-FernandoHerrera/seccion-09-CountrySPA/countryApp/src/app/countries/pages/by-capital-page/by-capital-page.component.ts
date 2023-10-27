import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'cuntries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  constructor(private countryService: CountriesService) {}


  //! Aca se agarra el valor emitido por el (onValue) en el HTML, la busqueda que ingreso el usuario
  searchByCapital( term:string ):void {

    console.log('Desde ByCapitalPage');
    console.log( { term } );
  }



}
