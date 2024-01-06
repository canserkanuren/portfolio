import { Resume } from './data.interface';

export const RESUME: Resume = {
  function: '',
  socials: [
    {
      icon: 'radixLinkedinLogo',
      url: 'https://www.linkedin.com/in/can-serkan-uren/'
    },
    {
      icon: 'radixGithubLogo',
      url: 'https://github.com/canserkanuren'
    }
  ],
  aboutMe: '',
  workExperiences: [
    {
      title: 'Angular Tech Lead',
      company: 'Crédit Agricole CIB',
      begunYear: '10-2023',
      endedYear: 'Present',
      missions: [''],
      skills: [
        {
          name: 'Languages',
          skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
        },
        { name: 'Frameworks', skills: ['Angular', 'FastAPI'] },
        { name: 'Unit / integration testing', skills: ['Jest'] },
        { name: 'Database', skills: ['CouchBase'] },
        {
          name: 'Continuous Integration',
          skills: [
            'GitLab CI',
            'SonarQube',
            'Checkmarx',
            'Artifactory',
            'Nexus',
            'Harbor'
          ]
        },
        {
          name: 'Continuous Deployment',
          skills: ['Kubernetes', 'Kustomize', 'ArgoCD']
        },
        {
          name: 'Development Tools',
          skills: ['Visual Studio Code', 'Postman']
        },
        { name: 'Design', skills: ['Figma'] },
        { name: 'Methdology', skills: ['Agile Scrum'] }
      ]
    },
    {
      title: 'Lead Full Stack Developer / Scrum Master',
      company: 'Société Générale',
      begunYear: '04-2021',
      endedYear: '10-2023',
      missions: [''],
      skills: [
        {
          name: 'Languages',
          skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Go']
        },
        {
          name: 'Frameworks',
          skills: ['Connexion', 'Flask', 'Angular', 'React']
        },
        {
          name: 'Unit / integration testing',
          skills: ['Jest', 'Vitest', 'pytest']
        },
        { name: 'Database', skills: ['PostgreSQL', 'Redis'] },
        {
          name: 'Continuous Integration',
          skills: ['Jenkins', 'GitHub Actions', 'Artifactory', 'Harbor']
        },
        { name: 'Continuous Deployment', skills: ['ArgoCD', 'Kubernetes'] },
        {
          name: 'Development Tools',
          skills: ['IntelliJ', 'Visual Studio Code', 'Postman']
        },
        { name: 'Design', skills: ['Figma'] },
        { name: 'Methdology', skills: ['SAFe'] }
      ]
    },
    {
      title: 'Continuous Delivery Architect',
      company: 'Société Générale',
      begunYear: '09-2019',
      endedYear: '04-2021',
      missions: [''],
      skills: [
        {
          name: 'Languages',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Python',
            'Java 11',
            'GraphQL'
          ]
        },
        {
          name: 'Frameworks',
          skills: [
            'Angular',
            'Spring (Core, Boot, Data, Rest, Security)',
            'NestJS'
          ]
        },
        {
          name: 'Unit / integration testing',
          skills: ['Jest', 'JUnit']
        },
        { name: 'Database', skills: ['PostgreSQL'] },
        {
          name: 'Continuous Integration',
          skills: ['Jenkins', 'GitHub Actions', 'Artifactory', 'Nexus']
        },
        { name: 'Continuous Deployment', skills: ['ArgoCD', 'Kubernetes'] },
        {
          name: 'Development Tools',
          skills: ['IntelliJ', 'Visual Studio Code', 'Postman', 'Insomnia']
        },
        { name: 'Design', skills: ['Figma'] },
        { name: 'Methdology', skills: ['Agile Scrum'] }
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Société Générale',
      begunYear: '09-2019',
      endedYear: '04-2021',
      missions: [''],
      skills: [
        {
          name: 'Languages',
          skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java 8']
        },
        {
          name: 'Frameworks',
          skills: ['AngularJS', 'Spring (Core, Boot, Data, Rest, Security)']
        },
        {
          name: 'Unit / integration testing',
          skills: ['Karma', 'Jasmine', 'JUnit', 'Selenium']
        },
        { name: 'Database', skills: ['PostgreSQL', 'H2'] },
        { name: 'Continuous Integration', skills: ['Jenkins'] },
        { name: 'Continuous Deployment', skills: ['Alien4Cloud'] },
        {
          name: 'Development Tools',
          skills: ['IntelliJ', 'Visual Studio Code', 'Postman']
        },
        { name: 'Methdology', skills: ['Agile Scrum'] }
      ]
    }
  ],
  skills: [
    {
      name: 'Languages',
      skills: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'TypeScript',
        'Java',
        'Python',
        'Go'
      ]
    },
    {
      name: 'Frameworks',
      skills: [
        'Spring (Core, Boot, Data, Rest)',
        'Angular',
        'Ionic',
        'NestJS',
        'React',
        'React Native',
        'Bootstrap',
        'Bulma',
        'TailwindCSS',
        'SpartanNG / Shadcn'
      ]
    },
    {
      name: 'Unit / integration testing',
      skills: [
        'JUnit',
        'Karma',
        'Jasmine',
        'Jest',
        'Vitest',
        'Cypress',
        'Playwright'
      ]
    },
    { name: 'Database', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
    {
      name: 'Continuous Integration',
      skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'SonarQube']
    },
    {
      name: 'Continuous Deployment',
      skills: [
        'Kubernetes',
        'ArgoCD',
        'Helm',
        'Kustomize',
        'Terraform',
        'Ansible'
      ]
    },
    {
      name: 'Development Tools',
      skills: ['IntelliJ', 'Visual Studio Code', 'Postman', 'Insomnia']
    },
    {
      name: 'Design',
      skills: ['Figma']
    },
    { name: 'Methdology', skills: ['Agile Scrum', 'TDD', 'SAFe'] },
    { name: 'Others', skills: ['Vault'] }
  ]
};
