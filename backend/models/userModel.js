const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required!"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email required!"],
    },
    password: {
      type: String,
      required: [true, "Password required!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
