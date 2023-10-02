import { Box, Stack, Typography } from "@mui/material"
import { useState , useEffect} from "react";
import { FetchFromApi } from "../utils/FetchfromServer";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import ChannelCard from "../components/ChannelCard";
export default function SearchFeed(){
    const [videos , setVideos] = useState<any>([])
    const {searchTerm} = useParams()
    useEffect(()=>{
        FetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data)=>{setVideos(data.items) ;})
    },[searchTerm])
    return (
        <Stack direction="column">
            <Typography variant='h4' 
            color="white" 
            pl="15px" 
            mt="10px"
            fontWeight="bold"
            mb={2}
            >
                search result of   <span style={{color:"#f31503"}}>{searchTerm}</span>
        </Typography>
            <Stack direction="row" 
            flexWrap="wrap"
            justifyContent="start"
            gap={2} >
                {videos.map((item :any , index : number)=>{
                    return (
                        <Box key={index}>
                            {item.id.kind!=="youtube#channel" ?<VideoCard  videos={item} /> : <ChannelCard channelDetails={item}/>}
                        </Box>
                )
                })}
            </Stack>
        </Stack>
    )
}