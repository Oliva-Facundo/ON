type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
  code: string;
};

const CardProject = (props: Props) => {
  return (
    <div className="flex flex-col w-80 min-h-80 p-4 rounded-2xl shadow-lg shadow-white">
      <div className="h-4/5 mb-6">
        <img
          src={props.image}
          className="w-full object-cover rounded-lg"
          alt={`imagen de ${props.title}`}
        />
        <h1 className="text-center py-2">{props.title}</h1>
      </div>
      <div className="flex justify-around h-1/5 items-center">
        <a className="" href={props.url}>
          Ver proyecto
        </a>
        <a className="" href={props.code}>
          Ver código
        </a>
      </div>
    </div>
  );
};

export default CardProject;
