import { model, models, Schema } from 'mongoose'; // Import 'models' to check for existing model
import VideoList from './video_lists.model';

const CommentSchema = new Schema({
  user: String,
  comments: String,
  video_id: {
    type: Schema.Types.ObjectId,
    ref: VideoList,
    required: true,
  },
  active: {
    type : String,
    default : '0'
  },
  created_at: String
});

// Check if the model already exists before defining it
const commentList = models.comments || model('comments', CommentSchema);

export default commentList;
