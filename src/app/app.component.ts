import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('hoverAnimation', [
      state(
        'inactive',
        style({
          transform: 'scale(1)',
          color: '#ffffff',
          textShadow: 'none',
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.05)',
          color: '#e0f7ff',
          textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
        })
      ),
      transition('inactive => active', [
        animate(
          '0.3s ease-in-out',
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(1.08)', offset: 0.5 }),
            style({ transform: 'scale(1.05)', offset: 1 }),
          ])
        ),
      ]),
      transition('active => inactive', [animate('0.3s ease-in-out')]),
      trigger('pulseAnimation', [
        state(
          'pulse',
          style({
            transform: 'scale(1.1)',
          })
        ),
        transition('* => pulse', [
          animate(
            '0.5s ease-in-out',
            keyframes([
              style({ transform: 'scale(1)', offset: 0 }),
              style({ transform: 'scale(1.1)', offset: 0.5 }),
              style({ transform: 'scale(1)', offset: 1 }),
            ])
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  showTopButton = false;
  searchQuery = '';
  private hoverStates: { [key: number]: string } = {};
  private categories = [
    'Large Language Models',
    'Image Generation',
    'Music Generation',
    'Video Generation',
    'Code Generation',
    'Machine Learning Platforms',
    'NLP Tools',
    'Computer Vision Tools',
    'Robotics and Automation',
  ];
  filteredCategories = [...this.categories];
  private searchSubject = new Subject<string>();
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) {
    this.setupSearchDebounce();
  }

  private setupSearchDebounce(): void {
    this.searchSubject.pipe(debounceTime(300)).subscribe((query) => {
      this.filterCategories(query);
    });
  }

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
    if (!this.isCategoryVisible(category)) return;
    const routes: { [key: string]: string } = {
      'Large Language Models': '/llms',
      'Image Generation': '/image-generation',
      'Music Generation': '/music-generation',
      'Video Generation': '/video-generation',
      'Code Generation': '/code-generation',
      'Machine Learning Platforms': '/machine-learning-platforms',
      'NLP Tools': '/nlp-tools',
      'Computer Vision Tools': '/computer-vision',
      'Robotics and Automation': '/robotics-automation',
    };
    const route = routes[category] || '/other';
    this.router
      .navigate([route])
      .catch((err) => console.error('Navigation error:', err));
  }

  onMouseEnter(index: number): void {
    this.hoverStates[index] = 'active';
  }

  onMouseLeave(index: number): void {
    this.hoverStates[index] = 'inactive';
  }

  onSearch(): void {
    this.searchSubject.next(this.searchQuery);
  }

  isCategoryVisible(category: string): boolean {
    return this.filteredCategories.includes(category);
  }

  private filterCategories(query: string): void {
    const lowerQuery = query.toLowerCase().trim();
    this.filteredCategories = this.categories.filter((category) =>
      category.toLowerCase().includes(lowerQuery)
    );
    // Force change detection
    this.searchInput.nativeElement.dispatchEvent(new Event('change'));
  }
}
