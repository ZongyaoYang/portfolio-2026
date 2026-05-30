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
    context: 'NCAR',
    description:
      'Scalable full-stack platform for managing visiting researchers, affiliations, scheduling, onboarding workflows, and role-based institutional access.',
    stack: ['React', 'Symfony', 'Django', 'SQL', 'Node.js', 'SimpleSAMLphp', 'Docker', 'AWS'],
  },
  {
    title: 'Multi-Site Publications Sync',
    context: 'NCAR Drupal ecosystem',
    description:
      'Drupal module and service layer that ingests paginated publication APIs, validates records, persists normalized data, and renders cached cross-site views.',
    stack: ['PHP', 'Drupal', 'SQL', 'Cron', 'External APIs', 'Caching'],
  },
  {
    title: 'WRF-Chem Forecast Visualization Pipeline',
    context: 'NCAR Derecho HPC',
    description:
      'HPC pipeline that transforms daily atmospheric chemistry forecast outputs into web-ready visualizations with interactive variable and resolution controls.',
    stack: ['Python', 'Xarray', 'NetCDF4', 'NumPy', 'JavaScript', 'HPC'],
  },
  {
    title: 'Customer Web Workflows',
    context: 'Spectrum.net',
    description:
      'High-traffic authenticated web experiences for eligibility checks, personalized offers, purchases, resilient API data states, and feature-flagged releases.',
    stack: ['Angular', 'SCSS', 'GraphQL', 'Cucumber', 'WCAG', 'Feature Flags'],
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
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-content" aria-labelledby="hero-title">
          <p className="eyebrow">Full-stack software engineer</p>
          <h1 id="hero-title">Zongyao Yang builds production web platforms for complex data and research workflows.</h1>
          <p className="hero-copy">
            I work across frontend, backend, authentication, APIs, and automated data pipelines, with experience in
            high-traffic web products, research computing environments, and scientific visualization systems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:zongyao.yang@gmail.com">
              Contact me
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
          My background spans React, Angular, PHP, Python, SQL, GraphQL, SSO, Drupal, HPC pipelines, and large-scale
          atmospheric datasets. I like systems that have to be correct, observable, usable, and resilient in the hands
          of real people.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-label">Selected projects</p>
          <h2>Built for production, research, and high-volume users.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="card-kicker">{project.context}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
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
            I’m based in Denver, CO and authorized to work in the U.S. without visa sponsorship.
          </p>
        </div>
        <div className="contact-actions" aria-label="Contact links">
          <a href="mailto:zongyao.yang@gmail.com">zongyao.yang@gmail.com</a>
          <a href="tel:+17866187880">+1 786-618-7880</a>
          <a href="https://www.linkedin.com/in/zongyaoyang/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
