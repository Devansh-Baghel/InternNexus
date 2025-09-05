// backend/src/routes/user.routes.js
import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateOnboardingStep,
  completeOnboarding,
  updateProfile,
  uploadAvatar,
  updatePreferences,
  incrementProfileViews,
  endorseSkill,
  addIncomeAndExpense,
  refreshAccessToken,
  changeCurrentPassword,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Public routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/refresh-access-token").post(refreshAccessToken);

// Protected routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);

// Onboarding routes
router.route("/onboarding/step").patch(verifyJWT, updateOnboardingStep);
router.route("/onboarding/complete").patch(verifyJWT, completeOnboarding);

// Profile management
router.route("/profile").patch(verifyJWT, updateProfile);
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), uploadAvatar);
router.route("/preferences").patch(verifyJWT, updatePreferences);

// Profile stats
router.route("/profile-views/:userId").patch(incrementProfileViews);
router.route("/endorse-skill/:userId").patch(verifyJWT, endorseSkill);

// Financial (from existing template)
router.route("/income-expense").post(verifyJWT, addIncomeAndExpense);

// Security
router.route("/change-password").patch(verifyJWT, changeCurrentPassword);

export default router;
