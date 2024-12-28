import { porndude, rightUp, thebestfetishsites, thepornlist } from "./images";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Footer = () => {
  return (
    <footer className="md:container w-full mx-auto border-t p-2">

      <div className="w-full sm:flex items-center">
        <div className="xs:w-full sm:w-1/3 xs:py-[3px] sm:py-[0px]">
          <p className="w-full pb-[10px]">
            DISCLAIMER: The ReelsMunkey.com is not responsible for the accuracy,
            reliability, or legality of the content that is uploaded. <br/> All the
            content uploaded are the property of the respective trademark holders.
            These trademark holders are not affiliated with ReelsMunkey.com. <br/> We do
            not sponsor or endorse any content present on ReelsMunkey.com.
          </p>
        </div>


        <div className="xs:w-full sm:w-1/3 sm:px-[5px]  xs:py-[3px] sm:py-[0px]">
          <div>
          Want more followers on your public platforms? We provide natural traffic to your profile. Submit your creation on our website by sending us your video. Follow the link below:
            <b><Link href="mailto:info@reelsmunkey.com">{" "} Submit your content</Link></b>
          </div>
          <br />
          
          <div>
            For any feedback, copyright issue feel free to contact us on <b><Link href="mailto:info@reelsmunkey.com">{" "} info@reelsmunkey.com </Link></b>
          </div>
          <br />
          <div className="flex items-center">
            <Link href="/usc">18 USC 2257</Link>
            
            {/* <b>
              <Link href="/supporters">
                <span className="flex items-center ml-3">
                  Our Supporters{" "}
                  <Image
                    alt="to supporters"
                    src={rightUp}
                    className="h-[20px] w-[20px]"
                  />
                </span>
              </Link>
            </b> */}
          </div>
        </div>

        <div className="xs:w-full sm:w-1/3 xs:text-center sm:text-right xs:py-[3px] sm:py-[0px]">
          {/* <ins class="eas6a97888e2" data-zoneid="5330656"></ins>  */}
          <iframe className="mx-auto" src="//a.magsrv.com/iframe.php?idzone=5330656&size=300x250" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
          {/* <a target="_blank" href="https://www.crkshld.com/?offer_id=8602/0&affiliate_id=334390&aff_sub=&sub_id_2=&sub_id_3=&sub_id_4=&sub_id_5=SF_006OG000004lmDN&source=">
            <img src="https://www.imglnkx.com/3788/20180402102602-005096B_GDAT_18_ALL_EN_798_L.gif" width="928" height="244" border="0" />
          </a>
          <a target="_blank" href="https://t.ajrkm3.com/334390/8865/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN">
            <img src="https://www.imglnkx.com/3788/20170327113607-003390A_GHRD_18_ALL_EN_55_L.jpg" width="305" height="99" border="0" />
          </a> */}
        </div>
      </div>
      <div className="flex justify-center items-center py-[10px]">
        {/* <div>
          <Link href="/">
            <Image className="h-[45px]" src={vercel} alt="Reels munkey logo" />
          </Link>
        </div> */}
        <ul className="flex items-center justify-center">
          {/* <li>
            <Link href="https://thebestfetishsites.com/" legacyBehavior>
              <a target="_blank" className="p-2" rel="nofollow" title="Best Fetish Porn Sites">
                <Image
                  className="h-[45px] w-[160px] xs:pr-2 md:pr-4"
                  src={thebestfetishsites}
                  alt="Best Fetish Porn Sites - TBFS has The Top Porn Sites of 2024"
                />
              </a>
            </Link>
          </li> */}
          <li>
            <Link href="https://theporndude.com/" legacyBehavior>
              <a target="_blank" className="p-2" rel="nofollow" title="ThePornDude">
                <Image
                  className="h-[45px] w-[160px] xs:pr-2 md:pr-4"
                  src={porndude}
                  alt="Porn Dude lists the world's best porn sites of 2024"
                />
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="https://www.thepornlist.net/" legacyBehavior>
              <a target="_blank" className="p-2" rel="nofollow" title="The Porn List - Best Quality Porn Sites of 2024">
                <Image
                  className="h-[45px] w-[160px] xs:pr-2 md:pr-4"
                  src={thepornlist}
                  alt="The Porn List - Best Quality Porn Sites of 2024"
                />
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="https://twitter.com/ReelsMunkey" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image className="h-[30px]" src={twitter} alt="twitter link" />
              </a>
            </Link>
          </li> */}
        </ul>
      </div>

      {/* <div className="flex justify-center items-center">
        <div>
          <Link href="/">
            <Image className="h-[45px]" src={vercel} alt="Reels munkey logo" />
          </Link>
        </div>
      </div> */}

    <Script>{`(AdProvider = window.AdProvider || []).push({"serve": {}});`}</Script>
    </footer>
  );
};

export default Footer;
