import { Component } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';
import { SocialsComponent } from './socials/socials.component';

@Component({
  selector: 'csu-portfolio-profile',
  standalone: true,
  imports: [SocialsComponent, PersonalComponent],
  template: `
    <section
      class="w-100 flex flex-col-reverse gap-3 justify-between text-center md:flex-row md:gap-0 md:text-start"
    >
      <section class="h-40 flex flex-col justify-between md:h-48">
        <csu-portfolio-personal />

        <csu-portfolio-socials />
      </section>

      <section class="flex flex-wrap justify-center items-center">
        <img
          class="object-scale-down rounded-lg"
          src="assets/photo_profil.jpeg"
          alt="Profile picture"
          class="shadow-lg rounded-full w-32 h-32 align-middle border-none"
        />
      </section>
    </section>
  `
})
export class ProfileComponent {}
