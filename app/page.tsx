"use client";

import { useState } from "react";
import { portfolioImages } from "./assets";

const copy = {
  en: {
    nav: ["Profile", "French Vibe", "Experience", "Education"],
    eyebrow: "LANGUAGE · PEDAGOGY · TECHNOLOGY",
    hero: <>I connect<br/>pedagogy,<br/>language and<br/>product design.</>,
    intro: "French language specialist and instructional designer with more than 10 years of experience in China. I also independently design and develop a multilingual EdTech platform for learners, teachers and institutions.",
    contact: "Let’s work together", view: "LinkedIn ↗",
    profiles: [
      ["AI Training & Evaluation", "Designing rubrics, evaluating model outputs and improving educational AI with human judgment."],
      ["Instructional Design", "Turning learning goals into clear pathways, activities, feedback loops and measurable progress."],
      ["EdTech Product Development", "Building multilingual learner, teacher and institution tools from concept to working product."],
    ],
    project: "French Vibe", projectLead: "A multilingual EdTech platform designed and built for learners, teachers and institutions.",
    learner: "Learner experience", teacher: "Teacher & institution dashboard",
    process: <>What I designed<br/>and built</>,
    processItems: ["Learning architecture and content model", "Learner and teacher journeys", "Interactive exercises and guided production", "Class analytics and correction workflows", "Role-based administration", "AI-assisted authoring with human validation"],
    experience: "Experience", education: <>Education<br/><span>&amp;</span> credentials</>,
  },
  fr: {
    nav: ["Profil", "French Vibe", "Expérience", "Formation"],
    eyebrow: "LANGUES · PÉDAGOGIE · TECHNOLOGIE",
    hero: <>Je relie<br/>pédagogie,<br/>langues et<br/>conception de produit.</>,
    intro: "Spécialiste de la langue française et ingénieur pédagogique avec plus de 10 ans d’expérience en Chine. Je conçois et développe également une plateforme EdTech multilingue destinée aux apprenants, aux enseignants et aux établissements.",
    contact: "Travaillons ensemble", view: "LinkedIn ↗",
    profiles: [
      ["Entraînement & évaluation de l’IA", "Conception de grilles, évaluation des réponses et amélioration de l’IA éducative par le jugement humain."],
      ["Ingénierie pédagogique", "Transformer des objectifs en parcours clairs, activités, boucles de feedback et progrès mesurables."],
      ["Développement de produits EdTech", "Créer des outils multilingues pour apprenants, enseignants et établissements, du concept au produit."],
    ],
    project: "French Vibe", projectLead: "Une plateforme EdTech multilingue conçue et développée pour les apprenants, les enseignants et les établissements.",
    learner: "Expérience apprenant", teacher: "Tableaux de bord enseignant & établissement",
    process: <>Ce que j’ai conçu<br/>et développé</>,
    processItems: ["Architecture pédagogique et modèle de contenu", "Parcours apprenant et enseignant", "Exercices interactifs et production guidée", "Suivi de classe et workflows de correction", "Administration par rôles", "Création assistée par IA avec validation humaine"],
    experience: "Expérience", education: <>Formation<br/><span>&amp;</span> diplômes</>,
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = copy[lang];
  return <main>
    <header><a className="brand" href="#top">CD</a><nav>{t.nav.map((n,i)=><a key={n} href={["#profile","#work","#experience","#education"][i]}>{n}</a>)}</nav><div className="lang"><button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button><button className={lang==="fr"?"active":""} onClick={()=>setLang("fr")}>FR</button></div></header>
    <section id="top" className="hero">
      <div className="heroCopy"><p className="eyebrow">{t.eyebrow}</p><h1>{t.hero}</h1><p className="lead">{t.intro}</p><div className="actions"><a className="primary" href="mailto:christophe.dubuisson@gmail.com">{t.contact}</a><a className="secondary" href="https://www.linkedin.com" target="_blank">{t.view}</a></div></div>
      <aside className="identity"><h2>Christophe<br/>Dubuisson</h2><ul><li>French Language Specialist</li><li>AI Training &amp; Evaluation</li><li>Instructional Designer</li><li>EdTech Developer</li></ul><p>Changsha, China · Remote</p></aside>
    </section>
    <section id="profile" className="cards">{t.profiles.map((p,i)=><article key={p[0]}><span className="index">0{i+1}</span><h2>{p[0]}</h2><p>{p[1]}</p></article>)}</section>
    <section id="work" className="project"><p className="eyebrow">SELECTED PROJECT</p><h2>{t.project}</h2><p className="projectLead">{t.projectLead}</p>
      <h3>{t.learner}</h3><div className="gallery learner">{portfolioImages.slice(0,5).map(x=><figure key={x.alt}><img src={x.src} alt={x.alt}/><figcaption>{x.alt}</figcaption></figure>)}</div>
      <h3>{t.teacher}</h3><div className="gallery dashboard">{portfolioImages.slice(5).map(x=><figure key={x.alt}><img src={x.src} alt={x.alt}/><figcaption>{x.alt}</figcaption></figure>)}</div>
    </section>
    <section className="process"><h2>{t.process}</h2><div>{t.processItems.map((x,i)=><article key={x}><span>0{i+1}</span><p>{x}</p></article>)}</div></section>
    <section id="experience" className="resume"><h2>{t.experience}</h2><article><time>2018 — NOW</time><div><h3>Independent EdTech Developer & Instructional Designer</h3><p>French Vibe · Product strategy, learning design, UX/UI, content systems and full-stack development.</p></div></article><article><time>2016 — 2024</time><div><h3>French Lecturer</h3><p>University-level French language teaching, curriculum design and assessment.</p></div></article><article><time>2013 — 2016</time><div><h3>French Lecturer</h3><p>Language instruction and learner support in international contexts.</p></div></article></section>
    <section id="education" className="education"><h2>{t.education}</h2><div className="eduGrid"><article><time>2016</time><h3>Master’s Degree — FLE/FLS/FOS</h3><p>French as a Foreign and Second Language · University of Artois</p></article><article><time>2014</time><h3>Chinese Language Studies</h3><p>Intensive language and cultural studies</p></article><article><time>2013</time><h3>DAEFLE</h3><p>Alliance Française Paris Île-de-France</p></article><article><time>2008</time><h3>Bachelor’s — Mathematics & Computer Science</h3><p>Analytical thinking, systems and software foundations</p></article></div></section>
    <footer><strong>Christophe Dubuisson</strong><span>Pedagogy · Language · Product</span><a href="mailto:christophe.dubuisson@gmail.com">Email ↗</a><a href="https://www.linkedin.com" target="_blank">LinkedIn ↗</a></footer>
  </main>;
}
