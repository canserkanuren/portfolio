import { Component, Input, signal } from '@angular/core';
import { HlmH1Directive, HlmH4Directive } from '@spartan-ng/ui-typography-helm';

@Component({
  selector: 'csu-portfolio-personal',
  standalone: true,
  imports: [HlmH1Directive, HlmH4Directive],
  template: `
    <h1 hlmH1>Can Serkan UREN</h1>
    <h4 hlmH4>{{ _function() }}</h4>
  `
})
export class PersonalComponent {
  _function = signal<string>('');

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('function') set resumeFunction(resumeFunction: string) {
    this._function.set(resumeFunction);
  }
}
