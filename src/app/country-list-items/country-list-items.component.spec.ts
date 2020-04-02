import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListItemsComponent } from './country-list-items.component';

describe('CountryListItemsComponent', () => {
  let component: CountryListItemsComponent;
  let fixture: ComponentFixture<CountryListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
