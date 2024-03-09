import { ComponentFixture, TestBed } from '@angular/core/testing';

import { saleComponent } from './sale.component';

describe('LoginComponent', () => {
  let component: saleComponent;
  let fixture: ComponentFixture<saleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [saleComponent]
    });
    fixture = TestBed.createComponent(saleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
