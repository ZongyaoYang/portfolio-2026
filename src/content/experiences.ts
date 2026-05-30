import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'National Center for Atmospheric Research',
    location: 'Boulder, CO',
    period: 'Aug 2024 - Feb 2026',
    focus: ['Full-stack platforms', 'Research systems', 'Data pipelines'],
    achievements: [
      'Designed and built production web platforms for scientific collaborator and visitor coordination across U.S. and international institutions.',
      'Integrated SSO through SimpleSAMLphp and implemented role-based authorization with administrative controls.',
      'Containerized applications with Docker and deployed to AWS cloud infrastructure for portable, scalable releases.',
      'Engineered HPC-based processing pipelines for daily WRF-Chem forecast visualization products.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Charter Communications',
    location: 'Denver, CO',
    period: 'Jan 2022 - Jan 2024',
    focus: ['Frontend engineering', 'GraphQL integration', 'Production reliability'],
    achievements: [
      'Built and maintained customer-facing Spectrum.net workflows supporting eligibility checks, personalized offers, and online purchases.',
      'Developed reusable Angular UI components and configuration-driven feature rollout patterns.',
      'Diagnosed UI and data-integration issues across frontend, API, and backend layers using environment checks and log analysis.',
      'Applied WCAG accessibility practices including semantic HTML, ARIA, keyboard navigation, and screen-reader support.',
    ],
  },
  {
    role: 'Research Assistant / Scientific Software Developer',
    company: 'Florida International University',
    location: 'Miami, FL',
    period: 'Aug 2014 - Dec 2020',
    focus: ['Scientific computing', 'Atmospheric modeling', 'Visualization'],
    achievements: [
      'Developed scientific software supporting hurricane forecasting and atmospheric modeling applications.',
      'Optimized numerical modeling workflows with Fortran, MATLAB, and Python for large-scale simulations.',
      'Built Python data processing and visualization pipelines for multi-dimensional atmospheric datasets in NetCDF and GRIB formats.',
      'Integrated modeling outputs into web applications and relational databases for accessible computational results.',
    ],
  },
];
