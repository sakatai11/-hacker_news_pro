import Title from '../_components/elements/title/Index';
import * as Search from '../../features/search/components/Index';
import { getSearchNews } from '../_libs/api';
import { PAGE_SIZE } from '../_constants/data';

export const runtime = 'edge';

type Props = {
  searchParams: { q: string };
};

export default async function SearchPage({ searchParams }: Props) {
  const data = await getSearchNews({ keyWord: searchParams.q });

  return (
    <>
      <Title text={'Search'} />
      <Search.KeyWord />
      {data && (
        <Search.SearchWrapper
          articleList={data.articles}
          pageSize={PAGE_SIZE}
        />
      )}
    </>
  );
}
