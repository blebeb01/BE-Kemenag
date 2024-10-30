const mongoose = require('mongoose');

const kemenagProfileSchema = new mongoose.Schema({
  profile: {
    type: String,
    required: true
  },
  hajj_info: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('kemenag_profile', kemenagProfileSchema);