import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Service name is required"],
    },

    imgUrl: {
      type: String,
      required: [true, "imgUrl is required"],
    },
    
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ServicesSchema.virtual("packages", {
  ref: "Packages",
  localField: "_id",
  foreignField: "serviceName",
  
});


export default mongoose.model("Services", ServicesSchema);
