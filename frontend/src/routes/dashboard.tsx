import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { mockInternships } from "../utils/utils";
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
  Sparkles,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import { InternshipCard } from "./internship.$internshipId";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

const mockUser = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  education: "B.Tech Computer Science",
  location: "Mumbai, Maharashtra",
  skills: ["JavaScript", "React", "Node.js"],
  interests: ["Technology", "Startups"],
};

// Dashboard Component
const Dashboard = () => {
  const user = mockUser;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRemote, setFilterRemote] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredInternships = mockInternships.filter((internship) => {
    const matchesSearch =
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRemote = !filterRemote || internship.remote;
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "featured" && internship.featured);

    return matchesSearch && matchesRemote && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Navigation with Glass Effect */}
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

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => navigate({ to: "/dashboard" })}
                  className="text-orange-600 hover:text-orange-700 transition-colors font-bold border-b-2 border-orange-600"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate({ to: "/profile" })}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Profile
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-400 via-pink-400 to-green-400 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-sm">
                      {user?.name?.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">
                      {user?.name}
                    </div>
                    <div className="text-xs text-gray-500">{user?.location}</div>
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
            <div className="px-4 pt-3 pb-4 space-y-3">
              <div className="flex items-center space-x-3 pb-3 border-b border-orange-100">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 via-pink-400 to-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">
                    {user?.name?.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{user?.name}</div>
                  <div className="text-sm text-gray-500">{user?.email}</div>
                  <div className="text-xs text-gray-400">{user?.location}</div>
                </div>
              </div>
              
              <button
                onClick={() => {
                  navigate({ to: "/dashboard" });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-orange-600 font-bold hover:bg-orange-50 rounded-xl transition-all"
              >
                Dashboard
              </button>
              
              <button
                onClick={() => {
                  navigate({ to: "/profile" });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
              >
                Profile
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 via-pink-100 to-green-100 border border-orange-200 px-4 py-2 rounded-full shadow-lg mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center mr-2">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Your Personal Dashboard
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight">
            Welcome back,
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 bg-clip-text text-transparent">
              {user?.name || "User"}! 👋
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here are your personalized internship recommendations powered by our 
            <span className="font-bold text-orange-600"> AI engine</span>
          </p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="group bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-orange-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:border-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-3 mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-1 group-hover:scale-105 transition-transform text-center">
              5
            </div>
            <div className="font-bold text-gray-800 mb-1 text-center text-sm">
              Smart Recommendations
            </div>
            <div className="text-xs text-gray-600 text-center">
              AI-powered matches
            </div>
          </div>

          <div className="group bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-green-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:border-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-3 mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-1 group-hover:scale-105 transition-transform text-center">
              2
            </div>
            <div className="font-bold text-gray-800 mb-1 text-center text-sm">
              Applications Sent
            </div>
            <div className="text-xs text-gray-600 text-center">
              In progress
            </div>
          </div>

          <div className="group bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-blue-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:border-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-3 mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-1 group-hover:scale-105 transition-transform text-center">
              3
            </div>
            <div className="font-bold text-gray-800 mb-1 text-center text-sm">
              Interview Invites
            </div>
            <div className="text-xs text-gray-600 text-center">
              Scheduled
            </div>
          </div>

          <div className="group bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-purple-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:border-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mb-3 mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Star className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-1 group-hover:scale-105 transition-transform text-center">
              95%
            </div>
            <div className="font-bold text-gray-800 mb-1 text-center text-sm">
              Profile Match
            </div>
            <div className="text-xs text-gray-600 text-center">
              Compatibility score
            </div>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search internships by role, company, or skills..."
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-white shadow-inner"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setSelectedFilter(
                    selectedFilter === "all" ? "featured" : "all"
                  )
                }
                className={`group px-4 py-3 rounded-xl font-bold transition-all duration-300 flex items-center shadow-lg ${
                  selectedFilter === "featured"
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white transform -translate-y-1 shadow-2xl"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:-translate-y-1"
                }`}
              >
                <Star className={`w-4 h-4 mr-2 ${selectedFilter === "featured" ? "animate-pulse" : ""}`} />
                Featured
              </button>

              <button
                onClick={() => setFilterRemote(!filterRemote)}
                className={`group px-4 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg ${
                  filterRemote
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white transform -translate-y-1 shadow-2xl"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:-translate-y-1"
                }`}
              >
                <Zap className={`w-4 h-4 mr-2 ${filterRemote ? "animate-pulse" : ""}`} />
                Remote Only
              </button>
            </div>
          </div>
        </div>

        {/* Internship Cards */}
        <div className="space-y-6">
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              onClick={() =>
                navigate({
                  to: "/internship/$internshipId",
                  params: { internshipId: internship.id },
                })
              }
              className="group bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer hover:border-orange-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <InternshipCard
                internship={internship}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No internships found
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or filter criteria to discover more opportunities
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterRemote(false);
                setSelectedFilter("all");
              }}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
