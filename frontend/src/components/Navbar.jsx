import React from 'react';
import { GraduationCap, Menu, X, User, BookOpen, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Home', id: 'home', icon: BookOpen },
    { name: 'Courses', id: 'courses', icon: BookOpen },
    { name: 'About', id: 'about', icon: User },
  ];

  const userNavigation = user ? [
    { name: 'Dashboard', id: 'dashboard', icon: User },
    { name: 'Certificates', id: 'certificates', icon: Award },
  ] : [];

  return React.createElement(
    'nav',
    { className: 'bg-white shadow-lg sticky top-0 z-50' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement(
        'div',
        { className: 'flex justify-between h-16' },
        React.createElement(
          'div',
          { className: 'flex items-center' },
          React.createElement(
            'button',
            {
              onClick: () => setCurrentPage('home'),
              className: 'flex items-center space-x-3 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors'
            },
            React.createElement(GraduationCap, { className: 'h-8 w-8' }),
            React.createElement('span', null, 'EduPro')
          )
        ),

        // Desktop Navigation
        React.createElement(
          'div',
          { className: 'hidden md:flex items-center space-x-8' },
          navigation.map((item) =>
            React.createElement(
              'button',
              {
                key: item.id,
                onClick: () => setCurrentPage(item.id),
                className: `flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`
              },
              React.createElement(item.icon, { className: 'h-4 w-4' }),
              React.createElement('span', null, item.name)
            )
          ),

          user ? (
            <>
              {userNavigation.map((item) =>
                React.createElement(
                  'button',
                  {
                    key: item.id,
                    onClick: () => setCurrentPage(item.id),
                    className: `flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  },
                  React.createElement(item.icon, { className: 'h-4 w-4' }),
                  React.createElement('span', null, item.name)
                )
              )}
              React.createElement(
                'button',
                {
                  onClick: logout,
                  className: 'bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors'
                },
                'Logout'
              )
            </>
          ) : (
            React.createElement(
              'button',
              {
                onClick: () => setCurrentPage('login'),
                className: 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
              },
              'Login'
            )
          )
        ),

        // Mobile menu button
        React.createElement(
          'div',
          { className: 'md:hidden flex items-center' },
          React.createElement(
            'button',
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: 'text-gray-600 hover:text-blue-600 p-2'
            },
            isMenuOpen ? React.createElement(X, { className: 'h-6 w-6' }) : React.createElement(Menu, { className: 'h-6 w-6' })
          )
        )
      )
    ),

    // Mobile Navigation
    isMenuOpen && React.createElement(
      'div',
      { className: 'md:hidden bg-white border-t border-gray-200' },
      React.createElement(
        'div',
        { className: 'px-2 pt-2 pb-3 space-y-1' },
        navigation.map((item) =>
          React.createElement(
            'button',
            {
              key: item.id,
              onClick: () => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              },
              className: `flex items-center space-x-2 w-full px-3 py-2 text-base font-medium rounded-md transition-colors ${
                currentPage === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`
            },
            React.createElement(item.icon, { className: 'h-5 w-5' }),
            React.createElement('span', null, item.name)
          )
        ),

        user ? (
          <>
            {userNavigation.map((item) =>
              React.createElement(
                'button',
                {
                  key: item.id,
                  onClick: () => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  },
                  className: `flex items-center space-x-2 w-full px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`
                },
                React.createElement(item.icon, { className: 'h-5 w-5' }),
                React.createElement('span', null, item.name)
              )
            )}
            React.createElement(
              'button',
              {
                onClick: () => {
                  logout();
                  setIsMenuOpen(false);
                },
                className: 'w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors'
              },
              'Logout'
            )
          </>
        ) : (
          React.createElement(
            'button',
            {
              onClick: () => {
                setCurrentPage('login');
                setIsMenuOpen(false);
              },
              className: 'w-full text-left px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors'
            },
            'Login'
          )
        )
      )
    )
  );
};

export default Navbar;
