//import React, { useEffect } from "react";
import { styled } from "@material-ui/core/styles";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
//import {useHistory} from 'react-router-dom'
import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const useStyles = styled({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  //const [value, setValue] = React.useState(0);


    //const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //const history = useHistory();
  const router = useRouter();


  useEffect(() => {
    console.log(value,'value')
    if (value === 0) {
      router.push("/");
    } else if (value === 1) {
      router.push("/Movies");
    } else if (value === 2) {
      router.push("/Series");
    } else if (value === 3) {
      router.push("/Search");
    }
  }, [value]); //, router

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#2d313a",
          zIndex: 100,
        }}

      >
         <BottomNavigationAction label="Trending" icon={<WhatshotIcon />}  sx={{ color: "white" }} />
         <BottomNavigationAction label="Movies" icon={<MovieIcon />}  sx={{ color: "white" }} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />}  sx={{ color: "white" }}/>
        <BottomNavigationAction label="Search" icon={<SearchIcon />}  sx={{ color: "white" }} />
      </BottomNavigation>
    </Box>
  );
}
