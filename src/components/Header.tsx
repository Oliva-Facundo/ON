// type Props = {
//   text: string;
// };

import { useEffect, useRef } from "react";

// props: Props

const Header = () => {
  const itemsNav = [
    {
      name: "Inicio",
      id: "#home",
    },
    {
      name: "Proyectos",
      id: "#projects",
    },
    {
      name: "Quienes somos",
      id: "#us",
    },
    {
      name: "Tecnologias",
      id: "#tech",
    },
    {
      name: "Contacto",
      id: "#contact",
    },
  ];

  const sections = useRef<NodeListOf<HTMLElement> | null>(null);
  const navItemsRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null);

  useEffect(() => {
    const sects = document.querySelectorAll<HTMLElement>("section");
    const nitems = document.querySelectorAll<HTMLAnchorElement>("nav ul li a");

    sections.current = sects;
    navItemsRef.current = nitems;

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && navItemsRef.current) {
          navItemsRef.current.forEach((i) => {
            if (i.getAttribute("href") === `#${entry.target.id}`) {
              i.classList.add("active");
            } else {
              i.classList.remove("active");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    sections.current?.forEach((section) => {
      observer.observe(section);
    });

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.current?.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="text-6xl pb-6 font-bold py-10 text-center mb-6"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gusta to-kairo">
          ON
        </span>
      </section>
      <nav className="sticky top-0 z-10 w-full flex justify-center h-20 backdrop-blur-lg">
        <ul className="flex gap-x-14 items-center">
          {itemsNav.map((item, i) => (
            <li key={i}>
              <a href={item.id}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-center py-20">
        <h3>
          Transformamos tus ideas en soluciones digitales: diseño web moderno y
          aplicaciones funcionales que impulsan tu negocio al siguiente nivel.
        </h3>
      </div>
    </>
  );
};

export default Header;
