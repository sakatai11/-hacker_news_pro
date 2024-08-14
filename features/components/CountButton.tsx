import { Box } from '@mui/material';
import Button from '@mui/material/Button';

type Props = {
  handleClick: () => void;
};

const CountButton = ({ handleClick }: Props) => {
  return (
    <Box marginTop={10} textAlign={'center'}>
      <Button
        sx={{
          width: { xs: '100%', sm: '320px' },
          paddingX: '10px',
          paddingY: '15px',
        }}
        variant="contained"
        onClick={handleClick}
      >
        さらに表示する
      </Button>
    </Box>
  );
};

export default CountButton;
