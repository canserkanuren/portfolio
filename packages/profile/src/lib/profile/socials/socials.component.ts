import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HlmH3Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-socials',
  standalone: true,
  imports: [CommonModule, HlmH3Directive],
  template: `<h3 hlmH3>Socials</h3>`
})
export class SocialsComponent {}
