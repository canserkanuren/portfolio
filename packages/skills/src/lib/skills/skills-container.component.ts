import { Component, Signal, computed, inject, signal } from '@angular/core';
import { RevealDirective, SkillsComponent } from '@canserkanuren/common';
import { Skill } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmButtonDirective } from '@canserkanuren/ui-button-helm';
import { HlmH2Directive } from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'csu-portfolio-skills-container',
  imports: [
    HlmH2Directive,
    HlmButtonDirective,
    SkillsComponent,
    TranslocoModule,
    RevealDirective
  ],
  template: `
    <section csuReveal *transloco="let t">
      <h2 hlmH2>{{ t('SKILLS') }}</h2>

      <div class="flex flex-wrap gap-1.5 mb-4">
        <button
          hlmBtn
          type="button"
          size="sm"
          [variant]="selectedCategory() === null ? 'default' : 'outline'"
          (click)="selectCategory(null)"
        >
          {{ t('ALL') }}
        </button>
        @for (category of categories(); track category) {
          <button
            hlmBtn
            type="button"
            size="sm"
            [variant]="selectedCategory() === category ? 'default' : 'outline'"
            (click)="selectCategory(category)"
          >
            {{ category }}
          </button>
        }
      </div>

      <csu-portfolio-skills [skills]="filteredSkills()" [resetKey]="selectedCategory() ?? 'all'" />
    </section>
  `
})
export class SkillsContainerComponent {
  private readonly store = inject(ResumeStore);

  skills: Signal<Skill[]> = this.store.skills;
  selectedCategory = signal<string | null>(null);

  categories = computed(() => this.skills().map(s => s.name));

  filteredSkills = computed(() => {
    const selected = this.selectedCategory();
    if (selected === null) return this.skills();
    return this.skills().filter(s => s.name === selected);
  });

  selectCategory(category: string | null): void {
    this.selectedCategory.set(category);
  }
}
