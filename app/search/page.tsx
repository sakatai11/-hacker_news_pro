import Title from '../_components/elements/title/Index';
import * as Search from '../../features/search/components/Index';
import { getSearchNews } from '../_libs/apis';
import { PAGE_SIZE } from '../_constants/data';

type Props = {
  searchParams: { q: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const res = await getSearchNews({ keyWord: searchParams.q });

  return (
    <>
      <Title text={'Search'} />
      <Search.KeyWord />
      {res && <Search.SearchWrapper articleList={res} pageSize={PAGE_SIZE} />}
    </>
  );
}
