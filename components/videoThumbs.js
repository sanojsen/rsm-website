import Image from "next/image";
import DateFormat from "./date";
import { useRouter } from "next/router";
import adLinks from "./adLinks";


const imgUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

const VideoThumbs = ({ video, page }) => {
  const router = useRouter()

  const redirectLink = (link) =>{
    let adsUpdatedAt = parseInt(localStorage.getItem('adsUpdatedAt'));
    let randomLink = adLinks.adsUrlArray[Math.floor(Math.random() * adLinks.adsUrlArray.length)];

    if(adsUpdatedAt){
      let diff = (Math.floor(new Date()/1000) - adsUpdatedAt) / 60;
      if(diff > 1){
        localStorage.setItem('adsUpdatedAt', Math.floor(new Date()/1000))
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

  const tagRedirect = (tag)=>{
    let randomLink = adLinks.adsUrlArray[Math.floor(Math.random() * adLinks.adsUrlArray.length)];
    router.push(`/tag/${tag.toLowerCase()}`);
    window.open(randomLink, '_blank', 'noopener');
  }

  const myLoader = ({ src }) => {
    return `${imgUrl}${src}`;
  };

  if (video && video.length) {
    return (
      <>
        {video.map((vids, index) => {
          return (
            // onClick={()=>{redirectLink(`/video/${vids.url}`)}}
            <li className="xs:w-1/2 sm:w-1/4 p-2 cursor-pointer" key={vids?._id}>
                <div className="images_cover relative">
                  <Image
                    onClick={()=>{redirectLink(`/video/${vids.url}`)}}
                    className="images"
                    loader={myLoader}
                    src={vids.thumbnail}
                    alt={vids.title}
                    width={330}
                    height={560}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                    priority
                  />
                  <div className="cover_tag_container flex absolute">
                      {vids.tags && vids.tags.length && vids.tags.map((categ)=>{
                        return (<div key={categ.url} className="cover_tag" onClick={()=>{tagRedirect(categ.url)}}>#{categ.url}</div>)
                      })}
                  </div>
                </div>
                <div onClick={()=>{redirectLink(`/video/${vids.url}`)}}>
                  <h3 className="f_11">{vids.title}</h3>
                  <a className="absolute -z-50 text-black" href={`https://reelsmunkey.com/video/${vids.url}`} rel={vids.title}>{vids.description}</a>
                  <div className="small_content">
                    {" "} <DateFormat dateString={vids.created_at} />
                  </div>
                </div>
            </li>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
};

export default VideoThumbs;
