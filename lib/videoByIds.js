import VideoList from "../models/video_lists.model";
import connectDB from "./connectDB";
import mongoose from 'mongoose';

export default async function videoByIds(req) {
  await connectDB();

  let sortOptions = req && req.id && mongoose.Types.ObjectId.isValid(req.id) 
    ? { _id: mongoose.Types.ObjectId.createFromHexString(req.id) }
    : { url: req.id };

  sortOptions["active"] = "1";

  let creator_videos = [];
  let related_videos = [];

  try {
    let response = await VideoList.findOne(sortOptions).populate(['creator', 'tags']);
    if (response) {
      response = JSON.parse(JSON.stringify(response));

      let prev = await VideoList.find({_id: {$gt: response._id}}).sort({_id: 1 }).limit(1);
      let next = await VideoList.find({_id: {$lt: response._id}}).sort({_id: -1 }).limit(1);

      if(response.creator && response.creator._id){
        let videoId = new mongoose.Types.ObjectId(response._id);
        let creatorId = new mongoose.Types.ObjectId(response.creator._id);

        const crList = await VideoList.aggregate([
          { $match: { _id: { $ne: videoId }, creator: creatorId, active: '1' } },
          { $sample: { size: 8 } },
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
        ]);
        creator_videos = JSON.parse(JSON.stringify(crList));
      }

      if(response && response.tags){
        const findedTags = response.tags.map(tag => new mongoose.Types.ObjectId(tag._id));
        const relList = await VideoList.aggregate([
          { $match: { _id: { $ne: new mongoose.Types.ObjectId(response._id) }, tags: { $in: findedTags }, active: '1' } },
          { $sample: { size: 8 } },
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
        related_videos = JSON.parse(JSON.stringify(relList));
      }

      prev = JSON.parse(JSON.stringify(prev));
      next = JSON.parse(JSON.stringify(next));
      var additional_data = {
        title: response.title,
        description: response.description,
        keywords: response.keywords,
        url: `https://reelsmunkey.com/video/${response.url}`,
        thumbs: `https://images.reelsmunkey.com/${response.thumbnail}`,
        next: next.length ? `/video/${next[0].url}`: '',
        prev : prev.length ? `/video/${prev[0].url}`: '',
        creator_video : creator_videos,
        related_videos: related_videos
      };
    }
    if (response) {
      let retResponse = {
        status: 200,
        message: "Video fetch success",
        data: response,
      };
      additional_data ? (retResponse["additional_data"] = additional_data) : "";
      return JSON.parse(JSON.stringify(retResponse));
    } else {
      return { status: 404, message: "Video not found" };
    }
  } catch (e) {
    return { status: 500, message: "Video fetch failed", error: e.message };
  }
}
