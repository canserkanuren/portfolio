import { Component, Input, signal } from '@angular/core';
import { Skill } from '@canserkanuren/data';
import { HlmUlDirective } from '@canserkanuren/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-skills',
  standalone: true,
  imports: [HlmUlDirective],
  template: `
    <ul hlmUl>
      @for (mission of _skills(); track mission) {
        <li>
          <strong class="me-0.5">{{ mission.name }}:</strong>
          @for (skill of mission.skills; track skill) {
            <span> {{ skill }}{{ $last ? '' : ',' }} </span>
          }
        </li>
      }
    </ul>
  `
})
export class SkillsComponent {
  _skills = signal<Skill[]>([]);
  @Input() set skills(skills: Skill[]) {
    this._skills.set(skills);
  }
}
