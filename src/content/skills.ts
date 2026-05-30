import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Redux', 'NgRx', 'RxJS', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'Accessibility'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js / Express', 'PHP', 'Symfony', 'Django', 'REST APIs', 'GraphQL', 'SSO / SAML', 'Access Control'],
  },
  {
    title: 'Data & Systems',
    skills: ['SQL', 'Relational Databases', 'NoSQL', 'Data Pipelines', 'Large Datasets', 'NetCDF', 'Xarray', 'NumPy'],
  },
  {
    title: 'Platforms & Practices',
    skills: ['Docker', 'Podman', 'Linux', 'AWS', 'Git', 'Production Debugging', 'CI/CD', 'Jest', 'Jasmine'],
  },
];
