import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  HlmH2Directive,
  HlmH4Directive,
  HlmPDirective
} from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-personal',
  standalone: true,
  imports: [CommonModule, HlmH2Directive, HlmH4Directive, HlmPDirective],
  template: `
    <h1 hlmH2>Can Serkan UREN</h1>
    <h4 hlmH4>Lead Full Stack Developer</h4>

    <p hlmP>Some description</p>
  `
})
export class PersonalComponent {}
