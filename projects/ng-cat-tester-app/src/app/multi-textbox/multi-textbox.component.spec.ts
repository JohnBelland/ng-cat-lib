import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTextboxComponent } from './multi-textbox.component';

describe('MultiTextboxComponent', () => {
  let component: MultiTextboxComponent;
  let fixture: ComponentFixture<MultiTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
