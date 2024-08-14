'use client';
import { Box, Card, Typography, CardMedia, ListItem } from '@mui/material';
import { useState } from 'react';
import { ArticleType } from '@/types/types';
import dummy from '/public/dummy.png';
import Link from 'next/link';
import CountButton from '@/features/components/CountButton';
import { v4 as uuid } from 'uuid';

type KeyWordProps = {
  articleList: ArticleType[];
  pageSize: number;
};

const SearchWrapper = ({ articleList, pageSize }: KeyWordProps) => {
  const [count, setCount] = useState<number>(pageSize);
  const displayedArticles = articleList.slice(0, count);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 6,
        }}
      >
        {displayedArticles && displayedArticles.length > 0 ? (
          displayedArticles.map((article) => (
            <ListItem key={uuid()} className="block">
              <Link href={article.url}>
                <Card sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      maxWidth: { sm: '320px' },
                      flex: { xs: 1, sm: 'initial' },
                      padding: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={
                        article.urlToImage ? article.urlToImage : dummy.src
                      }
                      width={320}
                      height={160}
                      alt="アイキャッチ"
                      className="aspect-[2/1] w-screen rounded-md object-cover"
                    />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: 2,
                      flex: { xs: 1, sm: 'initial' },
                    }}
                  >
                    <Box>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        fontSize="12px"
                      >
                        {new Date(article.publishedAt).toLocaleDateString(
                          'ja-JP',
                          options,
                        )}
                      </Typography>
                      <Typography
                        component="div"
                        variant="h5"
                        fontSize={{ xs: '18px', sm: '24px' }}
                      >
                        {article.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {article.author}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            </ListItem>
          ))
        ) : (
          <Typography component="div" variant="h5" textAlign="center">
            検索内容が見つかりませんでした。
          </Typography>
        )}
      </Box>
      {count <= articleList.length && (
        <CountButton handleClick={() => setCount((prev) => prev + pageSize)} />
      )}
    </>
  );
};

export default SearchWrapper;
