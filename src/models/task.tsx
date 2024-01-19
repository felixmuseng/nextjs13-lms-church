import mongoose, { Schema, models } from "mongoose";
import {questionSchema} from "./question";

const taskSchema = new Schema(
  {
    name:{
      type: String
    },
    date:{
      type: Date,
      required: true
    },
    finished:{
      type: Boolean,
      default: false
    },
    questions:{
      type: [questionSchema]
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = models.Task || mongoose.model("Task", taskSchema);
export default Task;