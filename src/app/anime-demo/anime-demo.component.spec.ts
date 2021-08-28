import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDemoComponent } from './anime-demo.component';

describe('AnimeDemoComponent', () => {
  let component: AnimeDemoComponent;
  let fixture: ComponentFixture<AnimeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
