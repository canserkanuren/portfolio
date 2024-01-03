import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { radixGithubLogo, radixLinkedinLogo } from '@ng-icons/radix-icons';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmH3Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-socials',
  standalone: true,
  imports: [NgFor, HlmH3Directive, HlmButtonDirective, HlmIconComponent],
  providers: [provideIcons({ radixGithubLogo, radixLinkedinLogo })],
  template: `
    <section class="flex flex-col gap-2 justify-between">
      <h3 hlmH3>Socials</h3>

      <div class="flex flex-row gap-2">
        <ng-container *ngFor="let social of socials()">
          <a
            hlmBtn
            size="icon"
            variant="outline"
            [href]="social.url"
            target="_blank"
          >
            <hlm-icon size="sm" [name]="social.icon" />
          </a>
        </ng-container>
      </div>
    </section>
  `
})
export class SocialsComponent {
  socials = signal([
    {
      icon: 'radixLinkedinLogo',
      url: 'https://www.linkedin.com/in/can-serkan-uren/'
    },
    {
      icon: 'radixGithubLogo',
      url: 'https://github.com/canserkanuren'
    }
  ]);
}
