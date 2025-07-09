import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGenerationComponent } from './music-generation.component';

describe('MusicGenerationComponent', () => {
  let component: MusicGenerationComponent;
  let fixture: ComponentFixture<MusicGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
