import mongoose, { Schema, models } from "mongoose";

const eventSchema = new Schema(
  {
    name:{
      type: String
    },
    date:{
      type: Date,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
);

const Event = models.Event || mongoose.model("Event", eventSchema);
export default Event;