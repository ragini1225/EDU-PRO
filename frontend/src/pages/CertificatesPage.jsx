import React from 'react';
import { Award, Download, Calendar, User, CheckCircle, ArrowLeft, Star, Trophy, Share2, Eye, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/course';

interface CertificatesPageProps {
  setCurrentPage: (page: string) => void;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({ setCurrentPage }) => {
  const { user } = useAuth();

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
    // In a real application, this would generate a PDF certificate
    const certificateContent = `
🎓 CERTIFICATE OF COMPLETION 🎓

This certifies that
${certData.studentName}

has successfully completed the course
"${certData.courseName}"

Instructor: ${certData.instructor}
Duration: ${certData.duration}
Skills Mastered: ${certData.skills}
Completion Date: ${certData.completionDate}
Certificate ID: ${certData.certificateId}

EduPro Learning Platform
Transforming Careers Through Education
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
    const shareText = `🎉 I just completed "${certData.courseName}" on EduPro! Certificate ID: ${certData.certificateId} #EduPro #Learning #Certificate`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Certificate',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Certificate details copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Certificates background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse animation-delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in-up">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex items-center text-white hover:text-gray-200 transition-colors mb-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </button>
              
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                    Your Certificates 🏆
                  </h1>
                  <p className="text-xl opacity-90">
                    Showcase your achievements and skills to the world
                  </p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block animate-fade-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Achievement illustration"
                  className="w-48 h-48 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-3 shadow-xl animate-bounce">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {certificateCourses.length > 0 ? (
          <>
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-fade-in-up hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{user.certificates.length}</div>
                <div className="text-gray-600">Certificates Earned</div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-fade-in-up animation-delay-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{user.completedCourses.length}</div>
                <div className="text-gray-600">Courses Completed</div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-fade-in-up animation-delay-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">Expert</div>
                <div className="text-gray-600">Level Achieved</div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-fade-in-up animation-delay-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900">Top 5%</div>
                <div className="text-gray-600">Global Ranking</div>
              </div>
            </div>

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {certificateCourses.map((course, index) => {
                const certData = generateCertificateContent(course);
                
                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Certificate Preview */}
                    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white p-8 relative overflow-hidden">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                            <Award className="h-10 w-10 text-yellow-300" />
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4">
                            EduPro Learning Platform
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-4">Certificate of Completion</h3>
                          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
                          
                          <p className="text-lg opacity-90 mb-2">This certifies that</p>
                          <p className="text-3xl font-bold mb-6 text-yellow-300">{certData.studentName}</p>
                          <p className="text-sm opacity-75 mb-2">has successfully completed</p>
                          <p className="text-xl font-semibold mb-6 leading-tight">{certData.courseName}</p>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm opacity-75 mb-4">
                            <div>
                              <p className="font-medium">Instructor</p>
                              <p>{certData.instructor}</p>
                            </div>
                            <div>
                              <p className="font-medium">Duration</p>
                              <p>{certData.duration}</p>
                            </div>
                          </div>
                          
                          <div className="text-xs opacity-60">
                            <p>Completion Date: {certData.completionDate}</p>
                            <p>Certificate ID: {certData.certificateId}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certificate Info & Actions */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{course.title}</h4>
                          <p className="text-gray-600">by {course.instructor}</p>
                          <div className="flex items-center mt-1">
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
                        </div>
                        <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span className="font-medium text-sm">Completed</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-600 font-medium">Certificate ID</p>
                          <p className="font-mono text-gray-900 text-xs">{certData.certificateId}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-gray-600 font-medium">Completion Date</p>
                          <p className="text-gray-900">{certData.completionDate}</p>
                        </div>
                      </div>

                      {/* Skills Earned */}
                      <div className="mb-6">
                        <p className="text-sm font-medium text-gray-700 mb-2">Skills Mastered:</p>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {course.skills.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{course.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => downloadCertificate(course)}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                        
                        <button
                          onClick={() => shareCertificate(course)}
                          className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center hover:border-blue-300 hover:text-blue-600"
                        >
                          <Share2 className="h-4 w-4" />
                        </button>
                        
                        <button className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center hover:border-green-300 hover:text-green-600">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Achievement Badge */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl animate-pulse transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center">
                  <Trophy className="h-8 w-8 mr-3" />
                  <span>🏆 {user.certificates.length} Certificate{user.certificates.length !== 1 ? 's' : ''} Earned!</span>
                  <Sparkles className="h-8 w-8 ml-3" />
                </div>
                <p className="text-sm opacity-90 mt-2">You're in the top 5% of learners!</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Success</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let the world know about your achievements! Share your certificates on social media 
                and showcase your new skills to potential employers.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Share on LinkedIn
                </button>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                  Share on Twitter
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Award className="h-16 w-16 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Certificates Yet</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
              Complete your enrolled courses to earn certificates and showcase your achievements to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Continue Learning
              </button>
              <button
                onClick={() => setCurrentPage('courses')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                Browse Courses
              </button>
            </div>
          </div>
        )}
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
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};