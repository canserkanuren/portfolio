import { Component } from '@angular/core';
import { AboutComponent } from '@canserkanuren/about';
import { ProfileComponent } from '@canserkanuren/profile';
import { WorkExperiencesComponent } from '@canserkanuren/work-experiences';

@Component({
  standalone: true,
  imports: [
    // custom components
    AboutComponent,
    ProfileComponent,
    WorkExperiencesComponent
  ],
  selector: 'csu-portfolio-root',
  template: `
    <main class="flex flex-col container p-20 gap-6">
      <csu-portfolio-profile />

      <csu-portfolio-about />

      <!-- <csu-portfolio-work-experiences /> -->
    </main>
  `
})
export class AppComponent {}
