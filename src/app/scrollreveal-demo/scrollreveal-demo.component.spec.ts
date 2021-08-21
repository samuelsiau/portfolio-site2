import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollrevealDemoComponent } from './scrollreveal-demo.component';

describe('ScrollrevealDemoComponent', () => {
  let component: ScrollrevealDemoComponent;
  let fixture: ComponentFixture<ScrollrevealDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollrevealDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollrevealDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
