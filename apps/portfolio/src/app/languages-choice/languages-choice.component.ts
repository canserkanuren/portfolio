import { Component, inject, signal } from '@angular/core';
import { SupportedLanguage } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmButtonDirective } from '@canserkanuren/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@canserkanuren/ui-icon-helm';
import { HlmLabelDirective } from '@canserkanuren/ui-label-helm';
import {
  HlmSwitchDirective,
  HlmSwitchThumbDirective
} from '@canserkanuren/ui-switch-helm';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { radixMoon, radixSun } from '@ng-icons/radix-icons';
import {
  BrnSwitchComponent,
  BrnSwitchThumbComponent
} from '@spartan-ng/ui-switch-brain';

@Component({
  selector: 'csu-portfolio-languages-choice',
  imports: [
    HlmLabelDirective,
    HlmButtonDirective,
    HlmIconComponent,
    BrnSwitchComponent,
    BrnSwitchThumbComponent,
    HlmSwitchDirective,
    HlmSwitchThumbDirective,
    TranslocoModule
  ],
  providers: [provideIcons({ radixSun, radixMoon })],
  template: `
    <section class="w-100 flex justify-end items-center gap-4">
      <button
        hlmBtn
        variant="ghost"
        size="icon"
        (click)="toggleDarkMode()"
        aria-label="Toggle dark mode"
      >
        <hlm-icon size="sm" [name]="darkMode() ? 'radixSun' : 'radixMoon'" />
      </button>

      <label class="flex items-center gap-2" hlmLabel>
        English
        <brn-switch
          hlm
          (changed)="languageChanged($event)"
          [checked]="checked()"
        >
          <brn-switch-thumb hlm />
        </brn-switch>
        French
      </label>
    </section>
  `
})
export class LanguagesChoiceComponent {
  private readonly store = inject(ResumeStore);
  private readonly translocoService = inject(TranslocoService);

  checked = this.store.languageCheckedState;
  darkMode = signal(this.initDarkMode());

  constructor() {
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
    }
  }

  languageChanged(value: boolean): void {
    const language = value ? SupportedLanguage.FR : SupportedLanguage.EN;

    this.store.updateCurrentResumeByLanguage(language);
    this.translocoService.setActiveLang(language.toLowerCase());
  }

  toggleDarkMode(): void {
    this.darkMode.update(current => !current);
    document.documentElement.classList.toggle('dark', this.darkMode());
    localStorage.setItem('darkMode', String(this.darkMode()));
  }

  private initDarkMode(): boolean {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
