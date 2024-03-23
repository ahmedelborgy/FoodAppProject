import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavioretsComponent } from './faviorets.component';

describe('FavioretsComponent', () => {
  let component: FavioretsComponent;
  let fixture: ComponentFixture<FavioretsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavioretsComponent]
    });
    fixture = TestBed.createComponent(FavioretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
