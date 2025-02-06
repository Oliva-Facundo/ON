type Props = {
  name: string;
  web: string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

const TechCard = (props: Props) => {
  return (
    <a
      href={props.web}
      className="flex flex-col justify-around items-center w-28 min-h-32 p-2 border border-white rounded-lg hover:translate-y-1"
      target="_blank"
      rel="noreferrer"
    >
      <props.svg className="size-14 " />
      <h3 className="text-center font-semibold">{props.name}</h3>
    </a>
  );
};

export default TechCard;
