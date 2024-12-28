import VideoThumbs from "./videoThumbs";

const CreatorVideo = ({videos}) => {
    // const imgLoader = ({ src, width, quality }) => {
    //     return `${imgUrl}${src}?w=${width}&q=${quality || 75}`;
    // };

    // const [videos, setVideos] = useState([])
    // useEffect(() => {
    //     axios.get(`${ipUrl}${creators_videos}?id=${video._id}`).then((response) => {
    //       response.data && response.data.data && setVideos(response.data.data);
    //     });
    // }, [video])

  return (
    videos && videos.length ? 
        (<section className="pt-4">
            <h3 className="p-2 font-bold f_11">Creators Reels :</h3>
            <ul className="w-full flex flex-wrap mt1">
                {videos.length && <VideoThumbs video={videos} page={videos}/>}
            </ul>
        </section>
    ) : (<></>)
  )
}


export default CreatorVideo