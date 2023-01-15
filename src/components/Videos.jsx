import {Stack, Box} from '@mui/material'
import ChannelCard from './ChannelCard'
import Loader from './Loader';
import VideoCart from './VideoCart'
const Videos = ({videos, direction}) => {
  if(!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item,idx)=>(
        <Box id={idx}>
          {item.id.videoId && <VideoCart video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos