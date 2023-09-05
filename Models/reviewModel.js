import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, "review is required"],
    },
    rating: {
      type: Number,
      required: [true, "rating is required"],
    },
    service: {
      type: mongoose.Schema.ObjectId,
      ref: "Services",
    },
    package: {
      type: mongoose.Schema.ObjectId,
      ref: "Packages",
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
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

// reviewSchema.pre(/^find/, function(next) {

//   this.populate({
//     path: 'user',
//     select: 'name photo'
//   });
//   next();
// });
reviewSchema.pre(/^find/, function (next) {
   this.populate({
    path: "service",
    select: "name",
  })
    .populate({
      path: "package",
      select: "name",
    })
    .populate({
      path: "user",
      select: "name",
    });
  next();
});

export default mongoose.model("Reviews", reviewSchema);
