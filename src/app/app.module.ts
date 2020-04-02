import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CountrydataService } from './countrydata.service';
import { MatProgressSpinnerModule } from '@angular/material';
import { AgGridModule} from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrydeatilComponent } from './countrydeatil/countrydeatil.component';
import { AllcountryComponent } from './allcountry/allcountry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryListItemsComponent } from './country-list-items/country-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrydeatilComponent,
    AllcountryComponent,
    CountryListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AgGridModule
  ],
  providers: [CountrydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
