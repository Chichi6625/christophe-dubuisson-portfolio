"use client";

import { useState } from "react";

const content = {
  en: {
    nav: ["Profile", "French Vibe", "Experience", "Education"],
    eyebrow: "LANGUAGE · PEDAGOGY · TECHNOLOGY",
    title: "I connect pedagogy, language and product design.",
    intro: "French language specialist and instructional designer with more than 10 years of experience in China. I also independently design and develop a multilingual EdTech platform for learners, teachers and institutions.",
    contact: "Let’s work together",
    roles: [
      ["AI Training & Evaluation", "Linguistic quality, cultural relevance, evaluation rubrics and structured human feedback."],
      ["Instructional Design", "Learning objectives, modular pathways, assessment design and learner-centred activities."],
      ["EdTech Product Development", "From pedagogical architecture to interface, data integration, testing and product evolution."],
    ],
    projectLabel: "FEATURED PROJECT · WORKING TITLE", projectTitle: "French Vibe",
    projectIntro: "A functional multilingual learning environment combining a WeChat Mini Program with a web administration dashboard.",
    projectBody: "Initially designed for French–Chinese learning, the platform is evolving so teachers and institutions can create, customise and publish content in multiple languages. AI assists creation and analysis; every output remains subject to human review.",
    facts: ["Solo project since February 2026", "WeChat Mini Program + web dashboard", "Tencent CloudBase", "Human-reviewed AI workflows"],
    learner: "Learner experience", learnerText: "Structured pathways combine context, vocabulary, interactive practice, guided production and immediate feedback.",
    dashboard: "Teacher & institution dashboard", dashboardText: "Role-based tools support content management, learner monitoring, correction workflows, reporting and AI-assisted module creation.",
    process: "What I designed and built",
    processItems: ["Learning architecture and content model", "Learner and teacher journeys", "Interactive exercises and guided production", "Class analytics and correction workflows", "Role-based administration", "AI-assisted authoring with human validation"],
    protection: "Portfolio note", protectionText: "This case study presents selected interface views only. Source code, database structure, prompts, credentials and proprietary implementation details are intentionally not disclosed.",
    experience: "Experience",
    jobs: [
      ["Independent EdTech Developer & Instructional Designer", "French Vibe · Feb 2026–Present", "Designing and developing the product independently, from instructional architecture and UX to CloudBase integration, testing and iteration."],
      ["French Lecturer", "Central South University · Aug 2018–Present", "Undergraduate and postgraduate teaching, course and assessment design, dissertation guidance and digital learning resources."],
      ["French Lecturer", "Xiangtan University · Feb 2015–Jul 2018", "French language and culture courses, adapted materials and assessments, conversation club and intercultural activities."],
    ],
    education: "Education & credentials",
    degrees: [["Master’s Degree — FLE/FLS/FOS", "Université d’Artois · 2020–2022 · Graduated with distinction"], ["Chinese Language Studies", "Zhejiang University · 2014–2015"], ["DAEFLE", "Alliance Française Paris Île-de-France · 2013"], ["Bachelor’s — Mathematics & Computer Science", "Université de Strasbourg · 2009–2012"]],
    footer: "French language expertise · AI evaluation · Instructional design · EdTech",
  },
  fr: {
    nav: ["Profil", "French Vibe", "Expérience", "Formation"], eyebrow: "LANGUES · PÉDAGOGIE · TECHNOLOGIE",
    title: "Je relie pédagogie, langues et conception de produit.",
    intro: "Spécialiste de la langue française et ingénieur pédagogique avec plus de dix ans d’expérience en Chine. Je conçois et développe également, en autonomie, une plateforme EdTech multilingue destinée aux apprenants, enseignants et établissements.",
    contact: "Travaillons ensemble",
    roles: [["Entraînement & évaluation de l’IA", "Qualité linguistique, pertinence culturelle, grilles d’évaluation et retours humains structurés."], ["Ingénierie pédagogique", "Objectifs, parcours modulaires, évaluations et activités centrées sur l’apprenant."], ["Développement de produits EdTech", "De l’architecture pédagogique à l’interface, l’intégration des données, les tests et l’évolution produit."]],
    projectLabel: "PROJET PRINCIPAL · NOM PROVISOIRE", projectTitle: "French Vibe",
    projectIntro: "Un environnement d’apprentissage multilingue fonctionnel associant un mini-programme WeChat et un tableau de bord web.",
    projectBody: "Initialement conçue pour l’apprentissage français-chinois, la plateforme évolue afin que les enseignants et établissements puissent créer, personnaliser et publier des contenus en plusieurs langues. L’IA assiste la création et l’analyse, avec validation humaine systématique.",
    facts: ["Projet individuel depuis février 2026", "Mini-programme WeChat + dashboard web", "Tencent CloudBase", "Processus IA validés humainement"],
    learner: "Expérience apprenant", learnerText: "Des parcours structurés réunissent contexte, vocabulaire, pratique interactive, production guidée et retour immédiat.",
    dashboard: "Dashboard enseignant & établissement", dashboardText: "Des outils par rôle permettent de gérer les contenus, suivre les apprenants, corriger, produire des rapports et créer des modules avec l’aide de l’IA.",
    process: "Ce que j’ai conçu et développé", processItems: ["Architecture pédagogique et modèle de contenu", "Parcours apprenant et enseignant", "Exercices interactifs et productions guidées", "Suivi de classe et circuits de correction", "Administration par rôles", "Création assistée par IA avec validation humaine"],
    protection: "Note de confidentialité", protectionText: "Cette étude de cas présente uniquement des vues d’interface sélectionnées. Le code source, la structure de la base, les prompts, les identifiants et les détails propriétaires ne sont pas divulgués.",
    experience: "Expérience",
    jobs: [["Développeur EdTech & ingénieur pédagogique indépendant", "French Vibe · fév. 2026–aujourd’hui", "Conception et développement autonome du produit : architecture pédagogique, UX, intégration CloudBase, tests et itérations."], ["Lecteur de français", "Central South University · août 2018–aujourd’hui", "Enseignement en licence et master, conception de cours et d’évaluations, accompagnement de mémoires et ressources numériques."], ["Lecteur de français", "Xiangtan University · fév. 2015–juil. 2018", "Cours de langue et de culture, supports et évaluations adaptés, club de conversation et activités interculturelles."]],
    education: "Formation & certification", degrees: [["Master FLE/FLS/FOS", "Université d’Artois · 2020–2022 · Mention"], ["Études de langue chinoise", "Université du Zhejiang · 2014–2015"], ["DAEFLE", "Alliance Française Paris Île-de-France · 2013"], ["Licence Mathématiques & Informatique", "Université de Strasbourg · 2009–2012"]],
    footer: "Expertise linguistique · Évaluation de l’IA · Ingénierie pédagogique · EdTech",
  },
};

