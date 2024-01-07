import { computed } from '@angular/core';
import { RESUME, Resume } from '@canserkanuren/data';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from '@ngrx/signals';

export interface ResumeStoreState {
  resume: Resume;
}

const resumeInitialState: ResumeStoreState = { resume: RESUME };

export const resumeStore = signalStore(
  withState(resumeInitialState),
  withComputed(({ resume }) => ({
    function: computed(() => resume().function),
    aboutMe: computed(() => resume().aboutMe),
    workExperience: computed(() => resume().workExperiences),
    skills: computed(() => resume().skills)
  })),
  withMethods(store => ({
    updateCurrentResume(resume: Resume) {
      patchState(store, { resume });
    }
  }))
);
