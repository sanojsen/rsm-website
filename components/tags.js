import Link from "next/link";

const Tags = ({tags}) => {
  return (
    <ul className="flex items-center">
        {tags && tags.length && tags.map((tag)=> {
        return( 
          <li className="mr-1 capitalize px-1 border border-white-500 cursor-pointer" key={tag._id}>
                   <Link href={`https://reelsmunkey.com/tag/${tag.url}`}>
                      {tag.tag}
                   </Link>
          </li> )
        })}
    </ul>
  )
}


export default Tags;