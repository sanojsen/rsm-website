import Image from "next/image";
import adLinks from "./adLinks";

const getRandomLink =()=>{
  // let randomLink = adLinks.adsUrlArray[Math.floor(Math.random() * adLinks.adsUrlArray.length)];
  let randomLink = ''
  window.open(randomLink, '_blank', 'noopener');
}

const AdsThumbs = ({adsList}) => {
      const myLoader = ({ src }) => {
        return `${src}`;
      };

      return (
        <ul className="w-full flex flex-wrap mt1">
            {adsList.map((item, index) => {
              return (
              <li className="xs:w-1/2 sm:w-1/4 p-2 cursor-pointer" key={index}>
                <a href="https://www.crkshld.com/?offer_id=8602/0&affiliate_id=334390&aff_sub=&sub_id_2=&sub_id_3=&sub_id_4=&sub_id_5=SF_006OG000004lmDN&source=" target="_blank" rel="noindex nofollow noopener noreferrer">                
                    <div className="images_cover relative">
                      <Image
                        className="images"
                        loader={myLoader}
                        src={item.thumb}
                        alt="Ads thumbnails"
                        unoptimized={true} 
                        width={330}
                        height={560}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                        priority
                      />
                      <div className="cover_tag_container flex absolute">
                        <div className="cover_tag">#Ads</div>
                      </div>
                    </div>
                    <h3 className="f_11">{item.title}</h3>
                    <div className="small_content">
                        {" "} {item.date}
                    </div>
                </a>
              </li>)
            })}
        </ul>
      );
};

export default AdsThumbs;
