import { Component, OnInit } from "@angular/core";
import { CountrydataService } from "../countrydata.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";


import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-countrydeatil",
  templateUrl: "./countrydeatil.component.html",
  styleUrls: ["./countrydeatil.component.css"],
})
export class CountrydeatilComponent implements OnInit {
  selectedCountryName;
  selectedCountry;
  neighbourCountriesList = [];

  columnDefs = [
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      filter: true,
      cellRenderer: data=> {
        return `<div><button (click)="onclick()"> ${data.value} </button></div>`; //template literals ` `
      },
    
      // checkboxSelection: true,
    },
    {
      headerName: "flag",
      field: "flag",
      width: 120,
      height: 100,

      cellRenderer: (data) => {
        
        const image = document.createElement("img");
        image.src = data.value;
        image.width = 50;
        image.height = 25;
        return image;
      },

      sortable: true,
      filter: true,
    },

    {
      headerName: " Native Name",
      field: "nativeName",
      sortable: true,
      filter: true,
    },
    { headerName: "Capital", field: "capital", sortable: true, filter: true },
    {
      headerName: "Population",
      field: "population",
      sortable: true,
      filter: true,
    },
    { headerName: "Region", field: "region", sortable: true, filter: true },
    {
      headerName: "Sub-region",
      field: "subregion",
      sortable: true,
      filter: true,
    },
    { headerName: "Area", field: "area", sortable: true, filter: true },
    {
      headerName: "CountryCode",
      field: "callingCodes",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Currencies",
      field: "currencies",
      cellRenderer: (data) => {
        // const tagElement = document.createElement('div');
        // tagElement.innerHTML = data.currencies[0].name;
        //  return tagElement;
        // const currency = data.value[0].name;
        return data.value[0].name;
      },
      sortable: true,
      filter: true,
    },
    {
      headerName: "Languages",
      field: "languages",
      cellRenderer: (data) => {
        let language = "";
        
        for (let i = 0; i < data.value.length; i++) {
          if (i === data.value.length - 1) {
            language += data.value[i].name;
          } else if (data.value.length > 1 && i !== data.value.length - 2) {
            language += data.value[i].name;
            language += ",";
          } else {
            language += data.value[i].name;
            language += " " + "and" + " ";
          }

         
        }
        return language;
      },
      sortable: true,
      filter: true,
    },
    {
      headerName: "Timezones",
      field: "timezones",
      sortable: true,
      filter: true,
    },
  ];

  rowData: any;
  

  constructor(
    private countryDataService: CountrydataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}
  
  ngOnInit() {
    this.rowData = this.http.get("https://restcountries.eu/rest/v2/all");

    
    this.route.params.subscribe((params) => {
      console.log("params", params);
      if (params && params["countryName"]) {
        this.selectedCountryName = params["countryName"];
      }
    });

    this.countryDataService.getCountryData().subscribe((countryData) => {
      console.log("countryData", countryData);
      this.getSelectedCountryDetail(countryData);
    });
  }

  getSelectedCountryDetail(countryData) {
    const findSelectedCountryObj = _.find(countryData, (country) => {
      return country["name"] === this.selectedCountryName;
    });
    console.log("findSelectedCountryObj", findSelectedCountryObj);
    if (findSelectedCountryObj) {
      this.selectedCountry = findSelectedCountryObj;
      this.getSelectCountryNeighbourFlags(findSelectedCountryObj.borders,countryData);
       // debugger;
    }
  }
  getSelectCountryNeighbourFlags(neighbourCountryCodeList, allCountryData) {
    _.forEach(neighbourCountryCodeList, (countryCode) => {
      _.find(allCountryData, (countryObj) => {
        if (countryObj.alpha3Code === countryCode) {
            this.neighbourCountriesList.push(countryObj);
        }
      });
    });
    console.log('neighbourCountries', this.neighbourCountriesList);
  }
}
