import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  Shield,
  Smartphone,
  Languages,
  Clock,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

// Login Page Component
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // setUser({
    //   name: "Priya Sharma",
    //   email: email,
    //   education: "B.Tech Computer Science",
    //   location: "Mumbai, Maharashtra",
    // });
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">IN</span>
                </div>
                <div className="ml-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    InternNexus
                  </span>
                  <div className="text-xs text-gray-500 font-medium">
                    Powered by PM Scheme
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => navigate({ to: "/" })}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate({ to: "/register" })}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Welcome Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 via-pink-100 to-green-100 border border-orange-200 px-6 py-3 rounded-full shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Welcome Back to InternNexus
              </span>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-black text-3xl">IN</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Welcome
                <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 bg-clip-text text-transparent">
                  Back! 👋
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Continue your journey to find the perfect internship
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner text-lg"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner text-lg"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-4 rounded-2xl font-black text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Sign In to Your Account
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 font-medium">
                Don't have an account?{" "}
                <button
                  onClick={() => navigate({ to: "/register" })}
                  className="font-bold text-transparent bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text hover:from-orange-700 hover:to-pink-700 transition-all duration-300"
                >
                  Create one now →
                </button>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
              <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-gray-700">100% Secure</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
              <Smartphone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-gray-700">
                Mobile Ready
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
              <Languages className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-gray-700">
                Multi-Language
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
              <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="text-xs font-bold text-gray-700">
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
