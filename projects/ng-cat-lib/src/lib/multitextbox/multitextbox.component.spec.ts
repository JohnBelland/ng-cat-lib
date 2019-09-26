import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultitextboxComponent } from './multitextbox.component';

describe('MultitextboxComponent', () => {
  let component: MultitextboxComponent;
  let fixture: ComponentFixture<MultitextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultitextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultitextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
