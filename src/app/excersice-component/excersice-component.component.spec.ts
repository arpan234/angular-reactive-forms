import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcersiceComponentComponent } from './excersice-component.component';

describe('ExcersiceComponentComponent', () => {
  let component: ExcersiceComponentComponent;
  let fixture: ComponentFixture<ExcersiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcersiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcersiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
