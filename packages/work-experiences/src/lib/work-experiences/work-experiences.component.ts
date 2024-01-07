import { Component, signal } from '@angular/core';
import { SkillsComponent } from '@canserkanuren/common';
import { RESUME, WorkExperience } from '@canserkanuren/data';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import { HlmAccordionImports } from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {
  HlmH2Directive,
  HlmH3Directive,
  HlmPDirective,
  HlmUlDirective
} from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-work-experiences',
  standalone: true,
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
    SkillsComponent
  ],
  template: `
    <h2 hlmH2>Work experiences</h2>

    <div hlmAccordion>
      @for (workExperience of workExperiences(); track workExperience.title) {
      <div hlmAccordionItem>
        <button hlmAccordionTrigger>
          <strong>
            {{ workExperience.title }} &#64; {{ workExperience.company }}, from
            {{ workExperience.begunYear }} to
            {{ workExperience.endedYear }}
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
  `
})
export class WorkExperiencesComponent {
  workExperiences = signal<WorkExperience[]>(RESUME.workExperiences);
}
