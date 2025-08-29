import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, BookOpen, CheckCircle, Clock, Award, ArrowLeft, FileText, Video } from 'lucide-react';
import { courses } from '../data/courses';
import { useAuth } from '../contexts/AuthContext';

const CourseLearningPage = ({ courseId, setCurrentPage }) => {
  const { user, completeCourse } = useAuth();
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  
  const [showCongrats, setShowCongrats] = useState(false);
  const [progress, setProgress] = useState(0);

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    if (course) {
      const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
      const completedCount = completedLessons.size;
      setProgress((completedCount / totalLessons) * 100);

      if (completedCount === totalLessons && !user?.completedCourses.includes(courseId)) {
        setShowCongrats(true);
        completeCourse(courseId);
      }
    }
  }, [completedLessons, course, courseId, completeCourse, user]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="text-blue-600 hover:text-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!user?.enrolledCourses.includes(courseId)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-4">You need to enroll in this course first.</p>
          <button
            onClick={() => setCurrentPage('course-detail')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Enroll Now
          </button>
        </div>
      </div>
    );
  }

  const currentModule = course.modules[currentModuleIndex];
  const currentLesson = currentModule?.lessons[currentLessonIndex];
  const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);

  const markLessonComplete = (lessonId) => {
    setCompletedLessons(prev => new Set(prev).add(lessonId));
  };

  const goToNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
    }
  };

  const goToPreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(course.modules[currentModuleIndex - 1].lessons.length - 1);
    }
  };

  const goToLesson = (moduleIndex, lessonIndex) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Congratulations Modal */}
      {showCongrats && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center animate-scale-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Congratulations! 🎉</h2>
            <p className="text-gray-600 mb-6">
              You've successfully completed <strong>{course.title}</strong>!
              Your certificate is ready.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('certificates')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                View Certificate
              </button>
              <button
                onClick={() => setShowCongrats(false)}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </button>
              <h1 className="text-xl font-semibold text-gray-900">{course.title}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Progress: {Math.round(progress)}%
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Course Content */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Content</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {course.modules.map((module, moduleIndex) => (
                  <div key={module.id} className="border border-gray-200 rounded-lg">
                    <div className="p-3 bg-gray-50">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {module.title}
                      </h4>
                      <p className="text-xs text-gray-600">{module.lessons.length} lessons</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <button
                          key={lesson.id}
                          onClick={() => goToLesson(moduleIndex, lessonIndex)}
                          className={`w-full text-left p-3 hover:bg-blue-50 transition-colors ${
                            currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex
                              ? 'bg-blue-100 border-l-4 border-blue-500'
                              : ''
                          }`}
                        >
                          <div className="flex items-center">
                            {lesson.type === 'video' ? (
                              <Video className="h-4 w-4 text-gray-400 mr-2" />
                            ) : (
                              <FileText className="h-4 w-4 text-gray-400 mr-2" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {lesson.title}
                              </p>
                              <p className="text-xs text-gray-500">{lesson.duration}</p>
                            </div>
                            {completedLessons.has(lesson.id) && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Player / Content Area */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{currentLesson?.title}</h2>
                    <p className="text-gray-600">Module {currentModuleIndex + 1}: {currentModule?.title}</p>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {currentLesson?.duration}
                  </div>
                </div>

                {/* Video Player */}
                {currentLesson?.type === 'video' && currentLesson.videoUrl && (
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-6">
                    {currentLesson.youtubeVideoId ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${currentLesson.youtubeVideoId}?autoplay=0&rel=0`}
                        title={currentLesson.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video
                        className="w-full h-full"
                        controls
                        poster="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800"
                      >
                        <source src={currentLesson.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}

                {/* Live Session */}
                {currentLesson?.type === 'live' && (
                  <div className="relative aspect-video bg-gradient-to-r from-red-500 to-pink-500 rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <Video className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Live Session</h3>
                      <p className="text-lg opacity-90 mb-4">{currentLesson.title}</p>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-2"></div>
                        <span>Next session: Today 6:00 PM</span>
                      </div>
                      <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Join Live Session
                      </button>
                    </div>
                  </div>
                )}

                {/* Text Content */}
                {currentLesson?.type === 'text' && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        {currentLesson.content}
                      </p>
                    </div>
                  </div>
                )}

                {/* Lesson Content */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lesson Overview</h3>
                  <p className="text-gray-700">{currentLesson?.content}</p>
                </div>

                {/* Lesson Controls */}
                <div className="flex items-center justify-between border-t pt-6">
                  <button
                    onClick={goToPreviousLesson}
                    disabled={currentModuleIndex === 0 && currentLessonIndex === 0}
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <SkipBack className="h-5 w-5 mr-2" />
                    Previous Lesson
                  </button>

                  <div className="flex items-center space-x-4">
                    {!completedLessons.has(currentLesson?.id || '') && (
                      <button
                        onClick={() => currentLesson && markLessonComplete(currentLesson.id)}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark Complete
                      </button>
                    )}

                    <button
                      onClick={goToNextLesson}
                      disabled={
                        currentModuleIndex === course.modules.length - 1 &&
                        currentLessonIndex === currentModule?.lessons.length - 1
                      }
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next Lesson
                      <SkipForward className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{completedLessons.size}</div>
                  <div className="text-gray-600">Completed Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{totalLessons}</div>
                  <div className="text-gray-600">Total Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{Math.round(progress)}%</div>
                  <div className="text-gray-600">Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CourseLearningPage;
