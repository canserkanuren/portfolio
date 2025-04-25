import { Component } from '@angular/core';
import { AboutComponent } from '@canserkanuren/about';
import { ProfileComponent } from '@canserkanuren/profile';
import { SkillsContainerComponent } from '@canserkanuren/skills';
import { WorkExperiencesComponent } from '@canserkanuren/work-experiences';
import { LanguagesChoiceComponent } from './languages-choice/languages-choice.component';

@Component({
    imports: [
        // custom components
        AboutComponent,
        ProfileComponent,
        WorkExperiencesComponent,
        SkillsContainerComponent,
        LanguagesChoiceComponent
    ],
    selector: 'csu-portfolio-root',
    template: `
    <main class="flex flex-col container px-10 py-5 gap-6 md:px-20">
      <csu-portfolio-languages-choice />

      <csu-portfolio-profile />

      <csu-portfolio-about />

      <csu-portfolio-work-experiences />

      <csu-portfolio-skills-container />
    </main>
  `
})
export class AppComponent {}
