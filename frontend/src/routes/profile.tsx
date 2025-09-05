import { useNavigate } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
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
  Sparkles,
  Award,
  Edit3,
  Camera,
  Shield,
  Bell,
  Lock,
  Eye,
  Save,
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

const mockUser = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  education: "B.Tech Computer Science",
  location: "Mumbai, Maharashtra",
  skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
  interests: ["Technology", "Startups", "AI/ML"],
  joinedDate: "March 2024",
  completedApplications: 8,
  profileViews: 42,
  skillsEndorsed: 15,
};

// Profile Page Component
const ProfilePage = () => {
  const user = mockUser;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    education: user?.education || "",
    location: user?.location || "",
    skills: user?.skills || [],
    interests: user?.interests || [],
  });

  const handleSave = () => {
    // setUser(editForm);
    setIsEditing(false);
  };

  const profileStats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: user.completedApplications,
      label: "Applications",
      description: "Submitted this month",
      color: "from-orange-400 to-pink-500",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      number: user.profileViews,
      label: "Profile Views",
      description: "In the last 30 days",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: user.skillsEndorsed,
      label: "Skills Endorsed",
      description: "By colleagues",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "95%",
      label: "Profile Score",
      description: "Completion rate",
      color: "from-purple-400 to-violet-500",
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
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate({ to: "/profile" })}
                  className="text-orange-600 hover:text-orange-700 transition-colors font-bold border-b-2 border-orange-600"
                >
                  Profile
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 via-pink-400 to-green-400 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">
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
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="flex items-center space-x-3 pb-4 border-b border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 via-pink-400 to-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
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
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
              >
                Dashboard
              </button>
              
              <button
                onClick={() => {
                  navigate({ to: "/profile" });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-orange-600 font-bold hover:bg-orange-50 rounded-xl transition-all"
              >
                Profile
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header Section */}
        <div className="mb-12">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Cover Section */}
            <div className="h-48 bg-gradient-to-r from-orange-500 via-pink-500 to-green-500 relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-4 right-4">
                <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="px-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 relative">
                <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-orange-400 via-pink-400 to-green-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <span className="text-4xl font-bold text-white">
                        {user?.name?.charAt(0)}
                      </span>
                    </div>
                    <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* User Info */}
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                      {user?.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-1">{user?.education}</p>
                    <p className="text-gray-500 flex items-center justify-center md:justify-start">
                      <MapPin className="w-4 h-4 mr-1" />
                      {user?.location}
                    </p>
                    <div className="mt-3 flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined {user?.joinedDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-0">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg ${
                      isEditing
                        ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        : "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-xl transform hover:-translate-y-1"
                    }`}
                  >
                    <Edit3 className="w-5 h-5 inline mr-2" />
                    {isEditing ? "Cancel Edit" : "Edit Profile"}
                  </button>
                  <button className="px-6 py-3 bg-white text-gray-700 rounded-2xl font-bold shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
                    <Settings className="w-5 h-5 inline mr-2" />
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {profileStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:border-transparent relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform text-center">
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

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">About</h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                )}
              </div>

              {isEditing ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) =>
                          setEditForm({ ...editForm, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Education
                      </label>
                      <input
                        type="text"
                        value={editForm.education}
                        onChange={(e) =>
                          setEditForm({ ...editForm, education: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) =>
                          setEditForm({ ...editForm, location: e.target.value })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Save className="w-5 h-5 inline mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Personal Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-500 mb-1">
                            Full Name
                          </label>
                          <p className="text-gray-900 font-medium">
                            {user?.name}
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-500 mb-1">
                            Email
                          </label>
                          <p className="text-gray-900">{user?.email}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-500 mb-1">
                            Location
                          </label>
                          <p className="text-gray-900">{user?.location}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Education
                      </h3>
                      <div>
                        <label className="block text-sm font-bold text-gray-500 mb-1">
                          Current Education
                        </label>
                        <p className="text-gray-900 font-medium">
                          {user?.education}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Skills Section */}
            {user?.skills && user.skills.length > 0 && (
              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-sm font-bold text-blue-800">
                      {user.skills.length} Skills
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="group bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-3 rounded-2xl text-sm font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Interests Section */}
            {user?.interests && user.interests.length > 0 && (
              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Interests</h3>
                  <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                    <Heart className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-sm font-bold text-green-800">
                      {user.interests.length} Interests
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {user.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="group bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-3 rounded-2xl text-sm font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-green-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button
                  onClick={() => navigate({ to: "/dashboard" })}
                  className="w-full flex items-center px-4 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Home className="w-5 h-5 mr-3" />
                  Go to Dashboard
                </button>
                <button className="w-full flex items-center px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <Settings className="w-5 h-5 mr-3" />
                  Account Settings
                </button>
                <button className="w-full flex items-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <Bell className="w-5 h-5 mr-3" />
                  Notifications
                </button>
                <button className="w-full flex items-center px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <Shield className="w-5 h-5 mr-3" />
                  Privacy Settings
                </button>
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Password</span>
                  <button className="text-orange-600 hover:text-orange-700 font-bold">
                    Change
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Two-Factor Auth</span>
                  <div className="w-10 h-6 bg-green-500 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Login Alerts</span>
                  <div className="w-10 h-6 bg-green-500 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Danger Zone</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-red-50 text-red-600 border border-red-200 rounded-2xl font-bold hover:bg-red-100 transition-all duration-300">
                  <LogOut className="w-5 h-5 mr-3" />
                  Sign Out
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 bg-red-100 text-red-700 border border-red-300 rounded-2xl font-bold hover:bg-red-200 transition-all duration-300">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
