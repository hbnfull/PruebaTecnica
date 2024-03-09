import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cartComponent } from './cart.component';

describe('LoginComponent', () => {
  let component: cartComponent;
  let fixture: ComponentFixture<cartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [cartComponent]
    });
    fixture = TestBed.createComponent(cartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
