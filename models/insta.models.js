const mongoose = require('mongoose');

const { Schema } = mongoose;

const InstaSchema = new Schema({
  username: { type: String },
  password: { type: String }
}, {
  versionKey: false, // You should be aware of the outcome after set to false
});


// Export the model
module.exports = mongoose.model('Insta', InstaSchema);