import { instagram, onlyfans, otherlinks, tiktok, twitter } from "./images";
import Image from "next/image";
import Link from "next/link";

const Creator = ({ creator }) => {
  return (
      <ul className="flex items-center justify-end cursor-pointer ml-auto  p-1">
        {creator.instagram && (
          <li>
            <Link href={creator.instagram} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer nofollow">
                <Image
                  className="h-[22px] pr-3"
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
                  className="h-[31px] pr-3"
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
                  className="h-[26px] pr-3"
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
                  className="h-[24px] pr-[7px]"
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
                  className="h-[27px] pr-3"
                  src={otherlinks}
                  alt="Other links"
                />
                </a>
            </Link>
          </li>
        )}
        {creator.name && (
          <li>
            <Link href={`/creator/${creator.url}`}>
              {creator.name ? "@" + creator.name : ""}
            </Link>
          </li>
        )}
      </ul>
  );
};

export default Creator;
