import { useState } from "react";
import arrowLeft from "../assets/arrow-sm-left-svgrepo-com.svg";
import arrowRight from "../assets/arrow-sm-right-svgrepo-com.svg";
import storyStarter from "../assets/storystarter.jpg";
import medicall from "../assets/Medicall.png";
import interbooks from "../assets/InterBooks.png";
import buildingHub from "../assets/buildinghub.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Story Starter",
      description:
        "Plataforma de crowdfunding de historias. Desarrollada con React y Node.js",
      image: storyStarter,
      url: "https://storystarter.vercel.app/",
    },
    {
      title: "TymeSync",
      description:
        "TymeSync es una plataforma para la gestion de citas y reservas para negocios de servicios.",
      image:
        "https://cdn.pixabay.com/photo/2022/09/30/10/05/river-7489170_960_720.jpg",
      url: "https://via.placeholder.com/150",
    },
    {
      title: "Medicall",
      description:
        "MediCall es una plataforma de telemedicina diseñada para mejorar la eficiencia en las consultas médicas. Nuestro objetivo principal es permitir el acceso a servicios médicos desde cualquier ubicación, facilitando así la atención médica remota.",
      image: medicall,
      url: "https://c17-70-m-python.pages.dev/",
    },
    {
      title: "InterBooks",
      description:
        "InterBooks es una plataforma que conecta a propietarios de libros con usuarios interesados en intercambiarlos. Desarrollada en 4 semanas con metodología Scrum, utilicé MongoDB, Express.js y Mongoose",
      image: interbooks,
      url: "https://s15-02-m-node-react-interbooks.vercel.app/",
    },
    {
      title: "BuildingHub",
      description:
        "BuildingHub es una plataforma para facilitar la comunicacion y administracion de edificios y/o comunidades.",
      image: buildingHub,
      url: "https://buildinghub.vercel.app/",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(projects);

  const handleNextSlide = () => {
    setCurrentSlide((next) => [...next.slice(1), next[0]]);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <section
      id="projects"
      className="flex items-center flex-col gap-5 overflow-x-hidden my-10 py-10 px-2"
    >
      <h2 className="text-2xl font-semibold py-4">Proyectos</h2>
      <div className="relative w-full max-w-7xl h-[50vh] lg:h-[50rem] bg-transparent shadow-sm shadow-gray-200 mb-14">
        <div className="slider">
          {currentSlide.map((p, i) => (
            <div
              key={i}
              className={`item w-3/4 sm:w-52 h-80 absolute top-2/4 -translate-y-1/2 rounded-2xl shadow-lg shadow-gray-400 bg-center inline-block bg-cover bg-no-repeat duration-500`}
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            >
              <div
                className={`content absolute top-1/2 left-1/2 md:left-20 transform -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-80 text-left text-black backdrop-blur-xl shadow-md shadow-slate-400 rounded-xl p-4 duration-500`}
              >
                <h2 className="text-xl sm:text-2xl font-bold uppercase">
                  {p.title}
                </h2>
                <p className="mt-2 mb-5 text-sm sm:text-base">
                  {p.description}
                </p>
                <button
                  type="button"
                  onClick={() => window.open(p.url)}
                  className="px-4 py-2 border-none cursor-pointer rounded-xl bg-gray-400 text-black"
                >
                  Ver proyecto
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-center absolute bottom-5 flex gap-4 justify-center">
          <button
            onClick={handlePrevSlide}
            className="w-11 h-9 rounded-lg border-none mx-0 my-1 bg-slate-200 duration-300 hover:bg-slate-400 flex items-center justify-center"
          >
            <img src={arrowLeft} alt="Previous" />
          </button>
          <button
            onClick={handleNextSlide}
            className="w-11 h-9 rounded-lg border-none mx-0 my-1 bg-slate-200 duration-300 hover:bg-slate-400 flex items-center justify-center"
          >
            <img src={arrowRight} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
