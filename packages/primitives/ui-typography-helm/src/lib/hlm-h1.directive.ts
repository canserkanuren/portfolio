import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmH1 =
  'scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl';

@Directive({
  selector: '[hlmH1]',
  standalone: true
})
export class HlmH1Directive {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmH1, this._userCls());
  }
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
