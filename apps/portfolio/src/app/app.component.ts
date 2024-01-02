import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective
} from '@spartan-ng/ui-accordion-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    BrnAccordionContentComponent,
    HlmButtonDirective,
    HlmAccordionDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmAccordionContentDirective,
    HlmAccordionIconDirective,
    HlmIconComponent
  ],
  selector: 'portfolio-root',
  template: `
    <ng-container>
      <button hlmBtn variant="outline">Outlined button</button>
      <button hlmBtn>Button without outline</button>

      <div hlmAccordion>
        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            Is it accessible?
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            Yes. It adheres to the WAI-ARIA design pattern.
          </brn-accordion-content>
        </div>
      </div>
    </ng-container>
  `
})
export class AppComponent {
  title = 'portfolio';
}
