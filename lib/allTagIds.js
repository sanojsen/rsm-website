import Tag from "../models/tags.model";
import connectDB from "./connectDB";

export default async function allTagIds() {
  await connectDB();

  try {
    let response = await Tag.aggregate([
      { $project: {_id: 0, url: 1, created_at: 1 } }
    ]);
    return JSON.parse(JSON.stringify(response));
  } catch (e) {
    return({ error: e });
  }
}
