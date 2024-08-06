type Props = {
  text: string;
};

const Title = ({ text }: Props): JSX.Element => (
    <h1 className="text-center font-normal">{text}</h1>
);

export default Title;
