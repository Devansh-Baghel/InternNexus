// backend/src/models/user.model.js
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    // Profile Information
    education: {
      type: String,
      trim: true,
    },
    field: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    avatar: {
      type: String, // Cloudinary URL
    },
    dateOfBirth: {
      type: Date,
    },

    // Skills and Interests
    skills: [
      {
        type: String,
        trim: true,
        maxlength: [50, "Skill name cannot exceed 50 characters"],
        validate: {
          validator: function (v) {
            return v.length > 0; // Ensure skill is not empty after trimming
          },
          message: "Skill cannot be empty",
        },
      },
    ],
    interests: [
      {
        type: String,
        trim: true,
        maxlength: [50, "Interest name cannot exceed 50 characters"],
        validate: {
          validator: function (v) {
            return v.length > 0; // Ensure interest is not empty after trimming
          },
          message: "Interest cannot be empty",
        },
      },
    ],

    // Update the experience enum to be more specific
    experience: {
      type: String,
      enum: {
        values: ["none", "some", "internship", "part-time"],
        message: "Experience must be one of: none, some, internship, part-time",
      },
      default: "none",
    },

    // Profile Stats
    profileViews: {
      type: Number,
      default: 0,
    },
    skillsEndorsed: {
      type: Number,
      default: 0,
    },
    profileScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    // Internship Related
    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
    savedInternships: [
      {
        type: Schema.Types.ObjectId,
        ref: "Internship",
      },
    ],
    completedApplications: {
      type: Number,
      default: 0,
    },

    // Onboarding
    isOnboardingComplete: {
      type: Boolean,
      default: false,
    },
    onboardingStep: {
      type: Number,
      default: 1,
      min: 1,
      max: 4,
    },

    // Financial (from existing template)
    income: {
      type: Number,
      min: 0,
    },
    expense: {
      type: Number,
      min: 0,
    },
    currentBalance: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: "₹",
      enum: ["$", "€", "¥", "₹", "A$", "C$"],
    },
    hasSetIncomeAndExpense: {
      type: Boolean,
      default: false,
    },

    // Premium Features
    isPaidUser: {
      type: Boolean,
      default: false,
    },
    stripeSessionId: {
      type: String,
    },

    // Authentication
    refreshToken: {
      type: String,
    },

    // Preferences
    preferences: {
      emailNotifications: {
        type: Boolean,
        default: true,
      },
      pushNotifications: {
        type: Boolean,
        default: true,
      },
      jobAlerts: {
        type: Boolean,
        default: true,
      },
      remoteOnly: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

// Middleware to calculate profile score
userSchema.pre("save", function (next) {
  let score = 0;
  
  if (this.fullName) score += 10;
  if (this.email) score += 10;
  if (this.education) score += 15;
  if (this.location) score += 10;
  if (this.bio) score += 10;
  if (this.avatar) score += 10;
  if (this.skills && this.skills.length > 0) score += 20;
  if (this.interests && this.interests.length > 0) score += 15;
  
  this.profileScore = score;
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
