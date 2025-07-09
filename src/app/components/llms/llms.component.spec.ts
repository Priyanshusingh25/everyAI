import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlmsComponent } from './llms.component';

describe('LlmsComponent', () => {
  let component: LlmsComponent;
  let fixture: ComponentFixture<LlmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
