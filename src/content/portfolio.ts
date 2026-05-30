export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  focus: string[];
  achievements: string[];
};

export type Project = {
  title: string;
  context: string;
  description: string;
  impact: string;
  principles: string[];
  stack: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Education = {
  degree: string;
  school: string;
  details: string;
  logo: string;
  logoClass: string;
  logoAlt: string;
};

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

export const education: Education[] = [
  {
    degree: 'Ph.D. in Earth Systems Science',
    school: 'Florida International University',
    details: 'Miami, FL | Aug 2014 - Dec 2020',
    logo: './fiu-primary-affinity-mark.png',
    logoClass: 'fiu',
    logoAlt: 'Florida International University logo',
  },
  {
    degree: 'M.S. in Environmental Studies (Atmospheric Sciences)',
    school: 'University of Massachusetts Lowell',
    details: 'Lowell, MA | Aug 2012 - May 2014',
    logo: './umass-lowell-logo.svg',
    logoClass: 'uml',
    logoAlt: 'University of Massachusetts Lowell logo',
  },
  {
    degree: 'B.S. in Computer Sciences',
    school: 'Nanjing University of Information Sciences & Technology',
    details: 'Nanjing, China | Sep 2008 - Jul 2012',
    logo: './nuist-logo.png',
    logoClass: 'nuist',
    logoAlt: 'Nanjing University of Information Science and Technology logo',
  },
];
