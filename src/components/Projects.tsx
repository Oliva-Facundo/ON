import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe totam ratione, ea voluptate distinctio rerum quibusdam odit ipsa dolorum nostrum quisquam quidem laborum facilis consequatur fugiat placeat itaque deserunt incidunt.",
      image:
        "https://cdn.pixabay.com/photo/2022/06/30/02/00/mountains-7292778_960_720.jpg",
      url: "https://via.placeholder.com/150",
      code: "https://via.placeholder.com/150",
    },
    {
      title: "Project 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe totam ratione, ea voluptate distinctio rerum quibusdam odit ipsa dolorum nostrum quisquam quidem laborum facilis consequatur fugiat placeat itaque deserunt incidunt.",
      image:
        "https://cdn.pixabay.com/photo/2022/09/30/10/05/river-7489170_960_720.jpg",
      url: "https://via.placeholder.com/150",
      code: "https://via.placeholder.com/150",
    },
    {
      title: "Project 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe totam ratione, ea voluptate distinctio rerum quibusdam odit ipsa dolorum nostrum quisquam quidem laborum facilis consequatur fugiat placeat itaque deserunt incidunt.",
      image:
        "https://cdn.pixabay.com/photo/2021/12/22/22/41/bow-river-6888321_960_720.jpg",
      url: "https://via.placeholder.com/150",
      code: "https://via.placeholder.com/150",
    },
    {
      title: "Project 4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe totam ratione, ea voluptate distinctio rerum quibusdam odit ipsa dolorum nostrum quisquam quidem laborum facilis consequatur fugiat placeat itaque deserunt incidunt.",
      image:
        "https://cdn.pixabay.com/photo/2022/06/30/02/00/mountains-7292778_960_720.jpg",
      url: "https://via.placeholder.com/150",
      code: "https://via.placeholder.com/150",
    },
    {
      title: "Project 5",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe totam ratione, ea voluptate distinctio rerum quibusdam odit ipsa dolorum nostrum quisquam quidem laborum facilis consequatur fugiat placeat itaque deserunt incidunt.",
      image:
        "https://cdn.pixabay.com/photo/2022/09/30/10/05/river-7489170_960_720.jpg",
      url: "https://via.placeholder.com/150",
      code: "https://via.placeholder.com/150",
    },
    {
      title: "Project 6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe totam ratione, ea voluptate distinctio rerum quibusdam odit ipsa dolorum nostrum quisquam quidem laborum facilis consequatur fugiat placeat itaque deserunt incidunt.",
      image:
        "https://cdn.pixabay.com/photo/2022/06/30/02/00/mountains-7292778_960_720.jpg",
      url: "https://via.placeholder.com/150",
      code: "https://via.placeholder.com/150",
    },
    {
      title: "Project 7",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe totam ratione, ea voluptate distinctio rerum quibusdam odit ipsa dolorum nostrum quisquam quidem laborum facilis consequatur fugiat placeat itaque deserunt incidunt.",
      image:
        "https://cdn.pixabay.com/photo/2022/09/30/10/05/river-7489170_960_720.jpg",
      url: "https://via.placeholder.com/150",
      code: "https://via.placeholder.com/150",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((next) => (next - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="flex items-center flex-col gap-5 overflow-hidden"
    >
      <h2 className="text-2xl font-semibold pb-4">Proyectos</h2>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-slate-100 shadow-lg shadow-gray-400">
        <div className="slider">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`item w-52 h-80 absolute top-2/4 -translate-y-1/2 rounded-2xl shadow-lg shadow-gray-400 bg-center inline-block bg-cover duration-500 ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            >
              <div
                className={`content absolute top-1/2 left-24 w-80 text-left -translate-y-1/2 text-white ${
                  i === currentSlide ? "block" : "hidden"
                }`}
              >
                <h2 className="text-2xl font-bold uppercase opacity-0 ease-in-out duration-200">
                  {p.title}
                </h2>
                <p className="mt-2 mb-5 opacity-0 ease-in-out duration-300">
                  {p.description}
                </p>
                <button className="px-4 py-2 border-none cursor-pointer bg-white text-black opacity-0 ease-in-out duration-500 ">
                  Ver proyecto
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-center absolute bottom-5">
          <button
            onClick={handlePrevSlide}
            className="w-10 h-9 rounded-lg border-none mx-0 my-1 bg-white text-black duration-300 hover:bg-slate-400 hover:white
            "
          >
            {"<-"}
          </button>
          <button
            onClick={handleNextSlide}
            className="w-10 h-9 rounded-lg border-none mx-0 my-1 bg-white text-black duration-300 hover:bg-slate-400 hover:white
            "
          >
            {"->"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
