import React from 'react';
import { Star, Users, Clock, CheckCircle, PlayCircle, Award, ArrowLeft, Video, Calendar, Brain, Target, Zap } from 'lucide-react';
import { courses } from '../data/Courses.js';
import { useAuth } from '../contexts/AuthContext.jsx';

export const CourseDetailPage = ({ courseId, setCurrentPage }) => {
  const { user, enrollInCourse } = useAuth();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <button
            onClick={() => setCurrentPage('courses')}
            className="text-blue-600 hover:text-blue-700"
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => setCurrentPage('courses')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.level}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                {course.hasLiveSession && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    Live Sessions
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{course.description}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <Users className="h-5 w-5 mr-2" />
                  {course.studentsEnrolled.toLocaleString()} students
                </div>
              </div>

              <div className="flex items-center text-gray-200 mb-8 space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Video className="h-5 w-5 mr-2" />
                  {totalLessons} lessons
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Certificate
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {isEnrolled ? (
                  <button
                    onClick={handleStartLearning}
                    className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    {isCompleted ? 'Review Course' : 'Continue Learning'}
                    <PlayCircle className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleEnroll}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Enroll Now - ${course.price}
                  </button>
                )}
              </div>

              {/* Course Features */}
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-green-300">
                  <Video className="h-4 w-4 mr-2" />
                  YouTube Lectures
                </div>
                {course.hasLiveSession && (
                  <div className="flex items-center text-red-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    Live Sessions
                  </div>
                )}
                <div className="flex items-center text-purple-300">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Assistant
                </div>
                {course.certificate && (
                  <div className="flex items-center text-yellow-300">
                    <Award className="h-4 w-4 mr-2" />
                    Certificate included
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2 text-blue-600" />
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.skills.map((skill) => (
                  <div key={skill} className="flex items-center p-3 bg-blue-50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Content */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Video className="h-6 w-6 mr-2 text-red-600" />
                Course Content
              </h2>
              <div className="space-y-4">
                {course.modules.map((module, moduleIndex) => (
                  <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Module {moduleIndex + 1}: {module.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 flex items-center">
                        <Video className="h-4 w-4 mr-1" />
                        {module.lessons.length} lessons • {module.duration}
                      </p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {module.lessons.map((lesson) => (
                        <div key={lesson.id} className="p-4 flex items-center hover:bg-gray-50 transition-colors">
                          <div className="flex items-center mr-4">
                            {lesson.type === 'video' ? (
                              <Video className="h-5 w-5 text-red-500" />
                            ) : lesson.type === 'live' ? (
                              <Calendar className="h-5 w-5 text-red-500" />
                            ) : (
                              <PlayCircle className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-gray-900 font-medium">{lesson.title}</h4>
                            <p className="text-gray-600 text-sm">{lesson.duration}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {lesson.youtubeVideoId && (
                              <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full font-medium">
                                YouTube
                              </span>
                            )}
                            {lesson.type === 'live' && (
                              <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full font-medium animate-pulse">
                                Live
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{course.instructor}</h3>
                  <p className="text-gray-600 mb-4">
                    Expert instructor with years of industry experience in {course.skills[0]} and related technologies. 
                    Passionate about teaching and helping students achieve their career goals.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      50K+ students taught
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      4.9 instructor rating
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <div className="text-center mb-6">
                {course.originalPrice && (
                  <div className="text-gray-500 line-through text-lg">
                    ${course.originalPrice}
                  </div>
                )}
                <div className="text-4xl font-bold text-blue-600">
                  ${course.price}
                </div>
                {course.originalPrice && (
                  <div className="text-green-600 font-medium">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {isEnrolled ? (
                <button
                  onClick={handleStartLearning}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors mb-4"
                >
                  {isCompleted ? 'Review Course' : 'Continue Learning'}
                </button>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mb-4"
                >
                  Enroll Now
                </button>
              )}

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lessons:</span>
                  <span className="font-medium">{totalLessons}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span>Certificate:</span>
                  <span className="font-medium text-green-600">
                    {course.certificate ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Live Sessions:</span>
                  <span className="font-medium text-red-600">
                    {course.hasLiveSession ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Features</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Lifetime access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mobile and desktop access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  YouTube video lectures
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Live interactive sessions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  AI learning assistant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Downloadable resources
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Certificate of completion
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  30-day money-back guarantee
                </li>
              </ul>
            </div>

            {/* Student Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Reviews</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic">"Excellent course with great YouTube content!"</p>
                  <p className="text-xs text-gray-500 mt-1">- Alex M.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic">"Live sessions were incredibly helpful!"</p>
                  <p className="text-xs text-gray-500 mt-1">- Sarah K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};