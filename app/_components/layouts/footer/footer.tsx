import { AppBar, Typography, Container, Box, CssBaseline } from '@mui/material';

const Footer = () => {
  return (
    <AppBar
      color="primary"
      component="footer"
      position="static"
      sx={{ marginTop: 'auto' }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px',
            marginTop: 'auto',
          }}
        >
          <CssBaseline />
          <Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Footer
            </Typography>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
