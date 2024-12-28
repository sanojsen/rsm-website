import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Creator from "../../components/creator";
import CreatorVideo from "../../components/creatorVideo";
import Dates from "../../components/date";
import Footer from "../../components/footer";
import Headers from "../../components/headers";
import { prev, next } from "../../components/images";
import Navbar from "../../components/navbar";
import RelatedVideo from "../../components/relatedVideos";
import Tags from "../../components/tags";
import { useEffect, useRef } from "react";
import allVideoIds from "../../lib/allVideoIds";
import videoByIds from "../../lib/videoByIds";
import Comments from "../../components/comments";
import getCommentById from "../../lib/getCommentById";
import adLinks from "../../components/adLinks";
import { useRouter } from "next/router";
import { CrakEnd, CrakMid, CrakStart, CrakSmall, CrakMidLast } from "../../components/crackAdsMid";
import AdsThumbs from "../../components/adsThumbs";
import getRandomAdsThumbs from "../../lib/getRandomAdsThumbs";
const imgUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

export const runtime = 'edge';

export async function getStaticPaths() {

  const data = await allVideoIds()
  const path = data.map((video) => {
    return { params: { id: video.url } };
  });
  
  return {
    paths: path,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const data = await videoByIds({'id': context.params.id});
  if(data.status == 200){
    const commentList = await getCommentById({'id': data.data._id});
    const adsThumb = getRandomAdsThumbs();
    return {
      props: { videoData: data.data, tags: data.data.tags, data: data, comments: JSON.parse(JSON.stringify(commentList)), adsThumb },
      revalidate: 10,
    };
  }else if(data.status == 404 || data.status == 500){
    return {
      notFound: true,
      revalidate: 10
    };
  }
}

export default function VideoPage({ videoData, tags, data, comments, adsThumb }) {
  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current;
    video.src = `${imgUrl}${videoData?.link}`;
    video.play();

    return () => {
      video.pause();
      video.src = "";
      video.load();
    };
  }, []);
  
  if (!videoData) {
    return <div>Loading...</div>;
  }

  const redirectLink = (link) =>{
    let adsUpdatedAt = parseInt(localStorage.getItem('adsUpdatedAt'));
    let randomLink = adLinks.adsUrlArray[Math.floor(Math.random() * adLinks.adsUrlArray.length)];

    if(adsUpdatedAt){
      let diff = (Math.floor(new Date()/1000) - adsUpdatedAt) / 60;
      if(diff > 1){
        localStorage.setItem('adsUpdatedAt', Math.floor(new Date() / 1000))
        window.open(link, '_blank', 'noopener');
        router.push(randomLink)
      }else{
        router.push(link)
      }
    }else{
      localStorage.setItem('adsUpdatedAt', Math.floor(new Date() / 1000))
      window.open(link, '_blank', 'noopener');
      router.push(randomLink)
    }
  }

  return (
    <>
      {/* Video ads added */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js?v=${videoData._id}`}
        onLoad={() => {
          var testVideo = fluidPlayer(videoData._id, {
            vastOptions: {
              adList: [
                // {
                //   "roll": "preRoll",
                //   "vastTag":"https://syndication.realsrv.com/splash.php?idzone=4945586",
                // },
                {
                  "roll": "postRoll",
                  "vastTag": "https://syndication.realsrv.com/splash.php?idzone=4945586"
                }
              ],
            },
          });
        }}
      /> */}
      {data.additional_data && <Headers heads={data.additional_data} />}
      <Navbar />
      <main className="md:container mx-auto mb-[30px]">
        <section className="pb-4 px-2 mx-auto xs:block sm:flex justify-between">
          <div className="xs:w-[100%] sm:w-[65%] mr-1">
            <div className="xs:block sm:hidden my-2">
              <CrakSmall/>
            </div>
            <div className="xs:block sm:hidden">
              {videoData && videoData.creator && (
                <Creator creator={videoData.creator} />
              )}
            </div>
            <div className="relative">

              <video ref={videoRef} poster={`${imgUrl}${videoData.thumbnail}`} key={`${imgUrl}${videoData.link}`} controls autoPlay loop className="video_container">
                <source src={`${imgUrl}${videoData.link}`} />
              </video>

              {data.additional_data && data.additional_data.prev && (
                // <Link href={`${data.additional_data.prev}`}>
                  <Image className="prev xs:top-[30%] md:top-[40%] opacity-20 cursor-pointer"
                    onClick={()=>redirectLink(`${data.additional_data.prev}`)}
                    src={prev}
                    alt="get previous video"
                  />
                // </Link>
              )}
              {data.additional_data && data.additional_data.next && (
                // <Link href={`${data.additional_data.next}`}>
                  <Image className="next xs:top-[30%] md:top-[41%] opacity-20 cursor-pointer"
                    onClick={()=>redirectLink(`${data.additional_data.next}`)}
                    src={next}
                    alt="get next video"
                  />
                // </Link>
              )}
            </div>

            <div className="flex xs:flex-col md:flex-row justify-between">
              <h1 className="f_11 py-1">{videoData.title}</h1>
              <div className="flex items-center small_content">
                <Dates dateString={videoData.created_at} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              {tags && tags.length != 0 && <Tags tags={tags} />}
              <div className="xs:hidden sm:block">
                {videoData && videoData.creator && (
                  <Creator creator={videoData.creator} />
                )}
              </div>
            </div>
          </div>
          <div className="xs:block sm:hidden mt-5">
            <CrakStart />
          </div>
          <Comments video_id={videoData._id} commentArray={comments.data}/>
        </section>
        <section className="w-full">

          <div className="xs:hidden sm:block">
            <CrakStart />
          </div>

          {data.additional_data.creator_video && data.additional_data.creator_video.length !=0 && <CreatorVideo videos={data.additional_data.creator_video} />}

          {data?.additional_data.creator_video && data.additional_data.creator_video.length !=0 && <CrakMid/>}

          {data?.additional_data.related_videos && <RelatedVideo videos={data.additional_data.related_videos} />}

          <CrakMidLast/>

          <ins class="eas6a97888e20" data-zoneid="5361586"></ins> 
          
          {/* <AdsThumbs adsList={adsThumb}/> */}
          {/* <CrakEnd /> */}
        </section>
        
      </main>
      <Footer />
    </>
  );
}
