import Head from "next/head";
import Script from "next/script";

const imgUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

const Headers = ({ heads, from }) => {
  let defaultHead = {
    title:
      heads && heads.tag_title
        ? heads.tag_title
        : heads && heads.title
        ? heads.title
        : "Best of Instagram/TikTok Porn Videos - ReelsMunkey",
    description:
      heads && heads.description
        ? heads.description
        : "Explore Instagram / TikTok Porn Reels that you won't find anywhere else! Reelsmunkey features collection of rare and hard-to-find NSFW TikToks, our collection has something for everyone. From viral Leakes to tiktok porn videos, we have it all. Join our community and discover the best Porn of TikTok / Instagram!",
    keywords:
      heads && heads.keywords
        ? heads.keywords
        : "TikTok Porn, NSFW TikTok, TikTok Nudes, Adult TikTok, TikTok Leaks, TikTok Banned, NSFW Instagram, Instagram banned,  Onlyfans Leaks, Instagram Lives, Onlyfans Leaks",
    url: heads && heads.url ? heads.url : "https://reelsmunkey.com",
    thumbs: heads && heads.thumbs ? heads.thumbs : `${imgUrl}reelsmunkey.png`,
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{defaultHead.title}</title>
        <meta name="keywords" content={defaultHead.keywords} />
        <meta name="description" content={defaultHead.description} />

        <meta name="robots" content="index follow" />
        <meta name="author" content="ReelsMunkey" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={defaultHead.title} key={defaultHead.title}/>
        <meta property="og:description" content={defaultHead.description} />

        <meta property="og:url" content={defaultHead.url} />
        <meta property="og:site_name" content="reelsmunkey" />
        <meta property="og:image" content={defaultHead.thumbs} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ReelsMunkey" />
        <meta name="twitter:creator" content="@ReelsMunkey" />
        
        <meta name="6a97888e-site-verification" content="edec83acb26c555d63a308f5fa294c5d" />
        <meta name="yandex-verification" content="8aa4991fd0fc45f5" />
        <meta name="Trafficstars" content="60468" />
        <meta name="5ec1e1bb441af099d7144407e436fac33b95e334" content="5ec1e1bb441af099d7144407e436fac33b95e334" />
        <meta name="clckd" content="f4668db7985679990b54eecfffd65817" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JYQ7S8EZCQ" strategy="afterInteractive"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config',  'G-JYQ7S8EZCQ');
          `}
      </Script>
      <Script src="https://a.magsrv.com/ad-provider.js" strategy="afterInteractive"></Script> 
    </>
  );
};

export default Headers;
