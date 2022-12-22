import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaginComponent } from './loagin.component';

describe('LoaginComponent', () => {
  let component: LoaginComponent;
  let fixture: ComponentFixture<LoaginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
