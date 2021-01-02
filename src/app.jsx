import './app.css';

import React, {useState, useEffect} from 'react'
import VideoList from './video_list/video_list';

function App() {
  const[videos ,setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA7HfugShOoE4BOH-RVLVFM8oI2FyAs1Is", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
  //return <VideoList videos={videos} />;
}

export default App;
