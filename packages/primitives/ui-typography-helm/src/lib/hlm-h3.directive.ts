import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmH3 = 'scroll-m-20 text-2xl font-semibold tracking-tight';

@Directive({
  selector: '[hlmH3]',
  standalone: true
})
export class HlmH3Directive {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmH3, this._userCls());
  }
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
