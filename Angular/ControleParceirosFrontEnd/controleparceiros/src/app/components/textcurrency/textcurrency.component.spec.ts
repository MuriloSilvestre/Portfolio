import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcurrencyComponent } from './textcurrency.component';

describe('TextcurrencyComponent', () => {
  let component: TextcurrencyComponent;
  let fixture: ComponentFixture<TextcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextcurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
