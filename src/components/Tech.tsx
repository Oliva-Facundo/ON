import TechCard from "./TechCard";
import {
  ReactIcon,
  TailwindCSS,
  Redux,
  TypeScript,
  Python,
  Git,
  Angular,
  MongoDB,
  Nodejs,
  Expressjs,
  PostgreSQL,
  FastAPI,
  HTML5,
  CSS,
  JavaScript,
} from "./Icons";

interface Tech {
  name: string;
  web: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Tech = () => {
  const techs: Tech[] = [
    {
      name: "HTML",
      web: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      svg: HTML5,
    },
    {
      name: "CSS",
      web: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      svg: CSS,
    },
    {
      name: "Javascript",
      web: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      svg: JavaScript,
    },
    {
      name: "React",
      web: "https://reactjs.org/",
      svg: ReactIcon,
    },
    {
      name: "Typescript",
      web: "https://www.typescriptlang.org/",
      svg: TypeScript,
    },
    {
      name: "TailwindCSS",
      web: "https://tailwindcss.com/",
      svg: TailwindCSS,
    },
    {
      name: "Redux",
      web: "https://redux.js.org/",
      svg: Redux,
    },
    {
      name: "Python",
      web: "https://www.python.org/",
      svg: Python,
    },
    {
      name: "Git",
      web: "https://git-scm.com/",
      svg: Git,
    },
    {
      name: "Angular",
      web: "https://angular.io/",
      svg: Angular,
    },
    {
      name: "MongoDB",
      web: "https://www.mongodb.com/",
      svg: MongoDB,
    },
    {
      name: "NodeJS",
      web: "https://nodejs.org/en/",
      svg: Nodejs,
    },
    {
      name: "Express",
      web: "https://expressjs.com/",
      svg: Expressjs,
    },
    {
      name: "PostgreSQL",
      web: "https://www.postgresql.org/",
      svg: PostgreSQL,
    },
    {
      name: "FastAPI",
      web: "https://fastapi.tiangolo.com/",
      svg: FastAPI,
    },
  ];

  return (
    <section id="tech" className="flex flex-col gap-5 items-center my-1 py-20">
      <h2 className="text-2xl font-semibold pb-12">
        Tecnologias que utilizamos
      </h2>
      <div className="flex flex-wrap justify-center gap-6 w-2/4">
        {techs.map((t) => (
          <TechCard name={t.name} web={t.web} key={t.name} svg={t.svg} />
        ))}
      </div>
    </section>
  );
};

export default Tech;
