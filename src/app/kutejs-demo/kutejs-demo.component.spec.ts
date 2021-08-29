import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutejsDemoComponent } from './kutejs-demo.component';

describe('KutejsDemoComponent', () => {
  let component: KutejsDemoComponent;
  let fixture: ComponentFixture<KutejsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KutejsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KutejsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
