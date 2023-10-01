import {Box , Stack , Typography} from '@mui/material'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
type propsType={
    selected:string;
    videos : any,
}
export default function MainArea({selected , videos}:propsType){    return(
        <Stack direction="column">
            <Typography variant='h4' 
            color="white" 
            pl="15px" 
            mt="10px"
            fontWeight="bold"
            mb={2}
            >
                {selected} <span style={{color:"#f31503"}}>Videos</span>
        </Typography>
            <Stack direction="row" 
            flexWrap="wrap"
            justifyContent="start"
            gap={2} >
                {videos.map((item :any , index : number)=>{
                    return (
                        <Box key={index}>
                            {item.id.kind==="youtube#video" ?<VideoCard  videos={item} /> : <ChannelCard channelDetails={item}/>}
                        </Box>
                )
                })}
            </Stack>
        </Stack>
    )
}