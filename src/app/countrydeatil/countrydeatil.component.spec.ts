import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrydeatilComponent } from './countrydeatil.component';

describe('CountrydeatilComponent', () => {
  let component: CountrydeatilComponent;
  let fixture: ComponentFixture<CountrydeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrydeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrydeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
