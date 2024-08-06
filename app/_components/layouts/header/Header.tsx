// import Link from 'next/link';
// import { pageLinks, topLink } from '@/data/links';

import {
  AppBar,
  Typography,
  Container,
  Box,
  List,
  ListItem,
  CssBaseline,
} from '@mui/material';
import Link from 'next/link';

const Header = () => {

  return (
    <AppBar color="primary" component="header" position="fixed">
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px',
          }}
        >
        <CssBaseline />
          <Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link href={'/'}>Header</Link>
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <List sx={{display: 'flex', alignItems: 'center'}}>
              <ListItem>
                <Link href={'/'}>Home</Link>
              </ListItem>
              <ListItem>
                <Link href={'/signin'}>SignIn</Link>
              </ListItem>
              <ListItem>
                <Link href={'/signup'}>SignUp</Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
