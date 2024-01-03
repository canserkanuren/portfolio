import { Directive, HostBinding, Input, computed, signal } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

export const hlmLead = 'text-xl text-muted-foreground';

@Directive({
  selector: '[hlmLead]',
  standalone: true
})
export class HlmLeadDirective {
  private readonly _userCls = signal<ClassValue>('');
  @Input()
  set class(userCls: ClassValue) {
    this._userCls.set(userCls);
  }

  protected _computedClass = computed(() => this._generateClass());
  private _generateClass() {
    return hlm(hlmLead, this._userCls());
  }
  @HostBinding('class') get classes(): string {
    return this._computedClass();
  }
}
