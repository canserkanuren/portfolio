import { Component, Signal, inject, signal } from '@angular/core';
import { RevealDirective, SkillsComponent } from '@canserkanuren/common';
import { WorkExperience } from '@canserkanuren/data';
import { ResumeStore } from '@canserkanuren/store';
import { HlmButtonDirective } from '@canserkanuren/ui-button-helm';
import { HlmIconComponent, provideIcons } from '@canserkanuren/ui-icon-helm';
import {
  HlmH2Directive,
  HlmH3Directive,
  HlmPDirective,
  HlmUlDirective
} from '@canserkanuren/ui-typography-helm';
import { TranslocoModule } from '@jsverse/transloco';
import { radixChevronRight, radixCross1 } from '@ng-icons/radix-icons';
import { DateTime } from 'luxon';

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
    RevealDirective
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

          <button
            hlmBtn
            variant="ghost"
            csuReveal
            [revealDelay]="($index + 1) * 100"
            class="w-full justify-between border-b border-border rounded-none px-0.5 py-4 h-auto"
            (click)="openSheet(workExperience)"
          >
            <div class="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-left">
              <strong>{{ workExperience.title }} &#64; {{ workExperience.company }}</strong>
              <span class="text-xs text-muted-foreground">
                {{ begunYear }} {{ t('TO') }} {{ endedYear === now() ? t('NOW') : endedYear }}
              </span>
            </div>
            <hlm-icon size="sm" name="radixChevronRight" />
          </button>
        }
      </div>

      <!-- Backdrop -->
      <div
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        [class.opacity-100]="!!selectedExperience()"
        [class.opacity-0]="!selectedExperience()"
        [class.pointer-events-none]="!selectedExperience()"
        (click)="closeSheet()"
      ></div>

      <!-- Side sheet -->
      <div
        class="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-background border-l shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto"
        [class.translate-x-0]="!!selectedExperience()"
        [class.translate-x-full]="!selectedExperience()"
      >
        @if (sheetData(); as we) {
          @let sheetBegunYear = we.begunYear.toLocaleString({ month: 'long', year: 'numeric' });
          @let sheetEndedYear = we.endedYear.toLocaleString({ month: 'long', year: 'numeric' });

          <div class="p-6 flex flex-col gap-4">
            <!-- Close button -->
            <div class="flex justify-end">
              <button
                hlmBtn
                variant="ghost"
                size="icon"
                (click)="closeSheet()"
                aria-label="Close"
              >
                <hlm-icon size="sm" name="radixCross1" />
              </button>
            </div>

            <!-- Header -->
            <div>
              <h2 hlmH2>{{ we.title }}</h2>
              <p hlmP class="text-muted-foreground">
                {{ we.company }} &middot;
                {{ sheetBegunYear }} {{ t('TO') }}
                {{ sheetEndedYear === now() ? t('NOW') : sheetEndedYear }}
              </p>
            </div>

            <!-- Summary -->
            @if (we.summary) {
              <div>
                <h3 hlmH3>{{ t('SUMMARY') }}</h3>
                <p hlmP>{{ we.summary }}</p>
              </div>
            }

            <!-- Missions -->
            <div>
              <h3 hlmH3>{{ t('MISSIONS') }}</h3>
              <ul hlmUl>
                @for (mission of we.missions; track mission) {
                  <li>{{ mission }}</li>
                }
              </ul>
            </div>

            <!-- Skills -->
            <div>
              <h3 hlmH3>{{ t('SKILLS') }}</h3>
              <csu-portfolio-skills [skills]="we.skills" />
            </div>
          </div>
        }
      </div>
    </ng-container>
  `
})
export class WorkExperiencesComponent {
  private readonly store = inject(ResumeStore);

  workExperiences: Signal<WorkExperience[]> = this.store.workExperience;
  now = signal(
    DateTime.now().toLocaleString({
      month: 'long',
      year: 'numeric'
    })
  );

  selectedExperience = signal<WorkExperience | null>(null);
  sheetData = signal<WorkExperience | null>(null);

  openSheet(we: WorkExperience): void {
    this.sheetData.set(we);
    this.selectedExperience.set(we);
  }

  closeSheet(): void {
    this.selectedExperience.set(null);
    setTimeout(() => this.sheetData.set(null), 300);
  }
}