const learners = [["/assets/learner-themes.png", "Theme selection"], ["/assets/learner-vocabulary.png", "Bilingual vocabulary"], ["/assets/learner-practice.png", "Interactive practice"], ["/assets/learner-production.png", "Guided production"], ["/assets/learner-results.png", "Immediate results"]];
const dashboards = [["/assets/dashboard-ai-actions.png", "Class monitoring and AI actions"], ["/assets/dashboard-learning-detail.png", "Detailed learner progress"], ["/assets/dashboard-schools.png", "Demo institution management"], ["/assets/dashboard-content.png", "Demo content management"], ["/assets/module-builder.png", "AI-assisted module builder"]];

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en"); const t = content[lang];
  return <main>
    <header className="header"><a className="brand" href="#top">CD</a><nav>{t.nav.map((n,i)=><a key={n} href={`#${["profile","project","experience","education"][i]}`}>{n}</a>)}</nav><div className="langs"><button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button><button className={lang==="fr"?"active":""} onClick={()=>setLang("fr")}>FR</button></div></header>
    <section className="hero" id="top"><div><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lead">{t.intro}</p><div className="actions"><a className="primary" href="mailto:dubuisson.christophe@gmail.com">{t.contact}</a><a className="secondary" href="https://www.linkedin.com/in/christophe-dubuisson" target="_blank">LinkedIn ↗</a></div></div><div className="heroCard"><span>Christophe Dubuisson</span><strong>French Language Specialist</strong><strong>AI Training & Evaluation</strong><strong>Instructional Designer</strong><strong>EdTech Developer</strong><small>Changsha, China · Remote</small></div></section>
    <section className="section" id="profile"><div className="cards">{t.roles.map((r,i)=><article key={r[0]}><span>0{i+1}</span><h2>{r[0]}</h2><p>{r[1]}</p></article>)}</div></section>
    <section className="project" id="project"><div className="projectHead"><div><p className="eyebrow">{t.projectLabel}</p><h2>{t.projectTitle}</h2></div><p className="projectIntro">{t.projectIntro}</p></div><p className="projectBody">{t.projectBody}</p><div className="facts">{t.facts.map(f=><span key={f}>{f}</span>)}</div>
      <div className="case"><div className="caseText"><p className="eyebrow">01 · MINI PROGRAM</p><h3>{t.learner}</h3><p>{t.learnerText}</p></div><div className="phones">{learners.map(([src,alt])=><figure key={src}><img src={src} alt={alt} loading="lazy" /><figcaption>{alt}</figcaption></figure>)}</div></div>
      <div className="case"><div className="caseText"><p className="eyebrow">02 · WEB DASHBOARD</p><h3>{t.dashboard}</h3><p>{t.dashboardText}</p></div><div className="dashboards">{dashboards.map(([src,alt])=><figure key={src}><img src={src} alt={alt} loading="lazy" /><figcaption>{alt}</figcaption></figure>)}</div></div>
      <div className="process"><div><p className="eyebrow">03 · END-TO-END</p><h3>{t.process}</h3></div><ul>{t.processItems.map(x=><li key={x}>{x}</li>)}</ul></div><aside className="notice"><strong>{t.protection}</strong><p>{t.protectionText}</p></aside>
    </section>
    <section className="section split" id="experience"><div><p className="eyebrow">CAREER</p><h2>{t.experience}</h2></div><div className="timeline">{t.jobs.map(j=><article key={j[0]}><h3>{j[0]}</h3><strong>{j[1]}</strong><p>{j[2]}</p></article>)}</div></section>
    <section className="section split education" id="education"><div><p className="eyebrow">BACKGROUND</p><h2>{t.education}</h2></div><div className="degreeList">{t.degrees.map(d=><article key={d[0]}><h3>{d[0]}</h3><p>{d[1]}</p></article>)}</div></section>
    <footer><div><strong>Christophe Dubuisson</strong><p>{t.footer}</p></div><div><a href="mailto:dubuisson.christophe@gmail.com">Email</a><a href="https://www.linkedin.com/in/christophe-dubuisson" target="_blank">LinkedIn ↗</a></div></footer>
  </main>;
}
