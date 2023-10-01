import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box, Stack} from '@mui/material'
import { FetchFromApi } from '../utils/FetchfromServer';
import ChannelCard from '../components/ChannelCard';
import VideoCard from '../components/VideoCard';
export default function ChannelDetail(){
    const {id} = useParams();
    const [video , setVideo] = useState<any>();
    const [Channel , setChannel] = useState<any>();
    useEffect(()=>{
        console.log(Channel , video)
        FetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data)=>{setChannel(data.items[0])})
        FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=>{setVideo(data.items)})
    },[id]) 
    return (
    <Box minHeight='95vh'>
         {Channel !==undefined ? <ChannelCard channelDetails={Channel}/> :<div></div>}
         {video !==undefined &&<Stack direction="row" 
            flexWrap="wrap"
            justifyContent="start"
            gap={2} 
            ml={4}>
                {video.map((item :any , index : number)=>{
                    return (
                        <Box key={index}>
                            <VideoCard  videos={item} /> 
                        </Box>
                )
                })}
            </Stack>}
    </Box>
    )
}