
import { PageLink, SearchLink } from "@/types/types";
import {ListItem, List, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';


type Props = {
  links: PageLink[];
  searchLink: SearchLink;
  handleDrawerClose: () => void;
}

const DrawerMenu = ({links, searchLink, handleDrawerClose}:Props) => {
  return (
      <>
        <Button onClick={handleDrawerClose} sx={{position: "absolute", top: 0, right: 0, minWidth: 'fit-content'}} >
          <CloseIcon sx={{color: "#000000"}}  />
        </Button>
        <List sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px'}}>
          {links.map(({ name, href }) => (
            <ListItem key={name} sx={{justifyContent: 'center'}} onClick={handleDrawerClose}>
              <Link href={href}>{name}</Link>
            </ListItem>
          ))}
          <ListItem sx={{justifyContent: 'center'}} onClick={handleDrawerClose}>
            <Link href={searchLink.href}>
              <SearchIcon />
            </Link>
          </ListItem>
        </List>
      </>
  );
}

export default DrawerMenu;