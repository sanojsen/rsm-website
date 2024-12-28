import connectDB from "../../../lib/connectDB";
import VideoList from "../../../models/video_lists.model";
import Creator from "../../../models/creator_lists.model";

export default async function handler(req, res) {
  await connectDB();

  const searchText = req.query.search?.replace(/[^a-zA-Z0-9\s]/g, "") || "";

  const creatorPromise = Creator.find(
    { name: { $regex: new RegExp(searchText, "i") } },
    null,
    { limit: 5 }
  )
    .sort({ _id: -1 })
    .select({ name: 1, url: 1, _id: 0 })
    .exec();

  const videoPromise = VideoList.find(
    { active: "1", title: { $regex: new RegExp(searchText, "i") } },
    null,
    { limit: 5 }
  )
    .sort({ _id: -1 })
    .select({ title: 1, url: 1, _id: 0 })
    .exec();

  try {
    const [creatorList, videoResponse] = await Promise.all([
      creatorPromise,
      videoPromise,
    ]);

    return res.status(200).json({
      status: 200,
      message: "Search completed",
      creators: creatorList || [],
      videos: videoResponse || [],
    });
  } catch (e) {
    console.error("Error at getSearch", e);
    return res
      .status(500)
      .json({ status: 500, message: "Some error occurred", error: e });
  }
}
