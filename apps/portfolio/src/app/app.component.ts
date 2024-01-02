import { Component } from '@angular/core';
import { ProfileComponent } from '@canserkanuren/profile';

@Component({
  standalone: true,
  imports: [ProfileComponent],
  selector: 'csu-portfolio-root',
  template: `
    <main class="h-100 w-100 p-20">
      <csu-portfolio-profile />

      <!-- <ng-container>
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
      </ng-container> -->
    </main>
  `
})
export class AppComponent {
  title = 'portfolio';
}
