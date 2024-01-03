import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmH2 =
  'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0';

@Directive({
  selector: '[hlmH2]',
  standalone: true
})
export class HlmH2Directive {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmH2, this._userCls());
  }
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
