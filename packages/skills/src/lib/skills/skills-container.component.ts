import { Component, Signal, inject } from '@angular/core';
import { SkillsComponent } from '@canserkanuren/common';
import { Skill } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmH2Directive } from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'csu-portfolio-skills-container',
  imports: [
    // primitives
    HlmH2Directive,
    // common components
    SkillsComponent,

    TranslocoModule
  ],
  template: `
    <h2 hlmH2 *transloco="let t">{{ t('SKILLS') }}</h2>

    <csu-portfolio-skills [skills]="skills()" />
  `
})
export class SkillsContainerComponent {
  private readonly store = inject(ResumeStore);

  skills: Signal<Skill[]> = this.store.skills;
}
