'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import dummy from '/public/dummy.png';
import Link from 'next/link';
import { ArticleType } from '@/types/types';
import CountButton from '@/features/components/CountButton';
import { v4 as uuid } from 'uuid';

type ArticleDataProps = {
  articleList: ArticleType[];
  pageSize: number;
};

const NewsListWrapper = ({ articleList, pageSize }: ArticleDataProps) => {
  const [count, setCount] = useState<number>(pageSize);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const displayedArticles = articleList.slice(0, count);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 6 }}>
        <Grid
          container
          marginTop={0}
          spacing={5}
          direction={{ xs: 'column', sm: 'row' }}
        >
          {displayedArticles.map((article) => (
            <Grid key={uuid()} item xs={4}>
              <Link href={article.url}>
                <Box
                  boxShadow={3}
                  borderRadius={2}
                  bgcolor={'#FFFFFF'}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Image
                    src={article.urlToImage ? article.urlToImage : dummy.src}
                    width={320}
                    height={160}
                    alt="アイキャッチ"
                    className="aspect-[2/1] w-screen rounded-t-[inherit] object-cover"
                    priority={true}
                  />
                  <div className="flex grow flex-col justify-between gap-2 p-2">
                    <div className="flex flex-col gap-1">
                      <span className="inline-block text-xs text-neutral-400">
                        {new Date(article.publishedAt).toLocaleDateString(
                          'ja-JP',
                          options,
                        )}
                      </span>
                      <p className="text-xl font-bold">{article.title}</p>
                    </div>
                    <p className="break-words">{article.author}</p>
                  </div>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      {count <= articleList.length && (
        <CountButton handleClick={() => setCount((prev) => prev + pageSize)} />
      )}
    </>
  );
};

export default NewsListWrapper;
