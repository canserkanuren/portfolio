import { Component, inject } from '@angular/core';
import { SupportedLanguage } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import {
  BrnSwitchComponent,
  BrnSwitchThumbComponent
} from '@spartan-ng/ui-switch-brain';
import {
  HlmSwitchDirective,
  HlmSwitchThumbDirective
} from '@spartan-ng/ui-switch-helm';

@Component({
  selector: 'csu-portfolio-languages-choice',
  standalone: true,
  imports: [
    HlmLabelDirective,
    BrnSwitchComponent,
    BrnSwitchThumbComponent,
    HlmSwitchDirective,
    HlmSwitchThumbDirective
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

  checked = this.store.languageCheckedState;

  languageChanged(value: boolean): void {
    const language = value ? SupportedLanguage.FR : SupportedLanguage.EN;

    this.store.updateCurrentResumeByLanguage(language);
  }
}
