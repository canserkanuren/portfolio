import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmLarge = 'text-lg font-semibold';

@Directive({
  selector: '[hlmLarge]',
  standalone: true
})
export class HlmLargeDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmLarge, this._userCls());
  }
  @HostBinding('class') clazz = this._computedClass();
}
