import { Stack } from "@mui/material";
import {logo } from '../utils/constants'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <Stack direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position:"sticky" , justifyContent:"space-between" , top:0 , backgroundColor:"#000"}}>
        <Link to="/">
            <img src={logo} alt="" height={45} />
        </Link>
        <SearchBar />
    </Stack>
  );
}
