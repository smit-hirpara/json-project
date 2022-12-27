import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryRouters2Component } from './auxiliary-routers2.component';

describe('AuxiliaryRouters2Component', () => {
  let component: AuxiliaryRouters2Component;
  let fixture: ComponentFixture<AuxiliaryRouters2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliaryRouters2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxiliaryRouters2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
