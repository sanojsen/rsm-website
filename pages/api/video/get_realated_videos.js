import mongoose from 'mongoose';
import connectDB from '../../../lib/connectDB';
import VideoList from '../../../models/video_lists.model';

export default async function handler(req, res) {
  await connectDB();

  try {
    const { id } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ status: 400, message: "Invalid video list ID" });
    }

    const objectId = new mongoose.Types.ObjectId(id);
    const finded = await VideoList.findOne({ _id: objectId });

    if (!finded) {
      return res.status(200).json({ status: 200, message: "Video list empty", data: [] });
    }

    const videoList = await VideoList.aggregate([
      { $match: { _id: { $ne: objectId }, tags: { $in: finded.tags }, active: '1' } },
      { $sample: { size: 8 } },
      { $sort: { _id: -1 } },
    ]);

    return res.status(200).json({
      status: 200,
      message: "Video fetch success",
      data: videoList || [],
    });
  } catch (e) {
    console.error("Error at getRelatedVideos", e);
    return res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
}
