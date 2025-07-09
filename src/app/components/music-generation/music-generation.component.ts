import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-music-generation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-generation.component.html',
  styleUrl: './music-generation.component.scss'
})
export class MusicGenerationComponent {
window = window;

   experts = [
   {
    name: 'AIVA',
    role: 'AI-powered music composition for soundtracks and creative projects.',
    image: 'assets/images/music-generation/aiva-logo.jpeg',
    rating: 4.6,
    link: 'Go To Site →',
    url: 'https://www.aiva.ai/',
  },
  {
    name: 'Amper Music',
    role: 'Easy-to-use AI music composer for content creators.',
    image: 'assets/images/music-generation/amper-music-logo.jpg',
    rating: 4.4,
    link: 'Go To Site →',
    url: 'https://www.ampermusic.com/',
  },
  {
    name: 'Soundful',
    role: 'Generate royalty-free music tracks with AI for videos, streams, and more.',
    image: 'assets/images/music-generation/soundful-logo.png',
    rating: 4.3,
    link: 'Go To Site →',
    url: 'https://soundful.com/',
  },
  {
    name: 'Boomy',
    role: 'Create original songs in seconds and release them worldwide.',
    image: 'assets/images/music-generation/boomy-logo.png',
    rating: 4.2,
    link: 'Go To Site →',
    url: 'https://boomy.com/',
  },
  {
    name: 'Ecrett Music',
    role: 'AI music generator for video, games, and podcasts.',
    image: 'assets/images/music-generation/ecrett-music-logo.jpeg',
    rating: 4.1,
    link: 'Go To Site →',
    url: 'https://ecrettmusic.com/',
  },
  {
    name: 'Soundraw',
    role: 'AI music generator for creators, with customizable tracks.',
    image: 'assets/images/music-generation/soundraw-logo.png',
    rating: 4.3,
    link: 'Go To Site →',
    url: 'https://soundraw.io/',
  },
  {
    name: 'LALAL.AI',
    role: 'AI-powered stem splitter for vocals and instrumentals.',
    image: 'assets/images/music-generation/lalal-logo.png',
    rating: 4.4,
    link: 'Go To Site →',
    url: 'https://www.lalal.ai/',
  },
  {
    name: 'Endlesss',
    role: 'Collaborative AI-powered music creation and live jamming.',
    image: 'assets/images/music-generation/Endlesss-Logo.png',
    rating: 4.0,
    link: 'Go To Site →',
    url: 'https://endlesss.fm/',
  },
  {
    name: 'MuseNet (OpenAI)',
    role: 'AI system that generates songs with up to 10 instruments.',
    image: 'assets/images/music-generation/musenet-logo.jpeg',
    rating: 4.2,
    link: 'Go To Site →',
    url: 'https://openai.com/research/publications/musenet',
  },
  {
    name: 'Jukebox (OpenAI)',
    role: 'Neural net that generates music, including singing, in a variety of genres and artist styles.',
    image: 'assets/images/music-generation/jukebox-logo.png',
    rating: 4.1,
    link: 'Go To Site →',
    url: 'https://openai.com/research/publications/jukebox',
  },
];
}
