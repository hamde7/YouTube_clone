import {Paper, IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar(){
    return(
        <Paper 
        component="form"
        onSubmit={()=>{}} 
        sx={{borderRadius:20 , 
        border:"1px solid #e3e3e3", 
        pl:2,
        boxShadow:"none",
        mr : {sm : 5}
        
        }}>
            <input type="text" 
            className="search-bar"
            placeholder="search..."
            onChange={()=>{}}
            />
            <IconButton type="submit" >
                <SearchIcon sx={{color:"red"}}/>
            </IconButton>
        </Paper>
    )
}