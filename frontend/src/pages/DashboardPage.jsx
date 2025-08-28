import React from 'react';
import { BookOpen, Award, TrendingUp, Clock, PlayCircle, CheckCircle2, Star, Calendar, Video, Target, Zap, Users, Trophy, Siren as Fire } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/courses';

interface DashboardPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedCourse: (courseId: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ setCurrentPage, setSelectedCourse }) => {
  const { user } = useAuth();

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
      value: user.enrolledCourses.length,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: CheckCircle2,
      label: 'Completed',
      value: user.completedCourses.length,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: Award,
      label: 'Certificates',
      value: user.certificates.length,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      label: 'Progress Rate',
      value: user.enrolledCourses.length > 0
        ? `${Math.round((user.completedCourses.length / user.enrolledCourses.length) * 100)}%`
        : '0%',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  const achievements = [
    { icon: Trophy, title: 'First Course Completed', description: 'Completed your first course', earned: user.completedCourses.length > 0 },
    { icon: Fire, title: 'Learning Streak', description: '7 days of continuous learning', earned: true },
    { icon: Target, title: 'Goal Achiever', description: 'Completed 3 courses', earned: user.completedCourses.length >= 3 },
    { icon: Users, title: 'Community Member', description: 'Active in discussions', earned: true }
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
    // In a real app, this would open the live session
    alert('Joining live session...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Dashboard background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    Welcome back, {user.name}! 👋
                  </h1>
                  <p className="text-xl opacity-90">
                    Continue your learning journey and achieve your goals
                  </p>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </button>
                <button
                  onClick={() => setCurrentPage('certificates')}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-300 flex items-center"
                >
                  <Award className="h-4 w-4 mr-2" />
                  My Certificates
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block animate-fade-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Learning illustration"
                  className="w-48 h-48 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-3 shadow-xl">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <div className={`w-full h-2 ${stat.bgColor} rounded-full`}>
                  <div className={`h-2 bg-gradient-to-r ${stat.color} rounded-full`} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Live Sessions */}
            {upcomingLiveSessions.length > 0 && (
              <section className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white animate-fade-in-up">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
                    <h2 className="text-2xl font-bold">Live Sessions Today</h2>
                  </div>
                  <Video className="h-6 w-6" />
                </div>
                
                <div className="space-y-4">
                  {upcomingLiveSessions.slice(0, 2).map((course) => (
                    <div key={course.id} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm opacity-90">with {course.instructor}</p>
                          <p className="text-xs opacity-75">6:00 PM - 7:30 PM</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleJoinLiveSession(course.id)}
                        className="bg-white text-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Join Now
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Continue Learning */}
            {enrolledCourses.length > 0 && (
              <section className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <PlayCircle className="h-6 w-6 mr-2 text-blue-600" />
                  Continue Learning
                </h2>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => {
                    const isCompleted = user.completedCourses.includes(course.id);
                    const progress = isCompleted ? 100 : Math.floor(Math.random() * 70) + 10;
                    
                    return (
                      <div
                        key={course.id}
                        className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:border-blue-300 group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-20 h-20 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                            />
                            {course.hasLiveSession && (
                              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {course.title}
                            </h3>
                            <p className="text-gray-600 text-sm">by {course.instructor}</p>
                            <div className="mt-2">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-600">
                                  {isCompleted ? 'Completed' : `${progress}% Complete`}
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full transition-all duration-500 ${
                                    isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                                  }`}
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            {!isCompleted ? (
                              <button
                                onClick={() => handleContinueLearning(course.id)}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center transform hover:scale-105"
                              >
                                <PlayCircle className="h-4 w-4 mr-2" />
                                Continue
                              </button>
                            ) : (
                              <button
                                onClick={() => handleViewCertificate(course.id)}
                                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center transform hover:scale-105"
                              >
                                <Award className="h-4 w-4 mr-2" />
                                Certificate
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Completed Courses */}
            {completedCourses.length > 0 && (
              <section className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-2 text-green-600" />
                  Completed Courses
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {completedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-green-300"
                      onClick={() => handleViewCertificate(course.id)}
                    >
                      <div className="relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 text-white p-2 rounded-full">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">by {course.instructor}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">{course.rating}</span>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* No Courses */}
            {enrolledCourses.length === 0 && (
              <section className="bg-white rounded-2xl shadow-lg p-12 text-center animate-fade-in-up">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Learning Journey</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  You haven't enrolled in any courses yet. Explore our catalog of {courses.length}+ courses and start learning today!
                </p>
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Browse {courses.length}+ Courses
                </button>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Learning Streak */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 text-white animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Learning Streak</h3>
                <Fire className="h-6 w-6" />
              </div>
              <div className="text-4xl font-bold mb-2">7 Days 🔥</div>
              <p className="text-orange-100 text-sm">Keep it up! You're on fire!</p>
              <div className="mt-4 bg-white/20 rounded-full h-2">
                <div className="bg-white rounded-full h-2" style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                      achievement.earned
                        ? 'bg-yellow-50 border border-yellow-200'
                        : 'bg-gray-50 border border-gray-200 opacity-60'
                    }`}
                  >
                    <div className={`p-2 rounded-lg mr-3 ${
                      achievement.earned ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}>
                      <achievement.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium text-sm ${
                        achievement.earned ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </p>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-900">Browse Courses</p>
                      <p className="text-xs text-gray-600">{courses.length}+ courses available</p>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setCurrentPage('certificates')}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-purple-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-900">View Certificates</p>
                      <p className="text-xs text-gray-600">{user.certificates.length} earned</p>
                    </div>
                  </div>
                </button>

                <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300 group">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-900">Schedule</p>
                      <p className="text-xs text-gray-600">View upcoming sessions</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white animate-fade-in-up">
              <h3 className="text-lg font-semibold mb-4">This Month</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Hours Learned</span>
                  <span className="font-bold">24.5h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Lessons Completed</span>
                  <span className="font-bold">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">Rank</span>
                  <span className="font-bold">#247</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};