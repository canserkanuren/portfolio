import { Component, Input, signal } from '@angular/core';
import { Social } from '@canserkanuren/data';
import { HlmButtonDirective } from '@canserkanuren/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@canserkanuren/ui-icon-helm';
import { HlmH3Directive } from '@canserkanuren/ui-typography-helm';
import { radixGithubLogo, radixLinkedinLogo } from '@ng-icons/radix-icons';

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
        @for (social of _socials(); track social.url) {
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
  _socials = signal<Social[]>([]);
  @Input() set socials(socials: Social[]) {
    this._socials.set(socials);
  }
}
