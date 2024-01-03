import { Component } from '@angular/core';
import { HlmH2Directive, HlmPDirective } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-about',
  standalone: true,
  imports: [HlmH2Directive, HlmPDirective],
  template: `
    <section class="flex flex-col gap-2">
      <h2 hlmH2>About me</h2>

      <p hlmP>
        I am currently a Angular Tech Lead, working at Crédit Agricole in
        Montrouge, Paris, with many areas of expertise such as in front-end
        development, Scrum method but also in CI/CD.
      </p>

      <p hlmP>
        I have been working for the past 6 years in Société Générale, as a Full
        Stack Developer and my main mission was to create tools that would
        benefit the company's developers in a self-care mode, such as onboarding
        tools in Société Générale's Cloud Platform but also on Software Factory
        tools (SonarQube, GitHub, Nexus, Artifactory, etc...)
      </p>
    </section>
  `
})
export class AboutComponent {}
