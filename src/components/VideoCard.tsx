import { CheckCircle } from "@mui/icons-material";
import { Card ,CardMedia , CardContent ,Typography } from "@mui/material"
import { Link } from "react-router-dom";
type propsType={
    videos:any;
}
export default function VideoCard({videos}:propsType){
    return(
        <Card sx={{width:{sm :'358px' , md:'320px' ,xs :'100%'} , 
                borderRadius:0, 
                boxShadow:"none"}}>
                <Link to={`/video/${videos.id.videoId}`}>
                
                <CardMedia image={videos.snippet.thumbnails.high.url}
                            sx={{width:{sm :'358px' , md:'320px' ,xs :'100%'} , height:180}}
                />
                </Link>
            <CardContent sx={{backgroundColor:"#1e1e1e",height:"105px"}}>
                <Typography variant="subtitle1" fontWeight="bold" color="white">
                    {videos.snippet.title.slice(0,60)}
                </Typography>
                <Link to={`channel/${videos.snippet.channelId}`}>
                <Typography variant="subtitle2" fontWeight="bold" color='gray'>
                    {videos.snippet.channelTitle}
                    <CheckCircle sx={{
                        fontSize:12 ,
                        color:'gray',
                        ml :'5px'
                    }}/>
                </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}