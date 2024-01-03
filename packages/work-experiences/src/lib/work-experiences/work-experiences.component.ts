import { Component } from '@angular/core';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import { HlmAccordionImports } from '@spartan-ng/ui-accordion-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'csu-portfolio-work-experiences',
  standalone: true,
  imports: [
    // primitives
    BrnAccordionContentComponent,
    HlmAccordionImports,
    HlmIconComponent,
    HlmButtonDirective
  ],
  template: `
    <ng-container>
      <div hlmAccordion>
        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Work Experiences
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Here's my work experiences
          </brn-accordion-content>
        </div>
      </div>
    </ng-container>
  `
})
export class WorkExperiencesComponent {}
