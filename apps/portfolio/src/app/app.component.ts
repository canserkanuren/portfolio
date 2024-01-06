import { Component } from '@angular/core';
import { AboutComponent } from '@canserkanuren/about';
import { ProfileComponent } from '@canserkanuren/profile';
import { SkillsContainerComponent } from '@canserkanuren/skills';
import { WorkExperiencesComponent } from '@canserkanuren/work-experiences';

@Component({
  standalone: true,
  imports: [
    // custom components
    AboutComponent,
    ProfileComponent,
    WorkExperiencesComponent,
    SkillsContainerComponent
  ],
  selector: 'csu-portfolio-root',
  template: `
    <main class="flex flex-col container p-10 gap-6 md:p-20">
      <csu-portfolio-profile />

      <csu-portfolio-about />

      <csu-portfolio-work-experiences />

      <csu-portfolio-skills-container />
    </main>
  `
})
export class AppComponent {}
