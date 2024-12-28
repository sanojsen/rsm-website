import Link from "next/link";
import Navbar from "../components/navbar";
import { CrakEnd } from "../components/crackAdsMid";
import Footer from "../components/footer";
import Head from "next/head";
const imgUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

export default function Page() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>404 Page Not Found | ReelsMunkey</title>
        <meta
          name="description"
          content="Selected page is removed or not available this time. Please move to home page for more videos"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="404 Page Not Found | ReelsMunkey"
          key="404 Page Not Found | ReelsMunkey"
        />
        <meta
          property="og:description"
          content="Selected page is removed or not available this time. Please move to home page for more videos"
        />

        <meta property="og:url" content="https://reelsmunkey.com/404" />
        <meta property="og:site_name" content="reelsmunkey" />
        <meta property="og:image" content={`${imgUrl}reelsmunkey.png`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ReelsMunkey" />
        <meta name="twitter:creator" content="@ReelsMunkey" />
      </Head>
      <Navbar />
      <main className="md:container mx-auto mb-[30px]">
        <h1 className="f_13 w-full mx-auto text-center py-2">404 | Page not found</h1>
        <section className="text-center">
            <div className="f_11 m-4">
                Selected page is removed or not available this time. Please visit Home page for more videos
            </div>
            <Link href={`/`}>
                <button className="btn_back my-4">Back To Home</button>
            </Link>
        </section>
        <CrakEnd />
      </main>
      <Footer />
    </>
  );
}
