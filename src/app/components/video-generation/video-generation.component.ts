import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-video-generation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-generation.component.html',
  styleUrl: './video-generation.component.scss'
})
export class VideoGenerationComponent {
window = window;

   experts = [
  {
    name: 'ChatGPT (OpenAI)',
    role: 'General-purpose conversational AI.',
    image: 'assets/images/llms/chatgpt-logo.png',
    rating: 4.5,
    link: 'Go To Site →',
    url: 'https://chat.openai.com/',
  },
  {
    name: 'Gemini (Google)',
    role: 'Multimodal conversational AI',
    image: 'assets/images/llms/gemini-logo.png',
    rating: 3.9,
    link: 'Go To Site →',
    url: 'https://gemini.google.com/',
  },
  {
    name: 'Grok (xAI)',
    role: ' Conversational AI with a focus on real-time information',
    image: 'assets/images/llms/grok.png',
    rating: 4.5,
    link: 'Go To Site →',
    url: 'https://grok.x.ai/',
  },
  {
    name: 'DeepSeek Chat (DeepSeek)',
    role: 'Open-source friendly LLM',
    image: 'assets/images/llms/deepseek-logo.png',
    rating: 4.5,
    link: 'Go To Site →',
    url: 'https://chat.deepseek.com/',
  },
  {
    name: 'Claude (Anthropic)',
    role: 'Conversational AI known for safety and longer context windows',
    image: 'assets/images/llms/claude-logo.jpg',
    rating: 4.5,
    link: 'Go To Site →',
    url: 'https://claude.ai/',
  },
  {
    name: 'Llama (Meta)',
    role: ' Open-source LLM for developers',
    image: 'assets/images/llms/llama-logo.png',
    rating: 4.5,
    link: 'Go To Site →',
    url: 'https://llama.meta.com/',
  },
  {
    name: 'Perplexity AI',
    role: 'Conversational AI focused on search and real-time information with source citations',
    image: 'assets/images/llms/perplexity-logo.png',
    rating: 4.5,
    link: 'Go To Site →',
    url: 'https://www.perplexity.ai/',
  },
  {
    name: 'Microsoft Copilot',
    role: 'An AI assistant integrated across Microsoft products, designed to enhance productivity and creativity',
    image: 'assets/images/llms/copilot-logo.jpg',
    rating: 4.5,
    link: 'Go To Site →',
    url: 'https://copilot.microsoft.com/',
  },
];
}
