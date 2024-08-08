import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import dummy from '/public/dummy.png';
import Link from 'next/link';
import { ArticleType } from '@/types/types';

type ArticleDataProps = {
  articleList: ArticleType[]
}


const NewsListWrapper = ({articleList}:ArticleDataProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  
  return (
    <Box sx={{ flexGrow: 1, marginTop: 6}}>
      <Grid container marginTop={0} spacing={5}>
      {
        articleList.map((article) => (
        <Grid key={article.publishedAt} item xs={4}>
        <Link href={article.url} >
          <Box 
            boxShadow={3}
            borderRadius={2}
            bgcolor={"#FFFFFF"}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Image 
              src={article.urlToImage ? article.urlToImage : dummy}
              width={320}
              height={160}
              alt="アイキャッチ"
              className="aspect-[2/1] w-screen rounded-t-[inherit] object-cover"
              priority={true}
            />
            <div className='p-2 flex flex-col justify-between gap-2 flex-grow'>
              <div className='flex flex-col gap-1'>
                <span className='inline-block text-neutral-400 text-xs'>{new Date(article.publishedAt).toLocaleDateString('ja-JP', options)}</span>
                <p className='text-xl font-bold'>{article.title}</p>
              </div>
              <p className='break-words'>{article.author}</p>
            </div>
          </Box>
          </Link>
        </Grid>
        ))
      }
      </Grid>
    </Box>
  );
}

export default NewsListWrapper;