import { resumeRu as publicResumeRu } from './resume.ru';
import { resumeEn as publicResumeEn } from './resume.en';
import type { ResumeData } from './types';

// Copy this file to `src/content/resume.private.ts` and replace the placeholder data.
export const resumeRu: ResumeData = {
  ...publicResumeRu,
};

export const resumeEn: ResumeData = {
  ...publicResumeEn,
};
