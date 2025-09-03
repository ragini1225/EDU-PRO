import React, { useState, useEffect } from "react";
import {
  Star,
  Users,
  Clock,
  Filter,
  Search,
  BookOpen,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { courses } from "../data/Courses.js";

const CoursesPage = ({ setCurrentPage, setSelectedCourse }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    "all",
    "Web Development",
    "Data Science",
    "Digital Marketing",
    "UI/UX Design",
    "Cybersecurity",
    "Mobile Development",
  ];

  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;
    const matchesCategory =
      selectedCategory === "all" ||
      course.title
        .toLowerCase()
        .includes(selectedCategory.toLowerCase().replace(" ", ""));

    return matchesSearch && matchesLevel && matchesCategory;
  });

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage("course-detail");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Header */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/85 to-indigo-900/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="floating-shape absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="floating-shape absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animation-delay-1000"></div>
          <div className="floating-shape absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animation-delay-2000"></div>
          <div className="floating-shape absolute top-20 right-1/3 w-8 h-8 bg-green-300 rounded-full animation-delay-500"></div>
          <div className="floating-shape absolute bottom-32 right-10 w-14 h-14 bg-cyan-300 rounded-full animation-delay-1500"></div>
          <div className="floating-shape absolute top-1/2 left-16 w-6 h-6 bg-orange-300 rounded-full animation-delay-3000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            className={`text-center text-white transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                  <BookOpen className="h-12 w-12 text-white animate-pulse" />
                  <Sparkles className="absolute -top-1 -right-1 h-6 w-6 text-yellow-300 animate-bounce" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-text-shimmer">
              Discover Your Path
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Unlock your potential with our premium collection of
              expert-crafted courses designed to accelerate your career growth
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-yellow-300 mb-2 animate-count-up">
                  50K+
                </div>
                <div className="text-sm opacity-80 uppercase tracking-wide">
                  Students Enrolled
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-300 mb-2 flex items-center justify-center gap-1">
                  4.8
                  <Star className="h-6 w-6 fill-current animate-spin-slow" />
                </div>
                <div className="text-sm opacity-80 uppercase tracking-wide">
                  Average Rating
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-pink-300 mb-2 animate-count-up">
                  100+
                </div>
                <div className="text-sm opacity-80 uppercase tracking-wide">
                  Expert Courses
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Bubbles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="bubble absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full"></div>
          <div className="bubble absolute top-3/4 right-1/4 w-6 h-6 bg-white/15 rounded-full animation-delay-2000"></div>
          <div className="bubble absolute top-1/2 left-3/4 w-3 h-3 bg-white/25 rounded-full animation-delay-1000"></div>
          <div className="bubble absolute bottom-1/4 left-1/2 w-5 h-5 bg-white/18 rounded-full animation-delay-1500"></div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm hover:shadow-md"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 group">
                <Filter className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white shadow-sm hover:shadow-md cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50 hover:bg-white shadow-sm hover:shadow-md cursor-pointer"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Available Courses
              </h2>
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-blue-600">
                  {filteredCourses.length}
                </span>{" "}
                of <span className="font-semibold">{courses.length}</span>{" "}
                courses
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500 animate-bounce" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 animate-fade-in cursor-pointer border border-gray-100 hover:border-blue-200"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleCourseClick(course.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20 ${
                        course.level === "Beginner"
                          ? "bg-emerald-100/90 text-emerald-800"
                          : course.level === "Intermediate"
                          ? "bg-amber-100/90 text-amber-800"
                          : "bg-rose-100/90 text-rose-800"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>

                  {course.originalPrice && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        {Math.round(
                          (1 - course.price / course.originalPrice) * 100
                        )}
                        % OFF
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 mb-3 text-sm font-medium">
                    by {course.instructor}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 transition-colors duration-200 ${
                              i < Math.floor(course.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="font-medium">
                        {course.studentsEnrolled.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="text-right">
                      {course.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                          ${course.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${course.price}
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-slate-50 text-gray-600 text-xs font-medium rounded-full border border-gray-200 hover:from-gray-100 hover:to-slate-100 transition-all duration-200">
                          +{course.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 rounded-lg font-semibold text-sm">
                      View Course Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-4">
                  No courses found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedLevel("all");
                    setSelectedCategory("all");
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

        @keyframes bubble-float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes count-up {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .floating-shape {
          animation: floating 6s ease-in-out infinite;
        }

        .bubble {
          animation: bubble-float 4s ease-in-out infinite;
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-count-up {
          animation: count-up 1s ease-out 0.5s both;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export { CoursesPage };
