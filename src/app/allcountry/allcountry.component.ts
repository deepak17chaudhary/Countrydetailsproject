import { Component, OnInit } from '@angular/core';
import { CountrydataService } from '../countrydata.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-allcountry',
  templateUrl: './allcountry.component.html',
  styleUrls: ['./allcountry.component.css']
})
export class AllcountryComponent implements OnInit {
  
 filteredCountries = [];
  countryListData: [];
   constructor(
     private countryDataService: CountrydataService,
     private route: ActivatedRoute,
     private router: Router
     ) {

  }
  
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(searchValue: string) {
    this._searchTerm = searchValue;
    this.filteredCountries = this.filteredCountriesData(searchValue); // [{}, {}]
    console.log('filteredCountries', this.filteredCountries);
  }
  ngOnInit() {
    
    this.countryDataService.getCountryData().subscribe(
      response => {
        this.filteredCountries = response;
        this.countryListData = response;
        if (response && response.length) {
          this.countryDataService.setCountrylistData(response);
        }
      },
      error => {
        console.log('error while fetching the country list', error);
      }
    );
    }
    filteredCountriesData(searchKey: string) {
      const afterFilterCountries =  _.filter(this.countryListData, (country) => {
      return country.name.toLowerCase().startsWith(searchKey.toLowerCase()); // india.startsWith('ind') // [{name}, co]
      });
      return afterFilterCountries;
     }
  }
