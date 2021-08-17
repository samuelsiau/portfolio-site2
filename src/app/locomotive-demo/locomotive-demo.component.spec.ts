import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocomotiveDemoComponent } from './locomotive-demo.component';

describe('LocomotiveDemoComponent', () => {
  let component: LocomotiveDemoComponent;
  let fixture: ComponentFixture<LocomotiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocomotiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocomotiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
