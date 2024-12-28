import Image from "next/image";
import { rightUp, search, searchBlack } from "./images";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

const ipUrl = process.env.NEXT_PUBLIC_IP_URL;
const searchUrl = process.env.NEXT_PUBLIC_GET_SEARCH;

const SearchBar =() =>{
    const router = useRouter();
    const [toogle, setToogle] = useState(false)

    const [searchTerm, setSearchTerm] = useState('');
    const [videoList, setVideoList] = useState([]);
    const [creatorList, setcreatorList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const debounce = (func, delay) => {
        let timer;
        return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useCallback(debounce((searchTerm) => {

        axios.get(`${ipUrl}${searchUrl}?search=${searchTerm}`).then((response) => {
            response.data && response.data.creators.length ? setcreatorList(response.data.creators) : ''
            response.data && response.data.videos.length ? setVideoList(response.data.videos) : ''
        });

    }, 500), []);

    const navigateTopages = (url, type)=>{
        if(type == 2){
            router.replace(`/creator/${url}`)
        }else{
            router.replace(`/video/${url}`)
        }
        setSearchTerm('');
        setToogle(false);

    }
    useEffect(() => {
        if (searchTerm) {
        handleSearch(searchTerm);
        } else {
        setSearchResults([]);
        }
    }, [searchTerm, handleSearch]);


    return(
    <>
        <div className={`${toogle ? 'active' : ''} flex justify-between items-center cursor-pointer search relative`} onClick={()=> !toogle && setToogle(!toogle)}>
          {!toogle && <Image src={search} alt="search icon"  className="xs:w-[30px] md:w-[30px] h-[30px]" />}
          {toogle && <Image src={searchBlack} alt="search icon"  className="xs:w-[30px] md:w-[30px] h-[30px]" />}
          <input className="search_input" placeholder="Search something" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
          <div className="search_text">Search</div>

            {searchTerm && (videoList.length || creatorList.length) && (<>
                <div className="absolute flex search_response" >
                    {
                     videoList.length !=0 && <div className={`mr-2 ${creatorList.length !=0 ? 'bdr' : ''}`}>  
                        <div className="mb-1 f_12">
                            Videos : 
                        </div>
                        {videoList && videoList.map((video)=>{
                            return(
                                <>
                                    <div key={video.url} className="mb-1 flex items-center justify-between" onClick={()=>navigateTopages(video.url,1)}>
                                        {video.title} <Image alt={`link to ${video.title}`} src={rightUp} className="ml-1 h-[20px] w-[20px]"/>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    }
                    
                    {creatorList.length !=0 && <div className="xs:ml-0 sm:ml-2 xs:mr-0 sm:mr-3 sm:min-w-[120px] xs:mt-6 sm:mt-0">  
                        <div className="mb-1 f_12">
                            Creators : 
                        </div>
                        <div className="xs:flex flex-wrap sm:block">
                            {creatorList && creatorList.map((creator)=>{
                                return(
                                    <>
                                        <div key={creator.url} className="mb-1 xs:mr-2" onClick={()=>navigateTopages(creator.url,2)}>@{creator.name}</div>
                                    </>
                                )
                            })}
                        </div>
                        </div>
                    }
                </div>
            </>)}
      
        </div>
    </>)
}
export default SearchBar;