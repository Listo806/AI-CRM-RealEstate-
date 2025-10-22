const mongoose = require('mongoose');

const MemoryVectorSchema = new mongoose.Schema({
  userId: String,
  text: String,
  tags: [String],
  vector: { type: [Number], index: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MemoryVector', MemoryVectorSchema);

