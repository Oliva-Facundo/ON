// type Props = {
//   text: string;
// };

// props: Props

const Header = () => {
  const itemsNav = [
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

  return (
    <>
      <div className="text-6xl pb-6 font-bold py-10 text-center mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gusta to-kairo">
          ON
        </span>
      </div>
      <nav className="sticky top-0 z-10 border-b border-black w-full flex justify-center h-20 backdrop-blur-lg">
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
