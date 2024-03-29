import {
  computed,
  Directive,
  HostBinding,
  inject,
  Input,
  signal
} from '@angular/core';
import { HlmIconComponent, provideIcons } from '@canserkanuren/ui-icon-helm';
import { radixChevronDown } from '@ng-icons/radix-icons';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

@Directive({
  selector: 'hlm-icon[hlmAccordionIcon], hlm-icon[hlmAccIcon]',
  standalone: true,
  providers: [provideIcons({ radixChevronDown })]
})
export class HlmAccordionIconDirective {
  private readonly _hlmIcon = inject(HlmIconComponent);

  private readonly _userCls = signal<ClassValue>('');
  protected _computedClass = computed(() =>
    hlm(
      'inline-block h-4 w-4 transition-transform duration-200',
      this._userCls()
    )
  );

  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }

  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  constructor() {
    this._hlmIcon.name = 'radixChevronDown';
  }
}
