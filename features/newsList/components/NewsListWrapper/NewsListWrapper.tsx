import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import dummy from '/public/dummy.png';
import Link from 'next/link';

const NewsListWrapper = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 6}}>
      <Grid container marginTop={0} spacing={5}>
        <Grid item xs={4}>
        <Link href='#' >
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
              src={dummy}
              width={320}
              height={160}
              alt="アイキャッチ"
              className="aspect-[2/1] w-screen rounded-t-[inherit] object-cover"
              priority={true}
            />
            <div className='p-2 flex flex-col justify-between gap-2 flex-grow'>
              <div className='flex flex-col gap-1'>
                <span className='inline-block text-neutral-400 text-xs'>0000年00月00日</span>
                <p className='text-xl font-medium'>test</p>
              </div>
              <p className='break-words'>test</p>
            </div>
          </Box>
        </Link>
        </Grid>
        <Grid item xs={4}>
        <Link href='#' >
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
              src={dummy}
              width={320}
              height={160}
              alt="アイキャッチ"
              className="aspect-[2/1] w-screen rounded-t-[inherit] object-cover"
              priority={true}
            />
            <div className='p-2 flex flex-col justify-between gap-2 flex-grow'>
              <div className='flex flex-col gap-1'>
                <span className='inline-block text-neutral-400 text-xs'>0000年00月00日</span>
                <p className='text-xl font-medium break-words'>testtesttesttesttesttesttesttesttesttesttesttesttesttest</p>
              </div>
              <p>test</p>
            </div>
          </Box>
        </Link>
        </Grid>
        <Grid item xs={4}>
        <Box 
            sx={{ backgroundColor: '#FFFFFF',}} 
          >
            <p>test</p>
            <p>test</p>
          </Box>
        </Grid>
        <Grid item xs={4}>
        <Box 
            sx={{ backgroundColor: '#FFFFFF',}} 
          >
            <p>test</p>
            <p>test</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewsListWrapper;