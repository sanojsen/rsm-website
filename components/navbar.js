import vercel from "../public/vercel.svg";
import navico from "../public/nav-ico.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { porndude, search } from "./images";
import SearchBar from "./searchBar";

const Navbar = () => {
  const [navbar, setNavabr] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [categoriesDrop, setCategoryDrop] = useState(false);

  const onScroll = (event) => {
    const { scrollY } = window;
    scrollY > 50 ? setNavabr(true) : setNavabr(false);
  };

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  return (
    <nav className={`w-full flex py-2 px-4 justify-between items-center navbar ${ navbar ? "fixed_nav" : "" }`}>
      <Link href="/">
        <Image src={vercel} alt="Reels Munkey logo" className="xs:w-[70px] md:w-[85px] h-32[px]"/>
      </Link>

      <div className="flex justify-between items-center">
        <SearchBar />
        <div className="xs:hidden sm:block">
          <Link href="https://theporndude.com/" legacyBehavior>
            <a target="_blank" rel="nofollow" title="ThePornDude">
              <Image className="h-[45px] w-[175px] xs:pr-2 md:pr-4" src={porndude} alt="Porn Dude lists the world's best porn sites of 2024"/>
            </a>
          </Link>
        </div>
        

        <div className="xs:hidden sm:block categories cursor-pointer">
          <div className="f_13">Categories</div>
          <ul className="list">
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/nsfw`} legacyBehavior>
                <a className="text-center" >NSFW</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/nudes`} legacyBehavior>
                <a className="text-center" >Nudes</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/boobs`} legacyBehavior>
                <a className="text-center" >Boobs</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/dance`} legacyBehavior>
                <a className="text-center" >Dance</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/thots`} legacyBehavior>
                <a className="text-center" >Thots</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/cosplay`} legacyBehavior>
                <a className="text-center" >Cosplays</a>
              </Link>
            </li>

            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/thick-ass`} legacyBehavior>
                <a className="text-center" >Thick Ass</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/xxx`} legacyBehavior>
                <a className="text-center" >XXX</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/lingerie`} legacyBehavior>
                <a className="text-center" >Lingerie</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/masturbation`} legacyBehavior>
                <a className="text-center" >Masturbation</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/latina`} legacyBehavior>
                <a className="text-center" >Latina</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/asian`} legacyBehavior>
                <a className="text-center" >Asian</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/blowjobs`} legacyBehavior>
                <a className="text-center" >BlowJobs</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/legal-teens`} legacyBehavior>
                <a className="text-center" >Legal Teens</a>
              </Link>
            </li>

            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/nipslip`} legacyBehavior>
                <a className="text-center" >NipSlips</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/workouts`} legacyBehavior>
                <a className="text-center" >Workouts</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/abs`} legacyBehavior>
                <a className="text-center" >Abs</a>
              </Link>
            </li>
            <li className="cursor-pointer xs:py-[10px] md:p-1 text-center brd">
              <Link href={`https://reelsmunkey.com/tag/live`} legacyBehavior>
                <a className="text-center" >Live</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="xs:block sm:hidden">
          <Image src={navico} className="h-[35px]" onClick={()=>setSideBarOpen(!sideBarOpen)} alt="navbar icon"/>
        </div>
      </div>
      {sideBarOpen && <div className="xs:fixed xs:flex sm:hidden nav-overlay">
        <div className="w-[45%]" onClick={()=>setSideBarOpen(false)}></div>
        <div className="w-[55%] mbnavlist">
          <div className="f_13">
            <Link href="https://theporndude.com/" legacyBehavior>
              <a target="_blank" rel="nofollow" title="ThePornDude">
                <Image className="h-[45px] w-[175px]" src={porndude} alt="Porn Dude lists the world's best porn sites of 2024"/>
              </a>
            </Link>
          </div>
          <div className="f_13" onClick={()=>setCategoryDrop(!categoriesDrop)}>Categories {categoriesDrop ? '-' : '+'}</div>
          {categoriesDrop && <ul>
              <li className="cursor-pointer xs:py-[10px] md:p-1">
                <Link href={`https://reelsmunkey.com/tag/nsfw`} legacyBehavior>
                  <a className="text-center" >NSFW</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/nudes`} legacyBehavior>
                  <a className="text-center" >Nudes</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/boobs`} legacyBehavior>
                  <a className="text-center" >Boobs</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/dance`} legacyBehavior>
                  <a className="text-center" >Dance</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/thots`} legacyBehavior>
                  <a className="text-center" >Thots</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/cosplay`} legacyBehavior>
                  <a className="text-center" >Cosplays</a>
                </Link>
              </li>

              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/thick-ass`} legacyBehavior>
                  <a className="text-center" >Thick Ass</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/xxx`} legacyBehavior>
                  <a className="text-center" >XXX</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/lingerie`} legacyBehavior>
                  <a className="text-center" >Lingerie</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/masturbation`} legacyBehavior>
                  <a className="text-center" >Masturbation</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/latina`} legacyBehavior>
                  <a className="text-center" >Latina</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/asian`} legacyBehavior>
                  <a className="text-center" >Asian</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/blowjobs`} legacyBehavior>
                  <a className="text-center" >BlowJobs</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/legal-teens`} legacyBehavior>
                  <a className="text-center" >Legal Teens</a>
                </Link>
              </li>

              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/nipslip`} legacyBehavior>
                  <a className="text-center" >NipSlips</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/workouts`} legacyBehavior>
                  <a className="text-center" >Workouts</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/abs`} legacyBehavior>
                  <a className="text-center" >Abs</a>
                </Link>
              </li>
              <li className="cursor-pointer xs:py-[10px] md:p-1 ">
                <Link href={`https://reelsmunkey.com/tag/live`} legacyBehavior>
                  <a className="text-center" >Live</a>
                </Link>
              </li>
          </ul>}
          </div>
      </div>}
    </nav>
  );
};

export default Navbar;
