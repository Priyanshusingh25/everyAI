import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsAutomationComponent } from './robotics-automation.component';

describe('RoboticsAutomationComponent', () => {
  let component: RoboticsAutomationComponent;
  let fixture: ComponentFixture<RoboticsAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboticsAutomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticsAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
