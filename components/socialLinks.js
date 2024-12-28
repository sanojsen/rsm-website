import { instagram, onlyfans, otherlinks, tiktok, twitter } from "./images";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = ({ creator }) => {
  return (
    <div className="flex capitalize p-1 cursor-pointer ml-auto xs:mt-2 sm:mt-0 justify-center">
      <ul className="flex items-center justify-center">
        {creator.instagram && (
          <li>
            <Link href={creator.instagram} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer nofollow">
                <Image
                  className="h-[30px] pr-3"
                  src={instagram}
                  alt="instagram link"
                />
              </a>
            </Link>
          </li>
        )}

        {creator.tiktok && (
          <li>
            <Link href={creator.tiktok} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer nofollow">
                <Image
                  className="h-[40px] pr-3"
                  src={tiktok}
                  alt="TikTok link"
                />
              </a>
            </Link>
          </li>
        )}

        {creator.twitter && (
          <li>
            <Link href={creator.twitter} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer nofollow">
                <Image
                  className="h-[30px] pr-3"
                  src={twitter}
                  alt="twitter link"
                />
              </a>
            </Link>
          </li>
        )}

        {creator.onlyfans && (
          <li>
            <Link href={creator.onlyfans} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer nofollow">
                <Image
                  className="h-[34px] pr-[7px]"
                  src={onlyfans}
                  alt="Onlyfans link"
                />
              </a>
            </Link>
          </li>
        )}

        {creator.links && (
          <li>
            <Link href={creator.links} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer nofollow">
                <Image
                  className="h-[40px] pr-3"
                  src={otherlinks}
                  alt="Other links"
                />
                </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SocialLinks;
