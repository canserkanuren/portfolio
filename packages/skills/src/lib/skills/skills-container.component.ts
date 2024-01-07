import { Component, Signal, inject } from '@angular/core';
import { SkillsComponent } from '@canserkanuren/common';
import { Skill } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmH2Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-skills-container',
  standalone: true,
  imports: [
    // primitives
    HlmH2Directive,
    // common components
    SkillsComponent
  ],
  template: `
    <h2 hlmH2>Skills</h2>

    <csu-portfolio-skills [skills]="skills()" />
  `
})
export class SkillsContainerComponent {
  private readonly store = inject(ResumeStore);

  skills: Signal<Skill[]> = this.store.skills;
}
