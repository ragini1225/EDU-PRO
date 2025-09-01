import React, { useState } from 'react';
import { GraduationCap, Menu, X, User, BookOpen, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';


const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Home', id: 'home', icon: BookOpen },
    { name: 'Courses', id: 'courses', icon: BookOpen },
    { name: 'About', id: 'about', icon: User },
  ];

  const userNavigation = user
    ? [
        { name: 'Dashboard', id: 'dashboard', icon: User },
        { name: 'Certificates', id: 'certificates', icon: Award },
      ]
    : [];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-3 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <GraduationCap className="h-8 w-8" />
              <span>EduPro</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}

            {user ? (
              <>
                {userNavigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setCurrentPage('login')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            ))}

            {user ? (
              <>
                {userNavigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setCurrentPage('login');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
