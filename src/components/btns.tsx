type Props = {
  text: string;
  who: string;
  type: string;
};

const btns = (props: Props) => {
  return (
    <button
      className={`px-4 py-2 border-2 ${
        props.who === "k" ? "border-kairo" : "border-gusta"
      }`}
    >
      {props.text}
    </button>
  );
};

export default btns;
