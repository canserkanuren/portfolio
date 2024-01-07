import { HlmSwitchThumbDirective } from './lib/hlm-switch-thumb.directive';
import { HlmSwitchDirective } from './lib/hlm-switch.directive';

export * from './lib/hlm-switch-thumb.directive';
export * from './lib/hlm-switch.directive';

export const HlmSwitchImports = [
  HlmSwitchDirective,
  HlmSwitchThumbDirective
] as const;
