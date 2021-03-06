import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmP = 'leading-7 [&:not(:first-child)]:mt-3';

@Directive({
  selector: '[hlmP]',
  standalone: true
})
export class HlmPDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmP, this._userCls());
  }
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
