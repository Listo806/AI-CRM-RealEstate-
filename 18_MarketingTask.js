const mongoose = require('mongoose');

const MarketingTask = new mongoose.Schema({
  userId: String,
  channel: { type:String, enum:['instagram','facebook','email'] },
  content: String,
  mediaUrls: [String],
  runAt: Date,
  status: { type:String, default:'PENDING' }
});

module.exports = mongoose.model('MarketingTask', MarketingTask);
