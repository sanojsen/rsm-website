import mongoose from 'mongoose';
import connectDB from './connectDB';
import commentList from '../models/comments.model';

const getCommentById = async(req)=> {
  await connectDB();

  try {
    const id = req.id;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return ({ status: 400, message: "Invalid Video ID" });
    }

    const objectId = new mongoose.Types.ObjectId(id);
    
    const comments = await commentList.find({ video_id: objectId , active: "1"});

    if (comments.length === 0) {
      return {
        status: 404,
        message: "No comments found for this video",
        data: [],
      };
    }

    return{
      status: 200,
      message: "Comment fetch success",
      data: comments,
    };
  } catch (e) {
    console.error("Error fetching comments:", e);
    return { status: 500, message: "Internal Server Error" };
  }
}

export default getCommentById;