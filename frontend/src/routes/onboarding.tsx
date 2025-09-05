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
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Your academic background",
      color: "from-blue-500 to-indigo-500",
    },
    { 
      number: 2, 
      title: "Skills", 
      icon: <Target className="w-6 h-6" />,
      description: "Your expertise areas",
      color: "from-green-500 to-emerald-500",
    },
    { 
      number: 3, 
      title: "Interests", 
      icon: <Heart className="w-6 h-6" />,
      description: "Industries you love",
      color: "from-purple-500 to-violet-500",
    },
    { 
      number: 4, 
      title: "Preferences", 
      icon: <MapPin className="w-6 h-6" />,
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
      // setUser({
      //   name: "Priya Sharma",
      //   email: "priya.sharma@example.com",
      //   ...formData,
      // });
      navigate({ to: "/dashboard" });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Your Educational
                <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Background
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                Help us understand your academic journey to find the perfect opportunities
              </p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-700 mb-4">
                Select Your Current Education Level
              </label>
              {educationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setFormData({ ...formData, education: option.value })
                  }
                  className={`group w-full p-6 text-left border-2 rounded-3xl transition-all duration-300 ${
                    formData.education === option.value
                      ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-lg transform -translate-y-1"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 hover:-translate-y-1 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{option.icon}</div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{option.value}</div>
                      <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                    </div>
                    {formData.education === option.value && (
                      <CheckCircle className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Field of Study (Optional)
              </label>
              <input
                type="text"
                value={formData.field}
                onChange={(e) =>
                  setFormData({ ...formData, field: e.target.value })
                }
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg shadow-inner"
                placeholder="e.g., Computer Science, Business Administration, etc."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Showcase Your
                <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                Select the skills that best represent your capabilities and expertise
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillOptions.map((skill) => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`group p-4 text-sm font-bold rounded-2xl border-2 transition-all duration-300 ${
                    formData.skills.includes(skill)
                      ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-lg transform -translate-y-1"
                      : "border-gray-200 hover:border-green-300 text-gray-700 hover:bg-green-50/50 hover:-translate-y-1 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>{skill}</span>
                    {formData.skills.includes(skill) && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-3xl border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-green-800 mb-1">Pro Tip!</p>
                  <p className="text-sm text-green-700">
                    Select 3-8 skills that best represent your abilities. Quality over quantity!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Your Career
                <span className="block bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                  Interests
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                Which industries and sectors excite you the most?
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`group p-4 text-sm font-bold rounded-2xl border-2 transition-all duration-300 ${
                    formData.interests.includes(interest)
                      ? "border-purple-500 bg-gradient-to-r from-purple-50 to-violet-50 text-purple-700 shadow-lg transform -translate-y-1"
                      : "border-gray-200 hover:border-purple-300 text-gray-700 hover:bg-purple-50/50 hover:-translate-y-1 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>{interest}</span>
                    {formData.interests.includes(interest) && (
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-6 rounded-3xl border border-purple-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-purple-800 mb-1">Smart Matching</p>
                  <p className="text-sm text-purple-700">
                    Our AI will use these interests to find internships that align with your passions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Final
                <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Preferences
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                Tell us about your location and experience preferences
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Preferred Work Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-lg shadow-inner"
                  placeholder="e.g., Mumbai, Maharashtra or Remote"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Previous Experience Level
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-lg shadow-inner bg-white"
                >
                  <option value="">Select your experience level</option>
                  <option value="none">🌱 No prior experience (Fresh start!)</option>
                  <option value="some">💡 Some project/freelance work</option>
                  <option value="internship">🎯 Previous internship experience</option>
                  <option value="part-time">💼 Part-time work experience</option>
                </select>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-3xl border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-orange-800 mb-1">Almost Ready!</p>
                  <p className="text-sm text-orange-700">
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Navigation */}
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
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Let's Build Your
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 bg-clip-text text-transparent">
                Perfect Profile
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Help our AI understand you better to find the most suitable internship opportunities
            </p>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200 mb-8">
            <div className="flex justify-between items-center mb-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center relative">
                  {index < steps.length - 1 && (
                    <div className="absolute top-6 left-8 w-16 md:w-24 h-1 bg-gray-200 -z-10">
                      <div 
                        className={`h-1 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-500 ${
                          currentStep > step.number ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  )}
                  
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                      currentStep >= step.number
                        ? `bg-gradient-to-r ${step.color} text-white transform scale-110`
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  
                  <div className="mt-3 text-center">
                    <div className={`text-sm font-bold ${
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
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
              <div className="text-center mt-3">
                <span className="text-sm font-bold text-gray-600">
                  Step {currentStep} of 4 Complete
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-12">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
            {renderStep()}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
              currentStep === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            }`}
          >
            <ChevronRight className="w-5 h-5 inline mr-2 rotate-180" />
            Previous
          </button>

          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Takes about 3 minutes</span>
          </div>

          <button
            onClick={handleNext}
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
          >
            {currentStep === 4 ? (
              <>
                Complete Setup
                <Rocket className="ml-2 w-5 h-5 group-hover:animate-pulse" />
              </>
            ) : (
              <>
                Next Step
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
            <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-xs font-bold text-gray-700">100% Secure</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
            <Smartphone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-xs font-bold text-gray-700">Mobile Ready</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
            <Languages className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-xs font-bold text-gray-700">Multi-Language</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl">
            <Award className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <div className="text-xs font-bold text-gray-700">PM Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
};
