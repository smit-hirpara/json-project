import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryRoutesComponent } from './auxiliary-routes.component';

describe('AuxiliaryRoutesComponent', () => {
  let component: AuxiliaryRoutesComponent;
  let fixture: ComponentFixture<AuxiliaryRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliaryRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxiliaryRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
