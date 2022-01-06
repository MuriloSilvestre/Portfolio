import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcurrencyComponent } from './inputcurrency.component';

describe('InputcurrencyComponent', () => {
  let component: InputcurrencyComponent;
  let fixture: ComponentFixture<InputcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputcurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
