type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  focus: string[];
  achievements: string[];
};

type Project = {
  title: string;
  context: string;
  description: string;
  impact: string;
  principles: string[];
  stack: string[];
};

const skillGroups = [
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

const projects: Project[] = [
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

const experiences: Experience[] = [
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

const education = [
  {
    degree: 'Ph.D. in Earth Systems Science, Computational Focus',
    school: 'Florida International University',
    details: 'Miami, FL | Aug 2014 - Dec 2020',
  },
  {
    degree: 'M.S. in Environmental Studies, Atmospheric Sciences',
    school: 'University of Massachusetts Lowell',
    details: 'Lowell, MA | Aug 2012 - May 2014',
  },
  {
    degree: 'B.S. in Computer Sciences',
    school: 'Nanjing University of Information Sciences & Technology',
    details: 'Nanjing, China | Sep 2008 - Jul 2012',
  },
];

function App() {
  return (
    <main>
      <header className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Zongyao Yang home">
            ZY
          </a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#principles">Principles</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-content" aria-labelledby="hero-title">
          <p className="eyebrow">Full-Stack Software Engineer with Scientific background</p>
          <h1 id="hero-title">Zongyao Yang designs and builds accessible, lightweight web platforms.</h1>
          <p className="hero-copy">
            This portfolio highlights production work across research, public-sector-adjacent science,
            high-traffic customer workflows, responsive interfaces, and data visualization systems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="https://www.linkedin.com/in/zongyaoyang/" target="_blank" rel="noreferrer">
              <svg className="button-icon" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M6.94 8.98H3.92v9.1h3.02v-9.1ZM5.43 5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm13.65 7.87c0-2.83-1.51-4.14-3.53-4.14a3.04 3.04 0 0 0-2.75 1.51h-.04V8.98H9.87v9.1h3.01v-4.5c0-1.19.23-2.34 1.7-2.34 1.44 0 1.46 1.35 1.46 2.41v4.43h3.02l.02-5.21Z" />
              </svg>
              LinkedIn
            </a>
            <a className="button secondary" href="./Zongyao_Yang_Resume.pdf" download>
              Download resume
            </a>
          </div>
        </section>
      </header>

      <section className="section intro" aria-label="Professional summary">
        <div>
          <p className="section-label">Profile</p>
          <h2>Engineer with a rare mix of web platform depth and scientific computing fluency.</h2>
        </div>
        <p>
          My work spans React, Angular, Drupal, PHP, Python, SQL, GraphQL, SSO, data pipelines, and large-scale
          scientific datasets. I focus on interfaces that are understandable, accessible, responsive, maintainable,
          and efficient enough to serve people without unnecessary weight.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-label">Top 5 work examples</p>
          <h2>Web design examples selected for this application.</h2>
          <p className="section-copy">
            These examples emphasize the requested principles: WCAG, mobile-first and responsive design, lightweight
            implementation, green digital thinking, and USWDS-aligned clarity for structured forms and services.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="card-kicker">{project.context}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="impact">{project.impact}</p>
              <ul className="principle-list" aria-label={`${project.title} design principles`}>
                {project.principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section principles-section" id="principles">
        <div className="section-heading">
          <p className="section-label">Design principles</p>
          <h2>How I approach web design work.</h2>
        </div>
        <div className="principles-grid">
          <article>
            <h3>WCAG and accessibility</h3>
            <p>Semantic HTML, keyboard paths, readable states, ARIA only where useful, and screen-reader-aware workflows.</p>
          </article>
          <article>
            <h3>Mobile-first responsiveness</h3>
            <p>Layouts start from small screens and scale into denser desktop views without clipping, overlap, or hidden content.</p>
          </article>
          <article>
            <h3>Lightweight and green digital</h3>
            <p>Static delivery, reusable components, cached content, minimal dependencies, and performance-conscious data display.</p>
          </article>
          <article>
            <h3>USWDS-aligned clarity</h3>
            <p>Clear hierarchy, plain-language task flows, accessible form patterns, and service-oriented navigation for institutional users.</p>
          </article>
        </div>
      </section>

      <section className="section timeline-section" id="work">
        <div className="section-heading">
          <p className="section-label">Experience</p>
          <h2>Recent roles and impact.</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.company}-${experience.period}`}>
              <div className="timeline-meta">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </div>
              <div className="timeline-body">
                <p className="card-kicker">{experience.company}</p>
                <h3>{experience.role}</h3>
                <ul className="focus-list">
                  {experience.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="achievement-list">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="section-label">Technical toolkit</p>
          <h2>Comfortable across the product stack and data stack.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section" aria-labelledby="education-heading">
        <div className="section-heading">
          <p className="section-label">Education</p>
          <h2 id="education-heading">Scientific roots, engineering practice.</h2>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.degree}>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span>{item.details}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Let’s build something useful.</h2>
          <p>
            Send a note through the form or email me directly. I’m based in Denver, CO and authorized to work in the
            U.S. without visa sponsorship.
          </p>
          <div className="contact-actions" aria-label="Direct contact links">
            <a href="mailto:zongyao.yang@gmail.com">zongyao.yang@gmail.com</a>
            <a href="tel:+17866187880">+1 786-618-7880</a>
            <a href="https://www.linkedin.com/in/zongyaoyang/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form" action="https://formspree.io/f/xvzynkyn" method="POST">
          <input type="hidden" name="_subject" value="Portfolio contact form message" />
          <label htmlFor="name">
            Name
            <input id="name" name="name" type="text" autoComplete="name" required />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" autoComplete="email" required />
          </label>
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" rows={5} required />
          </label>
          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  );
}

export default App;
