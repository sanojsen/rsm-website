import mongoose from 'mongoose';
import connectDB from '../../../lib/connectDB';
import commentList from '../../../models/comments.model';

export default async function handler(req, res) {
  await connectDB();

  try {
    const id = req.query.id;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ status: 400, message: "Invalid Video ID" });
    }

    const objectId = new mongoose.Types.ObjectId(id);
    
    const comments = await commentList.find({ video_id: objectId, active: '1' });

    if (comments.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No comments found for this video",
        data: [],
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Comment fetch success",
      data: comments,
    });
  } catch (e) {
    console.error("Error fetching comments:", e);
    return res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
}
