import { useEffect } from 'react';
import { resumeRu, resumeEn } from '@/content';
import type { ResumeExperience, ResumeLink, ResumeProject } from '@/content/types';

const labels = {
  ru: {
    eyebrow: 'Резюме',
    about: 'О себе',
    experience: 'Опыт',
    education: 'Образование',
    project: 'Проект',
    skills: 'Навыки',
  },
  en: {
    eyebrow: 'Resume',
    about: 'Summary',
    experience: 'Experience',
    education: 'Education',
    project: 'Project',
    skills: 'Skills',
  },
} as const;

const getLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') === 'en' ? 'en' : 'ru';
};

const renderLink = (link: ResumeLink) => (
  <a key={link.href} className="contactLink" href={link.href} target="_blank" rel="noreferrer">
    <span className="contactLabel">{link.label}</span>
    <span className="contactValue">{link.shortLabel ?? link.href}</span>
  </a>
);

const renderRoleMeta = (role: string, period: string, location?: string) =>
  [role, period, location].filter(Boolean).join('  •  ');

const ExperienceCard = ({ item }: { item: ResumeExperience }) => (
  <article className="resumeCard resumeCardDense">
    <header className="entryHeader">
      <div>
        <h3>{item.company}</h3>
        <p className="entryMeta">{renderRoleMeta(item.role, item.period, item.location)}</p>
      </div>
      <p className="entrySummary">{item.summary}</p>
    </header>
    <ul className="entryList">
      {item.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </article>
);

const ProjectCard = ({ item }: { item: ResumeProject }) => (
  <article className="resumeCard resumeCardDense">
    <header className="entryHeader">
      <div>
        <h3>{item.name}</h3>
        <p className="entryMeta">{renderRoleMeta(item.role, item.period)}</p>
      </div>
      <p className="entrySummary">{item.summary}</p>
    </header>
    <ul className="entryList">
      {item.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
    <div className="projectLinks">{item.links.map(renderLink)}</div>
  </article>
);

function App() {
  const language = getLanguage();
  const resume = language === 'en' ? resumeEn : resumeRu;
  const copy = labels[language];

  useEffect(() => {
    document.documentElement.dataset.appReady = 'true';
    document.documentElement.lang = language;
    document.title = `${copy.eyebrow}: ${resume.basics.name}`;

    return () => {
      delete document.documentElement.dataset.appReady;
    };
  }, [language]);

  return (
    <main className="appShell">
      <section className="resumePage" aria-label={`${copy.eyebrow}: ${resume.basics.name}`}>
        <header className="heroBlock resumeCard">
          <div className="heroMain">
            <div className="eyebrow">{copy.eyebrow}</div>
            <h1>{resume.basics.name}</h1>
            <p className="headline">{resume.basics.title}</p>
            <p className="location">{resume.basics.location}</p>
          </div>
          <div className="heroSide">
            <p className="heroSummary">{resume.basics.subtitle}</p>
          </div>
          <div className="contactsGrid">{resume.links.map(renderLink)}</div>
        </header>

        <section className="sectionBlock">
          <div className="sectionHeading">
            <span>{copy.about}</span>
            <div className="sectionRule" />
          </div>
          <div className="resumeCard summaryCard">
            {resume.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="highlightsRow">
              {resume.highlights.map((item) => (
                <span key={item} className="highlightPill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionBlock">
          <div className="sectionHeading">
            <span>{copy.experience}</span>
            <div className="sectionRule" />
          </div>
          <div className="sectionStack">
            {resume.experience.map((item) => (
              <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
            ))}
          </div>
        </section>

        <section className="sectionBlock compactBlock">
          <div className="sectionHeading">
            <span>{copy.education}</span>
            <div className="sectionRule" />
          </div>
          <article className="resumeCard resumeCardDense">
            <div className="entryHeader">
              <div>
                <h3>{resume.education.institution}</h3>
                <p className="entryMeta">
                  {renderRoleMeta(resume.education.degree, resume.education.period)}
                </p>
              </div>
            </div>
            <ul className="entryList compactList">
              {resume.education.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="sectionBlock compactBlock">
          <div className="sectionHeading">
            <span>{copy.project}</span>
            <div className="sectionRule" />
          </div>
          <div className="sectionStack">
            {resume.projects.map((item) => (
              <ProjectCard key={`${item.name}-${item.period}`} item={item} />
            ))}
          </div>
        </section>

        <section className="sectionBlock compactBlock">
          <div className="sectionHeading">
            <span>{copy.skills}</span>
            <div className="sectionRule" />
          </div>
          <div className="resumeCard skillsCard">
            {resume.skills.map((skill) => (
              <span key={skill} className="skillPill">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
