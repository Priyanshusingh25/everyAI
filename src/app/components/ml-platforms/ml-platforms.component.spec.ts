import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlPlatformsComponent } from './ml-platforms.component';

describe('MlPlatformsComponent', () => {
  let component: MlPlatformsComponent;
  let fixture: ComponentFixture<MlPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlPlatformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
