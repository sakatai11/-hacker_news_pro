import { Container } from '@mui/material';

type Children = {
  children: React.ReactNode;
};

export default function Template({ children }: Children): JSX.Element {

  return (
    <Container 
      maxWidth="xs" 
      sx={{
        paddingY: 20,
    }}>
      <main>
        {children}
      </main>
    </Container>
  );
}
