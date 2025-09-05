import { useState } from "react";
import {
  RouterProvider,
  Outlet,
  useNavigate,
  useParams,
  createFileRoute,
} from "@tanstack/react-router";
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
} from "lucide-react";

// Mock user data
const mockUser = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  education: "B.Tech Computer Science",
  location: "Mumbai, Maharashtra",
  skills: ["JavaScript", "React", "Node.js"],
  interests: ["Technology", "Startups"],
};

// Mock internship data
export const mockInternships = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Tech Innovations Pvt Ltd",
    location: "Mumbai, Maharashtra",
    duration: "3 months",
    stipend: "₹15,000/month",
    skills: ["JavaScript", "React", "Node.js"],
    description:
      "Work on cutting-edge web applications and gain hands-on experience in full-stack development.",
    rating: 4.8,
    applicants: 45,
    logo: "🚀",
    remote: false,
    featured: true,
  },
  {
    id: 2,
    title: "Digital Marketing Intern",
    company: "Creative Solutions",
    location: "Pune, Maharashtra",
    duration: "2 months",
    stipend: "₹12,000/month",
    skills: ["Social Media", "Content Writing", "Analytics"],
    description:
      "Learn digital marketing strategies and execute campaigns for real clients.",
    rating: 4.6,
    applicants: 32,
    logo: "📊",
    remote: true,
    featured: false,
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Design Studio",
    location: "Bangalore, Karnataka",
    duration: "4 months",
    stipend: "₹18,000/month",
    skills: ["Figma", "Adobe XD", "User Research"],
    description:
      "Create beautiful and functional user interfaces for mobile and web applications.",
    rating: 4.9,
    applicants: 28,
    logo: "🎨",
    remote: true,
    featured: true,
  },
  {
    id: 4,
    title: "Data Analytics Intern",
    company: "DataCorp Analytics",
    location: "Hyderabad, Telangana",
    duration: "3 months",
    stipend: "₹16,000/month",
    skills: ["Python", "SQL", "Excel"],
    description:
      "Analyze large datasets and create insights for business decision making.",
    rating: 4.7,
    applicants: 38,
    logo: "📈",
    remote: false,
    featured: false,
  },
  {
    id: 5,
    title: "Content Writing Intern",
    company: "Media House Inc",
    location: "Delhi, NCR",
    duration: "2 months",
    stipend: "₹10,000/month",
    skills: ["Writing", "SEO", "Research"],
    description:
      "Create engaging content for websites, blogs, and social media platforms.",
    rating: 4.5,
    applicants: 52,
    logo: "✍️",
    remote: true,
    featured: false,
  },
];

// Root layout component that provides user state and renders the Outlet
function RootLayout() {
  const [user, setUser] = useState(null);

  return <Outlet context={{ user, setUser }} />;
}

export const Route = createFileRoute("/l2")({
  component: LandingPage,
});

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "AI-Powered Matching",
      description:
        "Smart algorithm matches you with the perfect internships based on your skills and interests",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Trusted Companies",
      description:
        "Connect with verified companies offering genuine internship opportunities",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Location-Based",
      description:
        "Find internships in your preferred location or remote opportunities",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Skill Development",
      description:
        "Gain real-world experience and develop skills that employers value",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Students Placed" },
    { number: "2,500+", label: "Companies" },
    { number: "500+", label: "Cities Covered" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IN</span>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  InternNexus
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  About
                </a>
                <button
                  onClick={() => navigate({ to: "/login" })}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate({ to: "/register" })}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Register
                </button>
                <button
                  onClick={() => navigate({ to: "/dashboard" })}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigate({ to: "/profile" })}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate({ to: "/onboarding" })}
                  className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Onboarding
                </button>
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                About
              </a>
              <button
                onClick={() => navigate({ to: "/login" })}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Login
              </button>
              <button
                onClick={() => navigate({ to: "/register" })}
                className="block w-full mt-2 bg-gradient-to-r from-orange-500 to-green-500 text-white px-3 py-2 rounded-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-orange-100 to-green-100 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-orange-700">
                  🇮🇳 Powered by PM Internship Scheme
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                Internship Match
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered recommendations connect you with internships that match
              your skills, interests, and aspirations. Start your career journey
              with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => navigate({ to: "/register" })}
                className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-200">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose InternNexus?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our intelligent platform simplifies your internship search with
              cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who found their dream internships
              through our platform
            </p>
            <button
              onClick={() => navigate({ to: "/register" })}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">IN</span>
            </div>
            <span className="ml-3 text-2xl font-bold">InternNexus</span>
          </div>
          <div className="text-center text-gray-400">
            <p>
              &copy; 2025 InternNexus. Part of PM Internship Scheme Initiative.
            </p>
            <p className="mt-2">
              Empowering India's youth through technology and opportunity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// // Define routes
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       {
//         path: '/',
//         element: <LandingPage />
//       },
//       {
//         path: '/login',
//         element: <LoginPage />
//       },
//       {
//         path: '/register',
//         element: <RegisterPage />
//       },
//       {
//         path: '/onboarding',
//         element: <OnboardingPage />
//       },
//       {
//         path: '/dashboard',
//         element: <Dashboard />
//       },
//       {
//         path: '/profile',
//         element: <ProfilePage />
//       },
//       {
//         path: '/internship/:internshipId',
//         element: <InternshipDetails />
//       }
//     ]
//   }
// ]);

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <RouterProvider router={router} />
    </div>
  );
}
