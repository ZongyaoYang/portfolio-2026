import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Research Visitor Management Platform',
    context: 'Example 1 | NCAR',
    description:
      'Administrative web platform for managing visiting researchers, affiliations, scheduling, onboarding workflows, and role-based institutional access.',
    impact:
      'Designed task-focused interfaces for program staff, secured complex user roles with SSO, and kept workflows clear for cross-lab coordination.',
    principles: ['Responsive workflows', 'Accessible forms', 'Role-based UX', 'USWDS-aligned structure'],
    stack: ['React', 'Symfony', 'Django', 'SQL', 'Node.js', 'SimpleSAMLphp'],
  },
  {
    title: 'Multi-Site Publications Sync',
    context: 'Example 2 | NCAR Drupal ecosystem',
    description:
      'Reusable publication display system for distributed lab websites, backed by scheduled ingestion, normalized data, and cached view blocks.',
    impact:
      'Reduced repeated content work across sites and delivered lightweight publication views that could be reused without redesigning each web property.',
    principles: ['Lightweight pages', 'Reusable components', 'Content governance', 'Green digital'],
    stack: ['PHP', 'Drupal', 'SQL', 'Cron', 'External APIs', 'Caching'],
  },
  {
    title: 'WRF-Chem Forecast Visualization Pipeline',
    context: 'Example 3 | NCAR Derecho HPC',
    description:
      'Scientific forecast visualization workflow that transforms daily atmospheric chemistry outputs into web-ready products and interactive controls.',
    impact:
      'Made large model outputs easier to explore on the web by separating heavy data processing from lightweight browser selection and display.',
    principles: ['Data visualization', 'Progressive disclosure', 'Performance-minded UI', 'Green digital'],
    stack: ['Python', 'Xarray', 'NetCDF4', 'NumPy', 'JavaScript', 'HPC'],
  },
  {
    title: 'Customer Web Workflows',
    context: 'Example 4 | Spectrum.net',
    description:
      'High-traffic authenticated web experiences for eligibility checks, personalized offers, purchases, resilient API data states, and feature-flagged releases.',
    impact:
      'Built modular UI components and production states for real customer journeys, including loading, fallback, accessibility, and rollout behavior.',
    principles: ['WCAG', 'Mobile responsive', 'Design system components', 'Progressive rollout'],
    stack: ['Angular', 'SCSS', 'GraphQL', 'Cucumber', 'WCAG', 'Feature Flags'],
  },
  {
    title: 'Portfolio 2026',
    context: 'Example 5 | React and TypeScript',
    description:
      'This portfolio site, built as a lightweight static React application for GitHub Pages and tailored to web design application review.',
    impact:
      'Prioritizes concise content, semantic HTML, responsive layouts, low dependency weight, fast static hosting, and accessible navigation.',
    principles: ['Mobile-first / responsive', 'Lightweight', 'Semantic HTML', 'Static hosting'],
    stack: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Pages'],
  },
];
