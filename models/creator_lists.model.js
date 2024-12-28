import { model, models, Schema } from "mongoose"; // Import 'models' to check for existing model

const creatorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  keywords: {
    type: String,
  },
  instagram: {
    type: String,
  },
  tiktok: {
    type: String,
  },
  twitter: {
    type: String,
  },
  onlyfans: {
    type: String,
  },
  links: {
    type: String,
  },
  url: {
    type: String,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists before defining it
const Creator = models.creator_lists || model("creator_lists", creatorSchema);

export default Creator;
