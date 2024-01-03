import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmH4 = 'scroll-m-20 text-xl font-semibold tracking-tight';

@Directive({
  selector: '[hlmH4]',
  standalone: true
})
export class HlmH4Directive {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmH4, this._userCls());
  }
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
