import mongoose from 'mongoose'; // Import mongoose
import connectDB from "./connectDB";
import Creator from '../models/creator_lists.model';
import VideoList from '../models/video_lists.model';
import Tag from '../models/tags.model';

export default async function videoListFetch(req) {
    await connectDB()

    const sortOptions = {};
    const pageOptions = {};
    let tagsDetails;
    let creatorDetails;

    if (req.tag) {
      const tagQuery = mongoose.Types.ObjectId.isValid(req.tag) ? { _id: req.tag } : { url: req.tag }; 

      tagsDetails = await Tag.findOne(tagQuery);

      if (tagsDetails) {
        sortOptions["tags"] = { $in: tagsDetails._id };
        tagsDetails = JSON.parse(JSON.stringify(tagsDetails));
      }
    }
    
    if (req.creator) {
      const creatorQuery = mongoose.Types.ObjectId.isValid(req.creator) ? { _id: req.creator } : { url: req.creator }; // Use mongoose.Types.ObjectId.isValid
      creatorDetails = await Creator.findOne(creatorQuery);

      if (creatorDetails) {
        sortOptions["creator"] = creatorDetails._id;
        creatorDetails = JSON.parse(JSON.stringify(creatorDetails));
      }
    }
    
    const parsedPage = parseInt(req.page || 1);
    pageOptions["skip"] = (parsedPage - 1) * 20;
    pageOptions["limit"] = 20;
    sortOptions["active"] = "1";
  
    try {
      const videoResponse = await VideoList.find(sortOptions)
      .lean()
      .select("_id title url link thumbnail created_at tags")
      .sort({ _id: -1 })
      .skip(pageOptions.skip)
      .limit(pageOptions.limit)
      .populate({
        path: 'tags',          // Field to populate
        select: 'url -_id'    // Only include the name field, exclude _id
      })
      .exec();
    
      const videoCount = await VideoList.countDocuments(sortOptions);
  
      if (videoResponse) {

        var retResponse = {
          status: 200,
          message: "Video list fetch success",
          data: videoResponse,
          count: videoCount,
        };

        if (creatorDetails) {
          let additional_data = {
            title: creatorDetails.name,
            description: creatorDetails.description,
            keywords: creatorDetails.keywords,
            url: `https://reelsmunkey.com/creator/${creatorDetails.url}`,
            thumbs: "https://images.reelsmunkey.com/reelsmunkey.png",
          };
          retResponse["additional_data"] = additional_data;
        }

        if (tagsDetails) {
          let additional_data = {
            tag_title: tagsDetails.title ? tagsDetails.title : "",
            title: tagsDetails.tag,
            description: tagsDetails.description,
            keywords: tagsDetails.keywords,
            url: `https://reelsmunkey.com/tag/${tagsDetails.url}`,
            thumbs: "https://images.reelsmunkey.com/reelsmunkey.png",
          };
          retResponse["additional_data"] = additional_data;
        }

        return JSON.parse(JSON.stringify(retResponse));

      } else {
        return {
          status: 201,
          message: "Something went wrong",
        };
      }
    } catch (e) {
      console.log('Error at getVideoList', e)
      return{
        status: 201,
        message: "Something went wrong",
        error: e,
      };
    }
}
