import React, { useState } from 'react';
import { Award, Download, Calendar, User, CheckCircle, ArrowLeft, Star, Trophy, Share2, Eye, Sparkles, Crown, Gift, Heart, Zap, Target, Brain, Rocket, Globe, TrendingUp, Users, Clock, PlayCircle, MessageCircle, Copy, ExternalLink, Linkedin, Twitter, Facebook, Mail, QrCode, Shield, Verified, Medal, Flame, ChevronRight, BookOpen, Video } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { courses } from '../data/courses.js';

export const CertificatesPage = ({ setCurrentPage }) => {
  const { user } = useAuth();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeTab, setActiveTab] = useState('certificates');
  
  const [shareSuccess, setShareSuccess] = useState(false);

  if (!user) {
    setCurrentPage('login');
    return null;
  }

  const certificateCourses = courses.filter(course => user.certificates.includes(course.id));

  const achievements = [
    { icon: Trophy, title: 'Certificate Master', description: `Earned ${user.certificates.length} certificates`, color: 'from-yellow-400 to-orange-500', points: 1000, earned: user.certificates.length > 0 },
    { icon: Crown, title: 'Top Performer', description: 'Top 5% of all students', color: 'from-purple-500 to-pink-500', points: 2500, earned: user.certificates.length >= 3 },
    { icon: Target, title: 'Goal Crusher', description: 'Completed all enrolled courses', color: 'from-green-500 to-emerald-500', points: 1500, earned: user.completedCourses.length === user.enrolledCourses.length && user.enrolledCourses.length > 0 },
    { icon: Rocket, title: 'Fast Learner', description: 'Completed courses ahead of schedule', color: 'from-blue-500 to-cyan-500', points: 800, earned: user.certificates.length >= 2 },
    { icon: Brain, title: 'AI Expert', description: 'Mastered AI/ML courses', color: 'from-indigo-500 to-purple-500', points: 2000, earned: certificateCourses.some(c => c.category === 'Artificial Intelligence') },
    { icon: Shield, title: 'Security Specialist', description: 'Cybersecurity expert', color: 'from-red-500 to-pink-500', points: 1800, earned: certificateCourses.some(c => c.category === 'Cybersecurity') },
    { icon: Globe, title: 'Global Learner', description: 'Courses from multiple categories', color: 'from-teal-500 to-blue-500', points: 1200, earned: new Set(certificateCourses.map(c => c.category)).size >= 3 },
    { icon: Flame, title: 'Learning Streak', description: '30-day learning streak', color: 'from-orange-500 to-red-500', points: 600, earned: true }
  ];

  const certificateStats = [
    { label: 'Total Certificates', value: user.certificates.length, icon: Award, color: 'from-purple-500 to-pink-500', description: 'Industry-recognized credentials' },
    { label: 'Skills Mastered', value: certificateCourses.reduce((total, course) => total + course.skills.length, 0), icon: Brain, color: 'from-blue-500 to-cyan-500', description: 'Technical competencies gained' },
    { label: 'Learning Hours', value: `${certificateCourses.length * 40}+`, icon: Clock, color: 'from-green-500 to-emerald-500', description: 'Total study time invested' },
    { label: 'Global Ranking', value: '#147', icon: TrendingUp, color: 'from-orange-500 to-red-500', description: 'Among all platform learners' },
    { label: 'Achievement Points', value: achievements.filter(a => a.earned).reduce((total, a) => total + a.points, 0), icon: Medal, color: 'from-yellow-500 to-orange-500', description: 'Total points earned' },
    { label: 'Career Impact', value: '+$45K', icon: TrendingUp, color: 'from-emerald-500 to-teal-500', description: 'Average salary increase' }
  ];

  const skillCategories = {
    'Programming': certificateCourses.filter(c => ['Web Development', 'Mobile Development', 'Game Development'].includes(c.category)),
    'Data & AI': certificateCourses.filter(c => ['Data Science', 'Artificial Intelligence'].includes(c.category)),
    'Design & Marketing': certificateCourses.filter(c => ['Design', 'Digital Marketing', 'Creative Arts'].includes(c.category)),
    'Business & Tech': certificateCourses.filter(c => ['Business Analytics', 'Project Management', 'Cloud Computing'].includes(c.category))
  };

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
      duration: course.duration,
      grade: 'A+',
      credentialUrl: `https://edupro.com/verify/${course.id}-${user.id}`,
      blockchainHash: `0x${Math.random().toString(16).substr(2, 40)}`,
      issueDate: new Date().toISOString()
    };
  };

  const downloadCertificate = (course) => {
    const certData = generateCertificateContent(course);
    const certificateContent = `
🎓 EDUPRO LEARNING PLATFORM 🎓
═══════════════════════════════════════════════════════════════

                    CERTIFICATE OF COMPLETION
                    
═══════════════════════════════════════════════════════════════

This certifies that

            ${certData.studentName.toUpperCase()}

has successfully completed the comprehensive course

            "${certData.courseName}"

═══════════════════════════════════════════════════════════════

Course Details:
• Instructor: ${certData.instructor}
• Duration: ${certData.duration}
• Grade: ${certData.grade} (98.5%)
• Skills Mastered: ${certData.skills}

Completion Information:
• Completion Date: ${certData.completionDate}
• Certificate ID: ${certData.certificateId}
• Blockchain Hash: ${certData.blockchainHash}
• Verification URL: ${certData.credentialUrl}

═══════════════════════════════════════════════════════════════
                    EduPro Learning Platform
                  Transforming Careers Through Education
                        www.edupro.com
═══════════════════════════════════════════════════════════════

🏆 ACHIEVEMENT UNLOCKED 🏆

This certificate represents the successful completion of rigorous 
coursework including:
• ${course.modules?.length || 8}+ comprehensive modules
• ${course.modules?.reduce((total, module) => total + module.lessons.length, 0) || 25}+ hands-on lessons
• Real-world projects and assessments
• Live interactive sessions with expert instructors
• AI-powered learning assistance

Industry Recognition:
✓ Recognized by 500+ companies worldwide
✓ Blockchain-verified for authenticity
✓ Meets international education standards
✓ Accepted for professional development credits

Career Impact:
• Average salary increase: $45,000+
• 95% of graduates get promoted within 6 months
• Trusted by Fortune 500 companies
• Global professional network access

═══════════════════════════════════════════════════════════════

🌟 Congratulations on your outstanding achievement! 🌟

This certificate is a testament to your dedication, hard work, and 
commitment to continuous learning. You are now equipped with 
industry-relevant skills that will accelerate your career growth.

Keep learning, keep growing, keep achieving!

═══════════════════════════════════════════════════════════════
    `;
    
    const blob = new Blob([certificateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EduPro_${certData.courseName.replace(/[^a-z0-9]/gi, '_')}_Certificate.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareCertificate = (course, platform = 'general') => {
    const certData = generateCertificateContent(course);
    const baseText = `🎉 I just earned my certificate in "${certData.courseName}" from EduPro! 🏆`;
    
    const shareTexts = {
      linkedin: `${baseText}\n\n🚀 Skills Mastered: ${course.skills.slice(0, 5).join(', ')}\n📊 Grade: A+ (98.5%)\n🎯 Duration: ${course.duration}\n\nReady to take on new challenges in ${course.category}!\n\n#EduPro #Learning #Certificate #CareerGrowth #${course.category.replace(/\s+/g, '')} #ProfessionalDevelopment`,
      twitter: `${baseText}\n\n🎯 ${course.skills.slice(0, 3).join(', ')}\n📈 A+ Grade\n⏱️ ${course.duration}\n\n#EduPro #Learning #Certificate #${course.category.replace(/\s+/g, '')}`,
      facebook: `${baseText}\n\nJust completed an amazing ${course.duration} journey learning ${course.skills.slice(0, 4).join(', ')} and more!\n\nGrade: A+ (98.5%)\nCertificate ID: ${certData.certificateId}\n\nFeeling grateful for this learning opportunity! 🙏\n\n#EduPro #Learning #Achievement`,
      general: `${baseText}\n\nCertificate ID: ${certData.certificateId}\nSkills: ${course.skills.slice(0, 3).join(', ')}\nGrade: A+ (98.5%)\n\n#EduPro #Learning #Certificate #CareerGrowth #${course.category.replace(/\s+/g, '')}`
    };
    
    const shareText = shareTexts[platform] || shareTexts.general;
    
    if (navigator.share && platform === 'general') {
      navigator.share({
        title: `My ${course.title} Certificate`,
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
    }
  };

  const copyVerificationLink = (course) => {
    const certData = generateCertificateContent(course);
    navigator.clipboard.writeText(certData.credentialUrl);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 3000);
  };

  const viewCertificateDetails = (course) => {
    setSelectedCertificate(course);
  };

  const tabs = [
    { id: 'certificates', label: 'My Certificates', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'skills', label: 'Skills Portfolio', icon: Target },
    { id: 'verification', label: 'Verification', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Share Success Notification */}
      {shareSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl animate-slide-in-right">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span className="font-medium">Copied to clipboard! 🎉</span>
          </div>
        </div>
      )}

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                  <Award className="h-8 w-8 mr-3 text-yellow-500" />
                  Certificate Details
                </h2>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                >
                  ✕
                </button>
              </div>
              
              {/* Full Certificate Preview */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white p-16 rounded-3xl mb-8 relative overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full -translate-y-30 translate-x-30"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white/10 rounded-full"></div>
                
                {/* Certificate Content */}
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                      <Award className="h-16 w-16 text-yellow-300" />
                    </div>
                  </div>
                  
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full text-lg font-medium mb-8 border border-white/30">
                    🎓 EduPro Learning Platform
                  </div>
                  
                  <h3 className="text-5xl font-bold mb-8 tracking-wide">Certificate of Completion</h3>
                  <div className="w-40 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-12 rounded-full"></div>
                  
                  <p className="text-2xl opacity-90 mb-6">This certifies that</p>
                  <p className="text-6xl font-bold mb-12 text-yellow-300 tracking-wide">{user.name}</p>
                  <p className="text-xl opacity-75 mb-6">has successfully completed the comprehensive course</p>
                  <p className="text-4xl font-bold mb-12 leading-tight px-8">{selectedCertificate.title}</p>
                  
                  <div className="grid grid-cols-2 gap-12 text-xl opacity-90 mb-12">
                    <div className="text-center">
                      <p className="font-semibold text-yellow-300 mb-2">Instructor</p>
                      <p>{selectedCertificate.instructor}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-yellow-300 mb-2">Duration</p>
                      <p>{selectedCertificate.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-yellow-300 mb-2">Grade</p>
                      <p>A+ (98.5%)</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-yellow-300 mb-2">Category</p>
                      <p>{selectedCertificate.category}</p>
                    </div>
                  </div>
                  
                  <div className="text-lg opacity-70 space-y-2">
                    <p>Completion Date: {generateCertificateContent(selectedCertificate).completionDate}</p>
                    <p>Certificate ID: {generateCertificateContent(selectedCertificate).certificateId}</p>
                    <p>Blockchain Hash: {generateCertificateContent(selectedCertificate).blockchainHash}</p>
                    <div className="flex items-center justify-center mt-4">
                      <Shield className="h-5 w-5 mr-2 text-green-300" />
                      <span>Blockchain Verified & Tamper-Proof</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certificate Actions */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <button
                  onClick={() => downloadCertificate(selectedCertificate)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 font-semibold"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download
                </button>
                <button
                  onClick={() => shareCertificate(selectedCertificate, 'linkedin')}
                  className="bg-blue-700 text-white px-6 py-4 rounded-xl hover:bg-blue-800 transition-all duration-300 flex items-center justify-center transform hover:scale-105 font-semibold"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </button>
                <button
                  onClick={() => shareCertificate(selectedCertificate, 'twitter')}
                  className="bg-sky-500 text-white px-6 py-4 rounded-xl hover:bg-sky-600 transition-all duration-300 flex items-center justify-center transform hover:scale-105 font-semibold"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </button>
                <button
                  onClick={() => copyVerificationLink(selectedCertificate)}
                  className="bg-gray-700 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center transform hover:scale-105 font-semibold"
                >
                  <Copy className="h-5 w-5 mr-2" />
                  Copy Link
                </button>
              </div>

              {/* Skills Breakdown */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="h-6 w-6 mr-2 text-blue-600" />
                  Skills Mastered in This Course
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedCertificate.skills.map((skill) => (
                    <div key={skill} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{skill}</p>
                          <p className="text-sm text-gray-600">Mastery Level: Expert</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Certificates background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute top-20 right-1/4 w-28 h-28 bg-white/5 rounded-full animate-pulse animation-delay-750"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in-up">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="flex items-center text-white hover:text-gray-200 transition-colors mb-8 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full transform hover:scale-105 font-semibold"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </button>
              
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-8 shadow-2xl animate-pulse">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                    Your Certificates 🏆
                  </h1>
                  <p className="text-2xl opacity-90 mb-4">
                    Showcase your achievements and skills to the world
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                      <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
                      <span className="font-medium">{user.certificates.length} Certificates Earned</span>
                    </div>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                      <Crown className="h-5 w-5 mr-2 text-yellow-400" />
                      <span className="font-medium">Expert Level Achieved</span>
                    </div>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                      <Shield className="h-5 w-5 mr-2 text-green-400" />
                      <span className="font-medium">Blockchain Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block animate-fade-in-right">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Achievement illustration"
                  className="w-72 h-72 rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-6 shadow-xl animate-bounce">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-xl animate-pulse">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-4 shadow-xl animate-float">
                  <Medal className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-3xl shadow-lg p-3 mb-12">
          <div className="flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl transform scale-105'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 transform hover:scale-105'
                }`}
              >
                <tab.icon className="h-6 w-6 mr-3" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {certificateCourses.length > 0 ? (
          <>
            {/* Summary Stats */}
            {activeTab === 'certificates' && (
              <>
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
                  {certificateStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-3xl shadow-lg p-6 text-center animate-fade-in-up hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                      <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                    </div>
                  ))}
                </div>

                {/* Achievement Celebration */}
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl shadow-2xl p-12 mb-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Achievement background"
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
                  
                  <div className="relative text-center">
                    <div className="flex items-center justify-center mb-8">
                      <Trophy className="h-16 w-16 mr-4 animate-bounce" />
                      <div className="text-6xl font-bold">🏆</div>
                      <Sparkles className="h-16 w-16 ml-4 animate-pulse" />
                    </div>
                    
                    <h2 className="text-5xl font-bold mb-4">
                      {user.certificates.length} Certificate{user.certificates.length !== 1 ? 's' : ''} Earned!
                    </h2>
                    <p className="text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                      You're in the top 5% of learners worldwide! Your dedication and hard work have paid off tremendously! 🌟
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <Heart className="h-8 w-8 mx-auto mb-3 text-pink-300" />
                        <p className="font-semibold">Loved by Employers</p>
                        <p className="text-sm opacity-90">95% hiring rate</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                        <p className="font-semibold">Industry Recognized</p>
                        <p className="text-sm opacity-90">500+ companies</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <Globe className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                        <p className="font-semibold">Global Validity</p>
                        <p className="text-sm opacity-90">Worldwide acceptance</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <Shield className="h-8 w-8 mx-auto mb-3 text-green-300" />
                        <p className="font-semibold">Blockchain Secured</p>
                        <p className="text-sm opacity-90">Tamper-proof</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 text-xl font-bold">
                        💰 Average Salary Increase: $45,000+ per year
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {certificateCourses.map((course, index) => {
                    const certData = generateCertificateContent(course);
                    
                    return (
                      <div
                        key={course.id}
                        className="bg-white rounded-3xl shadow-lg overflow-hidden animate-fade-in-up hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group"
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
                              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-medium mb-4">
                                EduPro Learning Platform
                              </div>
                              
                              <h3 className="text-xl font-bold mb-4">Certificate of Completion</h3>
                              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
                              
                              <p className="text-sm opacity-90 mb-2">This certifies that</p>
                              <p className="text-2xl font-bold mb-6 text-yellow-300">{certData.studentName}</p>
                              <p className="text-xs opacity-75 mb-2">has successfully completed</p>
                              <p className="text-lg font-semibold mb-6 leading-tight">{certData.courseName}</p>
                              
                              <div className="grid grid-cols-2 gap-4 text-xs opacity-75 mb-4">
                                <div>
                                  <p className="font-medium">Instructor</p>
                                  <p>{certData.instructor}</p>
                                </div>
                                <div>
                                  <p className="font-medium">Grade</p>
                                  <p>A+ (98.5%)</p>
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
                              <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {course.title}
                              </h4>
                              <p className="text-gray-600">by {course.instructor}</p>
                              <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                                <span className="ml-2 text-sm text-gray-600 font-medium">{course.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full">
                              <CheckCircle className="h-5 w-5 mr-2" />
                              <span className="font-bold text-sm">Completed</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                            <div className="bg-gray-50 rounded-xl p-3">
                              <p className="text-gray-600 font-medium">Certificate ID</p>
                              <p className="font-mono text-gray-900 text-xs">{certData.certificateId}</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-3">
                              <p className="text-gray-600 font-medium">Grade</p>
                              <p className="text-gray-900 font-bold">A+ (98.5%)</p>
                            </div>
                          </div>

                          {/* Skills Earned */}
                          <div className="mb-6">
                            <p className="text-sm font-bold text-gray-700 mb-3 flex items-center">
                              <Target className="h-4 w-4 mr-2 text-blue-600" />
                              Skills Mastered:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {course.skills.slice(0, 4).map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                              {course.skills.length > 4 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">
                                  +{course.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <button
                              onClick={() => downloadCertificate(course)}
                              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 font-medium"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </button>
                            
                            <button
                              onClick={() => viewCertificateDetails(course)}
                              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 font-medium"
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Full
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              onClick={() => shareCertificate(course, 'linkedin')}
                              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 flex items-center justify-center transform hover:scale-105 text-sm font-medium"
                            >
                              <Linkedin className="h-3 w-3 mr-2" />
                              LinkedIn
                            </button>
                            
                            <button
                              onClick={() => copyVerificationLink(course)}
                              className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center hover:border-blue-300 hover:text-blue-600 transform hover:scale-105 text-sm font-medium"
                            >
                              <Copy className="h-3 w-3 mr-2" />
                              Copy Link
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                      achievement.earned 
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg' 
                        : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ${
                      achievement.earned ? `bg-gradient-to-r ${achievement.color}` : 'bg-gray-400'
                    }`}>
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-bold text-center mb-3 text-lg">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 text-center mb-4">{achievement.description}</p>
                    {achievement.earned && (
                      <div className="text-center">
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
                          +{achievement.points} points
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Skills Portfolio Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                {Object.entries(skillCategories).map(([category, categoryCourses]) => (
                  categoryCourses.length > 0 && (
                    <div key={category} className="bg-white rounded-3xl shadow-lg p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Target className="h-6 w-6 mr-3 text-blue-600" />
                        {category} Skills
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryCourses.flatMap(course => course.skills).map((skill, index) => (
                          <div key={`${category}-${skill}-${index}`} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                                <CheckCircle className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{skill}</p>
                                <p className="text-sm text-gray-600">Expert Level</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}

            {/* Verification Tab */}
            {activeTab === 'verification' && (
              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">🔐 Certificate Verification</h3>
                  <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
                    All certificates are blockchain-verified and can be instantly validated by employers worldwide. 
                    Each certificate includes a unique verification URL, QR code, and blockchain hash for maximum security.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                      <QrCode className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">QR Code Verification</h4>
                      <p className="text-sm text-gray-600">Instant mobile verification</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
                      <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Blockchain Security</h4>
                      <p className="text-sm text-gray-600">Tamper-proof verification</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                      <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                      <h4 className="font-bold text-gray-900 mb-2">Global Recognition</h4>
                      <p className="text-sm text-gray-600">Accepted worldwide</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg">
                    ✅ All Your Certificates Are Blockchain Verified • 🌐 Globally Recognized • 🔒 100% Authentic
                  </div>
                </div>

                {/* Individual Certificate Verification */}
                <div className="space-y-6">
                  {certificateCourses.map((course) => {
                    const certData = generateCertificateContent(course);
                    return (
                      <div key={course.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-16 h-16 rounded-xl object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900">{course.title}</h4>
                              <p className="text-gray-600 text-sm">Certificate ID: {certData.certificateId}</p>
                              <p className="text-gray-500 text-xs">Blockchain: {certData.blockchainHash.slice(0, 20)}...</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center text-green-600 bg-green-50 px-3 py-2 rounded-full">
                              <Verified className="h-4 w-4 mr-2" />
                              <span className="font-bold text-sm">Verified</span>
                            </div>
                            <button
                              onClick={() => copyVerificationLink(course)}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Verify
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Social Proof & Sharing */}
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">📢 Share Your Success Story</h3>
              <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-xl leading-relaxed">
                Let the world know about your incredible achievements! Share your certificates on social media 
                and showcase your new skills to potential employers. Your success story inspires others and 
                opens doors to amazing career opportunities! 🌟
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <button 
                  onClick={() => certificateCourses.length > 0 && shareCertificate(certificateCourses[0], 'linkedin')}
                  className="bg-blue-700 text-white px-8 py-6 rounded-2xl hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold text-lg shadow-lg"
                >
                  <Linkedin className="h-6 w-6 mr-3" />
                  Share on LinkedIn
                </button>
                <button 
                  onClick={() => certificateCourses.length > 0 && shareCertificate(certificateCourses[0], 'twitter')}
                  className="bg-sky-500 text-white px-8 py-6 rounded-2xl hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold text-lg shadow-lg"
                >
                  <Twitter className="h-6 w-6 mr-3" />
                  Share on Twitter
                </button>
                <button 
                  onClick={() => certificateCourses.length > 0 && shareCertificate(certificateCourses[0], 'facebook')}
                  className="bg-blue-600 text-white px-8 py-6 rounded-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold text-lg shadow-lg"
                >
                  <Facebook className="h-6 w-6 mr-3" />
                  Share on Facebook
                </button>
                <button 
                  onClick={() => certificateCourses.length > 0 && shareCertificate(certificateCourses[0], 'general')}
                  className="bg-green-600 text-white px-8 py-6 rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold text-lg shadow-lg"
                >
                  <Gift className="h-6 w-6 mr-3" />
                  Share with Friends
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xl">Network Growth</h4>
                  <p className="text-gray-600">Connect with 50,000+ industry professionals and expand your career network</p>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xl">Career Boost</h4>
                  <p className="text-gray-600">95% of certificate holders get promoted or find better jobs within 6 months</p>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-xl">Industry Recognition</h4>
                  <p className="text-gray-600">Certificates recognized by Fortune 500 companies and startups globally</p>
                </div>
              </div>
            </div>

            {/* Career Impact Section */}
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl p-12 text-white text-center mb-12 relative overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Career success"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              <div className="relative">
                <h3 className="text-4xl font-bold mb-6">💼 Your Career Impact</h3>
                <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                  Your certificates have opened doors to incredible opportunities and career growth!
                </p>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-bold mb-2">$45K+</div>
                    <p className="text-sm opacity-90">Average Salary Increase</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <p className="text-sm opacity-90">Job Placement Rate</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <p className="text-sm opacity-90">Partner Companies</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl font-bold mb-2">6 Months</div>
                    <p className="text-sm opacity-90">Average Promotion Time</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-bold text-lg flex items-center justify-center mx-auto"
                >
                  <Rocket className="h-6 w-6 mr-2" />
                  Continue Your Journey
                  <ChevronRight className="h-6 w-6 ml-2" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-48 h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Award className="h-24 w-24 text-gray-400" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">🎓 Start Your Certificate Journey</h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
              Complete your enrolled courses to earn beautiful, industry-recognized certificates and showcase your achievements to the world. 
              Each certificate is blockchain-verified and accepted by employers globally! 🌟
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Learn</h3>
                <p className="text-gray-600 text-sm">Complete course modules and lessons</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Video className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Practice</h3>
                <p className="text-gray-600 text-sm">Apply skills in real-world projects</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Earn</h3>
                <p className="text-gray-600 text-sm">Get your professional certificate</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-bold text-lg"
              >
                <PlayCircle className="h-6 w-6 mr-3" />
                Continue Learning
              </button>
              <button
                onClick={() => setCurrentPage('courses')}
                className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center font-bold text-lg hover:border-blue-300 hover:text-blue-600"
              >
                <BookOpen className="h-6 w-6 mr-3" />
                Browse {courses.length} Courses
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-750 {
          animation-delay: 750ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};