import {
  ALL_RESUMES,
  Resume,
  SupportedLanguage,
  englishResume
} from '@canserkanuren/data';
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
  { providedIn: 'root' },
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
      updateCurrentResumeByLanguage(language());
    }
  })
);
