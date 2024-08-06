// import Link from 'next/link';
import { pageLinks } from '@/data/links';

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
            {
              pageLinks.map(({name,href}) => (
                <ListItem key={name}>
                  <Link href={href}>{name}</Link>
                </ListItem>
              ))
            }
            </List>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
