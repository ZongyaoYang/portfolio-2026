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
