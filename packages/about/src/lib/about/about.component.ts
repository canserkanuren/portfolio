import { Component, inject } from '@angular/core';
import { ResumeStore } from '@canserkanuren/store';
import { HlmH2Directive, HlmPDirective } from '@canserkanuren/ui-typography-helm';

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
  private readonly store = inject(ResumeStore);

  aboutMe = this.store.aboutMe;
}
