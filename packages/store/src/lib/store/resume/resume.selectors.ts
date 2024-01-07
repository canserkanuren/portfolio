import { computed } from '@angular/core';
import { SupportedLanguage } from '@canserkanuren/data';
import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { ResumeStoreState } from './resume.store';

export const withResumeSelectors = () => {
  return signalStoreFeature(
    { state: type<ResumeStoreState>() },
    withComputed(({ resume, language }) => ({
      languageCheckedState: computed(() => language() === SupportedLanguage.FR),
      function: computed(() => resume().function),
      socials: computed(() => resume().socials),
      aboutMe: computed(() => resume().aboutMe),
      workExperience: computed(() => resume().workExperiences),
      skills: computed(() => resume().skills)
    }))
  );
};
