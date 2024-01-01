import { Component } from '@angular/core';
import { ProfileComponent } from '@canserkanuren/profile';

@Component({
  standalone: true,
  imports: [ProfileComponent],
  selector: 'csu-portfolio-root',
  template: `
    <main class="h-100 w-100 p-20">
      <csu-portfolio-profile />
    </main>
  `
})
export class AppComponent {
  title = 'portfolio';
}
