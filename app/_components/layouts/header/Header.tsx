'use client';
import { pageLinks, searchLink } from '@/data/links';
import { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import {
  AppBar,
  Typography,
  Container,
  Box,
  List,
  ListItem,
  CssBaseline,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';

const ResponsiveBox = styled(Box)(({ theme }) => ({
  // SP基準
  [theme.breakpoints.down('md')]: {
    display: 'block', // SP表示
  },
  [theme.breakpoints.up('md')]: {
    display: 'none', // PC非表示
  },
}));

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <AppBar
      color="primary"
      component="header"
      position="fixed"
      elevation={3}
      sx={{
        marginTop: 'auto',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingY: '15px',
          }}
        >
          <CssBaseline />

          <Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link href={'/'}>Sample News</Link>
            </Typography>
          </Box>

          <ResponsiveBox>
            <Box>
              <MenuIcon onClick={() => setDrawerOpened(true)} />
              <Drawer
                anchor={'right'}
                open={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                PaperProps={{
                  style: {
                    width: '70%',
                    justifyContent: 'center',
                    position: 'fixed',
                  },
                }}
              >
                <DrawerMenu
                  links={pageLinks}
                  searchLink={searchLink}
                  handleDrawerClose={() => setDrawerOpened(false)}
                />
              </Drawer>
            </Box>
          </ResponsiveBox>

          <ResponsiveBox sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ textAlign: 'center' }}>
              <List sx={{ display: 'flex', alignItems: 'center' }}>
                {pageLinks.map(({ name, href }) => (
                  <ListItem key={name}>
                    <Link href={href}>{name}</Link>
                  </ListItem>
                ))}
                <ListItem>
                  <Link href={searchLink.href}>
                    <SearchIcon />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </ResponsiveBox>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
