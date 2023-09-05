import mongoose from "mongoose";

const PackagesSchema = new mongoose.Schema(
  {
    serviceName: {
      type: mongoose.Schema.ObjectId,
      ref: "Services",
    },
    name: {
      type: String,
      unique: true,
      required: [true, "Service name is required"],
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
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

PackagesSchema.virtual("reviews",{
  ref: "Reviews",
  localField: "_id",
  foreignField: "Packages",
})

PackagesSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'serviceName',
    select: 'name imgUrl'
  });
  next();
});

export default mongoose.model("Packages", PackagesSchema);
