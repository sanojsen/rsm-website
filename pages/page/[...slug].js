import Link from "next/link";
import { useRouter } from "next/router";
import { Pagination } from "react-pagination-bar";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Headers from "../../components/headers";
import { useEffect, useState } from "react";
import VideoThumbs from "../../components/videoThumbs";
import videoListFetch from "../../lib/videoListFetch";
import { CrakEnd, CrakMid } from "../../components/crackAdsMid";
import AdsThumbs from "../../components/adsThumbs";
import getRandomAdsThumbs from "../../lib/getRandomAdsThumbs";

// import useSWR from 'swr';
export const runtime = 'edge';

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  let page = slug[0] ? slug[0] : 1;
  const data = await videoListFetch({'page' : page})
  
  if(data.data && !data.data.length){
    return {
      notFound: true,
    };
  }

  const additionalData = data.additional_data ? data.additional_data : null;
  const adsThumb = getRandomAdsThumbs();
  return {
    props: {
      data: data.data,
      count: data.count,
      currentPage: parseInt(page),
      additionalData,
      adsThumb
    },
  };
}

export default function Page({ data, count, currentPage, additionalData, adsThumb }) {
  const [firstSetData, setFirstSetData] = useState([]);
  const [lastSetData, setLastSetData] = useState([]);

  const router = useRouter();
  const pagePostsLimit = 20;
  function setCurrentPage(page) {
    router.push(`/page/${page}`);
  }

  useEffect(() => {
    if (data.length) {
      setFirstSetData(data.slice(0, 8));
      setLastSetData(data.slice(8, 20));
    }
  }, [data]);

  return (
    <>
      <Headers heads={additionalData} from={'pages'}/>
      <Navbar />
      <main className="md:container mx-auto mb-[30px]">
        <h1 className="f_13 w-full mx-auto text-center py-2">
          {additionalData && additionalData.title ? additionalData.title : "Reels Munkey"}
        </h1>
        {data.length ? (
          <>
            <section className="w-full">
                <ul className="flex flex-wrap">
                  {firstSetData && firstSetData.length !== 0 && (
                    <VideoThumbs video={firstSetData} page={currentPage} />
                  )}
                </ul>

                {lastSetData && lastSetData.length !== 0 ? <CrakMid/> : <></>}

                {/* <AdsThumbs adsList={adsThumb}/> */}

                <ul className="flex flex-wrap">
                  {lastSetData && lastSetData.length !== 0 && (
                    <VideoThumbs video={lastSetData} />
                  )}
                </ul>
            </section>
          </>
        ) : (
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
        <CrakEnd/>
        <section className="w-full text-center  mt-[10px]">
          <div className="mx-auto xs:block sm:hidden">
            <Pagination
              currentPage={currentPage}
              itemsPerPage={pagePostsLimit}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
              totalItems={count}
              pageNeighbours={1}
            />
          </div>
          <div className="mx-auto xs:hidden sm:block">
            <Pagination
              currentPage={currentPage}
              itemsPerPage={pagePostsLimit}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
              totalItems={count}
              pageNeighbours={3}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
