import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLockedComponent } from './modal-locked.component';

describe('ModalLockedComponent', () => {
  let component: ModalLockedComponent;
  let fixture: ComponentFixture<ModalLockedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalLockedComponent]
    });
    fixture = TestBed.createComponent(ModalLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
