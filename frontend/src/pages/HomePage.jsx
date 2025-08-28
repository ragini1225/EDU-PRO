import React from 'react';
import { Star, Users, Clock, TrendingUp, BookOpen, Award, ChevronRight, Play, Calendar, Globe, Zap, Target, Video } from 'lucide-react';
import { courses } from '../data/courses';
import { useAuth } from '../contexts/AuthContext';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  setSelectedCourse: (courseId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, setSelectedCourse }) => {
  const { user } = useAuth();

  const featuredCourses = courses.slice(0, 6);
  const stats = [
    { icon: Users, label: 'Active Students', value: '75,000+', color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, label: 'Courses Available', value: '1,200+', color: 'from-green-500 to-emerald-500' },
    { icon: Award, label: 'Certificates Issued', value: '45,000+', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%', color: 'from-orange-500 to-red-500' }
  ];

  const categories = [
    { name: 'Web Development', icon: Globe, count: '250+ Courses', color: 'bg-blue-500' },
    { name: 'Data Science', icon: TrendingUp, count: '180+ Courses', color: 'bg-green-500' },
    { name: 'AI & Machine Learning', icon: Zap, count: '120+ Courses', color: 'bg-purple-500' },
    { name: 'Digital Marketing', icon: Target, count: '200+ Courses', color: 'bg-orange-500' },
    { name: 'Design', icon: BookOpen, count: '150+ Courses', color: 'bg-pink-500' },
    { name: 'Cybersecurity', icon: Award, count: '90+ Courses', color: 'bg-red-500' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'EduPro transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at Google!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist at Microsoft',
      content: 'The AI and Machine Learning course was exceptional. Real-world projects and live sessions made all the difference.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer at Apple',
      content: 'Amazing platform with world-class instructors. The design course portfolio helped me get hired at Apple!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  const handleCourseClick = (courseId: string) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-detail');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 animate-spin-slow"></div>
        </div>

        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Students learning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in-up">
                <Video className="h-5 w-5 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Live Sessions Available</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
                Transform Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">
                  {' '}Future{' '}
                </span>
                with Expert-Led Courses
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-400">
                Join over 75,000 students worldwide and earn industry-recognized certificates. 
                Learn from top instructors with live sessions, hands-on projects, and career support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center"
                >
                  <Play className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Start Learning Now
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
                  <div className="text-2xl font-bold text-yellow-400">75K+</div>
                  <div className="text-sm text-gray-300">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1200+</div>
                  <div className="text-sm text-gray-300">Courses</div>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-4 shadow-xl animate-float">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-4 shadow-xl animate-float animation-delay-1000">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Students Worldwide
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
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Popular Categories
            </h2>
            <p className="text-xl text-gray-600">Find the perfect course for your career goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setCurrentPage('courses')}
              >
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses designed by industry experts with live sessions and hands-on projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleCourseClick(course.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
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

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm">
                    by {course.instructor}
                  </p>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {course.rating} ({course.studentsEnrolled.toLocaleString()})
                      </span>
                    </div>
                  </div>
                  
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
                  
                  <div className="flex items-center justify-between">
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
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
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
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              View All {courses.length} Courses
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our students who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Sessions CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Live session"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Calendar className="h-5 w-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Next Live Session: Today 6:00 PM</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Live Interactive Sessions
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Learn directly from industry experts in real-time. Ask questions, get instant feedback, 
            and collaborate with fellow students in our live virtual classrooms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('courses')}
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Video className="h-5 w-5 mr-2" />
              Join Live Session
            </button>
            <button
              onClick={() => setCurrentPage('courses')}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful graduates who've advanced their careers with our expert-led courses, 
            live sessions, and industry-recognized certificates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setCurrentPage('courses')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Today
            </button>
            {!user && (
              <button
                onClick={() => setCurrentPage('login')}
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Join Free
              </button>
            )}
          </div>
          
          <p className="text-gray-400 text-sm">
            30-day money-back guarantee • Lifetime access • Mobile & desktop learning
          </p>
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