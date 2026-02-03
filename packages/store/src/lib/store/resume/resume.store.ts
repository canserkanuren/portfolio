import { inject } from '@angular/core';
import {
  ALL_RESUMES,
  Resume,
  SupportedLanguage,
  englishResume
} from '@canserkanuren/data';
import { TranslocoService } from '@jsverse/transloco';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { withResumeSelectors } from './resume.selectors';

export interface ResumeStoreState {
  resume: Resume;
  language: SupportedLanguage;
}

const resumeInitialState: ResumeStoreState = {
  resume: englishResume,
  language: SupportedLanguage.EN
};

export const ResumeStore = signalStore(
  { providedIn: 'root', protectedState: false },
  withState(resumeInitialState),
  withResumeSelectors(),
  withMethods(store => ({
    updateCurrentResumeByLanguage(language: SupportedLanguage) {
      const resume = ALL_RESUMES[language];

      patchState(store, { resume, language });
    }
  })),
  withHooks({
    onInit({ language, updateCurrentResumeByLanguage }) {
      const navigatorLanguage = window.navigator.language
        .split('-')?.[0]
        ?.toUpperCase() as SupportedLanguage;
      updateCurrentResumeByLanguage(navigatorLanguage || language());
      const translocoService = inject(TranslocoService);

      translocoService.setActiveLang(language().toLowerCase());
    }
  })
);
