import { useState, useEffect } from "react";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
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
  Zap,
  TrendingUp,
  Globe,
  Shield,
  Sparkles,
  Brain,
  Heart,
  Award,
  Rocket,
  IndianRupee,
  GraduationCap,
  Building,
  UserCheck,
  Clock,
  Smartphone,
  Languages,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";

import CountUp from "../components/CountUp";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const impactMetrics = [
    {
      icon: <Users className="w-6 h-6" />,
      number: (
        <div className="flex items-center justify-center">
          <CountUp to={120000} separator="," duration={2.5} />
          <span className="ml-1">+</span>
        </div>
      ),
      label: "Youth Empowered",
      description: "Across rural India",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Building className="w-6 h-6" />,
      number: (
        <div className="flex items-center justify-center">
          <CountUp to={5000} separator="," duration={2.5} delay={0.5} />
          <span className="ml-1">+</span>
        </div>
      ),
      label: "Partner Companies",
      description: "From startups to Fortune 500",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      number: (
        <div className="flex items-center justify-center">
          <CountUp to={750} separator="," duration={2.5} delay={1} />
          <span className="ml-1">+</span>
        </div>
      ),
      label: "Districts Covered",
      description: "Including tribal & remote areas",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <IndianRupee className="w-6 h-6" />,
      number: (
        <div className="flex items-center justify-center">
          <span className="mr-1">₹</span>
          <CountUp to={850} separator="," duration={2.5} delay={1.5} />
          <span className="ml-1">Cr+</span>
        </div>
      ),
      label: "Total Stipends",
      description: "Paid to interns nationwide",
      color: "from-orange-500 to-red-500",
    },
  ];

  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Smart Profile Analysis",
      description:
        "AI analyzes 50+ data points including skills, education, location, and aspirations to create your unique profile",
      benefits: [
        "Academic background assessment",
        "Skill gap analysis",
        "Career aspiration mapping",
      ],
      color: "from-purple-500 to-violet-600",
      dataPoints: <CountUp to={50} duration={2} delay={0.5} />,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Matching",
      description:
        "Advanced algorithms match you with internships that have 95% compatibility with your profile and goals",
      benefits: [
        "Location-based filtering",
        "Industry preference matching",
        "Skill requirement analysis",
      ],
      color: "from-blue-500 to-indigo-600",
      accuracy: <CountUp to={95} duration={2} delay={0.5} />,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Recommendations",
      description:
        "Get personalized internship suggestions in under 3 seconds, optimized for mobile and low-bandwidth areas",
      benefits: [
        "Real-time processing",
        "Offline capability",
        "Multi-language support",
      ],
      color: "from-amber-500 to-orange-600",
      speed: <CountUp to={3} duration={2} delay={0.5} />,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Success Prediction",
      description:
        "AI predicts your success probability for each internship, helping you make informed decisions",
      benefits: [
        "Success rate analysis",
        "Career growth prediction",
        "Skill development insights",
      ],
      color: "from-green-500 to-teal-600",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Jharkhand",
      background: "First-generation graduate",
      quote:
        "InternNexus helped me find my dream internship at a tech company. As someone from a tribal area, I never thought this was possible!",
      company: "TechCorp India",
      avatar: "PS",
    },
    {
      name: "Rahul Kumar",
      location: "Uttar Pradesh",
      background: "Rural background",
      quote:
        "The AI perfectly matched my skills with opportunities I didn't even know existed. Now I'm working at a Fortune 500 company!",
      company: "Global Solutions Ltd",
      avatar: "RK",
    },
    {
      name: "Sneha Patel",
      location: "Gujarat",
      background: "Engineering student",
      quote:
        "Simple interface, smart recommendations. Found my internship in just 2 clicks. The mobile app works perfectly even with slow internet.",
      company: "Innovation Labs",
      avatar: "SP",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Smart Onboarding",
      description: "Simple 3-minute setup that works on any device",
      icon: <UserCheck className="w-6 h-6" />,
      features: [
        "Multi-language support",
        "Voice input option",
        "Offline capability",
      ],
      duration: <CountUp to={3} duration={2} delay={0.5} />,
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Advanced algorithms analyze your unique profile",
      icon: <Brain className="w-6 h-6" />,
      features: [
        "50+ data points",
        "Regional considerations",
        "Skills assessment",
      ],
      dataPoints: <CountUp to={50} duration={2} delay={0.5} />,
    },
    {
      step: "03",
      title: "Perfect Matches",
      description: "Receive 3-5 highly compatible internship recommendations",
      icon: <Target className="w-6 h-6" />,
      features: [
        "95% accuracy rate",
        "Success prediction",
        "Growth potential analysis",
      ],
      matchCount: <CountUp to={5} duration={2} delay={0.5} />,
      accuracy: <CountUp to={95} duration={2} delay={1} />,
    },
    {
      step: "04",
      title: "Success Support",
      description: "Continuous guidance throughout your internship journey",
      icon: <Rocket className="w-6 h-6" />,
      features: ["Mentor connections", "Skill development", "Career guidance"],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
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
                <a
                  href="#impact"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Impact
                </a>
                <a
                  href="#ai-features"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  AI Features
                </a>
                <a
                  href="#process"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  How It Works
                </a>
                <a
                  href="#success"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Success Stories
                </a>
                <button
                  onClick={() => navigate({ to: "/login" })}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate({ to: "/register" })}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-sm"
                >
                  Start Your Journey
                  <Sparkles className="ml-2 w-4 h-4" />
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

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-orange-100 shadow-xl">
            <div className="px-4 pt-3 pb-4 space-y-3">
              <a
                href="#impact"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all text-sm"
              >
                Impact
              </a>
              <a
                href="#ai-features"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all text-sm"
              >
                AI Features
              </a>
              <a
                href="#process"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all text-sm"
              >
                How It Works
              </a>
              <a
                href="#success"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all text-sm"
              >
                Success Stories
              </a>
              <button
                onClick={() => navigate({ to: "/login" })}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all text-sm"
              >
                Login
              </button>
              <button
                onClick={() => navigate({ to: "/register" })}
                className="block w-full mt-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg text-sm"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Revolutionary Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-60 h-60 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          {/* Government Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-100 via-white to-green-100 border border-orange-200 px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🇮🇳</span>
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  Official PM Internship Scheme Partner
                </span>
                <Award className="w-4 h-4 text-amber-500" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Career Dreams
            </span>
            <span className="block">Into Reality</span>
          </h1>

          {/* Powerful Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            India's most advanced AI-powered internship platform connects
            <span className="font-bold text-orange-600"> 1.2 lakh+ youth </span>
            from rural areas, tribal districts, and remote colleges with
            <span className="font-bold text-green-600">
              {" "}
              life-changing opportunities
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate({ to: "/register" })}
              className="group bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-8 py-3 rounded-2xl font-bold text-base hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center"
            >
              <Rocket className="mr-2 w-5 h-5 group-hover:animate-pulse" />
              Start Your Journey Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate({ to: "/dashboard" })}
              className="group border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-2xl font-bold text-base hover:border-orange-500 hover:text-orange-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              <Activity className="mr-2 w-5 h-5" />
              Explore Demo
              <Sparkles className="ml-2 w-5 h-5 group-hover:animate-spin" />
            </button>
          </div>

          {/* Animated Impact Metrics */}
          <div id="impact" className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:border-transparent"
                style={{
                  background: `linear-gradient(135deg, white 0%, transparent 100%), linear-gradient(135deg, ${
                    metric.color.split(" ")[1]
                  } 0%, ${metric.color.split(" ")[3]} 100%)`,
                  backgroundBlendMode: "overlay",
                }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center mb-3 mx-auto text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {metric.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform">
                  {metric.number}
                </div>
                <div className="font-bold text-gray-800 mb-1 text-sm">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section
        id="ai-features"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold text-purple-800 text-sm">
                Powered by Advanced AI
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Intelligence That
              <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Changes Lives
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our cutting-edge AI doesn't just match jobs – it understands
              dreams, analyzes potential, and creates pathways to success for
              India's most underserved communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                  {feature.dataPoints && (
                    <span className="block text-base text-blue-600 font-normal">
                      Analyzes {feature.dataPoints}+ data points
                    </span>
                  )}
                  {feature.accuracy && (
                    <span className="block text-base text-blue-600 font-normal">
                      {feature.accuracy}% compatibility matching
                    </span>
                  )}
                  {feature.speed && (
                    <span className="block text-base text-amber-600 font-normal">
                      Under {feature.speed} seconds response time
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-base">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Process Section */}
      <section id="process" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold text-green-800 text-sm">
                Simple. Smart. Successful.
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Your Success Journey
              <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                In 4 Simple Steps
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Designed for India's diversity – works perfectly on any device, in
              multiple languages, even with slow internet.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-green-200 to-blue-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="group text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg font-black shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 min-h-[250px]">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3 text-gray-700 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                      {step.duration && (
                        <span className="block text-sm text-green-600 font-normal">
                          Just {step.duration} minutes
                        </span>
                      )}
                      {step.dataPoints && (
                        <span className="block text-sm text-blue-600 font-normal">
                          {step.dataPoints}+ data points analyzed
                        </span>
                      )}
                      {step.matchCount && (
                        <span className="block text-sm text-orange-600 font-normal">
                          Get 3-{step.matchCount} perfect matches
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                      {step.description}
                      {step.accuracy && (
                        <span className="block text-green-600 font-medium">
                          {step.accuracy}% accuracy rate
                        </span>
                      )}
                    </p>
                    <div className="space-y-1">
                      {step.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center text-xs text-gray-500"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section
        id="success"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full mb-4">
              <Heart className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold text-orange-800 text-sm">
                Real Stories, Real Impact
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Dreams Becoming
              <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From remote villages to corporate boardrooms – hear from young
              Indians whose lives were transformed by InternNexus.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 min-h-[300px]">
              <div className="text-center">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 mb-1 text-sm">
                    {testimonials[currentTestimonial].location} •{" "}
                    {testimonials[currentTestimonial].background}
                  </div>
                  <div className="text-sm font-semibold text-orange-600">
                    Now at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-black text-green-600 mb-2">
                <CountUp to={95} duration={3} delay={1} />%
              </div>
              <div className="text-gray-700 font-semibold text-sm">Success Rate</div>
              <div className="text-xs text-gray-500">
                Interns completing programs
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-black text-blue-600 mb-2">
                <CountUp to={78} duration={3} delay={1.5} />%
              </div>
              <div className="text-gray-700 font-semibold text-sm">Job Conversion</div>
              <div className="text-xs text-gray-500">
                Interns getting full-time offers
              </div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-black text-purple-600 mb-2 flex items-center justify-center">
                ₹<CountUp to={24} duration={3} delay={2} />k
              </div>
              <div className="text-gray-700 font-semibold text-sm">Average Stipend</div>
              <div className="text-xs text-gray-500">Monthly compensation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-white mr-2" />
            <span className="font-semibold text-white text-sm">
              Join the Revolution
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Your Dream Internship
            <span className="block">Awaits You</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Don't let location, background, or experience hold you back.
            <span className="font-bold"> Your potential is limitless.</span>
            <br />
            Let our AI help you discover it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate({ to: "/register" })}
              className="group bg-white text-orange-600 px-8 py-3 rounded-2xl font-bold text-base hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center"
            >
              <Rocket className="mr-2 w-5 h-5 group-hover:animate-pulse" />
              Start Your Journey Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate({ to: "/dashboard" })}
              className="group border-2 border-white/30 text-white px-8 py-3 rounded-2xl font-bold text-base hover:bg-white/10 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <Activity className="mr-2 w-5 h-5" />
              Explore Platform
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Shield className="w-6 h-6 text-white/80 mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">
                <CountUp to={100} duration={2} delay={2} />% Secure
              </div>
              <div className="text-white/70 text-xs">Government Verified</div>
            </div>
            <div>
              <Smartphone className="w-6 h-6 text-white/80 mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">Mobile First</div>
              <div className="text-white/70 text-xs">Works Anywhere</div>
            </div>
            <div>
              <Languages className="w-6 h-6 text-white/80 mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">Multi-Language</div>
              <div className="text-white/70 text-xs">
                <CountUp to={12} duration={2} delay={2.5} />+ Languages
              </div>
            </div>
            <div>
              <Clock className="w-6 h-6 text-white/80 mx-auto mb-2" />
              <div className="text-white font-semibold text-sm">
                <CountUp to={24} duration={2} delay={3} />/7 Support
              </div>
              <div className="text-white/70 text-xs">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">IN</span>
                </div>
                <div>
                  <span className="text-xl font-bold">InternNexus</span>
                  <div className="text-xs text-gray-400">
                    Powered by PM Internship Scheme
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 max-w-md text-sm">
                Empowering India's youth through AI-driven internship matching.
                From rural villages to global opportunities.
              </p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xs">🐦</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xs">📘</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xs">📸</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  How It Works
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Success Stories
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Partners
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-base font-semibold mb-3">Support</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-xs mb-3 md:mb-0">
                © 2025 InternNexus. A Government of India Initiative under PM
                Internship Scheme.
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  All systems operational
                </div>
                <div className="text-xs text-gray-400">
                  🇮🇳 Made in India with ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
