import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from "@mui/material"
import {Videos, channelCard, ChannelCard} from './'
import { fetchfromAPI } from '../utils/fetchFromAPI'
import zIndex from '@mui/material/styles/zIndex'

const ChannelDetail = () => {
  const {id }=useParams();
const [videos, setVideos] = useState([])
  const [channelDetail, setChannelDetail] = useState(null)

  useEffect(()=>{
    fetchfromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
    fetchfromAPI(`search?channelId=${id}&?part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
    <div style={{ 
      background: "linear-gradient(159deg, rgba(137,203,230,1) 41%, rgba(255,18,162,1) 63%) ",
      zIndex:10,
      height:"300px"
        }}
        />
        <ChannelCard channelDetail={channelDetail}  marginTop="-93px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"100px"}}}/>
          <Videos videos={videos}/>
        
      </Box>
    </Box>
  )
}

export default ChannelDetail