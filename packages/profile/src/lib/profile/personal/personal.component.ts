import { Component } from '@angular/core';
import { HlmH1Directive, HlmH4Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-personal',
  standalone: true,
  imports: [HlmH1Directive, HlmH4Directive],
  template: `
    <h1 hlmH1>Can Serkan UREN</h1>
    <h4 hlmH4>Lead Full Stack Developer</h4>
  `
})
export class PersonalComponent {}
