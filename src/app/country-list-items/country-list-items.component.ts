import { Component, OnInit, Input } from '@angular/core';
import { CountrydataService } from '../countrydata.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment';


@Component({
  selector: 'app-country-list-items',
  templateUrl: './country-list-items.component.html',
  styleUrls: ['./country-list-items.component.css']
})
export class CountryListItemsComponent implements OnInit {
  title = 'country';
  showSpinner = false;
  countryListData = [];
  filteredCountries = [];
  

@Input() country;
countryObj;
  constructor(
    private countryDataService: CountrydataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.countryObj=this.country;
    this.countryDataService.getCountryData().subscribe(countryData => {
      this.countryListData = countryData;
      this.filteredCountries = countryData;
    })
  }
  printDate(timeZone: string) {
    // tslint:disable-next-line: align
      const timeZoneOfCountry = timeZone.replace('UTC', '');
      const utcDate = moment().utcOffset(timeZoneOfCountry).format('Do MMMM YYYY, HH:mm');
      return utcDate;
    }
  
   
  
    redirectToCountryDetailInfo(selectedCountry) {
      this.router.navigate(['/countryDetail/' + selectedCountry.name]); // 'countryDetail/india'
    }
}
