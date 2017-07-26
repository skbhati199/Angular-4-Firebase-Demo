import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCurdComponent } from './firebase-curd.component';

describe('FirebaseCurdComponent', () => {
  let component: FirebaseCurdComponent;
  let fixture: ComponentFixture<FirebaseCurdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseCurdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
