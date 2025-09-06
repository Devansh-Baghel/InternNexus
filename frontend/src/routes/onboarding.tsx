import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { GraduationCap, Heart, MapPin, Target, Sparkles, Brain, Rocket, Award } from "lucide-react";
import { useState } from "react";
import {
  ChevronRight,
  Users,
  BookOpen,
  Star,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  User,
  Settings,
  LogOut,
  Search,
  Filter,
  ExternalLink,
  Calendar,
  Clock,
  Briefcase,
  Phone,
  Mail,
  Home,
  Shield,
  Languages,
  Smartphone,
} from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

// Onboarding Page Component
const OnboardingPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    education: "",
    field: "",
    skills: [],
    interests: [],
    location: "",
    experience: "",
  });

  const steps = [
    {
      number: 1,
      title: "Education",
      icon: <GraduationCap className="w-4 h-4" />,
      description: "Your academic background",
      color: "from-blue-500 to-indigo-500",
    },
    { 
      number: 2, 
      title: "Skills", 
      icon: <Target className="w-4 h-4" />,
      description: "Your expertise areas",
      color: "from-green-500 to-emerald-500",
    },
    { 
      number: 3, 
      title: "Interests", 
      icon: <Heart className="w-4 h-4" />,
      description: "Industries you love",
      color: "from-purple-500 to-violet-500",
    },
    { 
      number: 4, 
      title: "Preferences", 
      icon: <MapPin className="w-4 h-4" />,
      description: "Location & experience",
      color: "from-orange-500 to-pink-500",
    },
  ];

  const educationOptions = [
    { 
      value: "High School/12th Grade", 
      icon: "🎓", 
      description: "Secondary education completed" 
    },
    { 
      value: "Diploma", 
      icon: "📜", 
      description: "Technical or vocational training" 
    },
    { 
      value: "Bachelor's Degree", 
      icon: "🎯", 
      description: "Undergraduate studies" 
    },
    { 
      value: "Master's Degree", 
      icon: "🚀", 
      description: "Postgraduate education" 
    },
    { 
      value: "PhD", 
      icon: "🔬", 
      description: "Doctoral research" 
    },
  ];

  const skillOptions = [
    "JavaScript", "Python", "Java", "React", "Node.js", "SQL",
    "HTML/CSS", "Data Analysis", "Digital Marketing", "Content Writing",
    "Graphic Design", "UI/UX Design", "Project Management", "Communication",
    "Leadership", "Machine Learning", "Cloud Computing", "Mobile Development"
  ];

  const interestOptions = [
    "Technology", "Marketing", "Finance", "Healthcare", "Education",
    "Media", "Startups", "Non-profit", "Government", "Research",
    "Sales", "HR", "AI/ML", "Sustainability", "Gaming", "E-commerce"
  ];

  const handleSkillToggle = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate({ to: "/dashboard" });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your Educational
                <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Background
                </span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Help us understand your academic journey to find the perfect opportunities
              </p>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-gray-700 mb-3">
                Select Your Current Education Level
              </label>
              {educationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setFormData({ ...formData, education: option.value })
                  }
                  className={`group w-full p-4 text-left border-2 rounded-2xl transition-all duration-300 ${
                    formData.education === option.value
                      ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md transform -translate-y-1"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 hover:-translate-y-1 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{option.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{option.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{option.description}</div>
                    </div>
                    {formData.education === option.value && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Field of Study (Optional)
              </label>
              <input
                type="text"
                value={formData.field}
                onChange={(e) =>
                  setFormData({ ...formData, field: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm shadow-inner"
                placeholder="e.g., Computer Science, Business Administration, etc."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Showcase Your
                <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Select the skills that best represent your capabilities and expertise
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillOptions.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`group p-3 text-xs font-bold rounded-xl border-2 transition-all duration-300 ${
                    formData.skills.includes(skill)
                      ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-md transform -translate-y-1"
                      : "border-gray-200 hover:border-green-300 text-gray-700 hover:bg-green-50/50 hover:-translate-y-1 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>{skill}</span>
                    {formData.skills.includes(skill) && (
                      <CheckCircle className="w-3 h-3 text-green-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-2xl border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-green-800 mb-1 text-sm">Pro Tip!</p>
                  <p className="text-xs text-green-700">
                    Select 3-8 skills that best represent your abilities. Quality over quantity!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your Career
                <span className="block bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Interests
                </span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Which industries and sectors excite you the most?
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`group p-3 text-xs font-bold rounded-xl border-2 transition-all duration-300 ${
                    formData.interests.includes(interest)
                      ? "border-purple-500 bg-gradient-to-r from-purple-50 to-violet-50 text-purple-700 shadow-md transform -translate-y-1"
                      : "border-gray-200 hover:border-purple-300 text-gray-700 hover:bg-purple-50/50 hover:-translate-y-1 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>{interest}</span>
                    {formData.interests.includes(interest) && (
                      <CheckCircle className="w-3 h-3 text-purple-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-4 rounded-2xl border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-purple-800 mb-1 text-sm">Smart Matching</p>
                  <p className="text-xs text-purple-700">
                    Our AI will use these interests to find internships that align with your passions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Final
                <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Preferences
                </span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tell us about your location and experience preferences
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Preferred Work Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-sm shadow-inner"
                  placeholder="e.g., Mumbai, Maharashtra or Remote"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Previous Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-sm shadow-inner bg-white"
                >
                  <option value="">Select your experience level</option>
                  <option value="none">🌱 No prior experience (Fresh start!)</option>
                  <option value="some">💡 Some project/freelance work</option>
                  <option value="internship">🎯 Previous internship experience</option>
                  <option value="part-time">💼 Part-time work experience</option>
                </select>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-4 rounded-2xl border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-orange-800 mb-1 text-sm">Almost Ready!</p>
                  <p className="text-xs text-orange-700">
                    You're one step away from discovering amazing internship opportunities tailored just for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Navigation */}
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
                    Setup Your Profile
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-gray-600 font-medium">Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Section */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Let's Build Your
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 bg-clip-text text-transparent">
                Perfect Profile
              </span>
            </h1>
            <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Help our AI understand you better to find the most suitable internship opportunities
            </p>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center relative">
                  {index < steps.length - 1 && (
                    <div className="absolute top-5 left-6 w-12 md:w-16 h-0.5 bg-gray-200 -z-10">
                      <div 
                        className={`h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-500 ${
                          currentStep > step.number ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  )}
                  
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      currentStep >= step.number
                        ? `bg-gradient-to-r ${step.color} text-white transform scale-105`
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  
                  <div className="mt-2 text-center">
                    <div className={`text-xs font-bold ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 hidden md:block">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
              <div className="text-center mt-2">
                <span className="text-xs font-bold text-gray-600">
                  Step {currentStep} of 4 Complete
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-10">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
            {renderStep()}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentStep === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            }`}
          >
            <ChevronRight className="w-4 h-4 inline mr-2 rotate-180" />
            Previous
          </button>

          <div className="hidden md:flex items-center space-x-2 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>Takes about 3 minutes</span>
          </div>

          <button
            onClick={handleNext}
            className="group px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
          >
            {currentStep === 4 ? (
              <>
                Complete Setup
                <Rocket className="ml-2 w-4 h-4 group-hover:animate-pulse" />
              </>
            ) : (
              <>
                Next Step
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl">
            <Shield className="w-5 h-5 text-green-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-gray-700">100% Secure</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl">
            <Smartphone className="w-5 h-5 text-blue-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-gray-700">Mobile Ready</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl">
            <Languages className="w-5 h-5 text-purple-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-gray-700">Multi-Language</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl">
            <Award className="w-5 h-5 text-orange-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-gray-700">PM Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
};
