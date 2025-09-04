import React from 'react';
import { Star, Users, Clock, TrendingUp, BookOpen, Award, ChevronRight, Play, Calendar, Globe, Zap, Target, Video, Sparkles, Trophy, ArrowRight, CheckCircle, MessageCircle, Brain, Rocket, Heart } from 'lucide-react';
import { courses } from '../data/courses.js';
import { useAuth } from '../contexts/AuthContext.jsx';

export const HomePage = ({ setCurrentPage, setSelectedCourse }) => {
  const { user } = useAuth();

  const featuredCourses = courses.slice(0, 8);
  const stats = [
    { icon: Users, label: 'Active Students', value: '125,000+', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50' },
    { icon: BookOpen, label: 'Courses Available', value: '2,500+', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50' },
    { icon: Award, label: 'Certificates Issued', value: '85,000+', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50' },
    { icon: TrendingUp, label: 'Success Rate', value: '98.5%', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50' }
  ];

  const categories = [
    { name: 'Web Development', icon: Globe, count: '450+ Courses', color: 'bg-blue-500', description: 'Frontend, Backend, Full Stack' },
    { name: 'Data Science', icon: TrendingUp, count: '320+ Courses', color: 'bg-green-500', description: 'AI, ML, Analytics' },
    { name: 'AI & Machine Learning', icon: Brain, count: '280+ Courses', color: 'bg-purple-500', description: 'Neural Networks, Deep Learning' },
    { name: 'Digital Marketing', icon: Target, count: '380+ Courses', color: 'bg-orange-500', description: 'SEO, Social Media, PPC' },
    { name: 'Design', icon: Sparkles, count: '290+ Courses', color: 'bg-pink-500', description: 'UI/UX, Graphic Design' },
    { name: 'Cybersecurity', icon: Award, count: '180+ Courses', color: 'bg-red-500', description: 'Ethical Hacking, Security' },
    { name: 'Mobile Development', icon: Rocket, count: '220+ Courses', color: 'bg-indigo-500', description: 'iOS, Android, Flutter' },
    { name: 'Business', icon: Trophy, count: '340+ Courses', color: 'bg-yellow-500', description: 'Management, Finance, Analytics' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer at Google',
      content: 'EduPro completely transformed my career! The hands-on projects and live mentorship sessions helped me land my dream job at Google. The AI chatbot was incredibly helpful throughout my learning journey!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      course: 'Full Stack Web Development',
      salary: '$150k+ salary increase'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Data Scientist at Microsoft',
      content: 'The AI and Machine Learning course was exceptional! Real-world projects, YouTube lectures, and live sessions made all the difference. I got promoted within 6 months!',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      course: 'Data Science & AI',
      salary: '$120k+ new position'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior UX Designer at Apple',
      content: 'Amazing platform with world-class instructors! The design course portfolio and certificate helped me get hired at Apple. The learning experience is truly next-level!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      course: 'UI/UX Design Bootcamp',
      salary: '$130k+ dream job'
    },
    {
      name: 'David Kim',
      role: 'Cybersecurity Analyst at Tesla',
      content: 'The cybersecurity course was incredibly comprehensive. Live hacking sessions and real-world scenarios prepared me for my role at Tesla. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      course: 'Cybersecurity & Ethical Hacking',
      salary: '$110k+ security role'
    }
  ];

  const liveSessionsToday = [
    { time: '2:00 PM', course: 'React Advanced Patterns', instructor: 'John Smith', attendees: 245 },
    { time: '4:00 PM', course: 'Machine Learning Workshop', instructor: 'Dr. Sarah Johnson', attendees: 189 },
    { time: '6:00 PM', course: 'UI/UX Design Critique', instructor: 'Emma Chen', attendees: 156 },
    { time: '8:00 PM', course: 'Blockchain Development', instructor: 'Robert Chen', attendees: 203 }
  ];

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-detail');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 animate-spin-slow"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-20 animate-float">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float animation-delay-500">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-32 right-20 animate-float animation-delay-1000">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Brain className="h-7 w-7 text-white" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Students learning"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-fade-in-up">
                <Video className="h-5 w-5 mr-2 text-yellow-400 animate-pulse" />
                <span className="text-sm font-medium">🔴 Live Sessions Available Now</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
                Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">
                  {' '}Future{' '}
                </span>
                with AI-Powered Learning
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-400">
                Join over 125,000 students worldwide and earn industry-recognized certificates. 
                Learn from top instructors with live sessions, YouTube lectures, AI assistance, and hands-on projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Start Learning Now
                  <Sparkles className="h-5 w-5 ml-2 animate-pulse" />
                </button>
                
                {!user && (
                  <button
                    onClick={() => setCurrentPage('login')}
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm"
                  >
                    Join Free Today
                  </button>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up animation-delay-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">125K+</div>
                  <div className="text-sm text-gray-300">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">98.5%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">2500+</div>
                  <div className="text-sm text-gray-300">Courses</div>
                </div>
              </div>

              {/* Live Indicator */}
              <div className="mt-8 animate-fade-in-up animation-delay-1000">
                <div className="inline-flex items-center bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm font-medium text-red-300">
                    {liveSessionsToday.length} Live Sessions Today
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Video/Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Online learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group">
                    <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                
                {/* Video Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        125K+ Students
                      </span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        4.8 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-4 shadow-xl animate-float">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-4 shadow-xl animate-float animation-delay-1000">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-3 shadow-xl animate-float animation-delay-500">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Sessions Today */}
      <section className="py-16 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Live session"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium">LIVE NOW</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              🔴 Live Sessions Today
            </h2>
            <p className="text-xl opacity-90">Join interactive sessions with expert instructors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveSessionsToday.map((session, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">{session.time}</div>
                  <h3 className="font-semibold mb-2">{session.course}</h3>
                  <p className="text-sm opacity-90 mb-3">with {session.instructor}</p>
                  <div className="flex items-center justify-center text-sm opacity-75 mb-4">
                    <Users className="h-4 w-4 mr-1" />
                    {session.attendees} attending
                  </div>
                  <button className="w-full bg-white text-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Join Live
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Trusted by Students Worldwide 🌍
            </h2>
            <p className="text-xl text-gray-600">Join our global community of learners and achievers</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${stat.color} rounded-3xl mb-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:rotate-6`}>
                  <stat.icon className="h-12 w-12 text-white" />
                </div>
                <div className="text-4xl lg:text-6xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              🚀 Explore Popular Categories
            </h2>
            <p className="text-xl text-gray-600">Find the perfect course for your career goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setCurrentPage('courses')}
              >
                <div className={`w-20 h-20 ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mx-auto`}>
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-center mb-2">{category.count}</p>
                <p className="text-gray-500 text-sm text-center">{category.description}</p>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gray-200 rounded-full">
                    <div className={`h-1 ${category.color} rounded-full transition-all duration-500 group-hover:w-full`} style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              🎯 Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular courses with YouTube lectures, live sessions, and AI-powered learning assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleCourseClick(course.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Course Level Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                      course.level === 'Beginner' ? 'bg-green-500/90 text-white' :
                      course.level === 'Intermediate' ? 'bg-yellow-500/90 text-white' :
                      'bg-red-500/90 text-white'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Live Session Badge */}
                  {course.hasLiveSession && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                        Live
                      </span>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {course.originalPrice && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}

                  {/* YouTube Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Video className="h-3 w-3 mr-1" />
                      YouTube
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <div className="ml-auto flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm">
                    by {course.instructor}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {course.studentsEnrolled.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-right">
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through mr-2">
                          ${course.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-blue-600">
                        ${course.price}
                      </span>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{course.skills.length - 2} more
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
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              View All {courses.length} Courses
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              💼 Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real students, real results, real career transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 font-medium">5.0</span>
                </div>
                
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.course}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      {testimonial.salary}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Learning Assistant */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="AI Learning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Brain className="h-6 w-6 mr-2 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium">🤖 AI-Powered Learning</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Meet Your AI Learning Assistant
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get instant help, personalized recommendations, and 24/7 support from our advanced AI chatbot. 
            Ask questions, get course suggestions, and accelerate your learning journey!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MessageCircle className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm opacity-90">Get instant answers anytime</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Target className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Personalized Paths</h3>
              <p className="text-sm opacity-90">AI-curated learning recommendations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Smart Assistance</h3>
              <p className="text-sm opacity-90">Intelligent help and guidance</p>
            </div>
          </div>
          
          <button
            onClick={() => setCurrentPage('courses')}
            className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <Brain className="h-5 w-5 mr-2" />
            Try AI Assistant Now
          </button>
        </div>
      </section>

      {/* YouTube Learning */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              📺 YouTube Learning Experience
            </h2>
            <p className="text-xl text-gray-600">
              High-quality video lectures from industry experts on YouTube
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Learn with Premium YouTube Content
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Video, text: 'HD video lectures from top instructors' },
                  { icon: Play, text: 'Interactive video player with progress tracking' },
                  { icon: BookOpen, text: 'Downloadable resources and code examples' },
                  { icon: Users, text: 'Community discussions and Q&A' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage('courses')}
                className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <Video className="h-5 w-5 mr-2" />
                Watch Sample Lectures
              </button>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Ke90Tje7VS0"
                    title="Sample Course Lecture"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-4 shadow-xl animate-float">
                  <Video className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Success"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">🎉 Join 125,000+ Successful Students</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of successful graduates who've advanced their careers with our expert-led courses, 
            live sessions, YouTube lectures, AI assistance, and industry-recognized certificates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setCurrentPage('courses')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Start Learning Today
              <Sparkles className="h-5 w-5 ml-2 animate-pulse" />
            </button>
            {!user && (
              <button
                onClick={() => setCurrentPage('login')}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <Heart className="h-5 w-5 mr-2" />
                Join Free
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <p className="text-sm">30-day money-back guarantee</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Award className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-sm">Lifetime access to all content</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Video className="h-6 w-6 text-red-400 mx-auto mb-2" />
              <p className="text-sm">Mobile & desktop learning</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};