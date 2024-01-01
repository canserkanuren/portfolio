import { Component } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';
import { SocialsComponent } from './socials/socials.component';

@Component({
  selector: 'csu-portfolio-profile',
  standalone: true,
  imports: [SocialsComponent, PersonalComponent],
  template: `
    <section class="w-100 flex justify-between">
      <section class="flex flex-col">
        <csu-portfolio-personal />

        <csu-portfolio-socials />
      </section>

      <section class="flex">
        <img
          class="object"
          src="assets/photo_profil.jpeg"
          alt="Profile picture"
          height="100"
          width="100"
        />
      </section>
    </section>
  `
})
export class ProfileComponent {}
