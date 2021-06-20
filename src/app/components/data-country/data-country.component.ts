import { Component, OnInit } from '@angular/core';
import {CountryDataService} from '../../services/country-data.service';
import { ActivatedRoute} from '@angular/router';
import { countryDetails } from '../../Models/data'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-data-country',
  templateUrl: './data-country.component.html',
  styleUrls: ['./data-country.component.scss']
})
export class DataCountryComponent implements OnInit {

  constructor(private countryData: CountryDataService, 
              private activateRoute: ActivatedRoute ) { 

  }

  chosenCountry;
  id;
  country;
  population;
  lang;
  capital;
  currency;
  area;
  ile;

  id2 = countryDetails.map(item => {
    if(item.id == 1) return item.name
  })

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(
      data => {
        this.chosenCountry = data.name;
        this.id = data.id,
        this.country = data.name,
        this.population = data.population,
        this.lang = data.lang
      this.capital = data.capital;        
    })

  }

}
