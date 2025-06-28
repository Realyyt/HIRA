import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Users, 
  Search, 
  Lock, 
  Video, 
  Share2, 
  Shield, 
  Smartphone, 
  Zap,
  Eye,
  Bell,
  BarChart3,
  UserCheck,
  Hash,
  Heart,
  Repeat,
  AtSign,
  Camera,
  Mic,
  FileText,
  Cloud,
  Timer,
  Settings,
  Star,
  Download,
  PlayCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  TrendingUp,
  Award,
  ChevronDown,
  Menu,
  X,
  Apple,
  Play,
  Image,
  Folder,
  UserPlus,
  MessageSquare,
  Phone,
  Archive
} from 'lucide-react';
//checking
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Core Social Features",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-[#A672FF] to-[#C9A6FF]",
      items: [
        {
          name: "Public Feeds & Threaded Posts",
          description: "Create, reply to, like, repost, and share threaded posts. Features include trending hashtags, mentions, user tagging, and advanced search for posts, users, and hashtags.",
          icon: <MessageSquare className="w-6 h-6" />
        },
        {
          name: "User Profiles",
          description: "Customizable bios, profile pictures, banners, verified handles, follow/follow-back system, and public post history with engagement stats.",
          icon: <UserCheck className="w-6 h-6" />
        },
        {
          name: "Content Discovery",
          description: "Algorithmic recommendations for users and posts, plus an Explore tab for trending content and communities.",
          icon: <Search className="w-6 h-6" />
        }
      ]
    },
    {
      title: "Private & Group Messaging",
      icon: <Lock className="w-8 h-8" />,
      gradient: "from-[#3DDAD7] to-[#A672FF]",
      items: [
        {
          name: "1:1 & Group Chats",
          description: "End-to-end encrypted messaging for individuals and groups. Role-based access in groups (admins, mods, members), threaded replies within group chats.",
          icon: <MessageCircle className="w-6 h-6" />
        },
        {
          name: "Chat Management",
          description: "Pin messages, mute/archive/block options, and organize chats with custom folders/tabs for better organization.",
          icon: <Archive className="w-6 h-6" />
        },
        {
          name: "Advanced Group Features",
          description: "Role-based permissions, threaded conversations within groups, and comprehensive admin controls for community management.",
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      title: "Communication Tools",
      icon: <Video className="w-8 h-8" />,
      gradient: "from-[#C9A6FF] to-[#3DDAD7]",
      items: [
        {
          name: "Voice/Video Calls",
          description: "Encrypted 1:1 and group calls with crystal clear quality, plus voice messages with advanced playback controls.",
          icon: <Phone className="w-6 h-6" />
        },
        {
          name: "Live Streaming",
          description: "Host live video sessions (public or private) with real-time chat interaction during streams and audience engagement tools.",
          icon: <PlayCircle className="w-6 h-6" />
        },
        {
          name: "Rich Media Messaging",
          description: "Send voice notes, video messages, and multimedia content with professional-grade compression and quality.",
          icon: <Mic className="w-6 h-6" />
        }
      ]
    },
    {
      title: "File & Media Sharing",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-[#A672FF] to-[#3DDAD7]",
      items: [
        {
          name: "Secure File Sharing",
          description: "Fast, secure sharing of images, videos, and documents (up to 2GB+), with cloud-based syncing across devices.",
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: "Self-Destructing Media",
          description: "Set expiry times for sensitive messages and files in secret chats for enhanced privacy and security.",
          icon: <Timer className="w-6 h-6" />
        },
        {
          name: "Media Management",
          description: "Organize and manage your shared media with smart categorization, search, and cloud backup features.",
          icon: <Image className="w-6 h-6" />
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-[#3DDAD7] to-[#C9A6FF]",
      items: [
        {
          name: "End-to-End Encryption",
          description: "Default encryption for all private/group chats and calls with zero-knowledge architecture for maximum privacy.",
          icon: <Lock className="w-6 h-6" />
        },
        {
          name: "Advanced Security",
          description: "Two-step verification, screenshot prevention in secret chats, and username-based interaction (no phone number required).",
          icon: <Eye className="w-6 h-6" />
        },
        {
          name: "Privacy Controls",
          description: "Comprehensive privacy settings, anonymous interactions, and advanced security features for complete peace of mind.",
          icon: <Shield className="w-6 h-6" />
        }
      ]
    },
    {
      title: "Engagement & Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-[#C9A6FF] to-[#A672FF]",
      items: [
        {
          name: "Notification Center",
          description: "Real-time alerts for mentions, DMs, and group activity with smart filtering and customizable notification preferences.",
          icon: <Bell className="w-6 h-6" />
        },
        {
          name: "Analytics Dashboard",
          description: "Comprehensive insights on post reach, engagement rates, follower growth, and detailed performance metrics.",
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: "Reporting & Moderation",
          description: "Advanced content flagging, AI-powered spam detection, user blocking, and comprehensive moderation tools.",
          icon: <UserCheck className="w-6 h-6" />
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "SocialConnect has revolutionized how I engage with my audience. The privacy features give me peace of mind while the creative tools help me express myself authentically.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Entrepreneur",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Finally, a social platform that prioritizes user privacy without sacrificing functionality. The encryption is top-notch and the user experience is seamless.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Digital Artist",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The creative tools and community features on SocialConnect have helped me grow my art business. It's like having a professional network and creative studio in one app.",
      rating: 5
    }
  ];

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "Default encryption for all private and group chats",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Self-Destructing Messages",
      description: "Messages that automatically delete after a set time",
      icon: <Timer className="w-6 h-6" />
    },
    {
      title: "Screenshot Prevention",
      description: "Option to prevent screenshots in secret chats",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Two-Step Verification",
      description: "Enhanced security for user accounts",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Cloud-Based Syncing",
      description: "Access messages and files across multiple devices",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Username Privacy",
      description: "Users can interact using a username instead of phone number",
      icon: <AtSign className="w-6 h-6" />
    }
  ];

  const userExperienceFeatures = [
    "Modern, Intuitive UI with clean, responsive design for fast navigation",
    "Light/dark mode and comprehensive accessibility options",
    "Cross-Platform Sync for seamless experience across Android and iOS",
    "Chat Folders to organize chats into custom categories",
    "Advanced notification management and customization",
    "Optimized performance for smooth mobile experience"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B1C20] via-[#1B1C20] to-[#2A2B30] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1B1C20]/95 backdrop-blur-xl border-b border-[#A672FF]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src="/logo.png" alt="Hira Logo" className="w-10 h-15" />
              </div>
              <span className="text-2xl font-bold text-white">HIRA</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-[#D1D3CF] hover:text-[#A672FF] transition-all duration-300 font-medium">Features</a>
              <a href="#security" className="text-[#D1D3CF] hover:text-[#A672FF] transition-all duration-300 font-medium">Security</a>
              <a href="#testimonials" className="text-[#D1D3CF] hover:text-[#A672FF] transition-all duration-300 font-medium">Reviews</a>
              <a href="#download" className="text-[#D1D3CF] hover:text-[#A672FF] transition-all duration-300 font-medium">Download</a>
              <button className="bg-gradient-to-r from-[#A672FF] to-[#C9A6FF] text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:shadow-[#A672FF]/30 transition-all duration-300 transform hover:scale-105 font-semibold">
                Get Started
              </button>
            </div>

            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1B1C20]/98 backdrop-blur-xl border-t border-[#A672FF]/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-[#D1D3CF] hover:text-[#A672FF] transition-colors font-medium">Features</a>
              <a href="#security" className="block text-[#D1D3CF] hover:text-[#A672FF] transition-colors font-medium">Security</a>
              <a href="#testimonials" className="block text-[#D1D3CF] hover:text-[#A672FF] transition-colors font-medium">Reviews</a>
              <a href="#download" className="block text-[#D1D3CF] hover:text-[#A672FF] transition-colors font-medium">Download</a>
              <button className="w-full bg-gradient-to-r from-[#A672FF] to-[#C9A6FF] text-white px-6 py-3 rounded-2xl font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A672FF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3DDAD7]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#A672FF]/20 to-[#3DDAD7]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-[#A672FF]/30">
            <Smartphone className="w-5 h-5 text-[#A672FF]" />
            <span className="text-[#A672FF] font-semibold">HIRA Social Platform</span>
            <Sparkles className="w-4 h-4 text-[#3DDAD7]" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Social Media
            <br />
            <span className="bg-gradient-to-r from-[#A672FF] via-[#C9A6FF] to-[#3DDAD7] bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>
          
          <p className="text-2xl text-[#D1D3CF] mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of social networking with end-to-end encryption, 
            powerful features, and seamless mobile-first design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-[#A672FF] to-[#C9A6FF] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#A672FF]/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Apple className="w-6 h-6" />
              <span>Download for iOS</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-[#3DDAD7] text-[#3DDAD7] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#3DDAD7] hover:text-[#1B1C20] transition-all duration-300 flex items-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Get on Android</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#A672FF]/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#A672FF]" />
              <span className="text-[#A672FF] text-sm font-medium">Comprehensive Features</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Everything You Need in
              <span className="bg-gradient-to-r from-[#A672FF] to-[#3DDAD7] bg-clip-text text-transparent"> One App</span>
            </h2>
            <p className="text-xl text-[#D1D3CF] max-w-3xl mx-auto">
              A complete social platform with advanced security, rich communication tools, and powerful engagement features
            </p>
          </div>

          <div className="space-y-16">
            {features.map((section, sectionIndex) => (
              <div key={sectionIndex} className="group">
                <div className="bg-gradient-to-br from-[#1B1C20]/80 to-[#2A2B30]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#A672FF]/20 hover:border-[#A672FF]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#A672FF]/10">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className={`bg-gradient-to-r ${section.gradient} p-4 rounded-2xl text-white shadow-lg`}>
                      {section.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{section.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group/item bg-[#1B1C20]/60 rounded-2xl p-8 border border-[#3DDAD7]/10 hover:border-[#3DDAD7]/30 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="text-[#3DDAD7] group-hover/item:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <h4 className="text-xl font-bold text-white">{item.name}</h4>
                        </div>
                        <p className="text-[#D1D3CF] leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#A672FF]/5 to-[#3DDAD7]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#3DDAD7]/10 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#3DDAD7]" />
              <span className="text-[#3DDAD7] text-sm font-medium">Privacy & Security</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Your Privacy is
              <span className="bg-gradient-to-r from-[#3DDAD7] to-[#A672FF] bg-clip-text text-transparent"> Sacred</span>
            </h2>
            <p className="text-xl text-[#D1D3CF] max-w-3xl mx-auto">
              Built with zero-knowledge architecture and end-to-end encryption by default
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="group bg-[#1B1C20]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#3DDAD7]/20 hover:border-[#3DDAD7]/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#3DDAD7]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-[#D1D3CF]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#1B1C20]/90 to-[#2A2B30]/90 backdrop-blur-sm rounded-3xl p-12 border border-[#3DDAD7]/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">User Experience Features</h3>
                <div className="space-y-6">
                  {userExperienceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-[#3DDAD7] flex-shrink-0 mt-0.5" />
                      <span className="text-[#D1D3CF] text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-r from-[#A672FF] to-[#3DDAD7] rounded-full flex items-center justify-center shadow-2xl shadow-[#A672FF]/30">
                    <Smartphone className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#3DDAD7] rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-[#1B1C20]" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#A672FF] rounded-full flex items-center justify-center shadow-lg">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#A672FF]/10 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#A672FF]" />
              <span className="text-[#A672FF] text-sm font-medium">User Reviews</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              What Our Users
              <span className="bg-gradient-to-r from-[#A672FF] to-[#3DDAD7] bg-clip-text text-transparent"> Say</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1B1C20]/80 to-[#2A2B30]/80 backdrop-blur-sm rounded-3xl p-12 border border-[#A672FF]/20">
              <div className="text-center">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-[#3DDAD7]/30"
                />
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#A672FF] fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-white mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div>
                  <div className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</div>
                  <div className="text-[#3DDAD7]">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-[#A672FF] scale-125' 
                      : 'bg-[#A672FF]/30 hover:bg-[#A672FF]/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A672FF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3DDAD7]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#A672FF]/20 to-[#3DDAD7]/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-[#A672FF]/30">
            <Download className="w-5 h-5 text-[#A672FF]" />
            <span className="text-[#A672FF] font-semibold">Available Now</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Join the
            <span className="bg-gradient-to-r from-[#A672FF] to-[#3DDAD7] bg-clip-text text-transparent"> Revolution</span>?
          </h2>
          <p className="text-2xl text-[#D1D3CF] mb-16 max-w-3xl mx-auto">
            Download SocialConnect today and experience social media the way it should be - secure, private, and powerful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-[#A672FF] to-[#C9A6FF] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#A672FF]/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-4">
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <div className="text-sm opacity-90">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-gradient-to-r from-[#3DDAD7] to-[#A672FF] text-white px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-2xl hover:shadow-[#3DDAD7]/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-4">
              <Play className="w-8 h-8" />
              <div className="text-left">
                <div className="text-sm opacity-90">Get it on</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#1B1C20]/80 to-[#2A2B30]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#A672FF]/20 max-w-2xl mx-auto">
            <div className="text-[#D1D3CF] mb-4">
              <strong className="text-white">System Requirements:</strong>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Apple className="w-4 h-4 text-[#A672FF]" />
                  <span className="text-white font-semibold">iOS</span>
                </div>
                <div className="text-[#D1D3CF]">iOS 14.0 or later</div>
                <div className="text-[#D1D3CF]">iPhone 8 or newer</div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Play className="w-4 h-4 text-[#3DDAD7]" />
                  <span className="text-white font-semibold">Android</span>
                </div>
                <div className="text-[#D1D3CF]">Android 8.0 (API 26)</div>
                <div className="text-[#D1D3CF]">2GB RAM minimum</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1C20] border-t border-[#A672FF]/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <img src="/logo.png" alt="Hira Logo" className="w-10 h-15" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">HIRA</span>
                </div>
              </div>
              <p className="text-[#D1D3CF] mb-6 max-w-md">
                The next generation of social media - secure, private, and designed for mobile. 
                Connect with confidence.
              </p>
             
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-3 text-[#D1D3CF]">
                <li><a href="#" className="hover:text-[#A672FF] transition-colors">Social Networking</a></li>
                <li><a href="#" className="hover:text-[#A672FF] transition-colors">Secure Messaging</a></li>
                <li><a href="#" className="hover:text-[#A672FF] transition-colors">Video Calls</a></li>
                <li><a href="#" className="hover:text-[#A672FF] transition-colors">File Sharing</a></li>
              </ul>
            </div>
            
            
          </div>
          
          <div className="border-t border-[#A672FF]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#D1D3CF] text-sm mb-4 md:mb-0">
              © 2025 ZUALATECHNOLOGIES LTD. All rights reserved. Built with privacy and security in mind.
            </div>
            <div className="flex items-center space-x-6 text-sm text-[#D1D3CF]">
              <a href="#" className="hover:text-[#A672FF] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#A672FF] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#A672FF] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;