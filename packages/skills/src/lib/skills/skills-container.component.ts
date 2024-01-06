import { Component, signal } from '@angular/core';
import { SkillsComponent } from '@canserkanuren/common';
import { RESUME, Skill } from '@canserkanuren/data';
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
  skills = signal<Skill[]>(RESUME.skills);
}
