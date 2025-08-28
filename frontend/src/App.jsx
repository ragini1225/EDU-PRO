import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { CourseLearningPage } from './pages/CourseLearningPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState('');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} setSelectedCourse={setSelectedCourse} />;
      case 'courses':
        return <CoursesPage setCurrentPage={setCurrentPage} setSelectedCourse={setSelectedCourse} />;
      case 'course-detail':
        return <CourseDetailPage courseId={selectedCourse} setCurrentPage={setCurrentPage} />;
      case 'course-learning':
        return <CourseLearningPage courseId={selectedCourse} setCurrentPage={setCurrentPage} />;
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage setCurrentPage={setCurrentPage} setSelectedCourse={setSelectedCourse} />;
      case 'certificates':
        return <CertificatesPage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} setSelectedCourse={setSelectedCourse} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        {currentPage !== 'login' && (
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        <main>
          {renderCurrentPage()}
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
