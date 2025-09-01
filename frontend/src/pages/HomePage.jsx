import React from 'react';
import { Star, Users, Clock, TrendingUp, BookOpen, Award, ChevronRight, Play, Calendar, Globe, Zap, Target, Video, Sparkles, Heart, Shield, Trophy } from 'lucide-react';
import { courses } from '../data/courses.js';
import { useAuth } from '../contexts/AuthContext.jsx';


export const HomePage = ({ setCurrentPage, setSelectedCourse }) => {
  const { user } = useAuth();

  const featuredCourses = courses.slice(0, 6);
  const stats = [
    { icon: Users, label: 'Active Students', value: '75,000+', color: 'from-blue-500 via-blue-600 to-cyan-500', bgColor: 'bg-blue-500/10' },
    { icon: BookOpen, label: 'Courses Available', value: '1,200+', color: 'from-green-500 via-green-600 to-emerald-500', bgColor: 'bg-green-500/10' },
    { icon: Award, label: 'Certificates Issued', value: '45,000+', color: 'from-purple-500 via-purple-600 to-pink-500', bgColor: 'bg-purple-500/10' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%', color: 'from-orange-500 via-orange-600 to-red-500', bgColor: 'bg-orange-500/10' }
  ];

  const categories = [
    { name: 'Web Development', icon: Globe, count: '250+ Courses', color: 'bg-gradient-to-r from-blue-500 to-blue-600', textColor: 'text-blue-600' },
    { name: 'Data Science', icon: TrendingUp, count: '180+ Courses', color: 'bg-gradient-to-r from-green-500 to-green-600', textColor: 'text-green-600' },
    { name: 'AI & Machine Learning', icon: Zap, count: '120+ Courses', color: 'bg-gradient-to-r from-purple-500 to-purple-600', textColor: 'text-purple-600' },
    { name: 'Digital Marketing', icon: Target, count: '200+ Courses', color: 'bg-gradient-to-r from-orange-500 to-orange-600', textColor: 'text-orange-600' },
    { name: 'Design', icon: BookOpen, count: '150+ Courses', color: 'bg-gradient-to-r from-pink-500 to-pink-600', textColor: 'text-pink-600' },
    { name: 'Cybersecurity', icon: Shield, count: '90+ Courses', color: 'bg-gradient-to-r from-red-500 to-red-600', textColor: 'text-red-600' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'EduPro transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at Google!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      company: 'Google'
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Microsoft',
      content: 'The AI and Machine Learning course was exceptional. Real-world projects and live sessions made all the difference.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      company: 'Microsoft'
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer at Apple',
      content: 'Amazing platform with world-class instructors. The design course portfolio helped me get hired at Apple!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      company: 'Apple'
    }
  ];

  const benefits = [
    { icon: Heart, title: 'Lifetime Access', description: 'Learn at your own pace, forever' },
    { icon: Shield, title: 'Money-Back Guarantee', description: '30-day risk-free trial' },
    { icon: Trophy, title: 'Industry Certificates', description: 'Recognized by top employers' },
    { icon: Users, title: 'Expert Support', description: '24/7 instructor assistance' }
  ];

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-detail');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full opacity-20 animate-pulse blur-sm"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 rounded-full opacity-20 animate-pulse animation-delay-1000 blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 rounded-full opacity-10 animate-spin-slow blur-lg"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce animation-delay-500"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-pink-400 rounded-full opacity-40 animate-bounce animation-delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-bounce animation-delay-2000"></div>
        </div>

        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Students learning"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up hover:scale-105 transition-transform duration-300">
                <Sparkles className="h-5 w-5 mr-2 text-yellow-400 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  ✨ Live Sessions Available Now
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight mb-8 animate-fade-in-up animation-delay-200">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x font-extrabold">
                  Future Today
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-blue-200 block mt-2">
                  with Expert-Led Learning
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
                Join over <span className="text-yellow-400 font-bold">75,000 students</span> worldwide and earn 
                <span className="text-green-400 font-bold"> industry-recognized certificates</span>. 
                Learn from top instructors with live sessions, hands-on projects, and career support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600 mb-12">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Play className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                    Start Learning Now
                    <Sparkles className="h-5 w-5 ml-3 animate-pulse" />
                  </div>
                </button>
                
                {!user && (
                  <button
                    onClick={() => setCurrentPage('login')}
                    className="group border-2 border-white/50 text-white font-semibold px-10 py-5 rounded-2xl hover:bg-white hover:text-blue-900 transition-all duration-500 backdrop-blur-md hover:shadow-2xl hover:shadow-white/30"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                      Join Free Today
                    </span>
                  </button>
                )}
              </div>

              {/* Enhanced Quick Stats */}
              <div className="grid grid-cols-3 gap-8 animate-fade-in-up animation-delay-800">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">75K+</div>
                  <div className="text-sm text-gray-300 font-medium">Happy Students</div>
                  <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">98%</div>
                  <div className="text-sm text-gray-300 font-medium">Success Rate</div>
                  <div className="w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">1200+</div>
                  <div className="text-sm text-gray-300 font-medium">Courses</div>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="relative animate-fade-in-right">
              <div className="relative group">
                {/* Main Video Container */}
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-700 hover:shadow-yellow-500/30">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Online learning"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  
                  {/* Enhanced Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="relative w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-500 shadow-2xl hover:shadow-orange-500/50 group-hover:animate-pulse">
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                      <Play className="h-10 w-10 text-white ml-2 relative z-10" />
                    </button>
                  </div>

                  {/* Course Preview Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white text-sm font-medium">Preview: Introduction to React</div>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-white/80 text-xs ml-2">4.9 (2,341 reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 rounded-3xl p-6 shadow-2xl animate-float hover:shadow-green-500/50 transition-shadow duration-300">
                  <Award className="h-10 w-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-white animate-pulse" />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-600 rounded-3xl p-6 shadow-2xl animate-float animation-delay-1000 hover:shadow-purple-500/50 transition-shadow duration-300">
                  <BookOpen className="h-10 w-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="absolute top-1/2 -right-12 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 rounded-2xl p-4 shadow-xl animate-float animation-delay-500">
                  <Video className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <Trophy className="h-5 w-5 mr-2 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Trusted Worldwide</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Trusted by Students
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our global community of learners and achievers making real career transformations
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group animate-fade-in-up hover:transform hover:scale-110 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${stat.color} rounded-3xl mb-6 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3`}>
                  <stat.icon className="h-12 w-12 text-white relative z-10" />
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-white/30 opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
                <div className="text-5xl lg:text-6xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Explore Popular
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block">
                Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find the perfect course for your career goals and start your transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer group overflow-hidden border border-white/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentPage('courses')}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-20 h-20 ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl relative`}>
                  <category.icon className="h-10 w-10 text-white relative z-10" />
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-lg font-medium">{category.count}</p>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ChevronRight className="h-6 w-6 text-yellow-400" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Courses */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Featured Learning</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular courses designed by industry experts with live sessions, 
              hands-on projects, and career-focused curriculum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 cursor-pointer animate-fade-in-up border border-gray-100 hover:border-blue-200"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => handleCourseClick(course.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md shadow-lg ${
                      course.level === 'Beginner' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' :
                      course.level === 'Intermediate' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' :
                      'bg-gradient-to-r from-red-500 to-red-600 text-white'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Enhanced Live Session Badge */}
                  {course.hasLiveSession && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></div>
                        Live Sessions
                      </span>
                    </div>
                  )}

                  {/* Enhanced Discount Badge */}
                  {course.originalPrice && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg animate-pulse">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}

                  {/* Enhanced Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 font-medium">
                    by <span className="text-blue-600 font-bold">{course.instructor}</span>
                  </p>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-3 text-sm text-gray-600 font-medium">
                        {course.rating} ({course.studentsEnrolled.toLocaleString()} students)
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-5 w-5 mr-2 text-blue-500" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Users className="h-5 w-5 mr-2 text-green-500" />
                      <span className="font-medium">{course.studentsEnrolled.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-right">
                      {course.originalPrice && (
                        <span className="text-lg text-gray-500 line-through mr-3 font-medium">
                          ${course.originalPrice}
                        </span>
                      )}
                      <span className="text-3xl font-black text-blue-600">
                        ${course.price}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Skills Preview */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full font-medium border border-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('courses')}
              className="group relative inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold px-12 py-6 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xl">View All {courses.length} Courses</span>
              <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
              <Heart className="h-5 w-5 mr-2 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Success Stories</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Life-Changing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our students who transformed their careers and achieved their dreams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up group overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 250}ms` }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Company Logo Area */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-gray-400 font-bold bg-gray-100 px-2 py-1 rounded-full">
                    {testimonial.company}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-4xl text-blue-600 mb-4 opacity-50">"</div>
                    <p className="text-gray-700 text-lg leading-relaxed italic font-medium">
                      {testimonial.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <Trophy className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Learning benefits"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 block">
                EduPro?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl mb-6 group-hover:shadow-2xl transition-all duration-500 border border-white/20">
                  <benefit.icon className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Live Sessions CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Live session"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 mb-8">
            <Calendar className="h-6 w-6 mr-3 text-yellow-400 animate-pulse" />
            <span className="font-bold text-yellow-400">Next Live Session: Today 6:00 PM EST</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            Join Live Interactive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-gradient-x block">
              Learning Sessions
            </span>
          </h2>
          
          <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Learn directly from industry experts in real-time. Ask questions, get instant feedback, 
            and collaborate with fellow students in our state-of-the-art virtual classrooms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setCurrentPage('courses')}
              className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold px-12 py-6 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center text-xl">
                <Video className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                Join Live Session
              </div>
            </button>
            
            <button
              onClick={() => setCurrentPage('courses')}
              className="group border-2 border-white/50 text-white font-bold px-12 py-6 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-500 backdrop-blur-md hover:shadow-2xl hover:shadow-white/30 text-xl"
            >
              <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                View Schedule
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-yellow-400 mx-auto animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            Ready to Transform
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x block">
              Your Career?
            </span>
          </h2>
          
          <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
            Join thousands of successful graduates who've advanced their careers with our 
            <span className="text-yellow-400 font-bold"> expert-led courses</span>, 
            <span className="text-green-400 font-bold"> live interactive sessions</span>, and 
            <span className="text-purple-400 font-bold"> industry-recognized certificates</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={() => setCurrentPage('courses')}
              className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-black px-12 py-6 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:scale-110 overflow-hidden text-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <Play className="h-6 w-6 mr-3 group-hover:animate-pulse" />
                Start Learning Today
                <Sparkles className="h-6 w-6 ml-3 animate-pulse" />
              </div>
            </button>
            
            {!user && (
              <button
                onClick={() => setCurrentPage('login')}
                className="group border-2 border-white/50 text-white font-black px-12 py-6 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-500 backdrop-blur-md hover:shadow-2xl hover:shadow-white/30 text-xl"
              >
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                  Join Free Today
                </span>
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center">
              <Shield className="h-6 w-6 text-green-400 mr-2" />
              <span className="text-gray-300 font-medium">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center">
              <Heart className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-gray-300 font-medium">Lifetime access</span>
            </div>
            <div className="flex items-center justify-center">
              <Globe className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-gray-300 font-medium">Mobile & desktop learning</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) rotate(2deg); 
          }
          66% { 
            transform: translateY(-5px) rotate(-1deg); 
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { 
            background-position: 0% 50%; 
            background-size: 200% 200%;
          }
          50% { 
            background-position: 100% 50%; 
            background-size: 300% 300%;
          }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Enhanced hover effects */
        .group:hover .animate-pulse {
          animation-duration: 0.5s;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom gradient backgrounds */
        .bg-mesh-gradient {
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%);
        }
      `}</style>
    </div>
  );
};