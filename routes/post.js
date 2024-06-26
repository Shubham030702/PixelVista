const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  imageText: {
    type: String
  },
  image:{
    type: String 
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default:Date.now
  },
  likes:[ {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
});

module.exports = mongoose.model('Post', postSchema);

