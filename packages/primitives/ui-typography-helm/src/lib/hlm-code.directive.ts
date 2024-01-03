import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmCode =
  'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold';

@Directive({
  selector: '[hlmCode]',
  standalone: true
})
export class HlmCodeDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmCode, this._userCls());
  }
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
