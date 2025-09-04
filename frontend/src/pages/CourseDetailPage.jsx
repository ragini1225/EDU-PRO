import React, { useState, useEffect } from 'react';
import { 
  Star, Users, Clock, CheckCircle, PlayCircle, Award, ArrowLeft, Video, 
  Calendar, Brain, Target, Zap, Download, Shield, Bookmark, Share2,
  ChevronDown, ChevronUp, Globe, MessageSquare, TrendingUp, Heart
} from 'lucide-react';
import { courses } from '../data/courses.js';
import { useAuth } from '../contexts/AuthContext.jsx';

export const CourseDetailPage = ({ courseId, setCurrentPage }) => {
  const { user, enrollInCourse } = useAuth();
  const course = courses.find(c => c.id === courseId);
  const [expandedModules, setExpandedModules] = useState(new Set([0])); // First module expanded by default
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  useEffect(() => {
    // Trigger price animation on mount
    setTimeout(() => setAnimatePrice(true), 500);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => setCurrentPage('courses')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses.includes(courseId) || false;
  const isCompleted = user?.completedCourses.includes(courseId) || false;
  const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
  const completedLessons = isEnrolled ? Math.floor(totalLessons * 0.3) : 0; // Simulated progress
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const handleEnroll = () => {
    if (!user) {
      setCurrentPage('login');
      return;
    }
    enrollInCourse(courseId);
  };

  const handleStartLearning = () => {
    setCurrentPage('course-learning');
  };

  const toggleModule = (moduleIndex) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleIndex)) {
      newExpanded.delete(moduleIndex);
    } else {
      newExpanded.add(moduleIndex);
    }
    setExpandedModules(newExpanded);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: course.title,
          text: course.description,
          url: window.location.href,
        });
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setShowShareMenu(!showShareMenu);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Enhanced Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage('courses')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-all duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Courses</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  isBookmarked 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200"
                >
                  <Share2 className="h-5 w-5" />
                </button>
                
                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-10">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Copy Link
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Share via Email
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Enhanced badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 ${
                  course.level === 'Beginner' ? 'bg-green-500/20 text-green-100' :
                  course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-100' :
                  'bg-red-500/20 text-red-100'
                }`}>
                  <Target className="h-4 w-4 mr-1" />
                  {course.level}
                </span>
                
                <span className="bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105">
                  <Brain className="h-4 w-4 mr-1 inline" />
                  {course.category}
                </span>
                
                {course.hasLiveSession && (
                  <span className="bg-red-500/30 text-red-100 px-4 py-2 rounded-full text-sm font-semibold flex items-center backdrop-blur-sm border border-red-300/30 animate-pulse">
                    <div className="w-2 h-2 bg-red-300 rounded-full mr-2 animate-ping"></div>
                    Live Sessions
                  </span>
                )}

                <span className="bg-purple-500/20 text-purple-100 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105">
                  <TrendingUp className="h-4 w-4 mr-1 inline" />
                  Trending
                </span>
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {course.title}
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">{course.description}</p>
              </div>
              
              {/* Enhanced rating and stats */}
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <div className="flex items-center mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 transition-all duration-300 ${
                          i < Math.floor(course.rating) 
                            ? 'text-yellow-400 fill-current transform scale-110' 
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold">{course.rating}</span>
                  <span className="text-blue-200 ml-2">({(course.studentsEnrolled * 0.1).toFixed(1)}k reviews)</span>
                </div>
                
                <div className="flex items-center text-blue-200 bg-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{course.studentsEnrolled.toLocaleString()}</span>
                  <span className="ml-1">students</span>
                </div>
              </div>

              {/* Enhanced stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Clock, label: 'Duration', value: course.duration },
                  { icon: Video, label: 'Lessons', value: `${totalLessons} videos` },
                  { icon: Download, label: 'Resources', value: '25+ files' },
                  { icon: Award, label: 'Certificate', value: course.certificate ? 'Included' : 'N/A' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-200" />
                    <div className="text-sm text-blue-200">{stat.label}</div>
                    <div className="font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Progress bar for enrolled students */}
              {isEnrolled && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-blue-200 font-medium">Your Progress</span>
                    <span className="text-white font-bold">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-blue-200 mt-2">
                    {completedLessons} of {totalLessons} lessons completed
                  </div>
                </div>
              )}

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {isEnrolled ? (
                  <button
                    onClick={handleStartLearning}
                    className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center">
                      {isCompleted ? 'Review Course' : 'Continue Learning'}
                      <PlayCircle className="ml-3 h-6 w-6 group-hover:animate-pulse" />
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleEnroll}
                    className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-10 py-4 rounded-2xl font-bold hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <span className="relative flex items-center">
                      Enroll Now - ${course.price}
                      <Zap className="ml-3 h-6 w-6 group-hover:animate-bounce" />
                    </span>
                  </button>
                )}
                
                <button
                  onClick={() => setCurrentPage('preview')}
                  className="group bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                >
                  <Video className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Free Preview
                </button>
              </div>

              {/* Course features highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Video, text: 'YouTube Lectures', color: 'text-red-300' },
                  { icon: Calendar, text: 'Live Sessions', color: 'text-green-300', condition: course.hasLiveSession },
                  { icon: Brain, text: 'AI Assistant', color: 'text-purple-300' },
                  { icon: Award, text: 'Certificate', color: 'text-yellow-300', condition: course.certificate }
                ].filter(feature => feature.condition !== false).map((feature) => (
                  <div key={feature.text} className="flex items-center text-sm bg-white/10 rounded-xl px-3 py-2 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <feature.icon className={`h-4 w-4 mr-2 ${feature.color}`} />
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced video preview */}
            <div className="relative group">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                {course.youtubeVideoId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${course.youtubeVideoId}?rel=0`}
                    title={course.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                        <PlayCircle className="relative h-20 w-20 text-white hover:scale-110 cursor-pointer transition-all duration-300" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{totalLessons}</div>
                    <div className="text-xs text-gray-600">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{course.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{course.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn - Enhanced */}
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                What You'll Master
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.skills.map((skill, index) => (
                  <div 
                    key={skill} 
                    className="group flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 border border-blue-100"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="p-2 bg-green-500 rounded-xl mr-4 group-hover:animate-pulse">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold group-hover:text-gray-900 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Enhanced Course Content */}
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mr-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                Course Curriculum
              </h2>
              
              {/* Course progress summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold">{course.modules.length}</div>
                  <div className="text-blue-100">Modules</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold">{totalLessons}</div>
                  <div className="text-purple-100">Total Lessons</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold">{course.duration}</div>
                  <div className="text-green-100">Total Time</div>
                </div>
              </div>

              <div className="space-y-4">
                {course.modules.map((module, moduleIndex) => (
                  <div key={module.id} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <button
                      onClick={() => toggleModule(moduleIndex)}
                      className="w-full p-6 bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 text-white font-bold text-sm">
                              {moduleIndex + 1}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">
                              {module.title}
                            </h3>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm ml-12">
                            <Video className="h-4 w-4 mr-2" />
                            {module.lessons.length} lessons • {module.duration}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {isEnrolled && (
                            <div className="text-right">
                              <div className="text-sm text-green-600 font-medium">3 / {module.lessons.length} completed</div>
                              <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                                <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                              </div>
                            </div>
                          )}
                          {expandedModules.has(moduleIndex) ? (
                            <ChevronUp className="h-6 w-6 text-gray-400 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-300" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {expandedModules.has(moduleIndex) && (
                      <div className="divide-y divide-gray-100 animate-in slide-in-from-top duration-300">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lesson.id} className="p-4 flex items-center hover:bg-gray-50 transition-colors group">
                            <div className="flex items-center mr-4">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                lesson.type === 'video' ? 'bg-red-100' :
                                lesson.type === 'live' ? 'bg-red-100' :
                                'bg-blue-100'
                              }`}>
                                {lesson.type === 'video' ? (
                                  <Video className="h-4 w-4 text-red-600" />
                                ) : lesson.type === 'live' ? (
                                  <Calendar className="h-4 w-4 text-red-600" />
                                ) : (
                                  <PlayCircle className="h-4 w-4 text-blue-600" />
                                )}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                                {lesson.title}
                              </h4>
                              <p className="text-gray-500 text-sm">{lesson.duration}</p>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              {lesson.youtubeVideoId && (
                                <span className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full font-semibold border border-red-200">
                                  YouTube
                                </span>
                              )}
                              {lesson.type === 'live' && (
                                <span className="text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full font-semibold animate-pulse border border-red-200">
                                  Live
                                </span>
                              )}
                              {isEnrolled && lessonIndex < 3 && (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              )}
                              {!isEnrolled && (
                                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Enhanced Instructor Section */}
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Your Instructor</h2>
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative group">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-4xl">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{course.instructor}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    Expert instructor with years of industry experience in {course.skills[0]} and related technologies. 
                    Passionate about teaching and helping students achieve their career goals through practical, hands-on learning.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Users, label: '50K+ Students', value: '50,000+', color: 'from-blue-500 to-blue-600' },
                      { icon: Star, label: 'Instructor Rating', value: '4.9/5', color: 'from-yellow-500 to-orange-500' },
                      { icon: Award, label: 'Courses Created', value: '15+', color: 'from-purple-500 to-pink-500' },
                      { icon: Globe, label: 'Years Experience', value: '10+', color: 'from-green-500 to-teal-500' }
                    ].map((stat) => (
                      <div key={stat.label} className={`bg-gradient-to-r ${stat.color} rounded-2xl p-4 text-white text-center transform hover:scale-105 transition-all duration-300`}>
                        <stat.icon className="h-6 w-6 mx-auto mb-2" />
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs opacity-90">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Student Reviews - Enhanced */}
            <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                Student Success Stories
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Alex Martinez",
                    role: "Frontend Developer",
                    avatar: "AM",
                    rating: 5,
                    review: "This course transformed my understanding of modern development. The YouTube lectures are incredibly well-structured, and the live sessions provided invaluable real-time feedback. Highly recommended!",
                    gradient: "from-blue-500 to-purple-500"
                  },
                  {
                    name: "Sarah Kim",
                    role: "Full Stack Engineer",
                    avatar: "SK",
                    rating: 5,
                    review: "The instructor's expertise shines through every lesson. The practical projects helped me land my dream job. The AI assistant feature is a game-changer for quick doubts!",
                    gradient: "from-pink-500 to-red-500"
                  },
                  {
                    name: "David Chen",
                    role: "Tech Lead",
                    avatar: "DC",
                    rating: 5,
                    review: "Outstanding course content with real-world applications. The live sessions were interactive and engaging. This is exactly what I needed to advance my career.",
                    gradient: "from-green-500 to-teal-500"
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Software Engineer",
                    avatar: "ER",
                    rating: 5,
                    review: "The combination of YouTube lectures and live sessions is perfect. Great pace, excellent explanations, and the certificate helped me get recognition at work.",
                    gradient: "from-purple-500 to-indigo-500"
                  }
                ].map((review) => (
                  <div key={review.name} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${review.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform`}>
                        {review.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-600">{review.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed italic">"{review.review}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Enhanced Course Info Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 sticky top-24 border border-white/20">
              <div className="text-center mb-8">
                {course.originalPrice && (
                  <div className="relative">
                    <div className="text-gray-500 line-through text-xl mb-2">
                      ${course.originalPrice}
                    </div>
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                      SALE
                    </div>
                  </div>
                )}
                
                <div className={`text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 ${animatePrice ? 'animate-pulse' : ''}`}>
                  ${course.price}
                </div>
                
                {course.originalPrice && (
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-lg">
                    <Zap className="h-4 w-4 mr-1" />
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </div>
                )}
                
                <div className="mt-4 text-sm text-gray-600">
                  💰 30-day money-back guarantee
                </div>
              </div>

              {isEnrolled ? (
                <div className="space-y-4">
                  <button
                    onClick={handleStartLearning}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {isCompleted ? 'Review Course' : 'Continue Learning'}
                  </button>
                  
                  {progressPercentage > 0 && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                        <span className="text-sm font-bold text-green-600">{Math.round(progressPercentage)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-5 rounded-2xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative">Enroll Now</span>
                </button>
              )}

              {/* Enhanced course details */}
              <div className="space-y-4 text-sm">
                {[
                  { label: 'Duration', value: course.duration, icon: Clock, color: 'text-blue-600' },
                  { label: 'Lessons', value: totalLessons, icon: Video, color: 'text-red-600' },
                  { label: 'Level', value: course.level, icon: Target, color: 'text-purple-600' },
                  { label: 'Language', value: 'English', icon: Globe, color: 'text-green-600' },
                  { label: 'Certificate', value: course.certificate ? 'Yes' : 'No', icon: Award, color: 'text-yellow-600' },
                  { label: 'Live Sessions', value: course.hasLiveSession ? 'Yes' : 'No', icon: Calendar, color: 'text-red-600' },
                  { label: 'Lifetime Access', value: 'Yes', icon: Shield, color: 'text-indigo-600' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <item.icon className={`h-4 w-4 mr-3 ${item.color}`} />
                      <span className="text-gray-700 font-medium">{item.label}:</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Features Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                Premium Features
              </h3>
              
              <ul className="space-y-4">
                {[
                  { icon: Video, text: 'HD YouTube video lectures', color: 'text-red-500' },
                  { icon: Calendar, text: 'Interactive live sessions', color: 'text-blue-500' },
                  { icon: Brain, text: 'AI learning assistant', color: 'text-purple-500' },
                  { icon: Download, text: 'Downloadable resources', color: 'text-green-500' },
                  { icon: MessageSquare, text: 'Q&A discussion forum', color: 'text-indigo-500' },
                  { icon: Award, text: 'Verified certificate', color: 'text-yellow-500' },
                  { icon: Shield, text: 'Lifetime access', color: 'text-teal-500' },
                  { icon: Zap, text: 'Progress tracking', color: 'text-orange-500' }
                ].map((feature, index) => (
                  <li key={feature.text} className="flex items-center group">
                    <div className={`p-2 rounded-xl mr-4 group-hover:scale-110 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-blue-50' : 'bg-purple-50'
                    }`}>
                      <feature.icon className={`h-4 w-4 ${feature.color}`} />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Statistics */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Course Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{course.studentsEnrolled.toLocaleString()}</div>
                  <div className="text-indigo-200 text-sm">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-indigo-200 text-sm">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.8</div>
                  <div className="text-indigo-200 text-sm">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-indigo-200 text-sm">Job Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom CTA */}
      {!isEnrolled && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 z-40 lg:hidden">
          <div className="flex items-center justify-between max-w-sm mx-auto">
            <div>
              <div className="text-2xl font-bold text-gray-900">${course.price}</div>
              {course.originalPrice && (
                <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
              )}
            </div>
            <button
              onClick={handleEnroll}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};