import { Component, signal } from '@angular/core';
import { RESUME } from '@canserkanuren/data';
import { radixGithubLogo, radixLinkedinLogo } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmH3Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-socials',
  standalone: true,
  imports: [HlmH3Directive, HlmButtonDirective, HlmIconComponent],
  providers: [
    provideIcons({
      radixGithubLogo,
      radixLinkedinLogo
    })
  ],
  template: `
    <section class="flex flex-col gap-2 justify-between">
      <h3 hlmH3>Socials</h3>

      <div class="w-full flex flex-row gap-2 justify-center md:justify-start">
        @for (social of socials(); track social.url) {
        <a
          hlmBtn
          size="icon"
          variant="outline"
          [href]="social.url"
          target="_blank"
        >
          <hlm-icon size="sm" [name]="social.icon" />
        </a>
        }
      </div>
    </section>
  `
})
export class SocialsComponent {
  socials = signal(RESUME.socials);
}
