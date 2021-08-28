import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AosDemoComponent } from './aos-demo.component';

describe('AosDemoComponent', () => {
  let component: AosDemoComponent;
  let fixture: ComponentFixture<AosDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AosDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AosDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
