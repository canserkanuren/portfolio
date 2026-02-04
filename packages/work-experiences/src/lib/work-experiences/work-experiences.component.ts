import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, computed, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RevealDirective, SkillsComponent } from '@canserkanuren/common';
import { WorkExperience } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmButtonDirective } from '@canserkanuren/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@canserkanuren/ui-icon-helm';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective
} from '@canserkanuren/ui-sheet-helm';
import {
  HlmH2Directive,
  HlmH3Directive,
  HlmPDirective,
  HlmUlDirective
} from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';
import { radixChevronRight, radixCross1 } from '@ng-icons/radix-icons';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import { DateTime } from 'luxon';
import { map } from 'rxjs';

@Component({
  selector: 'csu-portfolio-work-experiences',
  imports: [
    HlmButtonDirective,
    HlmIconComponent,
    HlmH2Directive,
    HlmH3Directive,
    HlmPDirective,
    HlmUlDirective,
    SkillsComponent,
    TranslocoModule,
    RevealDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    BrnSheetTriggerDirective,
    BrnSheetContentDirective
  ],
  providers: [provideIcons({ radixChevronRight, radixCross1 })],
  template: `
    <ng-container *transloco="let t">
      <h2 hlmH2 csuReveal>{{ t('WORK_EXPERIENCES') }}</h2>

      <!-- Clickable row list -->
      <div class="flex flex-col">
        @for (workExperience of workExperiences(); track workExperience.title) {
          @let begunYear = workExperience.begunYear.toLocaleString({
            month: 'long',
            year: 'numeric'
          });
          @let endedYear = workExperience.endedYear.toLocaleString({
            month: 'long',
            year: 'numeric'
          });

          <hlm-sheet [side]="sheetSide()">
            <button
              brnSheetTrigger
              hlmBtn
              variant="ghost"
              csuReveal
              [revealDelay]="($index + 1) * 100"
              class="w-full justify-between border-b border-border rounded-none px-0.5 py-4 h-auto"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-left">
                <strong>{{ workExperience.title }} &#64; {{ workExperience.company }}</strong>
                <span class="text-xs text-muted-foreground">
                  {{ begunYear }} {{ t('TO') }} {{ endedYear === now() ? t('NOW') : endedYear }}
                </span>
              </div>
              <hlm-icon size="sm" name="radixChevronRight" />
            </button>

            <hlm-sheet-content *brnSheetContent="let ctx" [class]="sheetContentClass()">
              <hlm-sheet-header>
                <h2 hlmSheetTitle>{{ workExperience.title }}</h2>
                <p hlmSheetDescription>
                  {{ workExperience.company }} &middot;
                  {{ begunYear }} {{ t('TO') }}
                  {{ endedYear === now() ? t('NOW') : endedYear }}
                </p>
              </hlm-sheet-header>

              <div class="flex flex-col gap-4 py-4">
                <!-- Summary -->
                @if (workExperience.summary) {
                  <div>
                    <h3 hlmH3>{{ t('SUMMARY') }}</h3>
                    <p hlmP>{{ workExperience.summary }}</p>
                  </div>
                }

                <!-- Missions -->
                <div>
                  <h3 hlmH3>{{ t('MISSIONS') }}</h3>
                  <ul hlmUl>
                    @for (mission of workExperience.missions; track mission) {
                      <li>{{ mission }}</li>
                    }
                  </ul>
                </div>

                <!-- Skills -->
                <div>
                  <h3 hlmH3>{{ t('SKILLS') }}</h3>
                  <csu-portfolio-skills [skills]="workExperience.skills" />
                </div>
              </div>
            </hlm-sheet-content>
          </hlm-sheet>
        }
      </div>
    </ng-container>
  `
})
export class WorkExperiencesComponent {
  private readonly store = inject(ResumeStore);
  private readonly breakpointObserver = inject(BreakpointObserver);

  workExperiences: Signal<WorkExperience[]> = this.store.workExperience;
  now = signal(
    DateTime.now().toLocaleString({
      month: 'long',
      year: 'numeric'
    })
  );

  // Responsive sheet side: bottom on mobile, right on desktop
  private readonly isMobile = toSignal(
    this.breakpointObserver
      .observe(['(max-width: 639px)'])
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );

  readonly sheetSide = computed(() => (this.isMobile() ? 'bottom' : 'right'));

  readonly sheetContentClass = computed(() =>
    this.isMobile() ? 'max-h-[85vh] overflow-y-auto' : 'w-[480px] overflow-y-auto'
  );
}
