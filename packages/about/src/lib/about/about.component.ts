import { Component, inject } from '@angular/core';
import { RevealDirective } from '@canserkanuren/common';
import { ResumeStore } from '@canserkanuren/store';
import {
  HlmH2Directive,
  HlmPDirective
} from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'csu-portfolio-about',
  imports: [HlmH2Directive, HlmPDirective, TranslocoModule, RevealDirective],
  template: `
    <section class="flex flex-col gap-2" csuReveal *transloco="let t">
      <h2 hlmH2>{{ t('ABOUT_ME') }}</h2>

      @for (description of aboutMe(); track description) {
        <p hlmP>{{ description }}</p>
      }
    </section>
  `
})
export class AboutComponent {
  private readonly store = inject(ResumeStore);

  aboutMe = this.store.aboutMe;
}
