import { Component, OnInit } from '@angular/core';
import { CountrydataService } from '../countrydata.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-countrydeatil',
  templateUrl: './countrydeatil.component.html',
  styleUrls: ['./countrydeatil.component.css']
})
export class CountrydeatilComponent implements OnInit {

  selectedCountryName;
  selectedCountry;
  constructor(
    private countryDataService: CountrydataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params', params);
      if (params && params['countryName']) {
        this.selectedCountryName = params['countryName'];
      }
    });
    this.countryDataService.getCountryData().subscribe(countryData => {
      console.log('countryData', countryData);
      this.getSelectedCountryDetail(countryData);
    })
  }

  getSelectedCountryDetail(countryData) {
   const findSelectedCountryObj = _.find(countryData, (country) => {
     return country['name'] === this.selectedCountryName;
   });
   console.log('findSelectedCountryObj', findSelectedCountryObj);
   if (findSelectedCountryObj) {
   this.selectedCountry = findSelectedCountryObj;
   debugger;
   }
  }

}
