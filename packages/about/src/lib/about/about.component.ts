import { Component, inject } from '@angular/core';
import { ResumeStore } from '@canserkanuren/store';
import {
  HlmH2Directive,
  HlmPDirective
} from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'csu-portfolio-about',
  imports: [HlmH2Directive, HlmPDirective, TranslocoModule],
  template: `
    <section class="flex flex-col gap-2" *transloco="let t">
      <h2 hlmH2>{{ t('ABOUT_ME') }}</h2>

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
