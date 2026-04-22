import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  imagePreview: {
    type: String, // base64 thumbnail
    default: ''
  },
  userAgent: {
    type: String,
    default: 'Unknown'
  },
  userId: {
    type: String,
    default: 'anonymous'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Result', resultSchema);
