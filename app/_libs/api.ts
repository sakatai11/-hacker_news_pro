import { ENDPOINT_URL } from "../_constants/data";

type Props = {
  params: string;
  // pageSize: number;
}

export async function getNews({params}:Props) {
  console.log(params);
  // console.log(pageSize);

  try {
    const res = await fetch(`${ENDPOINT_URL}&category=${params}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.DATA_API_KEY as string,
      },
      next: {
        revalidate: 43200, // 43200秒（12時間）キャッシュを適用
      },
    });

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