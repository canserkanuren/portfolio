import { Resume } from './data.interface';

export const RESUME: Resume = {
  function: 'Lead Full Stack Developer',
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
  aboutMe: [
    'I am currently a Angular Tech Lead, working at Crédit Agricole in Montrouge, Paris, with many areas of expertise such as in front-end development, Scrum method but also in CI/CD.',
    "I have been working for the past 6 years in Société Générale, as a Full Stack Developer and my main mission was to create tools that would benefit the company's developers in a self-care mode, such as onboarding tools in Société Générale's Cloud Platform but also on Software Factory tools (SonarQube, GitHub, Nexus, Artifactory, etc...)"
  ],
  workExperiences: [
    {
      title: 'Angular Tech Lead',
      company: 'Crédit Agricole CIB',
      begunYear: '10-2023',
      endedYear: 'Present',
      summary:
        "This mission's goal was primarily enhancements of the current application, more precisely about performance issues when using it but also on the CI/CD chain ",
      missions: [
        'Definition, conception and development of a new Angular project architecture, based on NX',
        'Ensure code quality meets its standards, analyzed through SonarQube / Checkmarx',
        'Definition, conception and development of new features'
      ],
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
      summary:
        "Early 2021, Société Générale decided to converge CI/CD offers of all entities, by creating a new one, Digital & Data Services, which will handle all common offers for all Société Générale's developers. I've joined the Automation Squad as a Full Stack developer, in order to create self-service tools for developers (around 10 000). My role was also to create a whole new CI/CD chain, Helm charts but also usage of GitOps in our development process.",
      missions: [
        'Selection of a common back-end language (Java, TypeScript, Python) for my current team but also for all the service that I was in (around 80 developers)',
        'Creation of a Python API framework, that will be used by all the service',
        "Selection of a common front-end framework (React / Angular) and beginning of development of a portal, that'll be used by all Société Générale's developers, in order to onboarding themselves on the Software Factory tools",
        "Definition, conception and development of APIs and also support development teams in API definition but also on the portal's new features",
        'Defintion and configuration of the Continuous Integration and Deployment for all the service, which was based on Kubernetes',
        'Defintion and creation of a common Helm chart (front-end / back-end)',
        'Definition and creation of a common Jenkins pipeline library, in order to build, test, and deploy front-end and back-end applications'
      ],
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
      summary:
        "My role for this mission was to maintain the current deployment platform used by Société Générale's developers, which was Alien4Cloud, but also create applications around it, to make its use a lot easier than it was before.",
      missions: [
        'Creation of satellite service around the current Continuous Delivery platform such as rights management tools but also creation of statistics of its usage',
        "Definition, conception and development of a Kubernetes onboarding tool, that would allow Société Générale's developers to onboard themselves on this platform"
      ],
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
      begunYear: '09-2017',
      endedYear: '09-2019',
      summary: '',
      missions: [
        'Definition of REST WebServices',
        'Migration from JavaScript to TypeScript for the current AngularJS application',
        "Definition, conception and development of common libraries used by Crédit Du Nord's new-gen applications"
      ],
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
