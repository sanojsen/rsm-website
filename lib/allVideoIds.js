import VideoList from "../models/video_lists.model";
import connectDB from "./connectDB";

export default async function allVideoIds() {
  await connectDB();

  try {
    let response = await VideoList.aggregate([
      { $match: { active: '1' } },
      { $project: {_id: 1, url: 1, created_at: 1 } },
      { $sort: {_id:-1 } },
    ]);
    return JSON.parse(JSON.stringify(response));
  } catch (e) {
    return({ error: e });
  }
}
