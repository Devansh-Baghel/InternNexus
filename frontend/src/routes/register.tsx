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
  Smartphone,
  Languages,
  Clock,
  Award,
  CheckCircle,
  Rocket,
  Target,
} from 'lucide-react';

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

// Register Page Component
const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({ to: "/onboarding" });
  };

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-Powered Matching",
      description: "95% accuracy in internship recommendations",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Track Career",
      description: "78% job conversion rate for our interns",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Support",
      description: "24/7 guidance throughout your journey",
      color: "from-purple-500 to-violet-500",
    },
  ];

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
                onClick={() => navigate({ to: "/login" })}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 via-pink-100 to-green-100 border border-orange-200 px-6 py-3 rounded-full shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Join 1.2 Lakh+ Students Already Transforming Their Careers
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-black text-3xl">IN</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                    Start Your
                    <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 bg-clip-text text-transparent">
                      Dream Journey
                    </span>
                  </h1>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Create your account and unlock unlimited opportunities
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner text-lg"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
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
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner text-lg"
                        placeholder="Create a strong password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                        className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner text-lg"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="w-5 h-5 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 mt-1"
                      required
                    />
                    <label className="text-sm text-gray-600 font-medium leading-relaxed">
                      I agree to the{" "}
                      <button type="button" className="text-orange-600 hover:text-orange-700 font-bold">
                        Terms of Service
                      </button>{" "}
                      and{" "}
                      <button type="button" className="text-orange-600 hover:text-orange-700 font-bold">
                        Privacy Policy
                      </button>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-4 rounded-2xl font-black text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    Create My Account
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 font-medium">
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
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Why Choose
                  <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    InternNexus?
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Join thousands of students who've transformed their careers
                </p>
              </div>

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Success Stats */}
              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Success Story
                </h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-green-600 mb-1">95%</div>
                    <div className="text-sm font-bold text-gray-700">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-600 mb-1">78%</div>
                    <div className="text-sm font-bold text-gray-700">Job Conversion</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-purple-600 mb-1">₹24k</div>
                    <div className="text-sm font-bold text-gray-700">Avg. Stipend</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl text-center">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-700">Government Verified</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl text-center">
                  <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-700">PM Scheme Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
