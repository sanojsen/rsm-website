import allTagIds from "../lib/allTagIds";
import allVideoIds from "../lib/allVideoIds";
import creatorAllVideoIds from "../lib/creatorAllVideoIds";

const ipUrl = process.env.NEXT_PUBLIC_IP_URL;

function generateSiteMap(video, creator, tags) {
  // var count = 1;
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

      <url>
        <loc>https://reelsmunkey.com</loc>
        <lastmod>${`${video[0].created_at}`}</lastmod>
        <priority>1.0</priority>
      </url>

      ${tags.map((tag) => {
        return `<url>
                  <loc>${`https://reelsmunkey.com/tag/${tag.url}`}</loc>
                  <lastmod>${`${tag.created_at}`}</lastmod>
                  <priority>0.8</priority>
               </url>`;
        }).join("")
      }

      ${video
       .map((vid) => {
         return `
             <url>
                <loc>${`https://reelsmunkey.com/video/${vid.url}`}</loc>
                <lastmod>${`${vid.created_at}`}</lastmod>
                <priority>1.0</priority>
             </url>`;
       })
      .join("")}

      ${creator
      .map((create) => {
        return `
               <url>
                  <loc>${`https://reelsmunkey.com/creator/${create.url}`}</loc>
                  <lastmod>${`${create.created_at}`}</lastmod>
                  <priority>0.9</priority>
               </url>`;
      })
      .join("")}

      <url>
        <loc>https://reelsmunkey.com/usc</loc>
        <lastmod>2024-06-01T00:00:00.000Z</lastmod>
         <priority>0.6</priority>
      </url>

   </urlset>`;
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const video = await allVideoIds();
  const creator = await creatorAllVideoIds();
  const tags = await allTagIds();
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(video, creator, tags);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

function SiteMap() {}

export default SiteMap;

// ${video
//   .map((vid, i) => {
//     if ((i + 1) % 20 === 0) {
//       count = count + 1;
//       return `
//             <url>
//                 <loc>${`https://reelsmunkey.com/page/${count}`}</loc>
//                 <priority>0.9</priority>
//             </url>`;
//     }
//   })
//   .join("")}

{/* <url>
<loc>https://reelsmunkey.com/supporters</loc>
<lastmod>2024-06-01T00:00:00.000Z</lastmod>
<priority>0.6</priority>
</url> */}