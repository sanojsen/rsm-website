import { model, models, Schema } from 'mongoose'; // Import 'models' to check for existing model
import Creator from './creator_lists.model';
import Tag from './tags.model';

const videoListSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: Tag,
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: Creator,
  },
  link: String,
  thumbnail: String,
  created_at: {
    type: Date,
    default: Date.now, // Use built-in Date.now() for simpler timestamp generation
  },
});

// Check if the model already exists before defining it
const VideoList = models.video_lists || model('video_lists', videoListSchema);

export default VideoList;
