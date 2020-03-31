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

  title = 'country';
  countryListData = [];
  filteredCountries = [];
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(searchValue: string) {
    this._searchTerm = searchValue;
    this.filteredCountries = this.filteredCountriesData(searchValue);
    console.log('filteredCountries', this.filteredCountries);
  }
  constructor(
     private countryDataService: CountrydataService,
     private route: ActivatedRoute,
     private router: Router
     ) {

  }
  

  ngOnInit() {
    
    this.countryDataService.getCountryData().subscribe(
      response => {
       
        this.countryListData = response;
        this.filteredCountries = response;
        if (response && response.length) {
          this.countryDataService.setCountrylistData(response);
        }
      },
      error => {
        console.log('error while fetching the country list', error);
      }
    );
  }

  printDate() {
  
    return new Date();
  }

  filteredCountriesData(searchKey: string) {
    const afterFilterCountries =  _.filter(this.countryListData, (country) => {
    return country.name.toLowerCase().startsWith(searchKey.toLowerCase());
    });
    return afterFilterCountries;
   }
  redirectToCountryDetailInfo(selectedCountry) {
    this.router.navigate(['/countryDetail/' + selectedCountry.name ]);
  }

}
