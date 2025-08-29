import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Award, TrendingUp, Clock, PlayCircle, CheckCircle2, Star, Calendar, 
  Video, Target, Zap, Users, Trophy, Flame, ArrowRight, Plus, Bell, Settings,
  BarChart3, Brain, Rocket, Crown, Medal, Gift, Coffee, Heart, Sparkles
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/courses';

export const DashboardPage = ({ setCurrentPage, setSelectedCourse }) => {
  const { user } = useAuth();
  const [animatedStats, setAnimatedStats] = useState({
    enrolled: 0,
    completed: 0,
    certificates: 0,
    progress: 0
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (user) {
      // Animate counters
      const animateCounter = (target, key) => {
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 50);
      };

      const progressRate = user.enrolledCourses.length > 0
        ? Math.round((user.completedCourses.length / user.enrolledCourses.length) * 100)
        : 0;

      animateCounter(user.enrolledCourses.length, 'enrolled');
      animateCounter(user.completedCourses.length, 'completed');
      animateCounter(user.certificates.length, 'certificates');
      animateCounter(progressRate, 'progress');
    }
  }, [user]);

  if (!user) {
    setCurrentPage('login');
    return null;
  }

  const enrolledCourses = courses.filter(course => user.enrolledCourses.includes(course.id));
  const completedCourses = courses.filter(course => user.completedCourses.includes(course.id));
  const upcomingLiveSessions = enrolledCourses.filter(course => course.hasLiveSession);
  
  const stats = [
    {
      icon: BookOpen,
      label: 'Enrolled Courses',
      value: animatedStats.enrolled,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      trend: '+2 this week',
      trendColor: 'text-green-500'
    },
    {
      icon: CheckCircle2,
      label: 'Completed',
      value: animatedStats.completed,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      trend: '+1 this week',
      trendColor: 'text-green-500'
    },
    {
      icon: Award,
      label: 'Certificates',
      value: animatedStats.certificates,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      trend: 'New!',
      trendColor: 'text-orange-500'
    },
    {
      icon: TrendingUp,
      label: 'Progress Rate',
      value: `${animatedStats.progress}%`,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      trend: '+15% this month',
      trendColor: 'text-green-500'
    }
  ];

  const achievements = [
    { 
      icon: Trophy, 
      title: 'First Course Completed', 
      description: 'Completed your first course', 
      earned: user.completedCourses.length > 0,
      rarity: 'Common',
      points: 100
    },
    { 
      icon: Flame, 
      title: 'Learning Streak Master', 
      description: '7 days of continuous learning', 
      earned: true,
      rarity: 'Rare',
      points: 250
    },
    { 
      icon: Target, 
      title: 'Goal Achiever', 
      description: 'Completed 3 courses', 
      earned: user.completedCourses.length >= 3,
      rarity: 'Epic',
      points: 500
    },
    { 
      icon: Users, 
      title: 'Community Champion', 
      description: 'Active in discussions', 
      earned: true,
      rarity: 'Uncommon',
      points: 150
    },
    { 
      icon: Crown, 
      title: 'Knowledge King', 
      description: 'Top 10% learner', 
      earned: user.completedCourses.length >= 2,
      rarity: 'Legendary',
      points: 1000
    },
    { 
      icon: Rocket, 
      title: 'Fast Learner', 
      description: 'Completed course in record time', 
      earned: user.completedCourses.length > 0,
      rarity: 'Rare',
      points: 300
    }
  ];

  const handleContinueLearning = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-learning');
  };

  const handleViewCertificate = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('certificates');
  };

  const handleJoinLiveSession = (courseId) => {
    setSelectedCourse(courseId);
    // Enhanced feedback for live session
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Connecting...';
    button.disabled = true;
    
    setTimeout(() => {
      button.textContent = 'Joined!';
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1500);
    }, 2000);
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const getMotivationalMessage = () => {
    const messages = [
      "Ready to unlock new skills today? 🚀",
      "Your future self will thank you for learning today! 💪",
      "Every expert was once a beginner. Keep going! ⭐",
      "Knowledge is power. You're building yours! 🧠",
      "Today's learning is tomorrow's success! 🎯"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Enhanced Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Dashboard background"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90"></div>
        </div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-28 h-28 bg-white/10 rounded-full animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-pulse-slow animation-delay-500"></div>
          <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow animation-delay-1500"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 right-1/3 animate-float">
            <Brain className="h-8 w-8 text-white/30" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float-delayed">
            <Rocket className="h-6 w-6 text-white/30" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-slide-in-left">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mr-6 shadow-2xl animate-glow">
                    <span className="text-2xl font-bold text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 shadow-lg">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h1 className="text-4xl lg:text-5xl font-bold mr-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      {getGreeting()}, {user.name}!
                    </h1>
                    <div className="animate-wave text-3xl">👋</div>
                  </div>
                  <p className="text-xl lg:text-2xl opacity-90 font-medium mb-3">
                    {getMotivationalMessage()}
                  </p>
                  <div className="flex items-center text-lg opacity-80">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{currentTime.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Quick Actions */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center font-semibold shadow-lg transform hover:scale-105 border border-white/30"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Courses
                </button>
                <button
                  onClick={() => setCurrentPage('certificates')}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center font-semibold shadow-lg transform hover:scale-105 border border-white/30"
                >
                  <Award className="h-5 w-5 mr-2" />
                  My Achievements
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center font-semibold shadow-lg transform hover:scale-105 border border-white/30">
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Learning illustration"
                  className="w-56 h-56 rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl animate-bounce-slow">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-3 shadow-xl">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group border-t-4 border-transparent hover:border-purple-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-xs font-bold ${stat.trendColor} bg-green-50 px-2 py-1 rounded-full`}>
                    {stat.trend}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">{stat.label}</p>
                <p className="text-4xl font-bold text-gray-900 mb-4 counter">{stat.value}</p>
                <div className="mt-4">
                  <div className={`w-full h-3 ${stat.bgColor} rounded-full overflow-hidden`}>
                    <div 
                      className={`h-3 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out shadow-sm`} 
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Live Sessions */}
            {upcomingLiveSessions.length > 0 && (
              <section className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl shadow-2xl p-8 text-white animate-fade-in-up relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 animate-pulse-slow animation-delay-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse mr-4 shadow-lg"></div>
                      <h2 className="text-3xl font-bold">🔴 Live Sessions Today</h2>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Video className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {upcomingLiveSessions.slice(0, 2).map((course, index) => (
                      <div 
                        key={course.id} 
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-between border border-white/30 hover:bg-white/30 transition-all duration-300 animate-slide-in-left"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="flex items-center">
                          <div className="relative">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-16 h-16 rounded-xl object-cover mr-6 shadow-lg"
                            />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                            <p className="text-sm opacity-90 mb-2">with {course.instructor}</p>
                            <div className="flex items-center text-sm opacity-80">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>6:00 PM - 7:30 PM</span>
                              <span className="mx-2">•</span>
                              <span className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-bold">
                                Starting Soon
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleJoinLiveSession(course.id)}
                          className="bg-white text-red-500 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center"
                        >
                          <Video className="h-5 w-5 mr-2" />
                          Join Live
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Enhanced Continue Learning */}
            {enrolledCourses.length > 0 && (
              <section className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-up border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                    Continue Your Journey
                  </h2>
                  <button
                    onClick={() => setCurrentPage('courses')}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-colors duration-300"
                  >
                    View All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {enrolledCourses.slice(0, 3).map((course, index) => {
                    const isCompleted = user.completedCourses.includes(course.id);
                    const progress = isCompleted ? 100 : Math.floor(Math.random() * 70) + 15;
                    
                    return (
                      <div
                        key={course.id}
                        className="border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 hover:border-blue-300 group animate-slide-in-up"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="flex items-center space-x-6">
                          <div className="relative">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-24 h-24 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                            />
                            {course.hasLiveSession && (
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                            {isCompleted && (
                              <div className="absolute -bottom-2 -left-2 bg-green-500 rounded-full p-2 shadow-lg">
                                <CheckCircle2 className="h-4 w-4 text-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                                  {course.title}
                                </h3>
                                <p className="text-gray-600 font-medium">by {course.instructor}</p>
                                <div className="flex items-center mt-2">
                                  <div className="flex items-center mr-4">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 mr-1 transition-colors duration-300 ${
                                          i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-700 font-semibold">{course.rating}</span>
                                  </div>
                                  <div className="flex items-center text-sm text-gray-500">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>{course.duration}</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3">
                                {course.hasLiveSession && (
                                  <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-200 animate-pulse">
                                    🔴 LIVE
                                  </div>
                                )}
                                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                                  isCompleted 
                                    ? 'bg-green-50 text-green-600 border border-green-200' 
                                    : 'bg-blue-50 text-blue-600 border border-blue-200'
                                }`}>
                                  {isCompleted ? '✅ Completed' : '📚 In Progress'}
                                </div>
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-600 font-medium">
                                  {isCompleted ? 'Course Completed!' : `Progress: ${progress}%`}
                                </span>
                                <span className="text-sm font-bold text-gray-900">
                                  {progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                  className={`h-3 rounded-full transition-all duration-1000 ease-out shadow-sm ${
                                    isCompleted 
                                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                                  }`}
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              {!isCompleted ? (
                                <button
                                  onClick={() => handleContinueLearning(course.id)}
                                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center font-bold transform hover:scale-105 shadow-lg"
                                >
                                  <PlayCircle className="h-5 w-5 mr-2" />
                                  Continue Learning
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleViewCertificate(course.id)}
                                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center font-bold transform hover:scale-105 shadow-lg"
                                >
                                  <Award className="h-5 w-5 mr-2" />
                                  View Certificate
                                </button>
                              )}
                              
                              <button className="border-2 border-gray-300 text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                                <BarChart3 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {enrolledCourses.length > 3 && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setCurrentPage('courses')}
                      className="bg-gradient-to-r from-gray-100 to-blue-50 text-blue-600 px-8 py-4 rounded-2xl hover:from-blue-50 hover:to-purple-50 hover:text-purple-600 transition-all duration-300 font-bold transform hover:scale-105 border-2 border-blue-200 hover:border-purple-300"
                    >
                      View All {enrolledCourses.length} Enrolled Courses
                      <ArrowRight className="h-5 w-5 ml-2 inline" />
                    </button>
                  </div>
                )}
              </section>
            )}

            {/* Enhanced Completed Courses */}
            {completedCourses.length > 0 && (
              <section className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-up border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    Completed Masterpieces
                  </h2>
                  <button
                    onClick={() => setCurrentPage('certificates')}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center transition-colors duration-300"
                  >
                    View Certificates
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {completedCourses.slice(0, 4).map((course, index) => (
                    <div
                      key={course.id}
                      className="border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 cursor-pointer group hover:border-green-300 animate-fade-in-up transform hover:-translate-y-2"
                      style={{ animationDelay: `${index * 150}ms` }}
                      onClick={() => handleViewCertificate(course.id)}
                    >
                      <div className="relative mb-4">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                        />
                        <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                          🏆 Certificate Earned
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 mr-1 transition-colors duration-300 ${
                                i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-700 font-semibold">{course.rating}</span>
                        </div>
                        <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                          <Medal className="h-4 w-4 mr-1" />
                          <span className="font-bold text-xs">100%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Enhanced No Courses State */}
            {enrolledCourses.length === 0 && (
              <section className="bg-white rounded-3xl shadow-xl p-16 text-center animate-fade-in-up border border-gray-100">
                <div className="relative mb-12">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <BookOpen className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-xl animate-bounce">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Your Learning Adventure Begins Here! 🚀
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">
                  Welcome to EduPro! You haven't enrolled in any courses yet. Explore our catalog of {courses.length}+ 
                  expertly crafted courses and start building the skills that will transform your career.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <button
                    onClick={() => setCurrentPage('courses')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-lg"
                  >
                    <BookOpen className="h-6 w-6 mr-3 inline" />
                    Explore {courses.length}+ Courses
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl hover:bg-gray-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 font-bold text-lg transform hover:scale-105">
                    <Target className="h-6 w-6 mr-3 inline" />
                    Set Learning Goals
                  </button>
                </div>

                {/* Featured Course Categories */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Programming</h4>
                    <p className="text-gray-600 text-sm">Master coding skills with hands-on projects</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Business</h4>
                    <p className="text-gray-600 text-sm">Develop leadership and strategy skills</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Design</h4>
                    <p className="text-gray-600 text-sm">Create beautiful, user-centered experiences</p>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="space-y-8">
            {/* Enhanced Learning Streak */}
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl shadow-2xl p-8 text-white animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-pulse-slow animation-delay-1000"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Learning Streak</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Flame className="h-6 w-6 animate-pulse" />
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold mb-2 animate-glow">7 Days</div>
                  <div className="text-2xl mb-4">🔥🔥🔥</div>
                  <p className="text-orange-100 text-lg font-medium">You're absolutely crushing it!</p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Weekly Goal</span>
                    <span className="text-sm font-bold">7/7 days</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                    <div className="bg-white rounded-full h-3 transition-all duration-1000" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Achievements */}
            <div className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-up border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  Achievements
                </h3>
                <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full font-medium">
                  {achievements.filter(a => a.earned).length}/{achievements.length}
                </div>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className={`flex items-center p-4 rounded-2xl transition-all duration-500 animate-fade-in ${
                      achievement.earned
                        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg transform hover:scale-105'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-3 rounded-xl mr-4 shadow-lg ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                        : 'bg-gray-400'
                    }`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`font-bold text-sm ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </p>
                        {achievement.earned && (
                          <div className="flex items-center">
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-bold mr-2">
                              {achievement.rarity}
                            </span>
                            <span className="text-xs text-orange-600 font-bold">+{achievement.points} XP</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                      {achievement.earned && (
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-xs text-green-600 font-medium">Unlocked!</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900">Total XP Earned</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0)} XP
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Actions */}
            <div className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-up border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="h-6 w-6 mr-3 text-yellow-500" />
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Discover New Courses</p>
                        <p className="text-sm text-gray-600">{courses.length}+ courses available</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </button>
                
                <button
                  onClick={() => setCurrentPage('certificates')}
                  className="w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">View Certificates</p>
                        <p className="text-sm text-gray-600">{user.certificates.length} certificates earned</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </button>

                <button className="w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300 group transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">My Schedule</p>
                        <p className="text-sm text-gray-600">View upcoming sessions</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                </button>

                <button className="w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 group transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Account Settings</p>
                        <p className="text-sm text-gray-600">Customize your experience</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                </button>
              </div>
            </div>

            {/* Enhanced Progress Summary */}
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl p-8 text-white animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10 animate-pulse-slow animation-delay-1000"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">This Month's Impact</h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Hours Learned</span>
                      </div>
                      <span className="text-2xl font-bold">24.5h</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 transition-all duration-1000" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Lessons Completed</span>
                      </div>
                      <span className="text-2xl font-bold">18</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-white rounded-full h-2 transition-all duration-1000" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Crown className="h-5 w-5 mr-2" />
                        <span className="text-sm font-medium">Global Rank</span>
                      </div>
                      <span className="text-2xl font-bold">#247</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-300" />
                      <span className="text-green-300 font-medium">↗ +23 this week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Buddy Recommendation */}
            <div className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-up border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-blue-500" />
                  Study Buddy
                </h3>
                <Heart className="h-5 w-5 text-pink-500" />
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">EduBot Assistant</h4>
                <p className="text-gray-600 text-sm mb-4">Your AI learning companion is ready to help!</p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-bold transform hover:scale-105 shadow-lg">
                  <Coffee className="h-4 w-4 mr-2 inline" />
                  Chat Now
                </button>
              </div>
            </div>

            {/* Daily Motivation */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl shadow-xl p-8 text-white animate-fade-in-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse-slow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Gift className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-bold">Daily Inspiration</h3>
                </div>
                <blockquote className="text-lg font-medium italic mb-4 leading-relaxed">
                  "The beautiful thing about learning is that no one can take it away from you."
                </blockquote>
                <p className="text-emerald-100 text-sm">— B.B. King</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.4); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.4); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-8px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        
        .counter {
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};