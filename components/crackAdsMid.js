import adLinks from "./adLinks";

const getRandomLink =()=>{
  return adLinks.adsUrlArray[Math.floor(Math.random() * adLinks.adsUrlArray.length)];
}
const getRandomImgs =()=>{
  let imgArray = [
    'https://www.imglnkx.com/3788/20170327114321-001309B_GHRD_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/3785/008689A_GDAT_18_ALL_EN_125_L.jpg',
    'https://www.imglnkx.com/6224/009379D_JRKM_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/9304/mym_728-90-1.gif',
    'https://www.imglnkx.com/779/000704C_FCEX_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/1713/000705A_SLUT_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/425/000005N_GCAM_18_ALL_EN_125_L.jpg',
    'https://www.imglnkx.com/3788/20170327114307-001307B_GHRD_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/2994/008921B_ROYA_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/8780/PMKT-1109_DESIGN-19265_Banners_72890.gif',
    'https://www.imglnkx.com/9197/728x90.png',
    'https://www.imglnkx.com/8103/20210922094920-20210628133859-728x90.gif',
    'https://www.imglnkx.com/6224/008182A_JRKM_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/6224/008177A_JRKM_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/2994/008921A_ROYA_18_ALL_EN_125_L.gif',
    'https://www.imglnkx.com/9304/mym_728-90-2.gif',
    'https://www.imglnkx.com/6562/HH-W16-Q18-728x90-FR.gif',
    'https://www.imglnkx.com/6562/BAH-728x90-IT.gif'
  ];
  return imgArray[Math.floor(Math.random() * imgArray.length)];
}

const CrakStart = () => {
  return (
    <>
      <div className="collections sm:p-2 rounded">
        <div className="smlcol xs:block sm:hidden">
            {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
            <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>

        <div className="smlcol xs:hidden lg:block">
            <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a>

            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}
        </div>
        

        <div className="smlcol xs:hidden sm:block">
            <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a>

            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}
        </div>
      </div>
    </>
  );
};

const CrakMid = () => {
  return (
    <>
      <div className="collections p-2 rounded">
        <div className="smlcol xs:block sm:hidden w-[100%]">
          {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
          <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
        

        <div className="smlcol xs:hidden lg:block">
            {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
            {/* <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a> */}
            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}

            <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
        

        <div className="smlcol xs:hidden sm:block">
            {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
            {/* <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a> */}
            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}

            <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
      </div>
    </>
  );
};

const CrakMidLast = () => {
  return (
    <>
      <div className="collections p-2 rounded">
        <div className="smlcol xs:block sm:hidden w-[100%]">
          {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
          <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
        

        <div className="smlcol xs:hidden lg:block">
            {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
            {/* <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a> */}
            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}

            <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
        
      
        <div className="smlcol xs:hidden sm:block">
            {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
            {/* <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a> */}
            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}

            <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
      </div>
    </>
  );
};


const CrakEnd = () => {
  return (
    <>
      <div className="collections p-2 rounded">
        <div className="smlcol xs:block sm:hidden">
          {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
          <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
        

        <div className="smlcol xs:hidden lg:block">
            {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}

            {/* <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a> */}
            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}
            
            <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>

        <div className="smlcol xs:hidden sm:block">
            {/* <ins class="eas6a97888e2" data-zoneid="5330652"></ins>  */}
            {/* <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a> */}
            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}

            <iframe src="//a.magsrv.com/iframe.php?idzone=5330652&size=728x90" width="728" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
        </div>
      </div>
    </>
  );
};

const CrakSmall = () => {
    return (
      <>
        <div className="collections rounded">
          <div className="smlcol xs:block sm:hidden w-[100%] h-[90px]">
            <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
              <img src={getRandomImgs()} width="728" height="90" border="0" />
            </a>
            {/* <iframe width="728" height="90" frameborder="0" scrolling="no" src="//tsyndicate.com/iframes2/8d1f70c2be9b4938aa3c99cd9812dbd3.html?extid={extid}"></iframe> */}
          </div>
        </div>
      </>
    );
};

const CrakDefault = () =>{
    // Comment box ads
    return (
        <>
          <a target="_blank" rel="noindex nofollow noopener noreferrer" href={getRandomLink()}>
            <img src={getRandomImgs()} width="728" height="90" border="0" />
          </a>
        </>
    )
}



export {CrakStart, CrakMid,CrakMidLast, CrakEnd, CrakSmall, CrakDefault};