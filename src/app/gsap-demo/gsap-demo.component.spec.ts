import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapDemoComponent } from './gsap-demo.component';

describe('GsapDemoComponent', () => {
  let component: GsapDemoComponent;
  let fixture: ComponentFixture<GsapDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsapDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsapDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
