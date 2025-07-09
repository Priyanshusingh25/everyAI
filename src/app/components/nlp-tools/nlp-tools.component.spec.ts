import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlpToolsComponent } from './nlp-tools.component';

describe('NlpToolsComponent', () => {
  let component: NlpToolsComponent;
  let fixture: ComponentFixture<NlpToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NlpToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlpToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
