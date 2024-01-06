export interface Resume {
  function: string;
  socials: Social[];
  aboutMe: string;
  workExperiences: WorkExperience[];
  skills: Skill[];
}

export interface Social {
  icon: string;
  url: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  begunYear: string;
  endedYear: string;
  summary: string;
  missions: string[];
  skills: Skill[];
}

export interface Skill {
  name: string;
  skills: string[];
}
