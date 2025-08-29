import React, { useState, useEffect } from 'react';
import { 
  Award, Download, Calendar, User, CheckCircle, ArrowLeft, 
  Star, Trophy, Share2, Eye, Sparkles, Medal, Crown,
  ExternalLink, Copy, MessageCircle, Users
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/courses';

export const CertificatesPage = ({ setCurrentPage }) => {
  const { user } = useAuth();
  const [animatedStats, setAnimatedStats] = useState({
    certificates: 0,
    completedCourses: 0
  });

  useEffect(() => {
    if (user) {
      // Animate counters
      const animateCounter = (target, key) => {
        let current = 0;
        const increment = target / 20;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 50);
      };

      animateCounter(user.certificates.length, 'certificates');
      animateCounter(user.completedCourses.length, 'completedCourses');
    }
  }, [user]);

  if (!user) {
    setCurrentPage('login');
    return null;
  }

  const certificateCourses = courses.filter(course => user.certificates.includes(course.id));

  const generateCertificateContent = (course) => {
    const completionDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return {
      studentName: user.name,
      courseName: course.title,
      instructor: course.instructor,
      completionDate,
      certificateId: `CERT-${course.id.toUpperCase()}-${user.id.slice(-6)}`,
      skills: course.skills.join(', '),
      duration: course.duration
    };
  };

  const downloadCertificate = (course) => {
    const certData = generateCertificateContent(course);
    
    // Enhanced certificate content with better formatting
    const certificateContent = `
🏆 ═══════════════════════════════════════════════════════════════ 🏆
                          CERTIFICATE OF COMPLETION                      
🏆 ═══════════════════════════════════════════════════════════════ 🏆

                              EduPro Learning Platform
                         "Transforming Careers Through Education"

This certificate is proudly awarded to:

                                ${certData.studentName}

For successfully completing the comprehensive course:

                              "${certData.courseName}"

═══════════════════════════════════════════════════════════════════

📚 Course Details:
   • Instructor: ${certData.instructor}
   • Duration: ${certData.duration}
   • Skills Mastered: ${certData.skills}

📅 Achievement Details:
   • Completion Date: ${certData.completionDate}
   • Certificate ID: ${certData.certificateId}
   • Verification URL: https://edupro.com/verify/${certData.certificateId}

═══════════════════════════════════════════════════════════════════

This certificate demonstrates proficiency in the subject matter and 
represents hours of dedicated learning and skill development.

Congratulations on this outstanding achievement! 🎉

                              EduPro Learning Platform
                                 www.edupro.com
🏆 ═══════════════════════════════════════════════════════════════ 🏆
    `;
    
    const blob = new Blob([certificateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${certData.courseName.replace(/[^a-z0-9]/gi, '_')}_Certificate.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareCertificate = (course) => {
    const certData = generateCertificateContent(course);
    const shareText = `🎉 Just earned my certificate in "${certData.courseName}" from EduPro Learning Platform! 

🎓 Skills mastered: ${course.skills.slice(0, 3).join(', ')}${course.skills.length > 3 ? '...' : ''}
📅 Completed: ${certData.completionDate}
🆔 Certificate ID: ${certData.certificateId}

#EduPro #Learning #Certificate #SkillDevelopment #Achievement`;
    
    if (navigator.share) {
      navigator.share({
        title: `Certificate: ${certData.courseName}`,
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      
      // Show success feedback
      const button = event.target.closest('button');
      const originalContent = button.innerHTML;
      button.innerHTML = '<svg class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
      button.className = button.className.replace('border-gray-300', 'border-green-300 bg-green-50');
      
      setTimeout(() => {
        button.innerHTML = originalContent;
        button.className = button.className.replace('border-green-300 bg-green-50', 'border-gray-300');
      }, 2000);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-cyan-300/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Certificates background"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-pink-600/80"></div>
        </div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-28 h-28 bg-white/10 rounded-full animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-pulse-slow animation-delay-500"></div>
          <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow animation-delay-1500"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-1/4 right-1/3 animate-float">
            <Medal className="h-8 w-8 text-white/30" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float-delayed">
            <Crown className="h-6 w-6 text-white/30" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-slide-in-left">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex items-center text-white hover:text-gray-200 transition-all duration-300 mb-8 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </button>
              
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mr-6 shadow-2xl animate-glow">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Your Certificates
                  </h1>
                  <p className="text-xl lg:text-2xl opacity-90 font-medium">
                    Showcase your achievements and unlock new opportunities 🚀
                  </p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block animate-slide-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Achievement illustration"
                  className="w-56 h-56 rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl animate-bounce-slow">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-3 shadow-xl">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {certificateCourses.length > 0 ? (
          <>
            {/* Enhanced Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-in-up hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-t-4 border-purple-500">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 counter">{animatedStats.certificates}</div>
                <div className="text-gray-600 font-medium">Certificates Earned</div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-in-up animation-delay-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-t-4 border-emerald-500">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{animatedStats.completedCourses}</div>
                <div className="text-gray-600 font-medium">Courses Completed</div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-in-up animation-delay-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-t-4 border-blue-500">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Medal className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Expert</div>
                <div className="text-gray-600 font-medium">Level Achieved</div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-8 text-center animate-fade-in-up animation-delay-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-t-4 border-orange-500">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Top 5%</div>
                <div className="text-gray-600 font-medium">Global Ranking</div>
              </div>
            </div>

            {/* Enhanced Certificates Grid */}
            <div className="grid lg:grid-cols-2 gap-10">
              {certificateCourses.map((course, index) => {
                const certData = generateCertificateContent(course);
                
                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 group"
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    {/* Enhanced Certificate Preview */}
                    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-10 relative overflow-hidden">
                      {/* Enhanced Decorative Elements */}
                      <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20 animate-pulse-slow"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16 animate-pulse-slow animation-delay-1000"></div>
                        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow animation-delay-500"></div>
                        
                        {/* Certificate Border Pattern */}
                        <div className="absolute inset-4 border-2 border-white/20 rounded-2xl"></div>
                        <div className="absolute inset-6 border border-white/10 rounded-xl"></div>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Certificate Header */}
                        <div className="text-center mb-8">
                          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-4 border-white/30 mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                            <Award className="h-12 w-12 text-white" />
                          </div>
                          
                          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold mb-4 border border-white/30">
                            🎓 EduPro Learning Platform
                          </div>
                          
                          <h3 className="text-3xl font-bold mb-2">Certificate of Completion</h3>
                          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
                        </div>
                        
                        {/* Certificate Body */}
                        <div className="text-center space-y-6">
                          <div>
                            <p className="text-lg opacity-90 mb-2">This certifies that</p>
                            <p className="text-4xl font-bold text-yellow-300 mb-8 tracking-wide">{certData.studentName}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm opacity-75 mb-3">has successfully completed the course</p>
                            <p className="text-2xl font-bold mb-8 leading-tight px-4">{certData.courseName}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-6 text-sm opacity-90 mb-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                              <p className="font-bold mb-1">👨‍🏫 Instructor</p>
                              <p>{certData.instructor}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                              <p className="font-bold mb-1">⏱️ Duration</p>
                              <p>{certData.duration}</p>
                            </div>
                          </div>
                          
                          <div className="text-xs opacity-60 space-y-1 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <p className="font-semibold">📅 Completion Date: {certData.completionDate}</p>
                            <p className="font-mono">🆔 Certificate ID: {certData.certificateId}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Certificate Info & Actions */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                            {course.title}
                          </h4>
                          <p className="text-gray-600 text-lg mb-3">by {course.instructor}</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 mr-1 transition-colors duration-300 ${
                                  i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-3 text-gray-700 font-semibold">{course.rating}</span>
                            <span className="ml-2 text-gray-500">({course.students}+ students)</span>
                          </div>
                        </div>
                        <div className="flex items-center text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border-2 border-emerald-200">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span className="font-bold text-sm">Completed</span>
                        </div>
                      </div>

                      {/* Enhanced Certificate Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-gray-700 font-bold">📜 Certificate ID</p>
                            <button
                              onClick={() => copyToClipboard(certData.certificateId)}
                              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="font-mono text-gray-900 text-sm bg-white/80 px-3 py-2 rounded-lg">{certData.certificateId}</p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-4 border border-gray-200 hover:border-purple-300 transition-all duration-300">
                          <p className="text-gray-700 font-bold mb-2">🗓️ Completion Date</p>
                          <p className="text-gray-900 font-semibold bg-white/80 px-3 py-2 rounded-lg">{certData.completionDate}</p>
                        </div>
                      </div>

                      {/* Enhanced Skills Section */}
                      <div className="mb-8">
                        <div className="flex items-center mb-4">
                          <Sparkles className="h-5 w-5 text-purple-500 mr-2" />
                          <p className="font-bold text-gray-800">Skills Mastered:</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {course.skills.map((skill, skillIndex) => (
                            <span
                              key={skill}
                              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full font-semibold border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                              style={{ animationDelay: `${skillIndex * 100}ms` }}
                            >
                              ✨ {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button
                          onClick={() => downloadCertificate(course)}
                          className="col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-bold transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <Download className="h-5 w-5 mr-3" />
                          Download Certificate
                        </button>
                        
                        <button
                          onClick={(e) => shareCertificate(course, e)}
                          className="px-4 py-4 border-2 border-gray-300 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center hover:border-blue-400 hover:text-blue-600 group transform hover:scale-105"
                        >
                          <Share2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </button>
                        
                        <button className="px-4 py-4 border-2 border-gray-300 rounded-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center hover:border-emerald-400 hover:text-emerald-600 group transform hover:scale-105">
                          <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Achievement Badge */}
            <div className="mt-20 text-center">
              <div className="inline-block relative">
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-16 py-10 rounded-3xl font-bold text-2xl shadow-2xl animate-glow transform hover:scale-105 transition-all duration-500 border-4 border-white">
                  <div className="flex items-center justify-center mb-4">
                    <Trophy className="h-10 w-10 mr-4" />
                    <span>🏆 {user.certificates.length} Certificate{user.certificates.length !== 1 ? 's' : ''} Earned!</span>
                    <Sparkles className="h-10 w-10 ml-4" />
                  </div>
                  <p className="text-lg opacity-90 font-medium">You're crushing your learning goals! 🚀</p>
                  <div className="absolute -top-4 -right-4 bg-white text-orange-500 rounded-full p-3 shadow-xl animate-bounce">
                    <Crown className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Proof Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-10 text-center border border-blue-200 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Share2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Share Your Success Story</h3>
              </div>
              
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Your achievements deserve recognition! Share your certificates with your network, 
                add them to your LinkedIn profile, and let the world see your commitment to continuous learning.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center font-bold shadow-lg transform hover:scale-105">
                  <ExternalLink className="h-5 w-5 mr-3" />
                  Share on LinkedIn
                </button>
                <button className="bg-gray-800 text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center font-bold shadow-lg transform hover:scale-105">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  Share on Twitter
                </button>
                <button className="border-2 border-purple-300 text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-300 flex items-center justify-center font-bold transform hover:scale-105">
                  <Users className="h-5 w-5 mr-3" />
                  Share with Friends
                </button>
              </div>

              {/* Success Metrics */}
              <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">94%</div>
                  <div className="text-sm text-gray-600">Career Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">87%</div>
                  <div className="text-sm text-gray-600">Salary Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">92%</div>
                  <div className="text-sm text-gray-600">Job Satisfaction</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Enhanced Empty State */
          <div className="text-center py-24">
            <div className="relative mb-12 animate-fade-in">
              <div className="w-40 h-40 bg-gradient-to-r from-gray-200 via-blue-200 to-purple-200 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <Award className="h-20 w-20 text-gray-400" />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-xl animate-bounce">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Your Certificate Journey Awaits! 🌟
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-xl leading-relaxed animate-fade-in-up animation-delay-200">
              Complete your enrolled courses to earn beautiful certificates that showcase your skills 
              and dedication. Each certificate represents hours of learning and growth!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-lg"
              >
                <CheckCircle className="h-6 w-6 mr-3 inline" />
                Continue Learning
              </button>
              <button
                onClick={() => setCurrentPage('courses')}
                className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl hover:bg-gray-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 font-bold text-lg transform hover:scale-105"
              >
                <Eye className="h-6 w-6 mr-3 inline" />
                Browse New Courses
              </button>
            </div>

            {/* Motivational Section */}
            <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-200 animate-fade-in-up animation-delay-600">
              <div className="flex items-center justify-center mb-6">
                <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Why Certificates Matter</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Professional Recognition</h4>
                  <p className="text-gray-600 text-sm">Stand out in the job market with verified skills</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Skill Validation</h4>
                  <p className="text-gray-600 text-sm">Prove your expertise with official documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Career Growth</h4>
                  <p className="text-gray-600 text-sm">Unlock new opportunities and higher salaries</p>
                </div>
              </div>
            </div>
          </div>
        )}
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
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
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