import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight,
  Users,
  Target,
  MapPin,
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
  Heart,
  ExternalLink,
  Calendar,
  Clock,
  Briefcase,
  GraduationCap,
  Phone,
  Mail,
  Home,
  Building,
  Award,
  DollarSign,
  Eye,
  Share2,
  Bookmark,
  Shield,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/internship/$internshipId")({
  component: InternshipDetails,
});

// Mock internship data (you can replace this with your actual data)
const mockInternships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp India",
    logo: "🚀",
    description: "Join our dynamic team to build cutting-edge web applications using React, TypeScript, and modern development practices. You'll work on real projects that impact millions of users.",
    location: "Mumbai, Maharashtra",
    duration: "3 months",
    stipend: "₹25,000/month",
    rating: 4.8,
    applicants: 156,
    featured: true,
    remote: false,
    skills: ["React", "JavaScript", "HTML/CSS", "TypeScript", "Git"],
    companySize: "500+ employees",
    industry: "Technology",
    founded: "2015",
  },
];

// Internship Card Component
export const InternshipCard = ({ internship, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{internship.logo}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {internship.title}
                  </h3>
                  {internship.featured && (
                    <span className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold border border-orange-200">
                      Featured
                    </span>
                  )}
                  {internship.remote && (
                    <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
                      Remote
                    </span>
                  )}
                </div>
                <p className="text-gray-600 font-semibold">
                  {internship.company}
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {internship.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {internship.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-2 rounded-full text-sm font-bold border border-blue-200 hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-orange-500" />
              {internship.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-500" />
              {internship.duration}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              {internship.rating} ({internship.applicants} applicants)
            </div>
            <div className="flex items-center text-green-600 font-bold">
              <DollarSign className="w-4 h-4 mr-1" />
              {internship.stipend}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex items-center space-x-2 mb-4">
            <button className="p-3 text-gray-400 hover:text-red-500 transition-colors bg-white/50 rounded-full hover:bg-red-50">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 text-gray-400 hover:text-blue-500 transition-colors bg-white/50 rounded-full hover:bg-blue-50">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <button className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            Apply Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Internship Details Component
const InternshipDetails = () => {
  const { internshipId } = Route.useParams();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const internship = mockInternships.find((i) => i.id === Number(internshipId)) || mockInternships[0];
  const [hasApplied, setHasApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleApply = () => {
    setHasApplied(true);
  };

  const mockUser = {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    location: "Mumbai, Maharashtra",
  };

  const companyStats = [
    {
      icon: <Building className="w-8 h-8" />,
      number: internship.companySize,
      label: "Company Size",
      description: "Growing team",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: internship.industry,
      label: "Industry",
      description: "Leading sector",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: `Since ${internship.founded}`,
      label: "Established",
      description: "Years of experience",
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: `${internship.rating}/5`,
      label: "Rating",
      description: "Employee satisfaction",
      color: "from-orange-400 to-pink-500",
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

      {/* Enhanced Navigation with Glass Effect */}
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

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => navigate({ to: "/dashboard" })}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  <ChevronRight className="w-5 h-5 mr-2 rotate-180" />
                  Back to Dashboard
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 via-pink-400 to-green-400 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">
                      {mockUser?.name?.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">
                      {mockUser?.name}
                    </div>
                    <div className="text-xs text-gray-500">{mockUser?.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-orange-100 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <button
                onClick={() => {
                  navigate({ to: "/dashboard" });
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
              >
                <ChevronRight className="w-5 h-5 mr-2 rotate-180" />
                Back to Dashboard
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Company Header */}
            <div className="h-48 bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isSaved 
                      ? 'bg-white/30 text-white' 
                      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                  }`}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Internship Info */}
            <div className="px-8 pb-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between -mt-16 relative">
                <div className="flex flex-col lg:flex-row lg:items-end space-y-4 lg:space-y-0 lg:space-x-6">
                  {/* Company Logo */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white">
                      <span className="text-6xl">{internship.logo}</span>
                    </div>
                    {internship.featured && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-full shadow-lg">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Internship Details */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                      <h1 className="text-3xl lg:text-4xl font-black text-gray-900">
                        {internship.title}
                      </h1>
                      {internship.remote && (
                        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold border border-green-200">
                          Remote
                        </span>
                      )}
                    </div>
                    <p className="text-xl font-bold text-gray-700 mb-2">{internship.company}</p>
                    <p className="text-gray-500 flex items-center justify-center lg:justify-start mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {internship.location}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm">
                      <span className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {internship.duration}
                      </span>
                      <span className="flex items-center text-green-600 font-bold">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {internship.stipend}
                      </span>
                      <span className="flex items-center text-yellow-600">
                        <Star className="w-4 h-4 mr-1" />
                        {internship.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0">
                  <button className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-bold shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Save
                  </button>
                  {!hasApplied ? (
                    <button
                      onClick={handleApply}
                      className="px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Apply Now
                    </button>
                  ) : (
                    <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold shadow-xl flex items-center justify-center cursor-default">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Applied!
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:border-transparent relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform text-center text-lg">
                {stat.number}
              </div>
              <div className="font-bold text-gray-800 mb-1 text-center">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 text-center">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Internship</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {internship.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                This internship offers an excellent opportunity to gain hands-on experience in a dynamic work environment. 
                You'll work closely with experienced professionals and contribute to real projects that make a meaningful impact. 
                We provide mentorship, learning resources, and the chance to build valuable industry connections.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Required Skills</h3>
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full">
                  <Target className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="text-sm font-bold text-blue-800">
                    {internship.skills.length} Skills
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {internship.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-3 rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Industry-standard tools and technologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Professional communication and teamwork skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Project management and time management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Real-world problem-solving techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Career development and networking opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Application Status */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Status</h3>
              
              {hasApplied ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    We'll notify you about the next steps via email within 2-3 business days.
                  </p>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-2xl border border-green-200">
                    <p className="text-sm text-green-700 font-medium">
                      🎉 Your application is under review. Good luck!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-green-700 mb-2">
                      {internship.stipend}
                    </div>
                    <div className="text-green-600 font-bold text-lg">
                      Monthly Stipend
                    </div>
                  </div>
                  
                  <button
                    onClick={handleApply}
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Apply Now
                  </button>
                  
                  <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-4 rounded-2xl border border-orange-200">
                    <p className="text-sm text-orange-700 font-medium text-center">
                      ⚡ Quick application process - takes less than 5 minutes!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Internship Details */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Details</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-gray-400 mr-4" />
                  <div>
                    <div className="font-bold text-gray-900">Duration</div>
                    <div className="text-gray-600">{internship.duration}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-gray-400 mr-4" />
                  <div>
                    <div className="font-bold text-gray-900">Start Date</div>
                    <div className="text-gray-600">Flexible</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-4" />
                  <div>
                    <div className="font-bold text-gray-900">Company Rating</div>
                    <div className="text-gray-600">{internship.rating} / 5.0</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="w-6 h-6 text-gray-400 mr-4" />
                  <div>
                    <div className="font-bold text-gray-900">Applicants</div>
                    <div className="text-gray-600">{internship.applicants} applied</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Contact */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Company Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Email</div>
                    <div className="text-gray-600">careers@techcorp.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Phone</div>
                    <div className="text-gray-600">+91 12345 67890</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This?</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Verified Company</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-yellow-600 mr-3" />
                  <span className="text-gray-700 font-medium">Top Rated Internship</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">High Success Rate</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700 font-medium">Great Team Culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
