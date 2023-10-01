import { CheckCircle } from "@mui/icons-material";
import { Box ,CardContent, CardMedia, Typography} from "@mui/material";
import { Link } from "react-router-dom";

export default function ChannelCard({channelDetails}:any){
    return(
        <Box sx={{
            boxShadow:'none',
            borderRadius:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:{xs:'356px',md:'320px'},
            height:'326px',
            margin:'auto',
            
        }} 
        >
            <Link to='/'>
            
            <CardContent sx={{display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',
            color:'#fff'}}>

            <CardMedia image={channelDetails.snippet.thumbnails.high.url}
            sx={{borderRadius:"50%",
                height:'180px',
                width:'180px',
                mb:2 ,
                border:'1px solid #e3e3e3'}}  
            />
            <Typography variant="h6">
                {channelDetails.snippet.title}
                <CheckCircle sx={{
                        fontSize:12 ,
                        color:'gray',
                        ml :'5px'
                    }}/>
            </Typography> 
            {channelDetails?.statistics?.subscriberCount &&(
                    <Typography>
                        {channelDetails.statistics.subscriberCount}
                    </Typography>
                )
            }
            </CardContent>
            </Link>
        </Box>
    )
}