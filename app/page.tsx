import Page from './[newsList]/page';

type Props = {
  params: {
    newsList: string;
  };
};

export default function Top() {
  // newsListが/の場合に渡すデフォルトのprops
  const defaultProps: Props = {
    params: {
      newsList: '/',
    },
  };

  return (
    <>
      <Page {...defaultProps} />
    </>
  );
}
