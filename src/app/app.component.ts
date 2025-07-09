import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
   animations: [
    trigger('hoverAnimation', [
      state('inactive', style({
        transform: 'scale(1)',
        color: '#ffffff',
        textShadow: 'none'
      })),
      state('active', style({
        transform: 'scale(1.05)',
        color: '#e0f7ff',
        textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
      })),
      transition('inactive => active', [
        animate('0.3s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.08)', offset: 0.5 }),
          style({ transform: 'scale(1.05)', offset: 1 })
        ]))
      ]),
      transition('active => inactive', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})

export class AppComponent {
  showTopButton = false;
  private hoverStates: { [key: number]: string } = {};

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showTopButton = window.scrollY > 350;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getState(index: number): string {
    return this.hoverStates[index] || 'inactive';
  }

  onCategoryClick(category: string): void {
    const routes: { [key: string]: string } = {
      'Large Language Models': '/llms',
      'Image Generation': '/image-generation',
      'Music Generation': '/music-generation',
      'Video Generation': '/video-generation',
      'Code Generation': '/code-generation',
      'Machine Learning Platforms': '/machine-learning-platforms',
      'NLP Tools': '/nlp-tools',
      'Computer Vision Tools': '/computer-vision-tools',
      'Robotics and Automation': '/robotics-automation'
    };
    const route = routes[category] || '/other';
    this.router.navigate([route]);
  }

  onMouseEnter(index: number): void {
    this.hoverStates[index] = 'active';
  }

  onMouseLeave(index: number): void {
    this.hoverStates[index] = 'inactive';
  }
}
