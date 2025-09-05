// backend/src/controllers/user.controller.js
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName) throw new ApiError(400, "Full name is required");
  if (!password) throw new ApiError(400, "Password is required");
  if (!email) throw new ApiError(400, "Email is required");

  const emailExists = await User.findOne({ email });
  if (emailExists) throw new ApiError(409, "Email has already been used");

  const user = await User.create({
    fullName,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser)
    throw new ApiError(500, "Something went wrong while registering the user");

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) throw new ApiError(400, "Email required");
  if (!password) throw new ApiError(400, "Password required");

  const user = await User.findOne({ email });
  if (!user) throw new ApiError(404, "User not found");

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) throw new ApiError(401, "Invalid Password");

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

export const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out"));
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(200, { user: req.user }, "User fetched successfully")
    );
});

// Onboarding Controllers
export const updateOnboardingStep = asyncHandler(async (req, res) => {
  const { step, education, field, skills, interests, location, experience } = req.body;
  const user = req.user;

  const updateData = { onboardingStep: step };

  // Update based on step
  switch (step) {
    case 1:
      if (education) updateData.education = education;
      if (field) updateData.field = field;
      break;
    case 2:
      if (skills) updateData.skills = skills;
      break;
    case 3:
      if (interests) updateData.interests = interests;
      break;
    case 4:
      if (location) updateData.location = location;
      if (experience) updateData.experience = experience;
      updateData.isOnboardingComplete = true;
      break;
  }

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    updateData,
    { new: true }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: updatedUser },
        `Onboarding step ${step} updated successfully`
      )
    );
});

export const completeOnboarding = asyncHandler(async (req, res) => {
  const { education, field, skills, interests, location, experience } = req.body;
  const user = req.user;

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      education,
      field,
      skills,
      interests,
      location,
      experience,
      isOnboardingComplete: true,
      onboardingStep: 4,
    },
    { new: true }
  ).select("-password -refreshToken");

  if (!updatedUser) throw new ApiError(404, "User not found");

  return res
    .status(200)
    .json(
      new ApiResponse(200, { user: updatedUser }, "Onboarding completed successfully")
    );
});

// Profile Management
export const updateProfile = asyncHandler(async (req, res) => {
  const user = req.user;
  const { fullName, bio, education, field, location, skills, interests } = req.body;

  const updateFields = {};
  if (fullName) updateFields.fullName = fullName;
  if (bio) updateFields.bio = bio;
  if (education) updateFields.education = education;
  if (field) updateFields.field = field;
  if (location) updateFields.location = location;
  if (skills) updateFields.skills = skills;
  if (interests) updateFields.interests = interests;

  const updatedUser = await User.findByIdAndUpdate(
    user._id, 
    updateFields, 
    { new: true }
  ).select("-password -refreshToken");

  if (!updatedUser) throw new ApiError(404, "User doesn't exist");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: updatedUser },
        "Profile updated successfully"
      )
    );
});

export const uploadAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;
  const user = req.user;

  if (!avatarLocalPath) throw new ApiError(400, "Avatar file is required");

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  if (!avatar) throw new ApiError(400, "Error uploading avatar");

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { avatar: avatar.url },
    { new: true }
  ).select("-password -refreshToken");

  if (!updatedUser)
    throw new ApiError(500, "Something went wrong uploading avatar");

  return res
    .status(200)
    .json(
      new ApiResponse(200, { user: updatedUser }, "Avatar uploaded successfully")
    );
});

export const updatePreferences = asyncHandler(async (req, res) => {
  const user = req.user;
  const { preferences } = req.body;

  if (!preferences) throw new ApiError(400, "Preferences are required");

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { preferences },
    { new: true }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: updatedUser },
        "Preferences updated successfully"
      )
    );
});

// Profile Stats
export const incrementProfileViews = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByIdAndUpdate(
    userId,
    { $inc: { profileViews: 1 } },
    { new: true }
  ).select("profileViews");

  return res
    .status(200)
    .json(
      new ApiResponse(200, { profileViews: user.profileViews }, "Profile view incremented")
    );
});

export const endorseSkill = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByIdAndUpdate(
    userId,
    { $inc: { skillsEndorsed: 1 } },
    { new: true }
  ).select("skillsEndorsed");

  return res
    .status(200)
    .json(
      new ApiResponse(200, { skillsEndorsed: user.skillsEndorsed }, "Skill endorsed")
    );
});

// Existing controllers from template
export const addIncomeAndExpense = asyncHandler(async (req, res) => {
  const { income, expense } = req.body;
  const user = req.user;

  if (income === undefined)
    throw new ApiError(400, "Income is required to add income and expense");
  if (expense === undefined)
    throw new ApiError(400, "Expense is required to add income and expense");

  if (isNaN(income) || isNaN(expense))
    throw new ApiError(400, "Income and Expense must be a number");

  if (income < 0 || expense < 0)
    throw new ApiError(400, "Income and Expense can't be less than zero");

  if (expense > income)
    throw new ApiError(400, "Expense can't be greater than income");

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      hasSetIncomeAndExpense: true,
      income,
      expense,
    },
    { new: true }
  ).select("-password -refreshToken");

  if (!updatedUser) throw new ApiError(404, "User not found");

  return res.status(200).json(
    new ApiResponse(
      200,
      { user: updatedUser },
      "Income and expense added successfully"
    )
  );
});

export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) throw new ApiError(401, "Unauthorized request");

  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );

  const user = await User.findById(decodedToken?._id);
  if (!user) throw new ApiError(401, "Invalid refresh token");

  if (incomingRefreshToken !== user?.refreshToken)
    throw new ApiError(401, "Refresh token is expired or used");

  const options = {
    httpOnly: true,
    secure: true,
  };

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { accessToken, refreshToken },
        "Access token refreshed"
      )
    );
});

export const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword)
    throw new ApiError(400, "Both old and new passwords are required");

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});
