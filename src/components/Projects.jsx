import ReactMarkdown from "react-markdown";
import webCanvas from "../assets/web-canvas.png";
import loginPage from "../assets/login-page.png";
import web2048 from "../assets/2048-web.png";
import { useState } from "react";

export function Projects() {
  const [active, setActive] = useState(0);

  const projects = [
    {
      title: "Whiteboard Canvas",
      lastCommit: "29/03/2025",
      stack: [
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          imgAlt: "javascript logo",
        },
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          imgAlt: "react logo",
        },
      ],
      screenImgSrc: webCanvas,
      screenImgAlt: "Whiteboard-canvas home screenshot",
      description: `Este projeto consiste no desenvolvimento de uma plataforma web inspirada no MS Paint, mas com recursos modernos e interface responsiva. Com ele, aprofundei meus conhecimentos em HTML Canvas, gerenciamento de estados no React e lógica de programação com JavaScript.`,
      repository: "https://github.com/gabriel-piangers/Whiteboard-canvas",
    },
    {
      title: "Login Page",
      lastCommit: "28/03/2025",
      stack: [
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          imgAlt: "javascript logo",
        },
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          imgAlt: "react logo",
        },
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          imgAlt: "node.js logo",
        },
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          imgAlt: "postgresql logo",
        },
      ],
      screenImgSrc: loginPage,
      screenImgAlt: "Login page home screenshot",
      description: `Projeto desenvolvido com o objetivo de aprimorar habilidades em desenvolvimento full-stack, por meio da criação de um sistema de login e cadastro integrando front-end em React, back-end com Node.js e banco de dados PostgreSQL.`,
      repository: "https://github.com/gabriel-piangers/Login-Page",
    },
    {
      title: "2048 web",
      lastCommit: "26/02/2025",
      stack: [
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          imgAlt: "javascript logo",
        },
        {
          imgSrc:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          imgAlt: "react logo",
        },
      ],
      screenImgSrc: web2048,
      screenImgAlt: "2048 website homepage screenshot",
      description: `Projeto criado com o objetivo de praticar e aprimorar habilidades em desenvolvimento front-end, explorando a construção de interfaces interativas e responsivas. Além disso, foi fundamental para reforçar conceitos essenciais de lógica e estrutura de programação em JavaScript. `,
      repository: "https://github.com/gabriel-piangers/2048-web",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-header">Meus Projetos</h2>

      <div className="projects-grid">
        <div className="projects-display">
          <div className="projects-display-left">
            <div className="projects-display-img-container">
              <img
                src={projects[active].screenImgSrc}
                alt={projects[active].screenImgAlt}
                className="projects-img"
              />
            </div>

            <h2 className="projects-display-title">{projects[active].title}</h2>
            <p className="projects-display-p">
              Último Commit: {projects[active].lastCommit}
            </p>
            <div className="projects-display-stack">
              {projects[active].stack.map((stack, index) => {
                return (
                  <div className="projects-stack-container" key={index}>
                    <img src={stack.imgSrc} alt={stack.imgAlt} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="projects-display-right">
            <p className="projects-display-description">
              <ReactMarkdown>{projects[active].description}</ReactMarkdown>
            </p>
            <button
              className="projects-display-github"
              onClick={() => window.open(projects[active].repository)}
            >
              Ver no Github
            </button>
          </div>
        </div>
        <div className="projects-grid-menu">
          {projects.map((project, index) => {
            return (
              <div className="projects-card" key={index}
              onClick={() => setActive(index)}
              >
                <img
                  src={project.screenImgSrc}
                  alt={project.screenImgAlt}
                  className="projects-img"
                />
                <h3 className="projects-card-title">{project.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
