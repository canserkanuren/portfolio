import { DateTimeMaybeValid } from 'luxon';

export interface Resume {
  function: string;
  socials: Social[];
  aboutMe: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
}

export interface Social {
  icon: string;
  url: string;
  label: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  begunYear: DateTimeMaybeValid;
  endedYear: DateTimeMaybeValid;
  summary: string;
  missions: string[];
  skills: Skill[];
}

export interface Skill {
  name: string;
  skills: string[];
}
