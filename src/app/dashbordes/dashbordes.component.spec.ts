import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordesComponent } from './dashbordes.component';

describe('DashbordesComponent', () => {
  let component: DashbordesComponent;
  let fixture: ComponentFixture<DashbordesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordesComponent]
    });
    fixture = TestBed.createComponent(DashbordesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
