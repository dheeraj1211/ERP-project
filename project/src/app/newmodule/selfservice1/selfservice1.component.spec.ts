import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selfservice1Component } from './selfservice1.component';

describe('Selfservice1Component', () => {
  let component: Selfservice1Component;
  let fixture: ComponentFixture<Selfservice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selfservice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selfservice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
