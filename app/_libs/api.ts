import { ENDPOINT_URL } from '../_constants/data';

type Props = {
  params?: string;
  keyWord?: string;
};

export async function getNews({ params }: Props) {
  // console.log(params);

  try {
    const res = await fetch(
      `${ENDPOINT_URL}/top-headlines?country=jp&category=${params}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.NEXT_PUBLIC_DATA_API_KEY as string,
        },
        next: {
          revalidate: 43200, // 43200秒（12時間）キャッシュを適用
        },
      },
    );

    if (!res.ok) {
      throw new Error(`error code: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getSearchNews({ keyWord }: Props) {
  if (!keyWord) {
    return;
  }

  try {
    const res = await fetch(
      `${ENDPOINT_URL}/everything?q=${keyWord}&language=jp&sortBy=publishedAt`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.NEXT_PUBLIC_DATA_API_KEY as string,
        },
        next: {
          revalidate: 43200, // 43200秒（12時間）キャッシュを適用
        },
      },
    );

    if (!res.ok) {
      throw new Error(`error code: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
