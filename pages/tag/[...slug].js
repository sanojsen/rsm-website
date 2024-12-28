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

export const runtime = 'edge';

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  let page = slug[1] ? slug[1] : 1;
  let tag = slug[0] ? slug[0] : null;

  const data = await videoListFetch({'page' : page, 'tag' : tag })
  const additionalData = data.additional_data ? data.additional_data : null;

  if(!additionalData){
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data,
      count: data.count,
      currentPage: parseInt(page),
      tag,
      additionalData,
    },
  };
}

export default function Tag({ data, count, currentPage, tag, additionalData }) {
  const [firstSetData, setFirstSetData] = useState([]);
  const [lastSetData, setLastSetData] = useState([]);

  const router = useRouter();
  const pagePostsLimit = 20;
  function setCurrentPage(page) {
    router.push(`/tag/${tag}/${page}`);
  }

  useEffect(() => {
    if (data.length) {
      setFirstSetData(data.slice(0, 8));
      setLastSetData(data.slice(8, 20));
    }
  }, [data]);

  return (
    <>
      <Headers heads={additionalData} from={'tags'}/>
      <Navbar />
      <main className="md:container mx-auto mb-[30px]">
        <h1 className="f_13 w-full mx-auto text-center py-2">
          {additionalData && additionalData.tag ? additionalData.tag : additionalData.title ? additionalData.title : "Reels Munkey"}
        </h1>
        <div className="flex text-center justify-center f_9 mb-2 flex-wrap">
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/nsfw`} legacyBehavior>
                <a className="text-center">#NSFW</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/nudes`} legacyBehavior>
                <a className="text-center">#Nudes</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/boobs`} legacyBehavior>
                <a className="text-center">#Boobs</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/dance`} legacyBehavior>
                <a className="text-center">#Dance</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/thots`} legacyBehavior>
                <a className="text-center">#Thots</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/cosplay`} legacyBehavior>
                <a className="text-center">#Cosplays</a>
              </Link>
            </div>

            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/thick-ass`} legacyBehavior>
                <a className="text-center">#Thick Ass</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/xxx`} legacyBehavior>
                <a className="text-center">#XXX</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/lingerie`} legacyBehavior>
                <a className="text-center">#Lingerie</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/masturbation`} legacyBehavior>
                <a className="text-center">#Masturbation</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/latina`} legacyBehavior>
                <a className="text-center">#Latina</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/asian`} legacyBehavior>
                <a className="text-center">#Asian</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/blowjobs`} legacyBehavior>
                <a className="text-center">#BlowJobs</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/legal-teens`} legacyBehavior>
                <a className="text-center">#Legal Teens</a>
              </Link>
            </div>

            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/nipslip`} legacyBehavior>
                <a className="text-center">#NipSlips</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/workouts`} legacyBehavior>
                <a className="text-center">#Workouts</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/abs`} legacyBehavior>
                <a className="text-center">#Abs</a>
              </Link>
            </div>
            <div className="cover_tag">
              <Link href={`https://reelsmunkey.com/tag/live`} legacyBehavior>
                <a className="text-center">#Live</a>
              </Link>
            </div>
        </div>
        <p className="hidden">{additionalData && additionalData.keywords && additionalData.keywords.replace(/ /g, '').replace(/[^a-zA-Z0-9,]/g, "").replace(/[,]+/g, " #")}</p>
        {data.length ? (
          <>
            <section className="w-full">
                <ul className="flex flex-wrap">
                  {firstSetData && firstSetData.length !== 0 && (
                    <VideoThumbs video={firstSetData} page={currentPage} />
                  )}
                </ul>

                {lastSetData && lastSetData.length !== 0 ? <CrakMid/> : <></>}

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
