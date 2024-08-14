type Props = {
  text: string;
};

const Title = ({ text }: Props): JSX.Element => (
  <h1 className="text-center font-bold text-5xl">{text}</h1>
);

export default Title;
