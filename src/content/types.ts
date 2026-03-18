export type ResumeLink = {
  label: string;
  href: string;
  shortLabel?: string;
};

export type ResumeBasics = {
  name: string;
  title: string;
  location: string;
  subtitle: string;
};

export type ResumeEducation = {
  institution: string;
  degree: string;
  period: string;
  details: string[];
};

export type ResumeExperience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
};

export type ResumeProject = {
  name: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  links: ResumeLink[];
};

export type ResumeData = {
  basics: ResumeBasics;
  summary: string[];
  highlights: string[];
  education: ResumeEducation;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: string[];
  links: ResumeLink[];
};
