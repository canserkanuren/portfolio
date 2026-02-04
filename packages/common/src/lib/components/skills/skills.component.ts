import { Component, Input, signal } from '@angular/core';
import { Skill } from '@canserkanuren/data';

@Component({
  selector: 'csu-portfolio-skills',
  template: `
    @for (_ of [_resetKey()]; track _) {
      <div class="flex flex-col gap-3">
        @for (category of _skills(); track category.name) {
          <div>
            <p style="animation: revealIn 300ms ease-out forwards" class="text-sm font-semibold text-muted-foreground mb-1.5 opacity-0">{{ category.name }}</p>
            <div class="flex flex-wrap gap-1.5">
              @for (skill of category.skills; track skill) {
                <span
                  [style.animation]="'revealIn 300ms ease-out ' + (($index + 1) * 50) + 'ms forwards'"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground opacity-0"
                >
                  {{ skill }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    }
  `
})
export class SkillsComponent {
  _skills = signal<Skill[]>([]);
  _resetKey = signal<string>('');

  @Input() set skills(skills: Skill[]) {
    this._skills.set(skills);
  }

  @Input() set resetKey(key: string) {
    this._resetKey.set(key);
  }
}
