import facu from "../assets/aaaaa.jpg";

const Us = () => {
  const us = [
    {
      name: "Gustavo",
      description:
        "Soy un desarrollador backend junior con experiencia en Python y JavaScript. Tengo conocimientos en bases de datos SQL (PostgreSQL) y NoSQL (MongoDB). He trabajado en equipos ágiles usando Scrum para crear soluciones escalables. Me apasiona aprender y aplicar buenas prácticas de ingeniería, como CI/CD y automatización con Git. Busco un entorno desafiante donde seguir creciendo y aportar a productos innovadores.",
      image:
        "https://cdn.discordapp.com/attachments/1144286248563900527/1253712199306842122/photo_cv-circle.png?ex=67a36ff9&is=67a21e79&hm=6175782ff0981866e6ff292902276cf508b0968ce640c13167cc988635e1917e&",
      style: "flex-row",
      github: "https://github.com/NievasGustavo",
    },
    {
      name: "Facundo",
      description:
        "Soy un desarrollador Frontend junior con experiencia en JavaScript. Mi pasión por la tecnología y el desarrollo de sitios web me ha llevado a especializarme en el Frontend, aunque también tengo conocimientos en Backend. He trabajado en equipos ágiles utilizando Scrum para crear soluciones escalables y efectivas. Me encanta aprender nuevas tecnologías y ganar experiencia en el área. Poseo un nivel intermedio de inglés (B1/B2), lo cual me permite comunicarme y colaborar en proyectos internacionales.",
      image: facu,
      style: "flex-row-reverse",
      github: "https://github.com/Oliva-Facundo",
    },
  ];

  return (
    <section id="us" className="flex flex-col gap-5 items-center my-14">
      <h2 className="text-2xl font-semibold pb-4">Quienes somos</h2>
      <div className="flex flex-col gap-10 w-4/6">
        {us.map((u) => (
          <div
            key={u.name}
            className={`flex gap-4 items-center h-[26rem] ${u.style}`}
          >
            <img
              src={u.image}
              className="h-full object-cover rounded-lg"
              alt={`imagen de ${u.name}`}
            />
            <div className="h-full flex flex-col items-center py-10 px-3">
              <h3
                className={`text-3xl font-semibold text-center py-5 ${
                  u.name === "Gustavo" ? "text-gusta" : "text-kairo"
                }`}
              >
                {u.name}
              </h3>
              <p className="text-center w-3/4">{u.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Us;
