import React, { useState } from "react";

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { CoursesPage } from "./pages/CoursesPage.jsx";
import { CourseDetailPage } from "./pages/CourseDetailPage.jsx";
import { CourseLearningPage } from "./pages/CourseLearningPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { CertificatesPage } from "./pages/CertificatesPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState("");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
      case "courses":
        return (
          <CoursesPage
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
      case "course-detail":
        return (
          <CourseDetailPage
            courseId={selectedCourse}
            setCurrentPage={setCurrentPage}
          />
        );
      case "course-learning":
        return (
          <CourseLearningPage
            courseId={selectedCourse}
            setCurrentPage={setCurrentPage}
          />
        );
      case "login":
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case "dashboard":
        return (
          <DashboardPage
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
      case "certificates":
        return <CertificatesPage setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        {currentPage !== "login" && (
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        <main>{renderCurrentPage()}</main>
      </div>
    </AuthProvider>
  );
}

export default App;
