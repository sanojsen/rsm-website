import mongoose from 'mongoose';
import connectDB from '../../../lib/connectDB';
import commentList from '../../../models/comments.model';

export default async function handler(req, res) {
  await connectDB();
  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const { user, comments, video_id, created_at } = req.body;

        // Validate the request body
        if (!user || !comments || !video_id) {
          return res.status(400).json({ success: false, error: 'Please provide all required fields' });
        }

        // Create a new comment
        const newComment = await commentList.create({
          user,
          comments: comments,
          video_id : new mongoose.Types.ObjectId(video_id),
          created_at: created_at,
          active: '1',
        });

        res.status(201).json({ success: true, data: newComment });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, error: `Method ${method} Not Allowed` });
      break;
  }
}

