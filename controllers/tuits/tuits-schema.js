import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  username: String,
  image: String,
  time: String,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean
}, {collection: 'tuits'});
export default schema;