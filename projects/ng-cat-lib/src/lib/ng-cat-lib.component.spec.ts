import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCatLibComponent } from './ng-cat-lib.component';

describe('NgCatLibComponent', () => {
  let component: NgCatLibComponent;
  let fixture: ComponentFixture<NgCatLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCatLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
