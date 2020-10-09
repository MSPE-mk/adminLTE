import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanactionComponent } from './planaction.component';

describe('PlanactionComponent', () => {
  let component: PlanactionComponent;
  let fixture: ComponentFixture<PlanactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
