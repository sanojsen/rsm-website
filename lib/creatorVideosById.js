import mongoose from 'mongoose';
import connectDB from './connectDB';
import Creator from '../models/creator_lists.model';
import VideoList from '../models/video_lists.model';

export default async function getAllCreatorVideosById(req) {
  await connectDB();

  try {
    const id = req.id;

    // Check if id is a valid MongoDB ObjectId
    if (!id) {
      return { status: 400, message: "ID is required" }
    }

    // Find creator by URL
    const isCreatorAvail = await Creator.findOne({ url: id });
    if (!isCreatorAvail) {
      return { status: 200, message: "Video list empty", data: [] };
    }

    // Find videos created by the specific creator
    const videoList = await VideoList.aggregate([
      { $match: { creator: new mongoose.Types.ObjectId(isCreatorAvail._id), active: '1' } },
      {
        $lookup: {
          from: 'tags',
          localField: 'tags',
          foreignField: '_id',
          pipeline: [
            { $project: { url: 1, _id: 0 } } // Project only the name field, exclude _id
          ],
          as: 'tags'
        }
      },
      { $sort: { _id: -1 } },
    ]);

    return {
      status: 200,
      message: "Video fetch success",
      additional_data: JSON.parse(JSON.stringify(isCreatorAvail)) ,
      data: JSON.parse(JSON.stringify(videoList)) || [],
    }
  } catch (e) {
    console.error("Error at getCreatorsAllVideo", e);
    return { status: 500, message: "Internal Server Error" };
  }
}


