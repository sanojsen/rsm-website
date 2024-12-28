import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Headers from "../../components/headers";
import VideoThumbs from "../../components/videoThumbs";
import SocialLinks from "../../components/socialLinks";
import creatorAllVideoIds from "../../lib/creatorAllVideoIds";
import getAllCreatorVideosById from "../../lib/creatorVideosById";
import { CrakMid } from "../../components/crackAdsMid";

const website = process.env.NEXT_PUBLIC_WEBSITE;

// import useSWR from 'swr';

export const runtime = 'edge';

export async function getStaticPaths() {
  const data = await creatorAllVideoIds()
  const path = data.map((creator) => {
    return { params: { id: creator.url } };
  });
  return {
    paths: path,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const data = await getAllCreatorVideosById({id:context.params.id});
  if(data.data && !data.data.length){
    return {
      notFound: true,
    };
  }
  const additionalData = data.additional_data ? data.additional_data : null;
  if (additionalData) {
    additionalData["title"] = additionalData.title
      ? additionalData.title
      : additionalData.name;
    additionalData["url"] = website + "creator/" + additionalData.url;
  }
  return {
    props: {
      data: data.data,
      additionalData,
    },
    revalidate: 10,
  };
}

export default function CreatorPage({ data, additionalData }) {
  return (
    <>
      <Headers heads={additionalData} from={'creator'}/>
      <Navbar />
      <main className="md:container mx-auto mb-[30px]">
        <h1 className="f_13 w-full mx-auto text-center py-2">
          {additionalData && additionalData.name ? additionalData.name : "Reels Munkey"}
        </h1>
        <SocialLinks creator={additionalData}/>
        <h2 className="hidden">{additionalData?.description}</h2>
        <p className="hidden">{additionalData?.keywords.replace(/ /g, '').replace(/[^a-zA-Z0-9,]/g, "").replace(/[,]+/g, " #")}</p>
        {data.length != 0 && (
          <>
            <section className="w-full">
              <ul className="flex flex-wrap justify-center">
                {data && data.length !== 0 && <VideoThumbs video={data} />}
              </ul>
              <CrakMid/>
            </section>
          </>
        )}
        <section className="hidden">
          <h4>{additionalData?.keywords}</h4>
          <br />
          <p>{additionalData?.instagram}</p>
          <br />
          <p>{additionalData?.tiktok}</p>
          <br />
          <p>{additionalData?.twitter}</p>
          <br />
          <p>{additionalData?.links}</p>
          <br />
          <p>{additionalData?.onlyfans}</p>
          <br />
        </section>
        {data.length == 0 && (
          <>
            <section className="text-center">
              <div className="f_11 m-4">
                Content was not found, Please visit Home page for more videos
              </div>
              <Link href={`/`}>
                <button className="btn_back">Back To Home</button>
              </Link>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
