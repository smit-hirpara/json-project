import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeCompoComponent } from './fake-compo.component';

describe('FakeCompoComponent', () => {
  let component: FakeCompoComponent;
  let fixture: ComponentFixture<FakeCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
