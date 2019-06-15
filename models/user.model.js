const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  latitude: { type: Number },
  longitude: { type: Number },
  timeStamp: { type: Date },
}, {
  versionKey: false, // You should be aware of the outcome after set to false
});


// Export the model
module.exports = mongoose.model('User', UserSchema);