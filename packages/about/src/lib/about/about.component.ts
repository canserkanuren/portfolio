import { Component, WritableSignal, signal } from '@angular/core';
import { RESUME } from '@canserkanuren/data';
import { HlmH2Directive, HlmPDirective } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-about',
  standalone: true,
  imports: [HlmH2Directive, HlmPDirective],
  template: `
    <section class="flex flex-col gap-2">
      <h2 hlmH2>About me</h2>

      @for (description of aboutMe(); track aboutMe) {
      <p hlmP>{{ description }}</p>
      }
    </section>
  `
})
export class AboutComponent {
  aboutMe: WritableSignal<string[]> = signal<string[]>(RESUME.aboutMe);
}
