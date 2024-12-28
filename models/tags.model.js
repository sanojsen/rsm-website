import { model, models, Schema } from 'mongoose'; // Import 'models' to check for existing model

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  instagram: String,
  tiktok: String,
  twitter: String,
  onlyfans: String,
  links: String,
  created_at: {
    type: Date,
    default: Date.now, // Use built-in Date.now() for simpler timestamp generation
  },
  
});

// Check if the model already exists before defining it
const Tag = models.tags || model('tags', tagSchema);

export default Tag;
