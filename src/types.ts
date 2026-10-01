export interface SocialLink {
  id: string;
  name: string;
  platform: 'github' | 'linkedin' | 'x' | 'email' | 'telegram' | 'blog' | 'dribbble';
  url: string;
  handle: string;
  description: string;
  followerCount?: string;
  primary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'Fintech & Enterprise' | 'DevTools & Cloud' | 'Mobile & UX' | 'Open Source';
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  impactMetrics: string[];
  technologies: string[];
  year: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Senior / 5+ thn", "Expert / 7+ thn"
    highlight: string;
  }[];
}

export interface Recommendation {
  id: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
  content: string;
  date: string;
  avatarText: string;
}

export interface RecruiterQuickFacts {
  currentStatus: string;
  targetRoles: string[];
  noticePeriod: string;
  workArrangement: string;
  location: string;
  timeZone: string;
  experienceYears: number;
  salaryExpectation: string;
  visaStatus: string;
}

export interface UserProfile {
  name: string;
  headline: string;
  secondaryTitle: string;
  location: string;
  availability: 'Available for Hire' | 'Open to Selective Roles' | 'Consulting Only';
  summary: string;
  extendedBio: string[];
  email: string;
  phone: string;
  portraitUrl: string;
  resumeDownloadUrl?: string;
  recruiterFacts: RecruiterQuickFacts;
  socials: SocialLink[];
  projects: Project[];
  experiences: Experience[];
  skillCategories: SkillCategory[];
  recommendations: Recommendation[];
}
