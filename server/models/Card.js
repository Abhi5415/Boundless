const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true,
    max: 40
  },
  url: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
