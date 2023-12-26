import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  standalone: true,
  imports: [RouterModule, HlmButtonDirective],
  selector: 'portfolio-root',
  template: ` <button hlmBtn>Button</button>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
