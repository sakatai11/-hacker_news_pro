type Props = {
  text: string;
};

const Title = ({ text }: Props): JSX.Element => (
  <h1 className="text-center text-5xl font-bold">{text}</h1>
);

export default Title;
