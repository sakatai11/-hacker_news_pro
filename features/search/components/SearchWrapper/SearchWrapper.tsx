import { Box, TextField, Button, Card, Typography, CardMedia } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import dummy from '/public/dummy.png';
import Link from "next/link";

const SearchWrapper = () => {
  
  return (
    <>
      <Box sx={{ marginTop: 6 , maxWidth: "520px" , width: "100%" , marginX: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "25px"}}>
          <TextField
            // onChange={}
          id="standard-basic" 
          label="Search" 
          variant="standard"  
          margin="dense"
          size="small"
          fullWidth
          />
          <Button variant="outlined">
            <SearchIcon />
          </Button>
        </Box>
      </Box>
      <Box sx={{
        marginTop: 6,
      }}>
        <Link href="#" >
          <Card sx={{ display: 'flex' }}>
            <Box sx={{
              maxWidth:  { xs: "170px", sm: "320px" },
              width: "100vw",
              height: "auto",
              aspectRatio: "2/1",
              borderRadius: 2,
              objectFit: "cover",
              padding: 2
            }}>
              <CardMedia
                component="img"
                image={dummy.src}
                width={320}
                height={160}
                alt="アイキャッチ"
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", padding: 2 }}>
              <Box>
                <Typography variant="subtitle1" color="text.secondary" component="div" fontSize="12px">
                  Mac Miller
                </Typography>
                <Typography component="div" variant="h5" fontSize={{ xs: "18px", sm: "24px"}}>
                  Live From Space
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                会社
              </Typography>
            </Box>
          </Card>
        </Link>
      </Box>
    </>
  );
}

export default SearchWrapper;
