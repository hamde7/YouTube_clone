import { Stack } from "@mui/material"
import Sidebar from "../components/Sidebar"
import MainArea from "../components/MainArea"
import { useState , useEffect} from "react";
import { FetchFromApi } from "../utils/FetchfromServer";
export default function Feed(){
    const [videos , setVideos] = useState<any>([])
    const [selected , setSelected] = useState<string>("New");
    useEffect(()=>{
        FetchFromApi(`search?part=snippet&q=${selected}`)
        .then((data)=>{setVideos(data.items) ;})
    },[selected])
    function setSelectedFunction(name:string){
        setSelected(name);
    }
    return (
        <Stack sx={{flexDirection:{sx : "column" , sm:"row"}}}>
            <Sidebar selected={selected} setSelected={setSelectedFunction}/>
            <MainArea selected={selected} videos={videos} />
        </Stack>
    )
}