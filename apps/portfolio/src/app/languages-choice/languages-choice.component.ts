import { Component, inject } from '@angular/core';
import { SupportedLanguage } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmLabelDirective } from '@canserkanuren/ui-label-helm';
import {
  HlmSwitchDirective,
  HlmSwitchThumbDirective
} from '@canserkanuren/ui-switch-helm';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
  BrnSwitchComponent,
  BrnSwitchThumbComponent
} from '@spartan-ng/ui-switch-brain';

@Component({
  selector: 'csu-portfolio-languages-choice',
  imports: [
    HlmLabelDirective,
    BrnSwitchComponent,
    BrnSwitchThumbComponent,
    HlmSwitchDirective,
    HlmSwitchThumbDirective,
    TranslocoModule
  ],
  template: `
    <section class="w-100 flex justify-end">
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

  languageChanged(value: boolean): void {
    const language = value ? SupportedLanguage.FR : SupportedLanguage.EN;

    this.store.updateCurrentResumeByLanguage(language);
    this.translocoService.setActiveLang(language.toLowerCase());
  }
}
