"use client";

import { useState } from "react";

const content = {
  en: {
    nav: ["Profile", "Experience", "Education"],
    eyebrow: "LANGUAGE · PEDAGOGY · DIGITAL LEARNING",
    title: "I connect language, pedagogy and digital learning.",
    intro: "French language specialist and instructional designer with more than 10 years of experience in China. I design learner-centred courses, assessments and digital resources for multilingual and intercultural contexts.",
    contact: "Contact me",
    roles: [
      ["AI Training & Evaluation", "Linguistic quality, cultural relevance, evaluation rubrics and structured human feedback."],
      ["Instructional Design", "Learning objectives, modular pathways, assessment design and learner-centred activities."],
      ["French Language Education", "Course design, teaching and assessment for university learners across proficiency levels."],
    ],
    experience: "Experience",
    jobs: [
      ["French Lecturer", "Central South University · Aug 2018–Present", "Undergraduate and postgraduate teaching, course and assessment design, dissertation guidance and digital learning resources."],
      ["French Lecturer", "Xiangtan University · Feb 2015–Jul 2018", "French language and culture courses, adapted materials and assessments, conversation club and intercultural activities."],
    ],
    education: <>Education<span className="amp">&amp;</span>credentials</>,
    degrees: [
      ["Master’s Degree — FLE/FLS/FOS", "Université d’Artois · 2020–2022 · Graduated with distinction"],
      ["Chinese Language Studies", "Zhejiang University · 2014–2015"],
      ["DAEFLE", "Alliance Française Paris Île-de-France · 2013"],
      ["Bachelor’s — Mathematics & Computer Science", "Université de Strasbourg · 2009–2012"],
    ],
    footer: "French language expertise · AI evaluation · Instructional design · Digital learning",
  },
  fr: {
    nav: ["Profil", "Expérience", "Formation"],
    eyebrow: "LANGUES · PÉDAGOGIE · APPRENTISSAGE NUMÉRIQUE",
    title: "Je relie langues, pédagogie et apprentissage numérique.",
    intro: "Spécialiste de la langue française et ingénieur pédagogique avec plus de dix ans d’expérience en Chine. Je conçois des cours, des évaluations et des ressources numériques centrés sur l’apprenant, dans des contextes multilingues et interculturels.",
    contact: "Me contacter",
    roles: [
      ["Entraînement & évaluation de l’IA", "Qualité linguistique, pertinence culturelle, grilles d’évaluation et retours humains structurés."],
      ["Ingénierie pédagogique", "Objectifs, parcours modulaires, évaluations et activités centrées sur l’apprenant."],
      ["Enseignement du français", "Conception de cours, enseignement et évaluation d’apprenants universitaires de différents niveaux."],
    ],
    experience: "Expérience",
    jobs: [
      ["Lecteur de français", "Central South University · août 2018–aujourd’hui", "Enseignement en licence et master, conception de cours et d’évaluations, accompagnement de mémoires et création de ressources numériques."],
      ["Lecteur de français", "Xiangtan University · fév. 2015–juil. 2018", "Cours de langue et de culture, supports et évaluations adaptés, club de conversation et activités interculturelles."],
    ],
    education: <>Formation<span className="amp">&amp;</span>certifications</>,
    degrees: [
      ["Master FLE/FLS/FOS", "Université d’Artois · 2020–2022 · Diplômé avec mention"],
      ["Études de langue chinoise", "Université du Zhejiang · 2014–2015"],
      ["DAEFLE", "Alliance Française Paris Île-de-France · 2013"],
      ["Licence Mathématiques & Informatique", "Université de Strasbourg · 2009–2012"],
    ],
    footer: "Expertise linguistique · Évaluation de l’IA · Ingénierie pédagogique · Apprentissage numérique",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = content[lang];
  const sectionIds = ["profile", "experience", "education"];

  return <main>
    <header className="header">
      <a className="brand" href="#top">CD</a>
      <nav>{t.nav.map((name, index) => <a key={name} href={`#${sectionIds[index]}`}>{name}</a>)}</nav>
      <div className="langs">
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
      </div>
    </header>

    <section className="hero" id="top">
      <div>
        <p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lead">{t.intro}</p>
        <div className="actions">
          <a className="primary" href="mailto:dubuisson.christophe@gmail.com">{t.contact}</a>
          <a className="secondary" href="https://www.linkedin.com/in/christophe-dubuisson" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="heroCard">
        <span>Christophe Dubuisson</span><strong>French Language Specialist</strong><strong>AI Training & Evaluation</strong><strong>Instructional Designer</strong><small>Changsha, China</small>
      </div>
    </section>

    <section className="section" id="profile"><div className="cards">
      {t.roles.map((role, index) => <article key={role[0]}><span>0{index + 1}</span><h2>{role[0]}</h2><p>{role[1]}</p></article>)}
    </div></section>

    <section className="section split" id="experience">
      <div><p className="eyebrow">CAREER</p><h2>{t.experience}</h2></div>
      <div className="timeline">{t.jobs.map(job => <article key={job[1]}><h3>{job[0]}</h3><strong>{job[1]}</strong><p>{job[2]}</p></article>)}</div>
    </section>

    <section className="section split education" id="education">
      <div><p className="eyebrow">BACKGROUND</p><h2>{t.education}</h2></div>
      <div className="degreeList">{t.degrees.map(degree => <article key={degree[0]}><h3>{degree[0]}</h3><p>{degree[1]}</p></article>)}</div>
    </section>

    <footer>
      <div><strong>Christophe Dubuisson</strong><p>{t.footer}</p></div>
      <div><a href="mailto:dubuisson.christophe@gmail.com">Email</a><a href="https://www.linkedin.com/in/christophe-dubuisson" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    </footer>
  </main>;
}
