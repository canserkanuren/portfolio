import { SupportedLanguage } from '../enums';
import { Resume } from './data.interface';

export const commonResumeProperties: Resume['socials'] = [
  {
    icon: 'radixLinkedinLogo',
    url: 'https://www.linkedin.com/in/can-serkan-uren/'
  },
  {
    icon: 'radixGithubLogo',
    url: 'https://github.com/canserkanuren'
  }
];

export const frenchResume: Resume = {
  function: 'Lead Développeur Full Stack',
  socials: [...commonResumeProperties],
  aboutMe: [
    'Je suis actuellement un Lead Développeur Angular, travaillant chez Crédit Agricole à Montrouge, Paris, avec de nombreuses compétences en développement front-end, méthodologie Scrum, mais aussi en CI/CD.',
    "J'ai travaillé au cours des 6 dernières années à la Société Générale, en tant que Développeur Full Stack. Ma principale mission était de créer des outils bénéfiques aux développeurs de l'entreprise en mode self-care, tels que des outils d'onboarding dans le Cloud Platform de la Société Générale, mais aussi des outils de Software Factory (SonarQube, GitHub, Nexus, Artifactory, etc...)"
  ],
  workExperiences: [
    {
      title: 'Lead Développeur Tech Angular',
      company: 'Crédit Agricole CIB',
      begunYear: '10-2023',
      endedYear: 'Présent',
      summary:
        "L'objectif de cette mission était principalement d'améliorer l'application actuelle, en particulier en ce qui concerne les problèmes de performance, mais aussi sur la chaîne CI/CD.",
      missions: [
        "Définition, conception et développement d'une nouvelle architecture de projet Angular, basée sur NX",
        'Veiller à ce que la qualité du code réponde à ses normes, analysée à travers SonarQube / Checkmarx',
        'Définition, conception et développement de nouvelles fonctionnalités'
      ],
      skills: [
        {
          name: 'Langages',
          skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python']
        },
        { name: 'Frameworks', skills: ['Angular', 'FastAPI'] },
        { name: "Tests unitaires / d'intégration", skills: ['Jest', 'vitest'] },
        { name: 'Base de données', skills: ['CouchBase'] },
        {
          name: 'Intégration Continue',
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
          name: 'Déploiement Continu',
          skills: ['Kubernetes', 'Kustomize', 'ArgoCD']
        },
        {
          name: 'Outils de Développement',
          skills: ['Visual Studio Code', 'Postman']
        },
        { name: 'Design', skills: ['Figma'] },
        { name: 'Méthodologie', skills: ['Agile Scrum'] }
      ]
    },
    {
      title: 'Lead Développeur Full Stack / Scrum Master',
      company: 'Société Générale',
      begunYear: '04-2021',
      endedYear: '10-2023',
      summary:
        "Début 2021, la Société Générale a décidé de regrouper les offres CI/CD de toutes ses entités en créant une nouvelle entité, Digital & Data Services, qui gérera toutes les offres communes pour tous les développeurs de la Société Générale. J'ai rejoint l'Automation Squad en tant que développeur Full Stack, afin de créer des outils en libre-service pour les développeurs (environ 10 000). Mon rôle était également de créer une toute nouvelle chaîne CI/CD, des Helm charts, mais aussi d'utiliser le GitOps dans notre processus de développement.",
      missions: [
        "Sélection d'un langage back-end commun (Java, TypeScript, Python) pour mon équipe actuelle mais aussi pour l'ensemble des services auxquels je participais (environ 80 développeurs)",
        "Création d'un framework API Python, qui sera utilisé par tous les services",
        "Sélection d'un framework front-end commun (React / Angular) et début du développement d'un portail, qui sera utilisé par tous les développeurs de la Société Générale, afin de faciliter leur intégration aux outils de la Software Factory",
        "Définition, conception et développement d'APIs, ainsi que le support aux équipes de développement pour la définition des APIs et des nouvelles fonctionnalités du portail",
        "Définition et configuration de l'Intégration Continue et du Déploiement Continu pour l'ensemble des services, basés sur Kubernetes",
        "Définition et création d'un Helm chart commun (front-end / back-end)",
        "Définition et création d'une bibliothèque commune de pipelines Jenkins, pour la construction, les tests et le déploiement d'applications front-end et back-end"
      ],
      skills: [
        {
          name: 'Langages',
          skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Go']
        },
        {
          name: 'Frameworks',
          skills: ['Connexion', 'Flask', 'Angular', 'React']
        },
        {
          name: "Tests unitaires / d'intégration",
          skills: ['Jest', 'Vitest', 'pytest']
        },
        { name: 'Base de données', skills: ['PostgreSQL', 'Redis'] },
        {
          name: 'Intégration Continue',
          skills: ['Jenkins', 'GitHub Actions', 'Artifactory', 'Harbor']
        },
        { name: 'Déploiement Continu', skills: ['ArgoCD', 'Kubernetes'] },
        {
          name: 'Outils de Développement',
          skills: ['IntelliJ', 'Visual Studio Code', 'Postman']
        },
        { name: 'Design', skills: ['Figma'] },
        { name: 'Méthodologie', skills: ['SAFe'] }
      ]
    },
    {
      title: 'Architecte Livraison Continue',
      company: 'Société Générale',
      begunYear: '09-2019',
      endedYear: '04-2021',
      summary:
        "Mon rôle pour cette mission était de maintenir la plateforme de déploiement actuelle utilisée par les développeurs de la Société Générale, qui était Alien4Cloud, mais aussi de créer des applications autour de celle-ci pour en faciliter l'utilisation.",
      missions: [
        "Création de services satellites autour de la plateforme actuelle de Livraison Continue, tels que des outils de gestion des droits et des statistiques d'utilisation",
        "Définition, conception et développement d'un outil d'onboarding Kubernetes, permettant aux développeurs de la Société Générale de s'intégrer à cette plateforme"
      ],
      skills: [
        {
          name: 'Langages',
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
          name: "Tests unitaires / d'intégration",
          skills: ['Jest', 'JUnit']
        },
        { name: 'Base de données', skills: ['PostgreSQL'] },
        {
          name: 'Intégration Continue',
          skills: ['Jenkins', 'GitHub Actions', 'Artifactory', 'Nexus']
        },
        { name: 'Déploiement Continu', skills: ['ArgoCD', 'Kubernetes'] },
        {
          name: 'Outils de Développement',
          skills: ['IntelliJ', 'Visual Studio Code', 'Postman', 'Insomnia']
        },
        { name: 'Design', skills: ['Figma'] },
        { name: 'Méthodologie', skills: ['Agile Scrum'] }
      ]
    },
    {
      title: 'Développeur Full Stack',
      company: 'Société Générale',
      begunYear: '09-2017',
      endedYear: '09-2019',
      summary: '',
      missions: [
        'Définition de services Web REST',
        "Migration de JavaScript vers TypeScript pour l'application AngularJS actuelle",
        'Définition, conception et développement de bibliothèques communes utilisées par les nouvelles applications de Crédit Du Nord'
      ],
      skills: [
        {
          name: 'Langages',
          skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java 8']
        },
        {
          name: 'Frameworks',
          skills: ['AngularJS', 'Spring (Core, Boot, Data, Rest, Security)']
        },
        {
          name: "Tests unitaires / d'intégration",
          skills: ['Karma', 'Jasmine', 'JUnit', 'Selenium']
        },
        { name: 'Base de données', skills: ['PostgreSQL', 'H2'] },
        { name: 'Intégration Continue', skills: ['Jenkins'] },
        { name: 'Déploiement Continu', skills: ['Alien4Cloud'] },
        {
          name: 'Outils de Développement',
          skills: ['IntelliJ', 'Visual Studio Code', 'Postman']
        },
        { name: 'Méthodologie', skills: ['Agile Scrum'] }
      ]
    }
  ],
  skills: [
    {
      name: 'Langages',
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
      name: "Tests unitaires / d'intégration",
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
    {
      name: 'Base de données',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      name: 'Intégration Continue',
      skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'SonarQube']
    },
    {
      name: 'Déploiement Continu',
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
      name: 'Outils de Développement',
      skills: ['IntelliJ', 'Visual Studio Code', 'Postman', 'Insomnia']
    },
    {
      name: 'Design',
      skills: ['Figma']
    },
    { name: 'Méthodologie', skills: ['Agile Scrum', 'TDD', 'SAFe'] },
    { name: 'Autres', skills: ['Vault'] }
  ]
};

export const englishResume: Resume = {
  function: 'Lead Full Stack Developer',
  socials: [...commonResumeProperties],
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
        { name: 'Unit / integration testing', skills: ['Jest', 'vitest'] },
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
        { name: 'Methodology', skills: ['Agile Scrum'] }
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
        { name: 'Methodology', skills: ['SAFe'] }
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
        { name: 'Methodology', skills: ['Agile Scrum'] }
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
        { name: 'Methodology', skills: ['Agile Scrum'] }
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
    { name: 'Methodology', skills: ['Agile Scrum', 'TDD', 'SAFe'] },
    { name: 'Others', skills: ['Vault'] }
  ]
};

export const ALL_RESUMES = {
  [SupportedLanguage.EN]: englishResume,
  [SupportedLanguage.FR]: frenchResume
};
