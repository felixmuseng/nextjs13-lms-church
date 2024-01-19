import mongoose, { Schema, models } from "mongoose";

export const questionSchema = new Schema(
  {
    value:{
      type: String,
      required: true
    },
    answer:{
      type: String,
    },
  },
);

// const Question = models.Question || mongoose.model("Question", questionSchema);
// export default Question;