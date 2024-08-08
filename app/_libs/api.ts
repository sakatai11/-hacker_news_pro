import { ENDPOINT_URL } from "../_constants/data";

type Props = {
  params: string;
  pageSize: number;
}

export async function getNews({params, pageSize}:Props) {
  console.log(params);
  console.log(pageSize);

  try {
    const res = await fetch(`${ENDPOINT_URL}&q=${params}&pageSize=${pageSize}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.DATA_API_KEY as string,
      }
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