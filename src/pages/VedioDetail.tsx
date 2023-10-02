import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FetchFromApi } from "../utils/FetchfromServer";
import { Box,  Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import VideoCard from "../components/VideoCard";
export default function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState<any>(undefined);
  const [videoDetails, setVideoDetails] = useState<any>(undefined);
  useEffect(() => {
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideo(data.items)
    );
    console.log(video, videoDetails);
  }, [id]);
  return (
    <Box height='95vh' overflow="scroll">
      <Stack direction={{md : "row" , xs : "column"}}>
        {videoDetails !== undefined && (
          <Box width = {{md:"75%" , xs :  '90%'}}
          height={{md : '70vh' , xs : '50vh'}}
           style={{margin:"20px" , marginBottom : '60px'}}>
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width='100%'
            height='100%'
            />
            <Box display='flex' justifyContent='space-between' mt='30px' mb='30px' >
                <Typography color='white'>
                    {videoDetails.snippet.title}
                </Typography>
                <Stack direction='row' flexWrap='wrap' color='gray' gap={3} >
                    <Typography>{parseInt(videoDetails.statistics.viewCount).toLocaleString()} view</Typography>
                    <Typography>{parseInt(videoDetails.statistics.likeCount).toLocaleString()} like</Typography>
                </Stack>    
            </Box>
          </Box>
        )}
        {video !==undefined && <Stack direction={{md : "column" , xs : "row"}} 
                flexWrap="wrap"
                justifyContent="start"
                gap={2} 
                marginLeft={4}>
                    {video.map((item :any , index : number)=>{
                        return (
                            <Box key={index}>
                                <VideoCard  videos={item} />
                            </Box>
                    )
                    })}
                </Stack>}
      </Stack>
    </Box>
  );
}
