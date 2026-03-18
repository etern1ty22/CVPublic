import { resumeRu as publicResumeRu } from './resume.ru';
import { resumeEn as publicResumeEn } from './resume.en';
import type { ResumeData } from './types';

type PrivateResumeModule = {
  resumeRu?: ResumeData;
  resumeEn?: ResumeData;
};

const privateModules = import.meta.glob<PrivateResumeModule>('./resume.private.ts', {
  eager: true,
});
const privateResumeModule = privateModules['./resume.private.ts'];

export const resumeRu: ResumeData = privateResumeModule?.resumeRu ?? publicResumeRu;
export const resumeEn: ResumeData = privateResumeModule?.resumeEn ?? publicResumeEn;
