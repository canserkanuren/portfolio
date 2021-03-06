import { computed, Directive, HostBinding, Input, signal } from '@angular/core';
import { BrnAccordionTriggerDirective } from '@spartan-ng/ui-accordion-brain';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmAccordionTrigger]',
  standalone: true,
  hostDirectives: [BrnAccordionTriggerDirective]
})
export class HlmAccordionTriggerDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(inputs: ClassValue) {
    this._userCls.set(inputs);
  }

  protected _computedClass = computed(() =>
    hlm(
      'w-full focus-visible:outline-none text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 flex flex-1 items-center justify-between py-4 px-0.5 font-medium underline-offset-4 hover:underline [&[data-state=open]>[hlmAccordionIcon]]:rotate-180 [&[data-state=open]>[hlmAccIcon]]:rotate-180',
      this._userCls()
    )
  );
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }

  @HostBinding('style') get customOffset() {
    return { '--tw-ring-offset-shadow': '0 0 #000' };
  }
}
