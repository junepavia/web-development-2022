import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  guardiansname: {
    type: String,
    required: true,
  },
  dream: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Users", User);
