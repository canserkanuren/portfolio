import {
  computed,
  Directive,
  HostBinding,
  inject,
  Input,
  signal
} from '@angular/core';
import { BrnAccordionDirective } from '@spartan-ng/ui-accordion-brain';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmAccordion]',
  standalone: true,
  hostDirectives: [BrnAccordionDirective]
})
export class HlmAccordionDirective {
  private readonly _brn = inject(BrnAccordionDirective);

  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected readonly _computedClass = computed(() =>
    hlm(
      'flex',
      this._brn.orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      this._userCls()
    )
  );

  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
