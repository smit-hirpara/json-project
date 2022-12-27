import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sesionmanagement2Component } from './sesionmanagement2.component';

describe('Sesionmanagement2Component', () => {
  let component: Sesionmanagement2Component;
  let fixture: ComponentFixture<Sesionmanagement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sesionmanagement2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sesionmanagement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
