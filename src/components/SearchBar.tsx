import {Paper, IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar(){
    const [serach , setSearch] = useState<string>('');
    const nav= useNavigate();
    return(
        <Paper 
        component="form"
        onSubmit={(e)=>{
            e.preventDefault();
            nav(`search/${serach}`)
            setSearch('');
        }} 
        sx={{borderRadius:20 , 
        border:"1px solid #e3e3e3", 
        pl:2,
        boxShadow:"none",
        mr : {sm : 5}
        
        }}>
            <input type="text" 
            className="search-bar"
            placeholder="search..."
            value={serach}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            <IconButton type="submit" >
                <SearchIcon sx={{color:"red"}}/>
            </IconButton>
        </Paper>
    )
}