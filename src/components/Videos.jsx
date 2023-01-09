import {Stack, Box} from '@mui/material'
import ChannelCard from './ChannelCard'
import VideoCart from './VideoCart'
const Videos = ({videos}) => {
 
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,idx)=>{
        <Box id={idx}>
          {item.id.videoId && <VideoCart video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      })}
    </Stack>
  )
}

export default Videos