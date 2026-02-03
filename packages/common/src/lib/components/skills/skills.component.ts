import { Component, Input, signal } from '@angular/core';
import { Skill } from '@canserkanuren/data';

@Component({
  selector: 'csu-portfolio-skills',
  template: `
    <div class="flex flex-col gap-3">
      @for (category of _skills(); track category.name + '|' + _resetKey()) {
        <div>
          <p style="animation: revealIn 300ms ease-out both" class="text-sm font-semibold text-muted-foreground mb-1.5">{{ category.name }}</p>
          <div class="flex flex-wrap gap-1.5">
            @for (skill of category.skills; track skill + '|' + _resetKey()) {
              <span
                style="animation: revealIn 300ms ease-out both"
                [style.animation-delay]="($index + 1) * 50 + 'ms'"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {{ skill }}
              </span>
            }
          </div>
        </div>
      }
    </div>
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
