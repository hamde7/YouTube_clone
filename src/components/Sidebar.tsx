import {Box, Stack} from '@mui/material'
import { categories } from '../utils/constants'
type SelectedType ={
    setSelected(x:String) : void;
    selected:string;
}
export default function Sidebar({setSelected , selected } :SelectedType){
    return(
        <Box sx={{height:{sx:"auto" , sm:"97vh" } , 
        borderRight:"1px #3d3d3d solid" ,
        px:{sx:0 , sm:2}
        }}>
            <Stack direction="row" sx={{ 
                overflowY:"auto",
                height:"100%",
                flexDirection:{sm:"column"} ,
                overflow:"scroll"}}>
                {categories.map((cate)=>{
                    return <button
                    className="category-btn"
                    style={{color:"white" ,
                    backgroundColor:cate.name===`${selected}` &&  "#fc1503" ||""
                }}
                onClick={()=>{setSelected(cate.name)}}
                    key={cate.name}
                    >
                        <span style={{paddingRight:"10px",
                        color:cate.name!==`${selected}`? "red" : ""
                        }}>{<cate.icon/>}</span>
                        <span
                        style={{opacity:cate.name===`${selected}` ? 1 : 0.8 }}>{cate.name}</span> 
                        </button>
                })}

            </Stack>
        </Box>
    )
}