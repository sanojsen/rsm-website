import axios from "axios";
import { useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Script from "next/script";
import Recaptcha from "react-recaptcha";
import Headers from "../../components/headers";
const ipUrl = process.env.NEXT_PUBLIC_IP_URL;

export const runtime = 'edge';

export default function UploadContent() {
    const [title, setTitle] = useState("");
    const [creator, setCreator] = useState("");
    const [instagram, setInstagram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [onlyfans, setOnlyfans] = useState("");
    const [twitter, setTwitter] = useState("");
    const [otherProfiles, setOtherProfiles] = useState("");
    const [videoLinks, setVideoLinks] = useState("");
    const [fileList, setFileList] = useState(0);
    const [fileDisplay, setFileDisplay] = useState([]);
    const [captchaValid, setCaptcha] = useState(false);

    const [error, setError] = useState(false);
    const [toast, setToast] = useState("");
    const [overSize, setOverSize] = useState(false);

    const handleFileChange = (e) => {
        let sortedArr = [];
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        chosenFiles.forEach((ele,i) => {
            if(!isValidSize(ele.size)){
                setOverSize(true)
            }
            sortedArr.push({ name: ele.name, size: formatBytes(ele.size, 2) ,index : i, valid : isValidSize(ele.size)});
        });
        setFileDisplay(sortedArr);
        setFileList(chosenFiles);
        // setFileList(e.target.files)
    };
    function isValidSize(size){
        return size < 30000000 ? true : false;
    }
    function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return "0 Bytes";

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }
    const clearForm = () => {
        setTitle("");
        setCreator("");
        setInstagram("");
        setTiktok("");
        setOnlyfans("");
        setTwitter("");
        setOtherProfiles("");
        setVideoLinks("");
        setFileList(0);
        setFileDisplay([]);
        setError(false);
        setOverSize(false);
    };

    const handleUploadClick = async (e) => {
        e.preventDefault();
        if (!fileList || title == "" || creator == "" || !captchaValid || overSize) {
            setError(true);
            return;
        }

        let formData = new FormData();
        fileList.forEach((file) => {
            formData.append("files", file);
        });
        formData.append("title", title);
        formData.append("creator", creator);
        formData.append("instagram", instagram);
        formData.append("onlyfans", onlyfans);
        formData.append("tiktok", tiktok);
        formData.append("twitter", twitter);
        formData.append("links", otherProfiles);
        formData.append("videolinks", videoLinks);

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axios
            .post(`${ipUrl}/upload/public_content`, formData, config)
            .then((response) => {
                setError(false);
                toastOn(response.data.message);
                clearForm();
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let timout;
    function toastOn(msg) {
        setToast(msg);
        clearTimeout(timout);
        timout = setTimeout(() => {
            setToast("");
        }, 3000);
    }
    const recaptchaLoaded = () => {
        console.log("capcha successfully loaded");
    };

    const verifyCallback = (response) => {
        if (response) {
            setCaptcha(true);
        }else{
            setCaptcha(false);
        }
    };

    return (
        <>
            <Headers />
            <Script
                src="https://www.google.com/recaptcha/api.js?&render=explicit"
                async
                defer
            ></Script>
            <Navbar />
            <main className="md:container xs:w-full mx-auto md:px-[100px] mb-[60px]">
                <h1 className="w-full mx-auto text-center py-2">
                    Upload Your Content
                </h1>
                <section>
                    <form onSubmit={handleUploadClick}>
                        <div className="flex xs:flex-col md:flex-row p-2">

                            <div className="w-full p-1">
                                <div className="flex flex-col">
                                    <label htmlFor="Content Title">Creator's Instagram :</label>
                                    <input
                                        className="mt-1 p-2 rounded outline-0"
                                        type="text"
                                        name="instagram"
                                        id="instagram"
                                        placeholder="Instagram Link (Optional)"
                                        onChange={(e) => setInstagram(e.target.value)}
                                        value={instagram}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="Content Title">Creator's TikTok :</label>
                                    <input
                                        className="mt-1 p-2 rounded outline-0"
                                        type="text"
                                        name="tiktok"
                                        id="tiktok"
                                        placeholder="TikTok Link (Optional)"
                                        onChange={(e) => setTiktok(e.target.value)}
                                        value={tiktok}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="Content Title">Creator's Twitter :</label>
                                    <input
                                        className="mt-1 p-2 rounded outline-0"
                                        type="text"
                                        name="twitter"
                                        id="twitter"
                                        placeholder="Twitter Link (Optional)"
                                        onChange={(e) => setTwitter(e.target.value)}
                                        value={twitter}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="Content Title">Creator's OnlyFans :</label>
                                    <input
                                        className="mt-1 p-2 rounded outline-0"
                                        type="text"
                                        name="onlyfans"
                                        id="onlyfans"
                                        placeholder="Onlyfans Link (Optional)"
                                        onChange={(e) => setOnlyfans(e.target.value)}
                                        value={onlyfans}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="Content Title">
                                        Creator's Other Profiles :
                                    </label>
                                    <textarea
                                        className="mt-1 p-2 rounded outline-0"
                                        type="text"
                                        name="otherProfiles"
                                        id="otherProfiles"
                                        placeholder="Other profile links (Optional)"
                                        onChange={(e) => setOtherProfiles(e.target.value)}
                                        value={otherProfiles}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="Content Title">Other Video Links :</label>
                                    <textarea
                                        className="mt-1 p-2 rounded outline-0"
                                        type="text"
                                        name="videoLinks"
                                        id="videoLinks"
                                        placeholder=" Other video link (Optional)"
                                        onChange={(e) => setVideoLinks(e.target.value)}
                                        value={videoLinks}
                                    />
                                </div>
                            </div>

                            <div className="w-full p-1">
                                <div className="flex flex-col">
                                    <label htmlFor="Content Title">Content Title :</label>
                                    <input
                                        className={`mt-1 p-2 rounded outline-0 ${error && title == "" && "error"
                                            }`}
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Enter your content title (Required)"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="Content Title">Creator :</label>
                                    <input
                                        className={`mt-1 p-2 rounded outline-0 ${error && creator == "" && "error"
                                            }`}
                                        type="text"
                                        name="creator"
                                        id="creator"
                                        placeholder="Enter creator name (Required)"
                                        onChange={(e) => setCreator(e.target.value)}
                                        value={creator}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="Content Title">
                                        Upload Video (Required) :
                                    </label>

                                    {fileDisplay &&
                                        fileDisplay.length != 0 &&
                                        fileDisplay.map((files) => {
                                            return (
                                                <div className={`flex my-2 justify-between ${!files.valid && "error"
                                            }`} key={files.index}>
                                                    <div>{files.name}</div>
                                                    <div>{files.size}</div>
                                                </div>
                                            );
                                        })}

                                    <input
                                        className={`mt-1 p-2 rounded outline-0 ${error && fileDisplay.length == 0 && "error"
                                            }`}
                                        type="file"
                                        name="fileList"
                                        id="fileList"
                                        onChange={handleFileChange}
                                        multiple
                                        accept=".mp4, .mkv, .ogg"
                                    />
                                </div>

                                <Recaptcha
                                    sitekey="6LdcuvkjAAAAANZDqH65OwHNr5laNPc2UzD0ETki"
                                    render="explicit"
                                    theme="dark"
                                    onloadCallback={recaptchaLoaded}
                                    verifyCallback={verifyCallback}
                                />
                                <div className="flex mt-4 mb-2">
                                    <button className="w-[60%] upload_btn" type="submit">
                                        Submit
                                    </button>
                                    <button
                                        className="w-[40%] upload_btn ml-2"
                                        type="button"
                                        onClick={clearForm}
                                    >
                                        Clear
                                    </button>
                                </div>

                                {error && (title == "" || creator == "") && (
                                    <div className="mt-4 text-center err">
                                        *Please fill all Required Fields
                                    </div>
                                )}
                                {error && overSize && (
                                    <div className="mt-4 text-center err">
                                        *Maximum single file size must be under 30Mb
                                    </div>
                                )}
                                {toast && <div className="mt-4 text-center">{toast}</div>}
                            </div>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}
