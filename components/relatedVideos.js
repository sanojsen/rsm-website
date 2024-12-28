import axios from "axios";
import { useState, useEffect } from 'react';
import VideoThumbs from "./videoThumbs";

const ipUrl = process.env.NEXT_PUBLIC_IP_URL;
const related_videos = process.env.NEXT_PUBLIC_GET_RELATED_VIDEOS;
const imgUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

const RelatedVideo = ({videos}) => {
    // const [videos, setVideos] = useState([]);

    const imgLoader = ({ src, width, quality }) => {
        return `${imgUrl}${src}?w=${width}&q=${quality || 75}`;
    };
    // useEffect(() => {
    //     axios.get(`${ipUrl}${related_videos}?id=${video._id}`).then((response) => {
    //       response.data && response.data.data && setVideos(response.data.data);
    //     });
    // }, [video])

    return (
        videos && videos.length ? 
            (<section className="pt-4">
                <h3 className="p-2 font-bold f_11">Related Reels :</h3>
                <ul className="w-full flex flex-wrap mt1">
                    {videos.length && <VideoThumbs video={videos} page={videos}/>}
                </ul>
            </section>
        ) : (<></>)
      )
}


export default RelatedVideo