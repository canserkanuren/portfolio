import { Component } from '@angular/core';
import { ProfileComponent } from '@canserkanuren/profile';
import { WorkExperiencesComponent } from '@canserkanuren/work-experiences';

@Component({
  standalone: true,
  imports: [
    // custom components
    ProfileComponent,
    WorkExperiencesComponent
  ],
  selector: 'csu-portfolio-root',
  template: `
    <main class="h-100 w-100 p-20">
      <csu-portfolio-profile />

      <csu-portfolio-work-experiences />
    </main>
  `
})
export class AppComponent {}
