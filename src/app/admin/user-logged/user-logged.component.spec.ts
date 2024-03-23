import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggedComponent } from './user-logged.component';

describe('UserLoggedComponent', () => {
  let component: UserLoggedComponent;
  let fixture: ComponentFixture<UserLoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoggedComponent]
    });
    fixture = TestBed.createComponent(UserLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
