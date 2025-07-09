import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'llms',
        loadComponent: () => import('./components/llms/llms.component').then(m => m.LlmsComponent),
    },
    {
        path: 'image-generation',
        loadComponent: () => import('./components/image-generation/image-generation.component').then(m => m .ImageGenerationComponent),
    },
    {
        path: 'music-generation',
        loadComponent: () => import('./components/music-generation/music-generation.component').then(m => m.MusicGenerationComponent),
    },
    {
        path: 'video-generation',
        loadComponent: () => import('./components/video-generation/video-generation.component').then(m => m.VideoGenerationComponent),
    },{
        path: 'code-generation',
        loadComponent: () => import('./components/code-generation/code-generation.component').then(m => m.CodeGenerationComponent),
    },
    {
        path: 'ml-platforms',
        loadComponent: () => import('./components/ml-platforms/ml-platforms.component').then(m => m.MlPlatformsComponent),
    },
    {
        path: 'nlp-tools',
        loadComponent: () => import('./components/nlp-tools/nlp-tools.component').then(m => m.NlpToolsComponent),
    },
    {
        path: 'computer-vision',
        loadComponent: () => import('./components/computer-vision/computer-vision.component').then(m => m.ComputerVisionComponent),
    },
    {
        path: 'robotics-automation',
        loadComponent: () => import('./components/robotics-automation/robotics-automation.component').then(m => m.RoboticsAutomationComponent),
    }
];
