const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  codeExample: {
    type: String,
    required: true
  },
  practiceExercise: {
    type: String,
    required: true
  }
});

const categorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  topics: [topicSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema); 