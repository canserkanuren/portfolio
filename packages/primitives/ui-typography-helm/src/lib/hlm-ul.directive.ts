import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmUl = 'my-6 ml-6 list-disc [&>li]:mt-2';

@Directive({
  selector: '[hlmUl]',
  standalone: true
})
export class HlmUlDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmUl, this._userCls());
  }
  @HostBinding('class') clazz = this._computedClass();
}
