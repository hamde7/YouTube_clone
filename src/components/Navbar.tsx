import { Stack } from "@mui/material";
// import {logo } from './Youtube-logo-png.png'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <Stack direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position:"sticky" ,zIndex:1 , justifyContent:"space-between" , top:0 , backgroundColor:"#000"}}>
        <Link to="/">
            <img src='./Youtube-logo-png.png' alt="" height={45} />
        </Link>
        <SearchBar />
    </Stack>
  );
}
