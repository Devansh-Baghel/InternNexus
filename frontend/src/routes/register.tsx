// frontend/src/routes/register.tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  Shield,
  Award,
  CheckCircle,
  Rocket,
  Target,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { useAuth } from "../contexts/AuthContext";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, error, isLoading, clearError, login } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    // Check password match in real-time
    if (field === "confirmPassword") {
      setPasswordMatch(value === formData.password);
    } else if (field === "password") {
      setPasswordMatch(
        formData.confirmPassword === value || formData.confirmPassword === ""
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    if (!acceptedTerms) {
      return;
    }

    try {
      await register(formData.fullName, formData.email, formData.password);

      // Auto-login after successful registration
      try {
        await login(formData.email, formData.password);
        // Navigate to onboarding on successful login
        navigate({ to: "/onboarding" });
      } catch (loginError) {
        // If auto-login fails, redirect to login page
        navigate({ to: "/login" });
      }
    } catch (error) {
      // Error is handled by the context
      console.error("Registration failed:", error);
    }
  };


  const benefits = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "AI-Powered Matching",
      description: "95% accuracy in internship recommendations",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Fast Track Career",
      description: "78% job conversion rate for our interns",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Premium Support",
      description: "24/7 guidance throughout your journey",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">IN</span>
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    InternNexus
                  </span>
                  <div className="text-xs text-gray-500 font-medium">
                    Powered by PM Scheme
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate({ to: "/" })}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm"
              >
                Home
              </button>
              <button
                onClick={() => navigate({ to: "/login" })}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 via-pink-100 to-green-100 border border-orange-200 px-4 py-2 rounded-full shadow-lg">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mr-2">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Join 1.2 Lakh+ Students Already Transforming Their Careers
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div>
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-black text-2xl">IN</span>
                  </div>

                  <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
                    Start Your
                    <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 bg-clip-text text-transparent">
                      Dream Journey
                    </span>
                  </h1>

                  <p className="text-base text-gray-600 leading-relaxed">
                    Create your account and unlock unlimited opportunities
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 bg-red-50 border border-red-200 rounded-xl p-3">
                    <div className="flex items-center">
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                      <p className="text-red-700 font-medium text-sm">
                        {error}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner"
                        placeholder="Enter your full name"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner"
                        placeholder="Enter your email address"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner"
                        placeholder="Create a strong password"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        className={`w-full pl-10 pr-10 py-3 border-2 rounded-xl focus:ring-2 transition-all duration-300 bg-white shadow-inner ${
                          !passwordMatch && formData.confirmPassword
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-200 focus:ring-orange-500 focus:border-orange-500"
                        }`}
                        placeholder="Confirm your password"
                        required
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {!passwordMatch && formData.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        Passwords do not match
                      </p>
                    )}
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="accept-terms"
                      // checked={acceptedTerms}
                      // onCheckedChange={setAcceptedTerms}
                      disabled={isLoading}
                      className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600 mt-1"
                      required
                    />
                    <Label
                      htmlFor="accept-terms"
                      className="text-sm text-gray-600 font-medium leading-relaxed cursor-pointer"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-orange-600 hover:text-orange-700 font-bold"
                      >
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button
                        type="button"
                        className="text-orange-600 hover:text-orange-700 font-bold"
                      >
                        Privacy Policy
                      </button>
                    </Label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !passwordMatch || !acceptedTerms}
                    className="group w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 rounded-xl font-black hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create My Account
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 font-medium text-sm">
                    Already have an account?{" "}
                    <button
                      onClick={() => navigate({ to: "/login" })}
                      className="font-bold text-transparent bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text hover:from-orange-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Sign in here →
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                  Why Choose
                  <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    InternNexus?
                  </span>
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Join thousands of students who've transformed their careers
                </p>
              </div>

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Success Stats */}
              <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Our Success Story
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-green-600 mb-1">
                      95%
                    </div>
                    <div className="text-xs font-bold text-gray-700">
                      Success Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-600 mb-1">
                      78%
                    </div>
                    <div className="text-xs font-bold text-gray-700">
                      Job Conversion
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-purple-600 mb-1">
                      ₹24k
                    </div>
                    <div className="text-xs font-bold text-gray-700">
                      Avg. Stipend
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl text-center">
                  <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <div className="text-xs font-bold text-gray-700">
                    Government Verified
                  </div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl text-center">
                  <Award className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                  <div className="text-xs font-bold text-gray-700">
                    PM Scheme Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
