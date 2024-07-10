import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEditDialogComponent } from './cart-edit-dialog.component';

describe('CartEditDialogComponent', () => {
  let component: CartEditDialogComponent;
  let fixture: ComponentFixture<CartEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartEditDialogComponent]
    });
    fixture = TestBed.createComponent(CartEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
