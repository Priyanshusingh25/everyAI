import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGenerationComponent } from './video-generation.component';

describe('VideoGenerationComponent', () => {
  let component: VideoGenerationComponent;
  let fixture: ComponentFixture<VideoGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
