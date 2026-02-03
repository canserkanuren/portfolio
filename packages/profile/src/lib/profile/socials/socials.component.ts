import { Component, Input, signal } from '@angular/core';
import { Social } from '@canserkanuren/data';
import { HlmButtonDirective } from '@canserkanuren/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@canserkanuren/ui-icon-helm';
import { HlmH3Directive } from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';
import { radixGithubLogo, radixLinkedinLogo } from '@ng-icons/radix-icons';

@Component({
  selector: 'csu-portfolio-socials',
  imports: [
    HlmH3Directive,
    HlmButtonDirective,
    HlmIconComponent,
    TranslocoModule
  ],
  providers: [
    provideIcons({
      radixGithubLogo,
      radixLinkedinLogo
    })
  ],
  template: `
    <section class="flex flex-col gap-2 justify-between" *transloco="let t">
      <h3 hlmH3>{{ t('SOCIALS') }}</h3>

      <div class="w-full flex flex-row gap-2 justify-center md:justify-start">
        @for (social of _socials(); track social.url) {
          <div class="group relative">
            <a
              hlmBtn
              size="icon"
              variant="outline"
              [href]="social.url"
              target="_blank"
              [aria-label]="social.label"
            >
              <hlm-icon size="sm" [name]="social.icon" />
            </a>
            <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 text-xs bg-popover text-popover-foreground border rounded shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
              {{ social.label }}
            </span>
          </div>
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
