import { Component, Signal, inject, signal } from '@angular/core';
import { SkillsComponent } from '@canserkanuren/common';
import { WorkExperience } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmAccordionImports } from '@canserkanuren/ui-accordion-helm';
import { HlmIconComponent } from '@canserkanuren/ui-icon-helm';
import {
  HlmH2Directive,
  HlmH3Directive,
  HlmPDirective,
  HlmUlDirective
} from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import { DateTime } from 'luxon';

@Component({
  selector: 'csu-portfolio-work-experiences',
  imports: [
    // primitives
    BrnAccordionContentComponent,
    HlmAccordionImports,
    HlmIconComponent,
    HlmH2Directive,
    HlmH3Directive,
    HlmPDirective,
    HlmUlDirective,
    // common components
    SkillsComponent,
    TranslocoModule
  ],
  template: `
    <ng-container *transloco="let t">
      <h2 hlmH2>{{ t('WORK_EXPERIENCES') }}</h2>

      <div hlmAccordion type="multiple">
        @for (workExperience of workExperiences(); track workExperience.title) {
          <div hlmAccordionItem>
            @let begunYear =
              workExperience.begunYear.toLocaleString({
                month: 'long',
                year: 'numeric'
              });

            @let endedYear =
              workExperience.endedYear.toLocaleString({
                month: 'long',
                year: 'numeric'
              });

            <button hlmAccordionTrigger>
              <strong>
                {{ workExperience.title }} &#64; {{ workExperience.company }},
                {{ begunYear }} {{ t('TO') }}
                {{ endedYear === this.now() ? t('NOW') : endedYear }}
              </strong>
              <hlm-icon hlmAccIcon />
            </button>

            <brn-accordion-content hlm>
              <section class="mb-2">
                <h3 hlmH3>Summary</h3>
                <p hlmP>
                  {{ workExperience.summary }}
                </p>
              </section>

              <section class="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2">
                <section>
                  <h3 hlmH3>Missions</h3>

                  <ul hlmUl>
                    @for (mission of workExperience.missions; track mission) {
                      <li>{{ mission }}</li>
                    }
                  </ul>
                </section>

                <section>
                  <h3 hlmH3>Skills</h3>

                  <csu-portfolio-skills [skills]="workExperience.skills" />
                </section>
              </section>
            </brn-accordion-content>
          </div>
        }
      </div>
    </ng-container>
  `
})
export class WorkExperiencesComponent {
  private readonly store = inject(ResumeStore);

  workExperiences: Signal<WorkExperience[]> = this.store.workExperience;
  now = signal(
    DateTime.now().toLocaleString({
      month: 'long',
      year: 'numeric'
    })
  );
}
